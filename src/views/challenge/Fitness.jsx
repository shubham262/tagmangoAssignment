import React from "react";
import "../../assets/styles/challenge/fitness.scss";
import SubHeader from "./components/SubHeader";
const Fitness = () => {
	return (
		<div className="fitnessContainer">
			<SubHeader />
			<div className="fitnessContentParentContainer">
				<div className="sidebarContainer"></div>
				<div className="contentContainer">
                    <div className="contentWithMaxWidth"></div>
                </div>
			</div>
		</div>
	);
};

export default Fitness;
