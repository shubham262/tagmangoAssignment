import React, { useCallback, useState } from "react";
import "../../../assets/styles/challenge/sidebar.scss";
import sidebarBackground from "../../../assets/images/sidebarbackGround.png";
import darkImage from "../../../assets/images/darkSideNew.png";
import newImage from "../../../assets/images/new.png";
import Tick from "../../../assets/svg/challenge/tick.svg?react";
import Lock from "../../../assets/svg/challenge/lock.svg?react";
import Info from "../../../assets/svg/challenge/Info.svg?react";
import Back from "../../../assets/svg/challenge/back.svg?react";
import DarkLock from "../../../assets/svg/challenge/darkLock.svg?react";
import { useTheme } from "../../../context/ThemeContext";
const Sidebar = () => {
	const { theme } = useTheme();
	const [info, setInfo] = useState({
		days: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		activeDay: 2,
	});
	const onDayClick = useCallback(
		(day) => {
			if (day === info?.activeDay) return;
			setInfo((prev) => ({ ...prev, activeDay: day }));
		},
		[info?.activeDay]
	);
	return (
		<>
			<div
				className="sidebarContainer"
				style={{ backgroundImage: `url(${sidebarBackground})` }}
			>
				<div className="specialtab"></div>
				<div className="backgroundOverlay"></div>
				<div className="daysContainer">
					{info?.days?.map((ele, index) => (
						<div
							key={`days-${index + 1}`}
							className={`daysTab ${
								info?.activeDay === ele ? "activeDay" : ""
							}`}
							onClick={() => onDayClick(ele)}
						>
							Day - {ele}
							{info?.activeDay === ele ? (
								<Tick />
							) : theme === "light" ? (
								<Lock />
							) : (
								<DarkLock />
							)}
						</div>
					))}
				</div>
			</div>
			<div
				className="mobileNavigationContainer"
				style={{
					backgroundImage: `url(${theme === "light" ? newImage : darkImage})`,
				}}
			>
				<div className="mobileTopHeadingContainer">
					<div className="leftContainer">
						<Back />
						9-Day Fitness Challenge
					</div>
					<div className="iHolder">
						<Info />
					</div>
				</div>
				<div className="mobileDaysContainer">
					{info?.days?.map((ele, index) => (
						<div
							key={`days-mobile-${index + 1}`}
							className={`mobileDaysTab ${
								info?.activeDay === ele ? "activeDay" : ""
							} ${index === 0 ? "firstMobileTab" : ""}`}
							onClick={() => onDayClick(ele)}
						>
							{ele === info?.activeDay ? `Day` : `Day ${ele}`}

							{info?.activeDay === ele ? (
								<span className="activeDayText">{ele}</span>
							) : ele > info?.activeDay ? (
								theme === "light" ? (
									<Lock />
								) : (
									<DarkLock />
								)
							) : (
								<Tick />
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Sidebar;
