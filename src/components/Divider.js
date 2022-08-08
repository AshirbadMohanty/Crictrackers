import React from "react";
import PropTypes from "prop-types";
import "../styles/divider.scss";

const Divider = ({ label }) => {
	return (
		<div className="divider">
			<div className="divider-line"></div>
			<div className="divider-lbl">
				<span className="lbl">{label}</span>
			</div>
			<div className="divider-line"></div>
		</div>
	);
};

export default Divider;

Divider.propTypes = {
	label: PropTypes.string,
};
