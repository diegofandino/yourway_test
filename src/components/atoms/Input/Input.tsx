import React from "react";
import { StringProjects } from "../../../utils/strings-projects/stringProjects";

const { INPUT_PLACEHOLDER } = StringProjects;

type InputProps = {
  value: string;
  onChangeEvent: (value: string) => void;
  onKeyDownEvent?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUpEvent?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input = ({ value, onChangeEvent, onKeyDownEvent, onKeyUpEvent, className }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeEvent(e.target.value);
  };

  return (
    <input
      data-testid="input"
      className={className}
      value={value}
      onKeyUp={onKeyUpEvent}
      onKeyDown={onKeyDownEvent}
      onChange={handleChange}
      type="text"
      placeholder={INPUT_PLACEHOLDER}
    />
  );
};

export default Input;
