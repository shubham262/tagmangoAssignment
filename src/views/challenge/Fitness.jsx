import React from "react";
import "../../assets/styles/challenge/fitness.scss";
import SubHeader from "./components/SubHeader";
import SubmissionPostCard from "../../components/SubmissionPostCard";
import FeedsWrapper from "../../components/FeedsWrapper";
import FeedCard from "../../components/FeedCard";
import Sidebar from "./components/Sidebar";
const Fitness = () => {
	return (
		<div className="fitnessContainer">
			<SubHeader />
			<div className="fitnessContentParentContainer">
				<Sidebar />
				<div className="contentContainer">
					<div className="contentWithMaxWidth">
						<SubmissionPostCard />
						<FeedsWrapper>
							<FeedCard showPinned={true} />
						</FeedsWrapper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fitness;
