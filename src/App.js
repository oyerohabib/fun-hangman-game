import React, { useState, useEffect, useCallback } from "react";
import Hangman from "../src/components/Hangman";
import Answer from "./components/Answer";
import Letters from "./components/Letters";
import Output from "./components/Output";
import Next from "./components/Next";
import Streak from "./components/Streak";
import dictionary from "./components/dictionary";

const App = () => {
  const [picked, setPicked] = useState([" "]);
  const [incorrectPicks, setIncorrectPicks] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [gameStatus, setGameStatus] = useState(0); // 0 - play, 1 - won, 2 - lost
  const [streak, setStreak] = useState(0);

  // Shuffle dictionary and set initial answer
  useEffect(() => {
    const shuffledList = [...dictionary].sort(() => Math.random() - 0.5);
    setAnswerList(shuffledList);
    const firstAnswer = shuffledList.pop();
    firstAnswer.word = firstAnswer.word.toUpperCase();
    setAnswer(firstAnswer);
  }, []);

  const addAlphas = useCallback(
    (alpha) => {
      if (gameStatus !== 0) return; // Ignore inputs if the game is over

      const newPicked = [...picked, alpha];
      setPicked(newPicked);

      // Check for word completion
      const revealedWord = answer.word.replace(
        new RegExp(`[^${newPicked.join("")}]`, "g"),
        "-"
      );

      if (!revealedWord.includes("-")) {
        setGameStatus(1); // Game won
        setStreak(streak + 1);
      } else if (!answer.word.includes(alpha)) {
        // Incorrect pick
        const newIncorrectPicks = incorrectPicks + 1;
        setIncorrectPicks(newIncorrectPicks);
        if (newIncorrectPicks === 6) {
          setGameStatus(2); // Game lost
          setStreak(0);
        }
      }
    },
    [picked, incorrectPicks, answer, streak, gameStatus]
  );

  const nextWord = useCallback(() => {
    if (answerList.length === 0) return; // No more words left

    const nextAnswer = answerList.pop();
    nextAnswer.word = nextAnswer.word.toUpperCase();
    setAnswer(nextAnswer);
    setPicked([" "]);
    setIncorrectPicks(0);
    setGameStatus(0);
    setAnswerList([...answerList]);
  }, [answerList]);

  return (
    <div className="container">
      <div className="title">Hangman Game</div>
      <div className="figureWrapper">
        <Hangman incorrectPicks={incorrectPicks} />
      </div>
      <div className="answerWrapper">
        <Output gameStatus={gameStatus} answer={answer?.word || ""} />
        <Answer answer={answer} pickedArray={picked} />
        <div className="info">
          (Word is related to computer science, mathematics, or web3)
        </div>
        <Letters
          pickedArray={picked}
          gameStatus={gameStatus}
          addAlphas={addAlphas}
        />
        <Streak streak={streak} />
        <Next
          gameStatus={gameStatus}
          answerList={answerList}
          nextWord={nextWord}
        />
      </div>
    </div>
  );
};

export default App;
