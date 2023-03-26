import React from "react";
import { render, screen } from "@testing-library/react";
import Streak from "../components/Streak";

describe("Streak component", () => {
  it("renders the streak value", () => {
    const defaultProps = {
      streak: 5, // Provide a sample streak value
    };
    render(<Streak {...defaultProps} />);
    const streakElement = screen.getByText("Streak: 5");

    expect(streakElement).toBeInTheDocument();
  });

  it("renders the streak value when streak is 0", () => {
    const defaultProps = {
      streak: 0,
    };
    render(<Streak {...defaultProps} />);
    const streakElement = screen.getByText("Streak: 0");

    expect(streakElement).toBeInTheDocument();
  });

  it("renders the streak value when streak is negative", () => {
    const defaultProps = {
      streak: -3,
    };
    render(<Streak {...defaultProps} />);
    const streakElement = screen.getByText("Streak: -3");

    expect(streakElement).toBeInTheDocument();
  });
});
