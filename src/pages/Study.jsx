import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";

function Study() {
	const delay = 1;
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

			<Content></Content>
		</Layout>
	);
}
export default Study;
