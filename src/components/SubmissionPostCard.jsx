import React from "react";
import "../assets/styles/challenge/submissionCard.scss";
const SubmissionPostCard = () => {
	return (
		<div className="subMissionPostCardContainer">
			<span className="submissionText">Your Submission</span>
			<div className="submissionCardContainer">
				<div className="submissionCardHeader"></div>
				<div className="submissionCardFooter">
					<span className="submissionCardFooterRightContainer">
						10 Comments
					</span>
				</div>
			</div>
		</div>
	);
};

export default SubmissionPostCard;
