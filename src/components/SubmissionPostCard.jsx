import React from "react";
import "../assets/styles/challenge/submissionCard.scss";
import Comment from "../assets/svg/challenge/comment.svg?react";
import Smile from "../assets/svg/challenge/smiley.svg?react";
import DarkSmile from "../assets/svg/challenge/darkSmiley.svg?react";
import profile from "../assets/images/profile.png";
import workout from "../assets/images/workout.png";
import { useTheme } from "../theme/ThemeContext";
import ConfettiPiece, { CONFETTI_PIECES } from "./Confetti";

const SubmissionPostCard = () => {
	const { theme } = useTheme();

	return (
		<div className="subMissionPostCardContainer">
			<div className="submissionHeaderWrapper">
				{CONFETTI_PIECES.map((piece, i) => (
					<ConfettiPiece key={i} {...piece} />
				))}
				<span className="submissionText">Your Submission</span>
			</div>

			<div className="submissionCardContainer">
				<div className="submissionCardHeader">
					<div className="profileImageContainer">
						<img src={profile} alt="profile" className="profileImage" />
					</div>
					<div className="profileDetailsContainer">
						<span className="name">Ashraf Idrishi</span>
						<span className="time">1s</span>
					</div>
					<div className="threeDotsContainer">
						<div className="dots"></div>
						<div className="dots"></div>
						<div className="dots"></div>
					</div>
				</div>
				<span className="submissionCardDescription">
					Today's challenge workout completed - feeling stronger already
				</span>
				<img src={workout} alt="workout" className="submissionCardImage" />
				<div className="submissionCardFooter">
					<div className="submissionCardFooterLeftContainer">
						<div className="groupedIconContainer">🙏 😍 18</div>
						<div className="iconContainer">
							{theme === "light" ? <Smile /> : <DarkSmile />}
						</div>
						<div className="iconContainer">
							<Comment />
						</div>
					</div>
					<span className="submissionCardFooterRightContainer">
						10 Comments
					</span>
				</div>
			</div>
		</div>
	);
};

export default SubmissionPostCard;
