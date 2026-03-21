import React from "react";
import "../assets/styles/challenge/feedCard.scss";
import Comment from "../assets/svg/challenge/comment.svg?react";
import Smile from "../assets/svg/challenge/smiley.svg?react";
import profile2 from "../assets/images/profile2.png";
import firstImage from "../assets/images/1.png";
import secondImage from "../assets/images/2.png";
import thirdImage from "../assets/images/3.png";
import Pin from "../assets/svg/challenge/pin.svg?react";
const FeedCard = ({ showPinned = false }) => {
	return (
		<div className="feedCardContainer">
			{showPinned && (
				<div className="pinnedContainer">
					<Pin />
					This is a pinned post
				</div>
			)}
			<div className="submissionCardHeader">
				<div className="profileImageContainer">
					<img src={profile2} alt="profile" className="profileImage" />
				</div>
				<div className="profileDetailsContainer">
					<span className="name">Russell Brunson</span>
					<span className="time">3 hrs ago</span>
				</div>
				<div className="threeDotsContainer">
					<div className="dots"></div>
					<div className="dots"></div>
					<div className="dots"></div>
				</div>
			</div>
			<div className="submissionCardDescription">
				<span>
					This 9-day fitness challenge is designed to help you build
					consistency, boost energy, and feel stronger—one day at a time. Each
					day comes with a simple, achievable fitness task that fits easily into
					your routine, no matter your current fitness level.
				</span>

				<div className="bulletPointContainer">
					<div className="bullteList">
						<img src={firstImage} alt="firstImage" className="imageBullet" />
						Minimum 20 minutes of sit-up
					</div>
					<div className="bullteList">
						<img src={secondImage} alt="firstImage" className="imageBullet" />
						Mention Intensity
					</div>
					<div className="bullteList">
						<img src={thirdImage} alt="firstImage" className="imageBullet" />
						Upload Media (Optional)
					</div>
				</div>
			</div>

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
				<span className="submissionCardFooterRightContainer">10 Comments</span>
			</div>
		</div>
	);
};

export default FeedCard;
