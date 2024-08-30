import MotionText from "./MotionText";
import MotionTextEl from "./MotionTextEl";

function Slogan() {
	const delay = 0.6;
	const titleStyle1 = "text-[8vw] font-thin font-raleway leading-none";
	const titleStyle2 = "text-5xl font-black font-raleway ";
	return (
		<article className="relative w-[80%] flex flex-wrap justify-center pb-20">
			<div className="w-full text-center">
				<MotionTextEl el={"h2"} delay={delay} className={titleStyle1}>
					KIM MIN CHEOL
				</MotionTextEl>
				<MotionTextEl el={"h2"} delay={delay + 0.2} className={titleStyle2}>
					FRONT-END DEVELOPMENT
				</MotionTextEl>

				<div className="mt-8">
					<MotionText delay={delay + 0.5} className="font-semibold font-noto">
						프론드엔드 개발, 웹퍼블리싱 취업 교육 전문 강사 김민철입니다.
					</MotionText>
				</div>
			</div>
		</article>
	);
}

export default Slogan;
