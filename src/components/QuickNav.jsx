import { quickNavData } from "../assets/data";
import { FaPlus } from "react-icons/fa";
import Thumbnail from "./Thumbnail";
import MotionBox from "./MotionBox";

function QuickNav() {
	const delay = 1.4;
	return (
		<nav className="absolute z-20 flex flex-wrap justify-between items-end w-[65%] bottom-36 ">
			{quickNavData.map((data, idx) => (
				<MotionBox key={data.id} className="w-[24%] max_xl:w-[48%] max_xl:mb-4 max_md:w-full" delay={delay + 0.2 * idx}>
					<div className="px-8 py-3 transition-all border rounded border-t-white/30 border-l-white/30 border-r-black/10 border-b-black/10 bg-white/70 backdrop-blur-md group hover:bg-white/60 hover:py-5">
						<h3 className="flex items-center justify-between text-sm font-bold tracking-widest font-raleway drop-shadow-md">
							{data.title}
							<FaPlus size={12} />
						</h3>

						<Thumbnail className="h-0 my-0 group-hover:h-20 group-hover:my-6" src={"/" + data.pic} />

						<div className="h-0 my-0 overflow-hidden transition-all text-basae font-noto group-hover:h-auto group-hover:my-3">{data.content}</div>
					</div>
				</MotionBox>
			))}
		</nav>
	);
}

export default QuickNav;
