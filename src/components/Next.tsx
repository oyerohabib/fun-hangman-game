import React, { useEffect } from "react";

interface NextProps {
  gameStatus: number; // 0 - playing, 1 - won, 2 - lost
  answerList: { word: string; hint: string }[]; // Array of answers
  nextWord: () => void; // Function to go to the next word
}

const Next: React.FC<NextProps> = ({ gameStatus, answerList, nextWord }) => {
  useEffect(() => {
    // Handler for keyboard events
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only process if game is over (won or lost) and there are words left
      if (gameStatus > 0 && answerList.length > 0) {
        // Check for Enter or Space key
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault(); // Prevent page scroll on space
          nextWord();

          // Add visual feedback to the next button
          const nextButton = document.querySelector(".nextButton");
          if (nextButton) {
            nextButton.classList.add("button-pressed");
            setTimeout(() => {
              nextButton.classList.remove("button-pressed");
            }, 200);
          }
        }
      }
    };

    // Add event listener when component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [gameStatus, answerList.length, nextWord]);

  // Render the "Next" button only if the game is over and there are words left
  if (gameStatus > 0 && answerList.length > 0) {
    return <div className="nextButton">Next</div>;
  }

  // Render an empty div otherwise
  return <div />;
};

export default Next;
