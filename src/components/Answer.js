import React from "react";

const Answer = ({ answer, pickedArray }) => {
  if (!answer) {
    // If `answer` is null or undefined, render nothing or a fallback UI
    return null;
  }
  const { word, hint } = answer;

  // Construct a regex to replace all characters not in the picked array
  const guess = pickedArray.join("");
  const regex = new RegExp(`[^${guess}]`, "g");
  const maskedWord = word.replace(regex, "_");

  return (
    <div>
      <div className="answer-box" data-testid="answer-box">
        {maskedWord}
      </div>
      <div className="hint">{hint}</div>
    </div>
  );
};

export default Answer;
