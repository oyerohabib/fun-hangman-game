/* eslint-env jest */
import React from "react";
import { render, screen } from "@testing-library/react";
import Answer from "../components/Answer";

describe("Answer component", () => {
  test("renders Answer component with underscores for each character in the word", () => {
    const answer = { word: "React", hint: "JavaScript library" };
    const pickedArray = [];

    render(<Answer answer={answer} pickedArray={pickedArray} />);

    const underscoreElement = screen.getByText(/_____/);
    expect(underscoreElement).toBeInTheDocument();
  });

  test("renders Answer component with correct placeholders for picked letters", () => {
    const answer = { word: "React", hint: "JavaScript library" };
    const pickedArray = ["R", "e", "a"];

    render(<Answer answer={answer} pickedArray={pickedArray} />);

    // Use querySelector to target the specific element with the "answer-box" class
    const answerElement = screen.getByTestId("answer-box");

    expect(answerElement.textContent).toMatch(/Rea__/);
  });

  test("renders hint correctly", () => {
    const answer = { word: "React", hint: "JavaScript library" };
    const pickedArray = [];

    render(<Answer answer={answer} pickedArray={pickedArray} />);

    const hintElement = screen.getByText(/JavaScript library/);
    expect(hintElement).toBeInTheDocument();
  });
});
