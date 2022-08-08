import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import "../styles/largecard.scss";
import Clamp from "react-multiline-clamp";
import PropTypes from "prop-types";
import moment from "moment";

const LargeCard = ({ data }) => {
	const { sTitle, dPublishDate, oImg } = data;
	const matchDate = moment(dPublishDate).format("D MMM YYYY");
	const timer = moment(dPublishDate).fromNow();
	const imgURL = oImg?.sUrl;

	return (
		<div className="largecard">
			<div className="largecard-img">
				<img
					src={
						imgURL.includes("https://www.crictracker.com/")
							? imgURL
							: `https://crictracker-admin-panel.s3.ap-south-1.amazonaws.com/${imgURL}`
					}
					onError={({ currentTarget }) => {
						currentTarget.onerror = null; // prevents looping
						currentTarget.src =
							"https://image.crictracker.com/wp-content/uploads/2022/04/Delhi-Capitals-5.jpg";
					}}
					alt={oImg?.sText}
				/>
			</div>
			<Clamp lines={3} ellipsis="..." trimRight className="">
				<span className="largecard-title">{sTitle}</span>
			</Clamp>
			<Clamp lines={4} ellipsis="..." trimRight className="">
				<span className="largecard-desc">{data?.sDescription}</span>
			</Clamp>
			<div className="largecard-footer">
				<div className="date">
					<BsCalendarEvent />
					<span>{matchDate}</span>
				</div>
				<div className="time">
					<MdOutlineWatchLater />
					<span>{timer}</span>
				</div>
			</div>
		</div>
	);
};

export default LargeCard;

LargeCard.propTypes = {
	data: PropTypes.object,
};
