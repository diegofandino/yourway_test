import React, { useState } from "react";

export const useScore = (wpm: number, accuracy: number, wordsTyped: number, deletesCounter: number, finalWord: boolean) => {
	const [score, setScore] = useState(0);

	React.useEffect(() => {
		if(finalWord){
			const finalScore = Math.round((wpm * accuracy * wordsTyped) - deletesCounter);
			setScore(finalScore);
		} else {
			setScore(0);
		}
	}, [wpm, accuracy, wordsTyped, deletesCounter, finalWord]);
	

	return score;
};