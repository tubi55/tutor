import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import { useStudyQuery } from "../hooks/useStudy";
import Thumbnail from "../components/Thumbnail";
import { Link } from "react-router-dom";

function Study() {
	const delay = 1;
	const { data } = useStudyQuery({ type: "list" });

	return (
		<Layout title={"STUDY"}>
			<Intro>
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 }}>
						기업 출강, 부트캠프, 국비 수업에서 진행하는 교육 커리큐럼 소개입니다.
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
						HTML, CSS, GIT, JAVASCRIPT, JQUERY, REACT 등 단순한 문법 설명이 아닌 타 강사와 차별화된 훈련생들의 취업을 최우선으로 생각하는 실무스킬
						위주의 교육 커리큐럼을 연구합니다.
					</motion.span>
					<Mask delay={delay + 0.2} />
				</div>
			</Intro>

			<Content>
				<div className="w-full flex flex-wrap justify-between">
					{data?.map((vid, idx) => {
						return (
							<article className="w-[30%] mb-40" key={idx}>
								<Link to={`/study/${vid.id}`}>
									<Thumbnail className="w-full h-[10vmax] mb-10" src={vid.snippet.thumbnails.standard.url} shadow={true} />
								</Link>

								<h2 className="text-2xl mb-4 font-raleway font-semibold">{vid.snippet.title}</h2>
								<p className="text-sm opacity-80 mb-4">{vid.snippet.description.slice(0, 70) + "..."}</p>
								<span className="font-raleway font-semibold text-red-500 tracking-wide">{vid.snippet.publishedAt.split("T")[0]}</span>
							</article>
						);
					})}
				</div>
			</Content>
		</Layout>
	);
}
export default Study;
