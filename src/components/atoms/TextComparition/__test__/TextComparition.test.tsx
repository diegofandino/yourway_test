import React from "react";
import { render, screen } from "@testing-library/react";
import TextComparition from "../TextComparition";
import { colorStrings } from "../../../../constants/color-constants-strings";

const textMock = 'This is a text';
let textFromInput = 'This is';

describe('Text comparition component', () => {


	test('should render with data', () => {
		const setCorrectWordsNumberMock = jest.fn();
		
		render(<TextComparition text={textMock} setCorrectWordsNumber={setCorrectWordsNumberMock} inputString={textFromInput} />)
		expect(screen.getByText('This')).toBeInTheDocument();
	})

	test('should render with classname depends if is word is correct', () => {
		const setCorrectWordsNumberMock = jest.fn();
		textFromInput = 'This is';
		render(<TextComparition text={textMock} setCorrectWordsNumber={setCorrectWordsNumberMock} inputString={textFromInput} />)
		expect(screen.getByText('This')).toHaveClass(colorStrings.CORRECT);
	})

	test('should render with classname depends if is word is incorrect', () => {
		const setCorrectWordsNumberMock = jest.fn();
		textFromInput = 'This hellow';
		render(<TextComparition text={textMock} setCorrectWordsNumber={setCorrectWordsNumberMock} inputString={textFromInput} />)
		expect(screen.getByText('is')).toHaveClass(colorStrings.INCORRECT);
	})
	
	test('should render with classname transparent due is not writing yet', () => {
		const setCorrectWordsNumberMock = jest.fn();
		textFromInput = 'This hellow';
		render(<TextComparition text={textMock} setCorrectWordsNumber={setCorrectWordsNumberMock} inputString={textFromInput} />)
		expect(screen.getByText('text')).toHaveClass(colorStrings.TRANSPARENT);
	})
	
})
