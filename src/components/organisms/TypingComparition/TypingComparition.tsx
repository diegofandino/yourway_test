import React, { useContext } from 'react'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import { StringProjects } from '../../../utils/strings-projects/stringProjects'
import TextComparition from '../../atoms/TextComparition/TextComparition';
import { TypingContext } from '../../../context/TypingContext';

const {
	STOP_TEXT,
	RESTART_TEXT,
	MAIN_TITLE,
} = StringProjects;

const TypingComparition = () => {

	const context = useContext(TypingContext);

	const { targetText, userInputText, handleUserInputChange, handleRestartGame, handleKeyDown} = context;

  return (
	
	<section className='flex flex-col gap-8 w-full h-full items-center justify-center'>
		<h1 className='text-3xl'>{MAIN_TITLE}</h1>
		<TextComparition text={targetText} inputString={userInputText}  />
		<Input onKeyDownEvent={handleKeyDown} onChangeEvent={handleUserInputChange} value={userInputText}  className='input-type' />
		<div className='flex justify-center gap-2'>
			<Button className='btn-primary' label={STOP_TEXT} type='button' onClickEvent={handleRestartGame} />
			<Button className='btn-primary' label={RESTART_TEXT} type='button' onClickEvent={handleRestartGame} />
		</div>
	</section>
  )
}

export default TypingComparition