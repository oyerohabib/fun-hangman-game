import React from "react";

interface OutputProps {
  gameStatus: number; // 0 - playing, 1 - won, 2 - lost
  answer: string; // The answer word
}

const Output: React.FC<OutputProps> = ({ gameStatus, answer }) => {
  let message: string;

  // Determine the message based on gameStatus
  if (gameStatus === 0) {
    message = "The Game is on let's play";
  } else if (gameStatus === 1) {
    message = "YOU WIN!!";
  } else if (gameStatus === 2) {
    message = `YOU LOSE! The word was ${answer}`;
  } else {
    message = ""; // Fallback message (optional)
  }

  return <div className="output">{message}</div>;
};

export default Output;
