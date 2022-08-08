import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import PropTypes from "prop-types";
import "../styles/smallcard.scss";
import moment from "moment";

const SmallCard = ({ data }) => {
	const { sTitle, dPublishDate, oImg } = data;
	const matchDate = moment(dPublishDate).format("D MMM YYYY");
	const timer = moment(dPublishDate).fromNow();
	const imgURL = oImg?.sUrl;

	return (
		<div className="smallcard">
			<div className="smallcard-img">
				<img
					src={
						imgURL.includes("https://www.crictracker.com/")
							? imgURL
							: `https://crictracker-admin-panel.s3.ap-south-1.amazonaws.com/${imgURL}`
					}
					onError={({ currentTarget }) => {
						currentTarget.onerror = null; // prevents looping
						currentTarget.src =
							"https://image.crictracker.com/wp-content/uploads/2022/03/MS-Dhoni-4-370x231.jpg";
					}}
					alt={oImg?.sText}
				/>
			</div>
			<div className="smallcard-content">
				<span className="smallcard-content-title">{sTitle}</span>
				<div className="smallcard-content-footer">
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
		</div>
	);
};

export default SmallCard;

SmallCard.propTypes = {
	data: PropTypes.object,
};
