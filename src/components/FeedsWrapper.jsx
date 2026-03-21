import React from "react";
import "../assets/styles/challenge/feedsWrapper.scss";
import group from "../assets/images/group.png";
const FeedsWrapper = ({ children }) => {
	return (
		<div className="feedsWrapperContainer">
			<span className="feedWrapperHeading">
				See what others{" "}
				<img src={group} className="groupImage" alt="groupImage" />
				shared
			</span>
			<span className="feedWrapperSubtext">
				<span className="feedWrapperHighlightSubtext">85+ </span>participants
				already completed
			</span>

			{children}
		</div>
	);
};

export default FeedsWrapper;
