import { useState } from "react";
import Menuroue from "../../components/Roue/Menuroue";
import "./home.scss";

function Home() {
	const [roue, setRoue] = useState(false);

	return (
		<div>
			<h1>Vincent ROUSSEAUX</h1>
			<section className="roue">
				{roue ? (
					<p className="textroue">
						Je vous invite à sélectionner différents onglets de
						cette roue pour naviguer sur le site internet. Vous
						aurez une barre de navigation classique sur les autres
						pages. Seule cette page est équipée de cette roue.
					</p>
				) : (
					<p className="présentationtext">
						Bienvenue sur le site web de Vincent Rousseaux. Je suis
						passionné par le développent web. je suis enthousiaste à
						l'idée de débuter ma carrière et de partager avec vous
						mon parcours professionnel naissant. Ce site est
						l'endroit où vous découvrirez qui je suis, mes
						compétences, et mes premières expériences dans le
						domaine. J'ai acquis une solide base théorique grâce à
						mes études, et je suis maintenant prêt à appliquer ces
						connaissances dans le monde professionnel. Au fil de ces
						pages, vous trouverez des détails sur mes compétences
						techniques, mes projets de bootcamp. Mon objectif est
						d'apprendre constamment et de m'adapter aux évolutions
						de l'industrie. Je suis à la recherche de nouvelles
						opportunités pour développer mes compétences et
						contribuer à des projets intéressants.
					</p>
				)}
				<Menuroue roue={roue} setRoue={setRoue} />
			</section>
		</div>
	);
}

export default Home;
