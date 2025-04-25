import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TypingContext } from "../../../../context/TypingContext";
import TypingComparition from "../TypingComparition";
import { ScoresGet } from "../../../../models/Scores.model";
import { colorStrings } from "../../../../constants/color-constants-strings";

jest.mock("../../../../hooks/useScoreFetchingData.ts", () => ({
  useScoreFetchingData: jest.fn(() => ({
    getScores: [],
    setCorrectWordsNumber: jest.fn(),
  })),
}));


type TypingContextType = {
  targetText: string;
  userInputText: string;
  isFinalWord: boolean;
  wpm: number;
  accuracy: number;
  score: number;
  getScores: ScoresGet[];
  handleUserInputChange: (value: string) => void;
  handleRestartGame: () => void;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setCorrectWordsNumber: (value: number) => void;
};

const defaultContextValue: TypingContextType = {
  targetText: "Hola mundo",
  userInputText: "",
  isFinalWord: false,
  wpm: 0,
  accuracy: 0,
  score: 0,
  getScores: [],
  handleRestartGame: () => {},
  handleUserInputChange: () => {},
  handleKeyUp: () => {},
  handleKeyDown: () => {},
  setCorrectWordsNumber: () => {},
};

type WrapperProps = {
  options: TypingContextType;
  children: React.ReactNode;
};

describe("Typing comparition component", () => {
  const Wrapper = ({ options, children }: WrapperProps) => {
    return (
      <TypingContext.Provider value={{ ...options }}>
        {children}
      </TypingContext.Provider>
    );
  };

  test("should render data from target Text", () => {
    render(
      <Wrapper options={defaultContextValue}>
        <TypingComparition />
      </Wrapper>
    );
    expect(screen.getByText("Hola")).toBeInTheDocument();
  });

  test("should render data from target text and input where could see classname if is correct or not", () => {
    render(
      <Wrapper
        options={{
          ...defaultContextValue,
          userInputText: "Hola",
        }}
      >
        <TypingComparition />
      </Wrapper>
    );

    expect(screen.getByText("Hola")).toHaveClass(colorStrings.CORRECT);
  });

  test("should render scores if database has one.", () => {
    render(
      <Wrapper
        options={{
          ...defaultContextValue,
          userInputText: "Hola",
          getScores: [
            {
              id: "1",
              date: "25/04/2025 09:13",
              score: 100,
            },
          ],
        }}
      >
        <TypingComparition />
      </Wrapper>
    );

    expect(screen.getByText("25/04/2025 09:13")).toBeInTheDocument();
  });

  test("Press restart game button ", () => {
  
	const handleRestartGameMock = jest.fn();

    render(
      <Wrapper options={{
		...defaultContextValue,
		userInputText: "Hola mundo",
		handleRestartGame: handleRestartGameMock,
		}}>
        <TypingComparition />
      </Wrapper>
    );

	const restartButton = screen.getByText("Stop");
	fireEvent.click(restartButton);
	
    expect(handleRestartGameMock).toHaveBeenCalled();
  });
  
  test("render game finalized ", () => {
  
	const handleKeyDownMock = jest.fn();
	const handleKeyUpMock = jest.fn();

    render(
      <Wrapper options={{
		...defaultContextValue,
		isFinalWord: false,
		userInputText: "",
		score: 100,
		handleKeyDown: handleKeyDownMock,
		handleKeyUp: handleKeyUpMock,
		}}>
        <TypingComparition />
      </Wrapper>
    );

	const input = screen.getByTestId("input");

	fireEvent.change(input, { target: { value: "Hola" } });
	fireEvent.keyDown(input, { key: " " });
	fireEvent.change(input, { target: { value: "mundo" } });
	fireEvent.keyUp(input, { key: " " });



	expect(handleKeyDownMock).toHaveBeenCalled();
	expect(handleKeyUpMock).toHaveBeenCalled();



  });

});
