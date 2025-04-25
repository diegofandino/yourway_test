import React, { useContext } from 'react'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import { StringProjects } from '../../../utils/strings-projects/stringProjects'
import TextComparition from '../../atoms/TextComparition/TextComparition';
import { TypingContext } from '../../../context/TypingContext';
import Description from '../../atoms/Description/Description';
import ScoreTable from '../ScoreTable/ScoreTable';

const {
	STOP_TEXT,
	RESTART_TEXT,
	RESULT_SCORE,
	RESULT_SCORE_TABLE,
	ACCURACY_TEXT,
	WPM_TEXT,
} = StringProjects;

const TypingComparition = () => {

	const context = useContext(TypingContext);
	
	const { targetText, userInputText, score, isFinalWord, getScores, accuracy, wpm, handleUserInputChange, handleRestartGame, handleKeyDown, handleKeyUp, setCorrectWordsNumber} = context;

  return (
	
	<section className='flex flex-col gap-8 w-full h-full items-center justify-center'>
		<TextComparition setCorrectWordsNumber={setCorrectWordsNumber} text={targetText} inputString={userInputText}  />
		{!isFinalWord && <Input onKeyUpEvent={handleKeyUp} onKeyDownEvent={handleKeyDown} onChangeEvent={handleUserInputChange} value={userInputText}  className='input-type' /> }
		<div className='flex justify-center gap-2'>
			<Button className='btn-primary' label={isFinalWord ? RESTART_TEXT : STOP_TEXT} type='button' onClickEvent={handleRestartGame} />
		</div>
		<div className='final__data flex gap-3'>
			{
				accuracy !== 0 && (
					<Description className='text-2xl'>
						{`${ACCURACY_TEXT} ${accuracy}%`}
					</Description>
				)
			}
			{
				wpm !== 0 && (
					<Description className='text-2xl'>
						{`${WPM_TEXT} ${wpm}`}
					</Description>
				)
			}
			{
				score !== 0 && (
					<Description className='text-2xl'>
						{`${RESULT_SCORE} ${score}`}
					</Description>
				)
			}
		</div>
	
		{
			getScores && getScores.length > 0 && (
				<div className='flex flex-col gap-8'>
					<h3 className='text-2xl font-bold'>{RESULT_SCORE_TABLE}</h3>
					<div className='max-h-120 overflow-y-auto flex flex-col gap-8'>
						{
							getScores.map((score =>
							<ScoreTable key={score.id} date={score.date} score={score.score} />
							))
						}
					</div>
				</div>
			)
		}
	</section>
  )
}

export default TypingComparition