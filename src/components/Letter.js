import React from "react";

const Letter = ({ alpha, gameStatus, pickedArray, addAlphas }) => {
  const handleClick = () => {
    if (gameStatus === 0 && !pickedArray.includes(alpha)) {
      addAlphas(alpha);
    }
  };

  // Determine if the letter should appear as picked
  const isPicked = pickedArray.includes(alpha) || gameStatus > 0;

  return (
    <li
      className={isPicked ? "picked" : ""}
      onClick={!isPicked ? handleClick : null}
      data-testid={`letter-${alpha}`}
    >
      {alpha}
    </li>
  );
};

export default Letter;
