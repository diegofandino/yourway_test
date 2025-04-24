import React from "react";
import { StringProjects } from "../../../utils/strings-projects/stringProjects";

const { INPUT_PLACEHOLDER } = StringProjects;

type InputProps = {
  value: string;
  onChangeEvent: (value: string) => void;
  onKeyDownEvent?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input = ({ value, onChangeEvent, onKeyDownEvent, className }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeEvent(e.target.value);
  };

  return (
    <input
      className={className}
      value={value}
      onKeyDown={onKeyDownEvent}
      onChange={handleChange}
      type="text"
      placeholder={INPUT_PLACEHOLDER}
    />
  );
};

export default Input;
