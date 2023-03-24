import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Letter from "../components/Letter";

describe("Letter component", () => {
  it("renders Letter component with correct alpha when not picked and gameStatus is 0", () => {
    const addAlphasMock = jest.fn();
    render(
      <Letter
        alpha="A"
        pickedArray={[]}
        gameStatus={0}
        addAlphas={addAlphasMock}
      />
    );
    const letterElement = screen.getByText("A");

    expect(letterElement).toBeInTheDocument();
    fireEvent.click(letterElement);
    expect(addAlphasMock).toHaveBeenCalledWith("A");
  });

  it('renders Letter component with "picked" class when alpha is in pickedArray', () => {
    render(
      <Letter
        alpha="B"
        pickedArray={["B"]}
        gameStatus={0}
        addAlphas={() => {}}
      />
    );
    const letterElement = screen.getByText("B");

    expect(letterElement).toHaveClass("picked");
  });

  it('renders Letter component with "picked" class when gameStatus is greater than 0', () => {
    render(
      <Letter alpha="C" pickedArray={[]} gameStatus={1} addAlphas={() => {}} />
    );
    const letterElement = screen.getByText("C");

    expect(letterElement).toHaveClass("picked");
  });

  it("does not call addAlphas function when clicked if alpha is in pickedArray", () => {
    const addAlphasMock = jest.fn();
    render(
      <Letter
        alpha="D"
        pickedArray={["D"]}
        gameStatus={0}
        addAlphas={addAlphasMock}
      />
    );
    const letterElement = screen.getByText("D");

    fireEvent.click(letterElement);
    expect(addAlphasMock).not.toHaveBeenCalled();
  });

  it("does not call addAlphas function when clicked if gameStatus is greater than 0", () => {
    const addAlphasMock = jest.fn();
    render(
      <Letter
        alpha="E"
        pickedArray={[]}
        gameStatus={1}
        addAlphas={addAlphasMock}
      />
    );
    const letterElement = screen.getByText("E");

    fireEvent.click(letterElement);
    expect(addAlphasMock).not.toHaveBeenCalled();
  });
});
