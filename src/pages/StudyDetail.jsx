import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import { motion } from "framer-motion";
import Mask from "../components/Mask";
import Content from "../components/Content";
import { useState, useEffect } from "react";
import MotionBox from "../components/MotionBox";

function StudyDetail() {
	const { id } = useParams();
	const delay = 0.8;
	const api_key = "AIzaSyDC60bIIkAJFzy7ji4a0Eo3AX6tYudhe1w";
	const [Data, setData] = useState(null);

	useEffect(() => {
		const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&id=${id}`;

		fetch(baseURL)
			.then(data => data.json())
			.then(json => {
				console.log(json.items[0]);
				setData(json.items[0]);
			});
	}, []);

	return (
		<Layout title={Data?.snippet.title}>
			<Intro>
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 }}>
						아래 영상에 나오는 예제들은 실제 수업시간에 진행하는 수업 예제들입니다.
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
						수업 일정에 따라 예제의 순서나 구성은 조금씩 변경될 수 있습니다.
					</motion.span>
					<Mask delay={delay + 0.2} />
				</div>
			</Intro>

			<Content>
				<div className="w-full flex flex-wrap justify-between items-start">
					<MotionBox delay={1.8} className="w-[60%] h-[50vh] max_xl:w-full max_xl:mb-10 max_xl:h-[40vmax] max_md:h-[25vmax]">
						<iframe width="100%" height="100%" title="youtube" src={`https://www.youtube.com/embed/${Data?.snippet.resourceId.videoId}`}></iframe>
					</MotionBox>

					<div className="w-[35%] flex flex-wrap justify-between max_xl:w-full">
						{/* description */}
						<article className="max_lg:w-full max_lg:mb-20">
							<h3 className="mb-10 text-3xl font-orbitron">Description</h3>
							<p className=" text-sm  ">
								{Data?.snippet.description.split(".").map((el, idx) =>
									idx === 0 ? (
										<div key={idx}>
											<h4 className="text-lg mb-8 font-semibold">{el}</h4>
										</div>
									) : (
										<div key={idx}>
											<div className="text-base mb-5">{el}.</div>
										</div>
									)
								)}
							</p>
						</article>
					</div>
				</div>
			</Content>
		</Layout>
	);
}

export default StudyDetail;
