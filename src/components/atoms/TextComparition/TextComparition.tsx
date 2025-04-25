import React, { useEffect } from 'react';
import { getWordStatusArray } from '../../../utils/getWordsColors/getWordsColors';
import { colorStrings } from '../../../constants/color-constants-strings';
import { StringProjects } from '../../../utils/strings-projects/stringProjects';

type TextComparitionProps = {
	text: string;
	inputString: string;
	setCorrectWordsNumber: (value: number) => void;
};

const {
	YOUR_PHRASE_IS
} = StringProjects;

const TextComparition = ({ text, inputString, setCorrectWordsNumber }: TextComparitionProps) => {

	const feedbackToUser = getWordStatusArray(text, inputString );

	useEffect(() => {
		const correctWords = feedbackToUser.filter((word) => word.color === colorStrings.CORRECT).length;
		setCorrectWordsNumber(correctWords);
	}, [feedbackToUser, setCorrectWordsNumber]);
	

  return (
	<div>
		<h3 className='text-xl pb-3'>{YOUR_PHRASE_IS}</h3>
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