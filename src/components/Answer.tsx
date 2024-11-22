import React from "react";

// Define interface for the answer object
interface AnswerItem {
  word: string;
  hint: string;
}

// Define props interface for the component
interface AnswerProps {
  answer: AnswerItem | null;
  pickedArray: string[];
}

const Answer: React.FC<AnswerProps> = ({ answer, pickedArray }) => {
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
