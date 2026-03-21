import React from "react";
import "../assets/styles/challenge/header.scss";
import profile from "../assets/images/profile.png";
import logo from "../assets/images/logo.png";
import darkLogo from "../assets/images/darkLogo.png";
import Bell from "../assets/svg/challenge/bell.svg?react";
import Fire from "../assets/svg/challenge/fire.svg?react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="headerParentContainer">
			<div className="leftHeaderContainer">
				<img
					src={theme === "light" ? logo : darkLogo}
					alt="logo"
					className="logoImage"
				/>
			</div>
			<div className="rightHeaderContainer">
				<div className="fireContainer">
					<Fire />
					30
				</div>
				<div className="bellContainer">
					<Bell />
				</div>

				{/* ✨ Theme Toggle Button */}
				<button
					className="themeToggleBtn"
					onClick={toggleTheme}
					aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
				>
					<div className="toggleTrack">
						<span className="toggleIcon sunIcon">☀️</span>
						<span className="toggleIcon moonIcon">🌙</span>
						<div className="toggleThumb" />
					</div>
				</button>

				<div className="profileContainer">
					<img src={profile} alt="profile" className="profileImage" />
				</div>
			</div>
		</div>
	);
};

export default Header;
