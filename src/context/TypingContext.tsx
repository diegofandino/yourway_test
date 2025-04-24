import React, { createContext, useState, ReactNode } from "react";
import { useWPM } from "../hooks/useWPM";
import { useAccuracy } from "../hooks/useAccuracy";
import { useScore } from "../hooks/useScore";

type TypingContextType = {
  targetText: string;
  userInputText: string;
  isFinalWord: boolean;
  score: number;
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
  handleRestartGame: () => {},
  handleUserInputChange: () => {},
  handleKeyUp: () => {},
  handleKeyDown: () => {},
  setCorrectWordsNumber: () => {},
};

const TypingContext = createContext<TypingContextType>(defaultContextValue);

const TypingProvider = ({ children }: TypingProviderProps) => {

  const [targetText] = useState("Necesito una expresion un poco mas grande para poder hacer una prueba de velocidad de escritura");
  const [userInputText, setUserInputText] = useState("");
  const [counterDeletedChars, setCounterDeletedChars] = useState(0);
  const [startTime, setStartTimer] = useState(0);
  const [isFinalWord, setIsFinalWord] = useState(false);
  const [correctWordsNumber, setCorrectWordsNumber] = useState(0);

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
  };

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
   
      console.log(words.length, targetWords.length)

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
