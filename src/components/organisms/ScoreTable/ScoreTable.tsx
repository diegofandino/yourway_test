import React from 'react'


type ScoreTableProps = {
	date: string;
	score: number;
}

const ScoreTable = ({ date, score }: ScoreTableProps) => {
  return (
	<div className='grid p-5 grid-cols-1 md:grid-cols-2 gap-4 border-2 border-gray-300 rounded-lg shadow-lg'>
		<div className='flex flex-col items-center justify-center'>
			<p className='text-2xl font-bold'>Date</p>
			<p className='text-4xl font-bold'>{date}</p>
		</div>
		<div className='flex flex-col items-center justify-center'>
			<p className='text-2xl font-bold'>Score</p>
			<p className='text-4xl font-bold'>{score}</p>
		</div>
	</div>
  )
}

export default ScoreTable