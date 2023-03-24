// Letters.test.js
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Letters from "../components/Letters";

describe("Letters component", () => {
  const defaultProps = {
    gameStatus: 0,
    pickedArray: [],
    addAlphas: jest.fn(),
  };

  it("renders all letters", () => {
    render(<Letters {...defaultProps} />);
    const letterElements = screen.getAllByTestId((id) =>
      id.startsWith("letter-")
    );

    // Assuming there are 26 letters in the alphabet
    expect(letterElements).toHaveLength(26);
  });

  it("calls addAlphas function when a letter is clicked", () => {
    render(<Letters {...defaultProps} />);
    const letterElement = screen.getByTestId("letter-A");
    fireEvent.click(letterElement);

    expect(defaultProps.addAlphas).toHaveBeenCalledWith("A");
  });
});
