import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useWPM } from "../hooks/useWPM";
import { useAccuracy } from "../hooks/useAccuracy";
import { useScore } from "../hooks/useScore";
import { useScoreFetchingData } from "../hooks/useScoreFetchingData";
import { ScoresGet } from "../models/Scores.model";
import { formatDate } from "../utils/formaterDates/formaterDates";

type TypingContextType = {
  targetText: string;
  userInputText: string;
  isFinalWord: boolean;
  score: number;
  getScores: ScoresGet[];
  handleUserInputChange: (value: string) => void;
  handleRestartGame: () => void;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setCorrectWordsNumber: (value: number) => void;
};

type TypingProviderProps = {
  children: ReactNode;
};

const defaultContextValue: TypingContextType = {
  targetText: "Hola mundo",
  userInputText: "",
  isFinalWord: false,
  score: 0,
  getScores: [],
  handleRestartGame: () => {},
  handleUserInputChange: () => {},
  handleKeyUp: () => {},
  handleKeyDown: () => {},
  setCorrectWordsNumber: () => {},
};

const TypingContext = createContext<TypingContextType>(defaultContextValue);

const TypingProvider = ({ children }: TypingProviderProps) => {

  const [targetText] = useState("Necesito una expresion");
  const [userInputText, setUserInputText] = useState("");
  const [counterDeletedChars, setCounterDeletedChars] = useState(0);
  const [startTime, setStartTimer] = useState(0);
  const [isFinalWord, setIsFinalWord] = useState(false);
  const [correctWordsNumber, setCorrectWordsNumber] = useState(0);
  const { getScores, addScores } = useScoreFetchingData();

  const words = userInputText.trim().split(" ");
  const targetWords = targetText.trim().split(" ");

  const {wpm, typedWordsFinal}  = useWPM(userInputText, startTime, isFinalWord);
  const accuracy = useAccuracy(correctWordsNumber, typedWordsFinal);
  const score = useScore(wpm, accuracy, typedWordsFinal, counterDeletedChars, isFinalWord);

  const handleUserInputChange = (value: string) => {
    setUserInputText(value);
  };

  const handleRestartGame = () => {
    setUserInputText("");
    setCounterDeletedChars(0);
    setStartTimer(0);
    setIsFinalWord(false);
    setCorrectWordsNumber(0);
  };

  useEffect(() => {
		if(score > 0) {
		  const newScore = {
			id: new Date().getTime().toString(),
			date: formatDate(new Date().toISOString()),
			score: score,
		  };
		  addScores(newScore);
		}
	 // eslint-disable-next-line react-hooks/exhaustive-deps
	 },  [score])

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if(words.length === targetWords.length && words[words.length - 1] === targetWords[words.length - 1]) {
      setIsFinalWord(true);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if(startTime === 0) {
      const now = Date.now();
      setStartTimer(now);
    }

    if (e.key === " ") {
      e.preventDefault();
   
      if(words.length < targetWords.length) {   
        setUserInputText((prev) =>  prev + " ");
        setIsFinalWord(false);
      } else {
        setIsFinalWord(true);
      }
    }

    if (e.key === "Backspace") {
      e.preventDefault();
      setUserInputText((prev) => prev.slice(0, -1));
      setCounterDeletedChars((prev) => prev + 1);
    }
  };

  return (
    <TypingContext.Provider
      value={{
        targetText,
        getScores,
        score,
        isFinalWord,
        userInputText,
        handleUserInputChange,
        handleKeyDown,
        handleKeyUp,
        handleRestartGame,
        setCorrectWordsNumber,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
};

export { TypingProvider, TypingContext };
