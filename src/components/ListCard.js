import React from "react";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import "../styles/listcard.scss";
import PropTypes from "prop-types";

const ListCard = ({ data }) => {
	return (
		<div className="listcard">
			<BsFillFileEarmarkTextFill />
			<span>{data?.sSubtitle}</span>
		</div>
	);
};

export default ListCard;

ListCard.propTypes = {
	data: PropTypes.object,
};
