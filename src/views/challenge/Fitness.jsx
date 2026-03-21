import React from "react";
import "../../assets/styles/challenge/fitness.scss";
import SubHeader from "./components/SubHeader";
import SubmissionPostCard from "../../components/SubmissionPostCard";
import FeedsWrapper from "../../components/FeedsWrapper";
import FeedCard from "../../components/FeedCard";
const Fitness = () => {
	return (
		<div className="fitnessContainer">
			<SubHeader />
			<div className="fitnessContentParentContainer">
				<div className="sidebarContainer"></div>
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
