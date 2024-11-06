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
    initializeGame(dictionary);
  }, []);

  const initializeGame = (dict) => {
    const shuffledList = [...dict].sort(() => Math.random() - 0.5);
    setAnswerList(shuffledList);
    const firstAnswer = shuffledList.pop();
    firstAnswer.word = firstAnswer.word.toUpperCase();
    setAnswer(firstAnswer);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const customDictionary = JSON.parse(e.target.result);
          if (
            Array.isArray(customDictionary) &&
            validateDictionary(customDictionary)
          ) {
            initializeGame(customDictionary);
            alert("Custom dictionary uploaded successfully!");
          } else {
            alert("Invalid file format. Please upload a valid JSON file.");
          }
        } catch (error) {
          alert("Error reading the file. Please ensure it is a valid JSON.");
        }
        event.target.value = "";
      };
      reader.readAsText(file);
    } else {
      event.target.value = "";
    }
  };

  const validateDictionary = (dict) => {
    return dict.every(
      (item) => typeof item.word === "string" && typeof item.hint === "string"
    );
  };

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

      {/* Upload Button UI */}
      <div className="upload-section">
        <label htmlFor="dictionary-upload" className="upload-label">
          Upload Custom Dictionary:
        </label>{" "}
        <input
          id="dictionary-upload"
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className="upload-input"
        />
        {/* Instruction and download link */}
        <div className="upload-tip">
          <p>
            Tip: Your file should be a JSON format with "word" and "hint"
            fields.{" "}
            <a
              href="data:application/json;charset=utf-8,%5B%7B%22word%22%3A%22React%22%2C%22hint%22%3A%22A%20JavaScript%20library%20for%20building%20user%20interfaces%22%7D%2C%7B%22word%22%3A%22Node%22%2C%22hint%22%3A%22JavaScript%20runtime%20environment%22%7D%5D"
              download="example-dictionary.json"
              style={{ color: "white", textDecoration: "underline" }}
            >
              Download example file
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
