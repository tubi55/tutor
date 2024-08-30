import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import Thumbnail from "../components/Thumbnail";
import Line from "../components/Line";
import MotionBox from "../components/MotionBox";
import MotionTextEl from "../components/MotionTextEl";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useCustomText } from "../hooks/useText";
import { useYoutubeQuery } from "../hooks/useYoutube";

function Youtube() {
	const { data } = useYoutubeQuery({ type: "list" });
	const { data: infoData } = useYoutubeQuery({ type: "info", vid_id: data?.[0].snippet.resourceId.videoId });
	console.log(infoData);

	const delay = 1;

	const shortenText = useCustomText("shorten");
	const changeText = useCustomText("combined");

	return (
		<Layout title={"WORKS"}>
			<Intro>
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 }}>
						그동안 교육했던 훈련생들의 포트폴리오 영상입니다.
					</motion.span>
					<Mask delay={delay} />
				</div>
				<br />
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 + 0.2 }}>
						업무 현실과 동떨어진 클론 코딩이 아닌, 인사 담당자가 좋아할만한 업무 스킬을 보여줄 수 있는 포트폴리오 제작에 중점을 두고 있습니다.
					</motion.span>
					<Mask delay={delay + 0.2} />
				</div>
			</Intro>

			<Content>
				<article className="flex flex-wrap justify-between mb-40 ">
					<MotionBox
						delay={delay + 0.4}
						className="w-[55%] h-[20vw] [&_img:first-child]:opacity-50 max_xl:w-full max_xl:mb-20 max_xl:h-[40vh] max_lg:h-[30vh] max_md:h-[20vh] max_sm:h-[14vh]">
						<Link to={`/youtube/${data?.[0].id}`}>
							<Thumbnail src={data?.[0].snippet.thumbnails.standard.url} className="size-full " />
						</Link>
					</MotionBox>

					<div className="w-[40%] flex flex-wrap content-between max_xl:w-full">
						<ul className="flex w-full [&>*]:w-1/3 [&_strong]:font-orbitron ">
							<li>
								<MotionTextEl el={"span"} className="text-sm text-black/70" delay={delay + 0.5}>
									Like
								</MotionTextEl>
								<br />

								<MotionTextEl el={"strong"} className="text-4xl font-[400] max_md:text-xl" delay={delay + 0.6}>
									{infoData?.[0]?.statistics.likeCount}
								</MotionTextEl>
							</li>
							<li>
								<MotionTextEl el={"span"} className="text-sm text-black/70" delay={delay + 0.7}>
									Comment
								</MotionTextEl>
								<br />

								<MotionTextEl el={"strong"} className="text-4xl font-[400] max_md:text-xl" delay={delay + 0.8}>
									{infoData?.[0]?.statistics.commentCount}
								</MotionTextEl>
							</li>
							<li>
								<MotionTextEl el={"span"} className="text-sm text-black/70" delay={delay + 0.9}>
									View
								</MotionTextEl>
								<br />
								<MotionTextEl el={"strong"} className="text-4xl font-[400] max_md:text-xl" delay={delay + 1}>
									{infoData?.[0]?.statistics.viewCount}
								</MotionTextEl>
							</li>
						</ul>

						<div className="mt-20 max_md:mt-4">
							<motion.h2
								className="mb-2 text-xl font-medium leading-tight font-raleway max_md:text-base max_md:mt-10"
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -100, opacity: 0, transition: { delay: 0 } }}
								transition={{ duration: 1, delay: delay + 1.1 }}>
								{data?.[0].snippet.title.length >= 100 ? data?.[0].snippet.title.substring(0, 100) + "..." : data?.[0].snippet.title}
							</motion.h2>
							<Line size={"size-[5%]"} />
							<motion.p
								className="mt-4 mb-4 text-xs text-black/40"
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -100, opacity: 0, transition: { delay: 0 } }}
								transition={{ duration: 1, delay: delay + 1.4 }}>
								{data?.[0].snippet.description.length >= 260
									? data?.[0].snippet.description.substring(0, 260) + "..."
									: data?.[0].snippet.description}
							</motion.p>
							<span className="text-xs tracking-widest font-orbitron">{data?.[0].snippet.publishedAt.split("T")[0].split("-").join(".")}</span>
						</div>
					</div>
				</article>

				<h2 className="w-full mb-8 text-4xl font-thin font-orbitron text-black/70 max_md:text-3xl">Youtube Video List</h2>
				<Line size={"size-[5%]"} className="mb-8" delay={delay + 1.4} />
				<p className="w-[60%] mb-24 text-xl px-10 relative max_md:w-full">
					<span className="absolute top-0 left-0 font-sans text-6xl">&quot;</span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam doloribus vel suscipit modi esse quis! Debitis et accusamus
					commodi laudantium in itaque possimus beatae saepe.
					<span className="absolute bottom-0 right-0 font-sans text-6xl">&quot;</span>
				</p>

				<div className="grid grid-cols-7 gap-[3vw] max_lg:grid-cols-2 max_md:grid-cols-1">
					{data?.slice(1).map((vid, idx) => {
						return (
							<article
								key={idx}
								className={twMerge("pb-10  max_lg:col-span-1 max_lg:row-span-1", idx === 0 || idx === 5 ? "col-span-3 row-span-2" : "col-span-2 ")}>
								<Link to={`/youtube/${vid.id}`}>
									<Thumbnail
										src={vid.snippet.thumbnails.standard.url}
										shadow={true}
										className={twMerge(
											"w-full [&>*:first-child]:opacity-90 mb-6 max_lg:h-[20vw] max_md:h-[40vw] ",
											idx === 0 || idx === 5 ? "h-[17vw]" : "h-[10vw]"
										)}
									/>
								</Link>

								<div className="pb-6 border-b border-black/20">
									<h2
										className={clsx(
											"text-black/70 max_lg:text-xl max_lg:font-semibold max_lg:pt-0 max_lg:opacity-100",
											idx === 0 || idx === 5 ? "text-4xl font-thin mb-7 pt-4" : "text-xl font-semibold mb-3 opacity-70"
										)}>
										{vid.snippet.title}
									</h2>
									<p className={clsx("break-all mb-7 opacity-60 max_lg:text-base max_lg:pt-0", (idx === 0 || idx === 5) && "text-xl font-thin pt-4")}>
										{shortenText(vid.snippet.description, 200)}
									</p>
									<span className="text-sm tracking-wider font-orbitron text-sky-600">{changeText(vid.snippet.publishedAt.split("T")[0], ".")}</span>
								</div>
							</article>
						);
					})}
				</div>
			</Content>
		</Layout>
	);
}

export default Youtube;
