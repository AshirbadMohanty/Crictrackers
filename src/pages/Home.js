import React from "react";
import { graphQlToRest } from "../data/data";
import { useQuery } from "react-query";
import "../styles/home.scss";
import CardSection from "../components/CardSection";
import Loader from "../components/Loader";

const Home = () => {
	const { data, isLoading } = useQuery("data", graphQlToRest);

	return (
		<div className="home">
			{isLoading ? (
				<Loader />
			) : (
				data?.data?.getHomePageArticle?.aResults.map((article, index) => (
					<CardSection key={index} data={article} />
				))
			)}
		</div>
	);
};

export default Home;
