import { useEffect, useRef, useState, useCallback } from "react";
import { twMerge } from "tailwind-merge";

function Map() {
	const { kakao } = window;
	const map = useRef(null);
	const view = useRef(null);
	const instance = useRef(null);
	const viewInstance = useRef(null);

	const [Index] = useState(0);
	const [Traffic, setTraffic] = useState(false);
	const [IsMap, setIsMap] = useState(true);

	//map info
	const info = useRef([
		{
			title: "COEX",
			latlng: new kakao.maps.LatLng(37.51100661425726, 127.06162026853143),
			imgSrc: "marker1.png",
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) }
		}
	]);

	//secCenter func
	const setCenter = useCallback(() => {
		instance.current.setCenter(info.current[Index].latlng);
	}, [Index]);

	//roadview instance func
	const getRoadview = useCallback(() => {
		new kakao.maps.RoadviewClient().getNearestPanoId(
			info.current[Index].latlng,
			100, //search road track within 100meter
			panoId => {
				viewInstance.current = new kakao.maps.Roadview(view.current);
				viewInstance.current.setPanoId(panoId, info.current[Index].latlng);
			}
		);
	}, [Index, kakao]);

	//map intialize
	useEffect(() => {
		//reset map container
		map.current.innerHTML = "";
		setIsMap(true);

		//marker instance
		const marker = new kakao.maps.Marker({
			position: info.current[Index].latlng,
			image: new kakao.maps.MarkerImage(info.current[Index].imgSrc, info.current[Index].imgSize, info.current[Index].imgPos)
		});
		//map instance
		instance.current = new kakao.maps.Map(map.current, {
			center: info.current[Index].latlng,
			level: 1
		});
		//set marker with map instance
		marker.setMap(instance.current);

		//add map type ui
		const mapTypeControl = new kakao.maps.MapTypeControl();
		instance.current.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
		instance.current.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.LEFT);
		instance.current.setZoomable(false);

		//getRoadview
		getRoadview();

		//bind window event
		window.addEventListener("resize", setCenter);

		//unbind window event
		return () => {
			window.removeEventListener("resize", setCenter);
		};
	}, [Index, kakao, setCenter, getRoadview]);

	//toggle Traffic UI
	useEffect(() => {
		Traffic
			? instance.current.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: instance.current.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic, kakao]);

	return (
		<article>
			<h2 className="text-6xl font-thin sub_title">Location</h2>

			{/* map frame */}
			<figure className="w-full h-[32vw] max_xl:h-[50vw] max_md:h-[50vh] bg-black  relative z-0">
				<div className={twMerge("inner", IsMap ? "opacity-100 z-50" : "opacity-0 z-0")} ref={map}></div>
				<div className={twMerge("inner", !IsMap ? "opacity-100 z-50" : "opacity-0 z-0")} ref={view}></div>
			</figure>

			{/* controll button set */}
			<nav className="flex flex-wrap justify-between mt-6 mb-60">
				{/* branch button */}
				{/* <ul className="flex flex-wrap gap-2 max_lg:mb-4">
					{info.current.map((el, idx) => (
						<li
							className={twMerge("btn opacity-70", Index === idx && "bg-cyan-400 shadow-cyan-400/30 opacity-100")}
							key={idx}
							onClick={() => {
								setIndex(idx);
							}}>
							{el.title}
						</li>
					))}
				</ul> */}

				{/* Traffic button */}
				<div className="flex gap-2">
					{IsMap && (
						<button className="btn" onClick={setCenter}>
							지도위치 초기화
						</button>
					)}

					{IsMap && (
						<button className={twMerge("btn", Traffic && "bg-pink-500 shadow-pink-500/30")} onClick={() => setTraffic(!Traffic)}>
							{Traffic ? "주변 교통혼잡도 정보 켜기" : "주변 교통 혼잡도 정보 끄기"}
						</button>
					)}

					<button className={twMerge("btn", !IsMap && "bg-pink-500 shadow-pink-500/30")} onClick={() => setIsMap(!IsMap)}>
						{IsMap ? "로드뷰 보기" : "로드뷰 끄기"}
					</button>
				</div>
			</nav>
		</article>
	);
}

export default Map;
