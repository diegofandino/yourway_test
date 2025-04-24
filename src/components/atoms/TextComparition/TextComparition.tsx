import React, { useEffect } from 'react';
import { getWordStatusArray } from '../../../utils/getWordsColors/getWordsColors';
import { colorStrings } from '../../../constants/color-constants-strings';

type TextComparitionProps = {
	text: string;
	inputString: string;
	setCorrectWordsNumber: (value: number) => void;
};

const TextComparition = ({ text, inputString, setCorrectWordsNumber }: TextComparitionProps) => {

	const feedbackToUser = getWordStatusArray(text, inputString );

	useEffect(() => {
		const correctWords = feedbackToUser.filter((word) => word.color === colorStrings.CORRECT).length;
		setCorrectWordsNumber(correctWords);
	}, [feedbackToUser, setCorrectWordsNumber]);
	

  return (
	<div>
		{feedbackToUser.map((word, index) => (
			<span key={index} className={word.color}>
				{word.text}
				{index < feedbackToUser.length - 1 ? ' ' : ''}
			</span>
		))}
	</div>
  )
}

export default TextComparition