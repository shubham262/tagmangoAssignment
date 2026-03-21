/* eslint-disable react-refresh/only-export-components */
import React from "react";

export const CONFETTI_PIECES = [
	{
		color: "#FF4D6D",
		shape: "rect",
		left: "5%",
		delay: "0s",
		duration: "2.8s",
	},
	{
		color: "#2D9CDB",
		shape: "line",
		left: "12%",
		delay: "0.3s",
		duration: "3.1s",
	},
	{
		color: "#FF4D6D",
		shape: "squiggle",
		left: "18%",
		delay: "0.7s",
		duration: "2.6s",
	},
	{
		color: "#27AE60",
		shape: "squiggle",
		left: "28%",
		delay: "0.1s",
		duration: "3.4s",
	},
	{
		color: "#F2994A",
		shape: "rect",
		left: "38%",
		delay: "0.5s",
		duration: "2.9s",
	},
	{
		color: "#2D9CDB",
		shape: "line",
		left: "48%",
		delay: "0.9s",
		duration: "3.2s",
	},
	{
		color: "#FF4D6D",
		shape: "squiggle",
		left: "58%",
		delay: "0.2s",
		duration: "2.7s",
	},
	{
		color: "#27AE60",
		shape: "rect",
		left: "65%",
		delay: "0.6s",
		duration: "3.0s",
	},
	{
		color: "#F2994A",
		shape: "squiggle",
		left: "75%",
		delay: "0.4s",
		duration: "2.5s",
	},
	{
		color: "#FF4D6D",
		shape: "line",
		left: "82%",
		delay: "0.8s",
		duration: "3.3s",
	},
	{
		color: "#2D9CDB",
		shape: "rect",
		left: "90%",
		delay: "0.15s",
		duration: "2.8s",
	},
	{
		color: "#27AE60",
		shape: "line",
		left: "95%",
		delay: "0.55s",
		duration: "3.1s",
	},
];

const ConfettiPiece = ({ color, shape, left, delay, duration }) => {
	const style = {
		position: "absolute",
		left,
		top: "-10px",
		animationDelay: delay,
		animationDuration: duration,
	};

	if (shape === "rect") {
		return (
			<div
				className="confetti-piece confetti-rect"
				style={{ ...style, backgroundColor: color }}
			/>
		);
	}
	if (shape === "line") {
		return (
			<div
				className="confetti-piece confetti-line"
				style={{ ...style, backgroundColor: color }}
			/>
		);
	}
	// squiggle
	return (
		<svg
			className="confetti-piece confetti-squiggle"
			style={style}
			width="8"
			height="16"
			viewBox="0 0 8 16"
			fill="none"
		>
			<path
				d="M4 0 Q8 4 4 8 Q0 12 4 16"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				fill="none"
			/>
		</svg>
	);
};
export default ConfettiPiece;
