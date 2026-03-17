import React from "react";
import "../../assets/styles/challenge/fitness.scss";
import SubHeader from "./components/SubHeader";
import SubmissionPostCard from "../../components/SubmissionPostCard";
const Fitness = () => {
	return (
		<div className="fitnessContainer">
			<SubHeader />
			<div className="fitnessContentParentContainer">
				<div className="sidebarContainer"></div>
				<div className="contentContainer">
					<div className="contentWithMaxWidth">
						<SubmissionPostCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fitness;
