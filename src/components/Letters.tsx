import React from "react";
import Letter from "./Letter";

interface LettersProps {
  gameStatus: number; // 0 - playing, 1 - won, 2 - lost
  pickedArray: string[]; // Array of letters already picked
  addAlphas: (alpha: string) => void; // Function to add a letter
}

const Letters: React.FC<LettersProps> = ({
  gameStatus,
  pickedArray,
  addAlphas,
}) => {
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
