import React from 'react'
import TypingComparition from '../../organisms/TypingComparition/TypingComparition'
import { StringProjects } from '../../../utils/strings-projects/stringProjects'

const {
	MAIN_TITLE
} = StringProjects;

const TypingPage = () => {
  return (
	<section className='flex flex-col gap-8 w-full h-full items-center justify-center'>
		<h1 className='text-3xl'>{MAIN_TITLE}</h1>
		<TypingComparition />
	</section>
  )
}

export default TypingPage