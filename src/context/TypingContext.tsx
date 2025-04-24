import React, { createContext, useState, ReactNode } from "react";
/* import { getWordStatusArray } from "../utils/getWordsColors/getWordsColors"; */

type TypingContextType = {
  targetText: string;
  userInputText: string;
  handleUserInputChange: (value: string) => void;
  handleRestartGame: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

type TypingProviderProps = {
  children: ReactNode;
};

const defaultContextValue: TypingContextType = {
  targetText: "Hola mundo",
  userInputText: "",
  handleRestartGame: () => {},
  handleUserInputChange: () => {},
  handleKeyDown: () => {},
};

const TypingContext = createContext<TypingContextType>(defaultContextValue);

const TypingProvider = ({ children }: TypingProviderProps) => {

  const [targetText] = useState("Hola mundo 123");
  const [userInputText, setUserInputText] = useState("");
  const [counterDeletedChars, setCounterDeletedChars] = useState(0);

  const handleUserInputChange = (value: string) => {
    setUserInputText(value);
  };

  const handleRestartGame = () => {
    setUserInputText("");
    setCounterDeletedChars(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === " "){
      console.log('whitespace')
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
        userInputText,
        handleUserInputChange,
        handleKeyDown,
        handleRestartGame,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
};

export { TypingProvider, TypingContext };
