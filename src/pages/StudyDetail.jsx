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
						Dolor sit lorem ipsum dolor sit amet Aspe riores ipsum dolor sit amet consec, beatae ipsum dolor.
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
						Bit ametDolor sit amet consectetur adipisicing elit ctetur adipisi.
					</motion.span>
					<Mask delay={delay + 0.2} />
				</div>
			</Intro>

			<Content>
				<div className="w-full flex flex-wrap justify-between items-start">
					<MotionBox delay={1.8} className="w-[60%] h-[50vh]">
						<iframe width="100%" height="100%" title="youtube" src={`https://www.youtube.com/embed/${Data?.snippet.resourceId.videoId}`}></iframe>
					</MotionBox>

					<div className="w-[35%] flex flex-wrap justify-between py-20">
						{/* description */}
						<article className="w-[70%] max_lg:w-full max_lg:mb-20">
							<h3 className="mb-10 text-3xl font-orbitron">Description</h3>
							<p className="pr-20 text-sm border-r border-black/20 max_lg:pr-0 max_lg:border-r-0">{Data?.snippet.description}</p>
						</article>
					</div>
				</div>
			</Content>
		</Layout>
	);
}

export default StudyDetail;
