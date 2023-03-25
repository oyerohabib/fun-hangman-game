import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Next from "../components/Next";

describe("Next component", () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      gameStatus: 0,
      answerList: ["Word1", "Word2"],
      nextWord: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks(); // Reset the mock function after each test
  });

  it("renders nothing if gameStatus is 0 or answerList is empty", () => {
    render(<Next {...defaultProps} />);
    const nextButton = screen.queryByText("Next");

    expect(nextButton).not.toBeInTheDocument();
  });

  it('renders "Next" button and calls nextWord function when clicked if gameStatus is greater than 0 and answerList is not empty', () => {
    const propsWithGameStatus = { ...defaultProps, gameStatus: 1 };
    render(<Next {...propsWithGameStatus} />);
    const nextButton = screen.getByText("Next");

    fireEvent.click(nextButton);

    expect(nextButton).toBeInTheDocument();
    expect(defaultProps.nextWord).toHaveBeenCalledTimes(1);
  });

  it("does not call nextWord function if gameStatus is 0", () => {
    render(<Next {...defaultProps} />);
    const nextButton = screen.queryByText("Next");

    if (nextButton) {
      fireEvent.click(nextButton);
    }

    expect(defaultProps.nextWord).not.toHaveBeenCalled();
  });

  it("does not call nextWord function if answerList is empty", () => {
    const propsWithEmptyList = { ...defaultProps, answerList: [] };
    render(<Next {...propsWithEmptyList} />);
    const nextButton = screen.queryByText("Next");

    if (nextButton) {
      fireEvent.click(nextButton);
    }

    expect(defaultProps.nextWord).not.toHaveBeenCalled();
  });
});
