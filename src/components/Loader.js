import React from "react";
import { RotatingLines } from "react-loader-spinner";
import "../styles/loader.scss";

const Loader = () => {
	return (
		<div className="loader">
			<RotatingLines width="100" strokeColor="#4e4eb1" />
		</div>
	);
};

export default Loader;
