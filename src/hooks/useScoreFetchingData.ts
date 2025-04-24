import axios from "axios";
import React, { useState } from "react";
import { ScoresGet } from "../models/Scores.model";
export const useScoreFetchingData = () => {
	
	const [getScores, setGetScores] = useState<ScoresGet[]>([]);

	const fetchScores = async () => {
		try {
			const response = await axios.get(`${import.meta.env.VITE_URL_BASE}/scores`);
			console.log(response);
			setGetScores(response.data);
		} catch (error) {
			console.error("Error fetching scores:", error);
		}
	};
	React.useEffect(() => {
		fetchScores();
	}, []);

	return { getScores };

}; 