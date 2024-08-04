import React from "react";
import Mask from "./Mask";
import { motion } from "framer-motion";
import clsx from "clsx";

function MotionTextEl({ el, children, duration = 0.5, delay = 0, className, bg = "black" }) {
	return React.createElement(
		el,
		{ className: clsx("mframe", className) },

		//first child
		React.createElement(
			motion.span,
			{
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0, transition: { delay: 0 } },
				transition: { duration: 0.05, delay: delay + duration / 2 },
				style: { display: "inline-block", lineHeight: 1 }
			},
			children
		),

		//second child
		React.createElement(Mask, {
			delay: delay,
			duration: duration,
			bg: bg
		})
	);
}

export default MotionTextEl;
