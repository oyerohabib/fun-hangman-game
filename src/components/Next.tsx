import React from "react";

interface NextProps {
  gameStatus: number; // 0 - playing, 1 - won, 2 - lost
  answerList: { word: string; hint: string }[]; // Array of answers
  nextWord: () => void; // Function to go to the next word
}

const Next: React.FC<NextProps> = ({ gameStatus, answerList, nextWord }) => {
  // Render the "Next" button only if the game is over and there are words left
  if (gameStatus > 0 && answerList.length > 0) {
    return (
      <div onClick={nextWord} className="nextButton">
        Next
      </div>
    );
  }

  // Render an empty div otherwise
  return <div />;
};

export default Next;
