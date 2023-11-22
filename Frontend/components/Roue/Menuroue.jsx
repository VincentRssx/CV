import PropTypes from "prop-types";

function Menuroue({ roue, setRoue }) {
	const handleclick = () => {
		setRoue(!roue);
	};

	return (
		<>
			<button className={roue ? "Homeactif" : "Homeinactif"}>Home</button>
			<button
				className={roue ? "Experiencesactif" : "Experiencesinactif"}
			>
				Experiences
			</button>
			<img
				className="rond"
				src="https://media3.giphy.com/media/f9Se3WUHZYc79gvN8H/giphy.gif?cid=6c09b952x03hshkpo5qbjd8bicx3vio5aa4yzv3szkuo1g0e&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
				alt=""
				onClick={handleclick}
			/>
			<span
				className={roue ? "rondborderactif" : "rondborderinactif"}
			></span>
			<button className={roue ? "Formationsactif" : "Formationsinactif"}>
				Formations
			</button>
			<button className={roue ? "Projetsactif" : "Projetsinactif"}>
				Projets
			</button>
		</>
	);
}

Menuroue.propTypes = {
	roue: PropTypes.bool.isRequired,
	setRoue: PropTypes.func.isRequired,
};

export default Menuroue;
