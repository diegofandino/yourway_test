import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button testing', () => {
	test('should render with data', () => {
		render(<Button label='This is a button' type='button' />)
		expect(screen.getByText('This is a button')).toBeInTheDocument();
	})

	test('should use on click called', () => {
		const handleClick = jest.fn();
		render(<Button label='This is a button' type='button' onClickEvent={handleClick} />)
		const button = screen.getByText('This is a button');
		button.click();
		expect(handleClick).toHaveBeenCalledTimes(1);
	})
	
	
});
