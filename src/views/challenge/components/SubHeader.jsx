import React from "react";
import "../../../assets/styles/challenge/subHeader.scss";
import Info from "../../../assets/svg/challenge/Info.svg?react";
import Back from "../../../assets/svg/challenge/back.svg?react";

const SubHeader = () => {
	return (
		<div className="subHeaderParentContainer">
			<div className="leftContainer">
				<Back />
				<span className="dayText">Back</span>
				<span className="seperator"></span>
				<span className="dayText">Day 1 of 9</span>
			</div>
			<div className="rightContainer">
				9-Day Fitness Challenge
				<Info />
			</div>
		</div>
	);
};

export default SubHeader;
