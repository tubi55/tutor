import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import MotionTextEl from "./MotionTextEl";

function MailForm() {
	const delay = 1.2;
	const form = useRef(null);

	//reset form func
	const resetForm = () => {
		const nameForm = form.current.querySelector("#nameEl");
		const mailForm = form.current.querySelector("#emailEl");
		const msgForm = form.current.querySelector("#msgEl");
		nameForm.value = "";
		mailForm.value = "";
		msgForm.value = "";
	};

	//form mail func
	const sendEmail = e => {
		e.preventDefault();
		const nameForm = form.current.querySelector("#nameEl");
		const mailForm = form.current.querySelector("#emailEl");
		const msgForm = form.current.querySelector("#msgEl");

		if (!nameForm.value || !mailForm.value || !msgForm.value) return alert("사용자이름, 이메일주소, 문의내용은 필수 입력사항입니다.");

		emailjs
			.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
				publicKey: import.meta.env.VITE_PUBLIC_KEY
			})
			.then(
				result => {
					alert("문의내용이 메일로 발송되었습니다.");
					console.log(result);
					resetForm();
				},
				error => {
					alert("문의내용 전송에 실패했습니다.");
					console.log(error);
					resetForm();
				}
			);
	};

	return (
		<article className="flex flex-wrap justify-between w-full my-24 max_lg:mb-60">
			{/* mail form */}
			<div className="w-1/2 pr-[8vw] mb-24 border-r border-black/30 max_lg:w-full max_lg:pr-0 max_lg:border-none">
				<MotionTextEl el="h2" delay={delay + 0.4} className="sub_title">
					Send E-mail
				</MotionTextEl>

				<motion.form
					ref={form}
					onSubmit={sendEmail}
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 200, transition: { delay: 0 } }}
					transition={{ duration: 1, delay: delay + 0.8 }}>
					{/* upper name, eamil part */}
					<div className="flex justify-between w-full mb-12 [&_span]:w-[45%] ">
						<span>
							<label className="label">Name</label>
							<input type="text" name="user_name" id="nameEl" className="input" placeholder="문의자 성함" />
						</span>

						<span>
							<label className="label">Email</label>
							<input type="email" name="user_email" id="emailEl" className="input" placeholder="답변 받으실 메일 주소" />
						</span>
					</div>

					{/* lower message part */}
					<div className="w-full mb-2">
						<label className="label">Message</label>
						<textarea name="message" id="msgEl" className="input" placeholder="문의 내용을 남겨주세요. 최대한 빠른 답변 드리겠습니다." />
					</div>

					{/* button set */}
					<div className="flex gap-5 mt-7">
						<input type="reset" value="Cancel" className="btn" />
						<input type="submit" value="Send" className="btn" />
					</div>
				</motion.form>
			</div>

			{/* info */}
			<div className="w-1/2 pl-[8vw] max_lg:w-full max_lg:pl-0 ">
				<MotionTextEl el="h2" delay={delay + 0.6} className="sub_title">
					Information
				</MotionTextEl>
				<motion.div
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 200, transition: { delay: 0 } }}
					transition={{ duration: 1, delay: delay + 1 }}>
					<h3 className="text-xl mb-4">진행 가능 프로젝트 및 교육</h3>
					<p className="text-sm">
						웹 퍼블리싱 / HTML,CSS, JQUERY, JAVASCRIPT
						<br />
						웹 모션 / GSAP, FRAMER-MOTION
						<br />
						프론트엔드 개발 / React, Next
						<br />
						UI 기획, 디자인, 백엔드 개발 / Figma, AdobeXD, Node, MongoDB, Python, Django (최성일 강사 연계)
					</p>
				</motion.div>
				<br />
				<br />
				<motion.p
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 200, transition: { delay: 0 } }}
					transition={{ duration: 1, delay: delay + 1.2 }}>
					웹퍼블리싱, 프론트엔드 개발외에도 [인터랙티브 웹디자인북, DO IT 인터랙티브 웹페이지 만들기]의 저자 최성일 강사와 연계하여 훈련생들의 취업을
					위한 UI디자인, 백엔드 개발을 연동한 수업도 진행가능합니다.
				</motion.p>
			</div>
		</article>
	);
}

export default MailForm;
