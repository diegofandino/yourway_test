import axios from "axios";
import React, { useState } from "react";
import { ScoresGet } from "../models/Scores.model";
export const useScoreFetchingData = () => {
	
	const [getScores, setGetScores] = useState<ScoresGet[]>([]);

	const getScoresFromDB = async () => {
		try {
			const response = await axios.get(`${import.meta.env.VITE_URL_BASE}/scores?_sort=date&_order=desc`);
			setGetScores(response.data);
		} catch (error) {
			console.error("Error fetching scores:", error);
		}
	};

	const addScores	= async (newScore: ScoresGet) => {
		if(getScores && getScores.length > 0 && !getScores.some(({ score }) => score < newScore.score )) return;
		try {
			await axios.post(`${import.meta.env.VITE_URL_BASE}/scores`, newScore);
			setGetScores((prevScores) => [newScore, ...prevScores ]);
		} catch (error) {
			console.error("Error adding score:", error);
		}
	};

	React.useEffect(() => {
		getScoresFromDB();
	}, []);

	return { getScores, addScores };

}; 