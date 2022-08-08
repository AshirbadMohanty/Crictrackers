import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import "../styles/gridcard.scss";
import Clamp from "react-multiline-clamp";
import moment from "moment";
import PropTypes from "prop-types";

const GridCard = ({ data }) => {
	const { sTitle, dPublishDate, oImg } = data;
	const matchDate = moment(dPublishDate).format("D MMM YYYY");
	const timer = moment(dPublishDate).fromNow();
	const imgURL = oImg?.sUrl;

	return (
		<div className="gridcard">
			<div className="gridcard-img">
				<img
					src={
						imgURL.includes("https://www.crictracker.com/")
							? imgURL
							: `https://crictracker-admin-panel.s3.ap-south-1.amazonaws.com/${imgURL}`
					}
					onError={({ currentTarget }) => {
						currentTarget.onerror = null; // prevents looping
						currentTarget.src =
							"https://image.crictracker.com/wp-content/uploads/2022/04/Faf-du-Plessis-3-370x231.jpg";
					}}
					alt={oImg?.sText}
				/>
			</div>
			<Clamp lines={3} ellipsis="..." trimRight className="">
				<span className="gridcard-title">{sTitle}</span>
			</Clamp>

			<div className="gridcard-footer">
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

export default GridCard;

GridCard.propTypes = {
	data: PropTypes.object,
};
