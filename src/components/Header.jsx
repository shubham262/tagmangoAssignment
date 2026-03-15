import React from "react";
import "../assets/styles/challenge/header.scss";
import profile from "../assets/images/profile.png";
import Bell from "../assets/svg/challenge/bell.svg?react";
import Fire from "../assets/svg/challenge/fire.svg?react";
const Header = () => {
	return (
		<div className="headerParentContainer">
			<div className="leftHeaderContainer"></div>
			<div className="rightHeaderContainer">
				<div className="fireContainer">
					<Fire />
					30
				</div>
				<div className="bellContainer">
					<Bell />
				</div>
				<div className="profileContainer">
					<img src={profile} alt="profile" className="profileImage" />
				</div>
			</div>
		</div>
	);
};

export default Header;
