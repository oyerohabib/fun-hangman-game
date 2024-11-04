import React from "react";

const Output = ({ gameStatus, answer }) => {
  let message;

  // Determine the message based on gameStatus
  if (gameStatus === 0) message = "The Game is on let's play";
  else if (gameStatus === 1) message = "YOU WIN!!";
  else if (gameStatus === 2) message = `YOU LOSE! The word was ${answer}`;

  return <div className="output">{message}</div>;
};

export default Output;
