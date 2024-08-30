import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Content from "../components/Content";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import MailForm from "../components/MailForm";
import Map from "../components/Map";

function Contact() {
	const delay = 1.2;

	return (
		<Layout title={"CONTACT"}>
			<Intro>
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 }}>
						부트캠프, 기업출강, 국비 교육에 관해 궁금하신 점을 편하게 문의주세요.
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
						단지 교육뿐만 아니라 개발 UI디자인, 웹퍼블리싱, 프론트엔드 개발, 백엔드 개발에 대한 프로젝트도 진행가능합니다.
					</motion.span>
					<Mask delay={delay + 0.2} />
				</div>
			</Intro>

			<Content>
				<MailForm />
				<Map />
			</Content>
		</Layout>
	);
}

export default Contact;
