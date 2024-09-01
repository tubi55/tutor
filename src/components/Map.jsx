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
			latlng: new kakao.maps.LatLng(37.48520001449692, 127.11517882077737),
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
			<h2 className="text-6xl font-thin sub_title mb-20">
				Location <span className="text-lg">/ 수업 자료 연구소</span>
			</h2>
			<p className="w-[80%] mb-8 max_md:w-full opacity-60">
				매주 정기적으로 실무 교육 진행을 위한 UI기획, 디자인, 프론트엔드, 백엔드 개발의 최신 수업 자료를 연구합니다.
				<br />
				프론트엔드 개발은 타 분야에 비해 기술의 업데이트 주기가 빠른편입니다.
				<br />
				그렇기에 실무자에게 어필가능한 포트폴리오 제작에 포커스를 두어 훈련생들의 취업 성공률을 높이고 있습니다.
				<br />
				<br />
				<strong className="text-red-400">각 업무 분야별 업무, 수업 의뢰 및 작업실에 방문 또는 온라인 상담 및 업무 협의 가능합니다.</strong>
			</p>
			<div className="mb-16">Address : 서울 송파구 정의로7길 13 힐스테이트 에코송파 사무실동 1411호</div>

			{/* map frame */}
			<figure className="w-full h-[32vw] max_xl:h-[50vw] max_md:h-[50vh] bg-black  relative z-0">
				<div className={twMerge("inner", IsMap ? "opacity-100 z-50" : "opacity-0 z-0")} ref={map}></div>
				<div className={twMerge("inner", !IsMap ? "opacity-100 z-50" : "opacity-0 z-0")} ref={view}></div>
			</figure>

			{/* controll button set */}
			<nav className="flex flex-wrap justify-between mt-6 mb-60 max_md:hidden">
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
							{Traffic ? "주변 교통혼잡도 정보 숨기기" : "주변 교통 혼잡도 정보 보기"}
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
