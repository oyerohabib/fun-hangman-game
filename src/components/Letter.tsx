import React from "react";

interface LetterProps {
  alpha: string; // Represents the letter
  gameStatus: number; // 0 - playing, 1 - won, 2 - lost
  pickedArray: string[]; // Array of letters already picked
  addAlphas: (alpha: string) => void; // Function to add a letter
}

const Letter: React.FC<LetterProps> = ({
  alpha,
  gameStatus,
  pickedArray,
  addAlphas,
}) => {
  const handleClick = (): void => {
    if (gameStatus === 0 && !pickedArray.includes(alpha)) {
      addAlphas(alpha);
    }
  };

  // Determine if the letter should appear as picked
  const isPicked: boolean = pickedArray.includes(alpha) || gameStatus > 0;

  return (
    <li
      className={isPicked ? "picked" : ""}
      onClick={!isPicked ? handleClick : undefined}
      data-testid={`letter-${alpha}`}
    >
      {alpha}
    </li>
  );
};

export default Letter;
