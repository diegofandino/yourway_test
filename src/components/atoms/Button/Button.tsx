import React from 'react';

type ButtonProps = {
	label: string;
	type: 'button' | 'submit' | 'reset';
	className?: string;
   	onClickEvent?: () => void;
};

const Button = ({ label, type, className, onClickEvent }: ButtonProps) => {
  return (
	<button className={className} type={type} onClick={onClickEvent}>{label}</button>
  )
}

export default Button