import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

function App() {
	const [experience, setExperience] = useState();

	useEffect(() => {
		fetch("http://localhost:5000/cv")
			.then((response) => response.json())
			.then((data) => setExperience(data));
	}, []);
	console.log(experience);
	return (
		<div className="main">
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
