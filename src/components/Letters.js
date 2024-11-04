import React from "react";
import Letter from "./Letter";

const Letters = ({ gameStatus, pickedArray, addAlphas }) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charArray = characters.split("");

  return (
    <div className="letters">
      <ul>
        {charArray.map((character, i) => (
          <Letter
            key={i}
            alpha={character}
            gameStatus={gameStatus}
            pickedArray={pickedArray}
            addAlphas={addAlphas}
          />
        ))}
      </ul>
    </div>
  );
};

export default Letters;
