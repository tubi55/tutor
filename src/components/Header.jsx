import { Link } from "react-router-dom";
import Gnb from "./Gnb";

function Header() {
	return (
		<header>
			<h1 className="text-2xl font-semibold drop-shadow-md font-orbitron">
				<Link to="/">MIN-CHEOL, KIM</Link>
			</h1>

			<nav className="flex items-center gap-40">
				<Gnb />
			</nav>
		</header>
	);
}

export default Header;
