import React from "react";
import "../styles/home.scss";
import Divider from "./Divider";
import PropTypes from "prop-types";
import GridCard from "./GridCard";
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";
import ListCard from "./ListCard";
import { BsChevronRight } from "react-icons/bs";

const CardSection = ({ data }) => {
	const { aArticle, sName } = data;

	return (
		<div className="card-container">
			<Divider label={sName} />

			{aArticle.map(
				(bCard) =>
					bCard.sType == "nBig" && <LargeCard key={bCard._id} data={bCard} />
			)}

			{aArticle.map(
				(sCard) =>
					sCard.sType == "nSmall" && <SmallCard key={sCard._id} data={sCard} />
			)}

			<div className="card-grid">
				{aArticle.map(
					(gCard) =>
						gCard.sType == "nGrid" && <GridCard key={gCard._id} data={gCard} />
				)}
			</div>

			{aArticle.map(
				(gCard) =>
					gCard.sType == "nList" && <ListCard key={gCard._id} data={gCard} />
			)}

			<button className="btn">
				<span>{`More from ${sName}`}</span>
				<BsChevronRight />
			</button>
		</div>
	);
};

export default CardSection;

CardSection.propTypes = {
	data: PropTypes.object,
};
