import React from "react";

const Next = ({ gameStatus, answerList, nextWord }) => {
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
