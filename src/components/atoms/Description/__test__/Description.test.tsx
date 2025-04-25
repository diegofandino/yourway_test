import React from 'react';
import { render, screen} from '@testing-library/react';
import Description from '../Description';

describe('description component', () => {
	test('should render with data', () => {
		render(<Description className='text-red-500'>This is a description</Description>)
		expect(screen.getByText('This is a description')).toBeInTheDocument();
	})

	test('should render with class name', () => {
		render(<Description className='text-red-500'>This is a description</Description>)
		expect(screen.getByText('This is a description')).toHaveClass('text-red-500');
	})
})
