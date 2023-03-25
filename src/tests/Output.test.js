import React from "react";
import { render, screen } from "@testing-library/react";
import Output from "../components/Output";

describe("Output component", () => {
  it("renders the initial message when gameStatus is 0", () => {
    const defaultProps = {
      gameStatus: 0,
      answer: "SampleWord",
    };
    render(<Output {...defaultProps} />);
    const outputElement = screen.getByText("The Game is on let's play");

    expect(outputElement).toBeInTheDocument();
  });

  it("renders the winning message when gameStatus is 1", () => {
    const defaultProps = {
      gameStatus: 1,
      answer: "SampleWord",
    };
    render(<Output {...defaultProps} />);
    const outputElement = screen.getByText("YOU WIN!!");

    expect(outputElement).toBeInTheDocument();
  });

  it("renders the losing message with the correct word when gameStatus is 2", () => {
    const defaultProps = {
      gameStatus: 2,
      answer: "SampleWord",
    };
    render(<Output {...defaultProps} />);
    const outputElement = screen.getByText("YOU LOSE! The word was SampleWord");

    expect(outputElement).toBeInTheDocument();
  });
});
