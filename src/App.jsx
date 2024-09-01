import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import Members from "./pages/Members";

import Youtube from "./pages/Youtube";
import YoutubeDetail from "./pages/YoutubeDetail";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Study from "./pages/Study";
import StudyDetail from "./pages/StudyDetail";

function App() {
	const location = useLocation();

	return (
		<>
			{location.pathname !== "/" && <Header />}

			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<Members />} />
					<Route path="/works" element={<Youtube />} />
					<Route path="/works/:id" element={<YoutubeDetail />} />
					<Route path="/study" element={<Study />} />
					<Route path="/study/:id" element={<StudyDetail />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</AnimatePresence>

			<Nav />
		</>
	);
}

export default App;
