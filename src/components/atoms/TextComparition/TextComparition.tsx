import React from 'react';
import { getWordStatusArray } from '../../../utils/getWordsColors/getWordsColors';

type TextComparitionProps = {
	text: string;
	inputString: string;
};

const TextComparition = ({ text, inputString }: TextComparitionProps) => {

	const feedbackToUser = getWordStatusArray(text, inputString );

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