import React, { useState } from "react";
import "../../../assets/styles/challenge/sidebar.scss";
import sidebarBackground from "../../../assets//images/sidebarbackGround.png";
import Tick from "../../../assets/svg/challenge/tick.svg?react";
import Lock from "../../../assets/svg/challenge/lock.svg?react";

const Sidebar = () => {
	const [info, setInfo] = useState({
		days: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		activeDay: 1,
	});
	return (
		<div
			className="sidebarContainer"
			style={{ backgroundImage: `url(${sidebarBackground})` }}
		>
			<div className="backgroundOverlay"></div>
			<div className="daysContainer">
				{info?.days?.map((ele, index) => (
					<div key={`days-${index + 1}`} className="daysTab">
						Day - {ele}
						{info?.activeDay === ele ? <Tick /> : <Lock />}
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
