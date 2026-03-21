import React, { useCallback, useState } from "react";
import "../../../assets/styles/challenge/sidebar.scss";
import sidebarBackground from "../../../assets//images/sidebarbackGround.png";
import Tick from "../../../assets/svg/challenge/tick.svg?react";
import Lock from "../../../assets/svg/challenge/lock.svg?react";
import Info from "../../../assets/svg/challenge/info.svg?react";
import Back from "../../../assets/svg/challenge/back.svg?react";
const Sidebar = () => {
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
							{info?.activeDay === ele ? <Tick /> : <Lock />}
						</div>
					))}
				</div>
			</div>
			<div className="mobileNavigationContainer">
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
							}`}
							onClick={() => onDayClick(ele)}
						>
							{ele === info?.activeDay ? `Day` : `Day - ${ele}`}

							{info?.activeDay === ele ? (
								<span className="activeDayText">{ele}</span>
							) : ele > info?.activeDay ? (
								<Lock />
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
