import React from "react";
import Header from "../components/Header";
import "../assets/styles/challengeLayout.scss";

const Challengelayout = ({ children }) => {
	return (
		<div className="challengeLayoutContainer">
			<Header />
			<div className="layoutContent">{children}</div>
		</div>
	);
};

export default Challengelayout;
