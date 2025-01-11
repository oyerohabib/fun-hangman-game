import React, { useEffect } from "react";
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

  useEffect(() => {
    // Handler for keyboard events
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only process if game is still active
      if (gameStatus !== 0) return;

      // Get the pressed key and convert to uppercase
      const pressedKey = event.key.toUpperCase();

      // Check if the pressed key is a letter and hasn't been picked yet
      if (
        characters.includes(pressedKey) &&
        !pickedArray.includes(pressedKey)
      ) {
        addAlphas(pressedKey);

        // Find and highlight the corresponding on-screen button
        const letterElement = document.querySelector(
          `[data-testid="letter-${pressedKey}"]`
        );
        if (letterElement) {
          // Add a temporary highlight class
          letterElement.classList.add("keyboard-pressed");
          // Remove the highlight after a short delay
          setTimeout(() => {
            letterElement.classList.remove("keyboard-pressed");
          }, 200);
        }
      }
    };

    // Add event listener when component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [gameStatus, pickedArray, addAlphas, characters]);

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
