import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../Input";

describe("Input component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render with data", () => {
    render(<Input onChangeEvent={() => {}} value="This is an input" />);
    expect(screen.getByDisplayValue("This is an input")).toBeInTheDocument();
  });

  test("should render with class name", () => {
    render(
      <Input
        onChangeEvent={() => {}}
        value="This is an input"
        className="text-red-500"
      />
    );
    expect(screen.getByDisplayValue("This is an input")).toHaveClass(
      "text-red-500"
    );
  });

  test("should call onChangeEvent when input value changes", () => {
    const handleChange = jest.fn();
    render(<Input onChangeEvent={handleChange} value="This is an input" />);
    const input = screen.getByDisplayValue("This is an input");
    const newValue = "New input value";
    fireEvent.change(input, { target: { value: newValue } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
