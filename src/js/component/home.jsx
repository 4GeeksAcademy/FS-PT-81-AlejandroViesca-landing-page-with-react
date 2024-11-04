import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import comps
import NavbarComp from "./navbarComp";
import JumbotronComp from "./jumbotronComp";
import FooterComp from "./footerComp";
import CardComp from "./cardComp";
import CardContainerComp from "./cardContainerComp";

//create your first component
const Home = () => {
	return (
		<>
			<NavbarComp />

			<div className="container">
				<JumbotronComp />
				<CardContainerComp />
			</div>

			<FooterComp />
		</>
	);
};

export default Home;
