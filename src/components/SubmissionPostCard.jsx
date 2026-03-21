import React from "react";
import "../assets/styles/challenge/submissionCard.scss";
import Comment from "../assets/svg/challenge/comment.svg?react";
import Smile from "../assets/svg/challenge/smiley.svg?react";
import profile from "../assets/images/profile.png";
import workout from "../assets/images/workout.png";
const SubmissionPostCard = () => {
	return (
		<div className="subMissionPostCardContainer">
			<span className="submissionText">Your Submission</span>
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
					Today's challenge workout completed - feeling stringer already
				</span>
				<img src={workout} alt="workout" className="submissionCardImage" />
				<div className="submissionCardFooter">
					<div className="submissionCardFooterLeftContainer">
						<div className="groupedIconContainer">🙏 😍 18</div>
						<div className="iconContainer">
							<Smile />
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
