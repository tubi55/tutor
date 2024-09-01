import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Thumbnail from "../components/Thumbnail";
import Line from "../components/Line";
import Mask from "../components/Mask";
import MotionTextEl from "../components/MotionTextEl";
import MotionBox from "../components/MotionBox";
import { memberInfo } from "../assets/data";
import { motion } from "framer-motion";

function Members() {
	const delay = 1;
	return (
		<Layout title={"ABOUT ME"}>
			<Intro>
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 }}>
						프론트엔드 개발 취업 전문 강사 김민철입니다.
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
						다년간의 훈련 경험을 토대로 훈련생의 취업을 목표로한 현실적인 교육을 진행합니다.
					</motion.span>
					<Mask delay={delay + 0.2} />
				</div>
			</Intro>

			<Content>
				{/* CEO */}
				<article className="flex flex-wrap justify-between">
					{/* CEO info */}
					<div className="w-[60%] text-right pr-20 pt-40 max_lg:pt-0 max_sm:w-full max_sm:text-left max_sm:pr-0">
						<MotionTextEl el={"h3"} delay={delay + 0.2} className="pr-1 text-lg tracking-widest opacity-70">
							TUTOR
						</MotionTextEl>
						<br />
						<MotionTextEl el={"h4"} delay={delay + 0.4} className="text-4xl">
							김민철
						</MotionTextEl>

						<div className="w-[50%] py-10 flex flex-wrap justify-end max_lg:w-full max_sm:justify-start">
							<Line className="mb-8 w-[70%] h-[2px]" delay={delay + 0.6} />
							<motion.p
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -100, opacity: 0, transition: { delay: 0 } }}
								transition={{ duration: 1, delay: delay + 0.8 }}>
								단순히 지식을 알고 있는 것과 내가 가진 지식을 초보자에게 전달하는 능력은 다르다고 생각합니다.
								<br />
								<br /> 다년간의 프론트엔드 실무 경험과 기업 출강등을 통해 단순히 지식의 나열이 아닌 훈련생의 특성을 반영한 현실적인 교육 솔루션을
								제공하고 있습니다.
							</motion.p>
						</div>
					</div>

					{/* CEO pic */}
					<MotionBox delay={delay + 1} className="w-[40%] h-[40vmax] -translate-y-[20%] max_lg:translate-y-[0%] max_sm:w-full max_sm:h-[60vw]">
						<Thumbnail className="size-full" src={"/ceo.jpg"} />
					</MotionBox>
				</article>

				{/* Team */}
				<article className="flex flex-wrap justify-between mt-36">
					{/* title & intro */}
					<h3 className="w-full mb-4 text-8xl font-raleway max_sm:text-6xl">EDUCATION</h3>
					<p className="w-[70%] max_sm:w-full text-base font-semibold opacity-70 mb-24">
						교육을 진행함에 있어서 제일 우선순위에 두는 것은 훈련생들의 취업을 위한 포트폴리오와 한명 한명 훈련생의 개인 역량에 맞춘 취업까지의 세심한
						관리입니다.
					</p>

					{/* 교육 특징 */}
					<ul className="w-full flex flex-wrap justify-between saturate-[30%]">
						<li className="relative w-[45%] mb-28 max_sm:w-full ">
							<div className="w-full h-[10vmax] mb-4 max_sm:h-[20vmax]">
								<Thumbnail className="size-full" src={"/curriculum.jpg"} />
							</div>
							<h3 className="font-noto font-semibold mt-6 mb-4 text-xl">현실적인 취업용 커리큐럼</h3>
							<p>
								유튜브나 기타 온라인 강의에서 쉽게 접할 수 없는 실무 개발자만이 알 수 있는 현실 적인 교육 커리큐럼을 제공합니다.
								<br /> 실제 현업에 있는 개발자들과 긴밀한 커뮤니티를 통해 인사 담당자가 보기에 관심이 있을 만한 업무 스킬을 교육합니다.
							</p>
						</li>

						<li className="relative w-[45%] mb-28 max_sm:w-full">
							<div className="w-full h-[10vmax] mb-4 max_sm:h-[20vmax]">
								<Thumbnail className="size-full" src={"/vidEdu.jpg"} />
							</div>
							<h3 className="font-noto font-semibold mt-6 mb-4 text-xl">방대한 분량의 훈련생을 위한 강의영상 제공</h3>
							<p>
								오프라인에서 진행하는 수업만으로는 따라오기 힘든 훈련생들을 위한 방대한 분량의 강의 영상 제공합니다.
								<br /> 단지 웹 퍼블리싱, 프론트엔드 개발 뿐만이 아닌 다양한 실무자들과 협업하여 기획, 디자인, 백엔드 개발등 다양한 강의 영상자료를
								제공합니다.
							</p>
						</li>

						<li className="relative w-[45%] mb-28 max_sm:w-full">
							<div className="w-full h-[10vmax] mb-4 max_sm:h-[20vmax]">
								<Thumbnail className="size-full" src={"/consult.jpg"} />
							</div>
							<h3 className="font-noto font-semibold mt-6 mb-4 text-xl">수료까지 세심한 훈련생 상담 및 관리</h3>
							<p>
								아무리 교육 커리큐럼이 좋고 강의력이 좋더라도 강사가 고압적이고 훈련생과 꾸준이 마찰이 발생하여 중간에 이탈하는 훈련생이 발생한다면
								교육원 입장에서 큰 부담일 것입니다.
								<br /> 훈련생 한명 한명 수료까지 중간 이탈이 없도록 정기적으로 상담과 세심한 관리를 진행하고 있습니다.
							</p>
						</li>

						<li className="relative w-[45%] mb-28 max_md:w-full max_sm:w-full">
							<div className="w-full h-[10vmax] mb-4 max_sm:h-[20vmax]">
								<Thumbnail className="size-full" src={"/resume.jpg"} />
							</div>
							<h3 className="font-noto font-semibold mt-6 mb-4 text-xl">취업성공을 위한 이력서, 자소서등 전문 지원</h3>
							<p>
								단순히 취업을 위한 교육과 포트폴리오 제작 뿐만이 아닌 해당 훈련생의 취업을 최우선으로 생각합니다.
								<br />
								따라서 각 훈련생의 성향과 특성에 맞춰 현업에 있는 IT인사 담당자가 좋아할만한 전문적인 이력서와 자기소개서 작성법 및 기술 블로그 운영
								등 실무자 출신 강사만이 진행할 수 있는 다양한 취업관련 지원을 제공합니다.
							</p>
						</li>
					</ul>
				</article>
			</Content>
		</Layout>
	);
}
export default Members;
