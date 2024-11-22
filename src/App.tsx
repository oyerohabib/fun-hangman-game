import React, { useState, useEffect, useCallback } from "react";
import Hangman from "./components/Hangman";
import Answer from "./components/Answer";
import Letters from "./components/Letters";
import Output from "./components/Output";
import Next from "./components/Next";
import Streak from "./components/Streak";
import dictionary from "./components/dictionary";

interface DictionaryItem {
  word: string;
  hint: string;
}

const App: React.FC = () => {
  const [picked, setPicked] = useState<string[]>([" "]);
  const [incorrectPicks, setIncorrectPicks] = useState<number>(0);
  const [answerList, setAnswerList] = useState<DictionaryItem[]>([]);
  const [answer, setAnswer] = useState<DictionaryItem | null>(null);
  const [gameStatus, setGameStatus] = useState<0 | 1 | 2>(0); // 0 - play, 1 - won, 2 - lost
  const [streak, setStreak] = useState<number>(0);

  // Shuffle dictionary and set initial answer
  useEffect(() => {
    initializeGame(dictionary);
  }, []);

  const initializeGame = (dict: DictionaryItem[]): void => {
    // Reset game state
    setPicked([" "]);
    setIncorrectPicks(0);
    setGameStatus(0);
    setStreak(0);

    // Shuffle the dictionary
    const shuffledList = [...dict].sort(() => Math.random() - 0.5);

    // Remove the first word for the current answer
    const firstAnswer = shuffledList.shift(); // Using shift() instead of pop() for consistency
    if (firstAnswer) {
      firstAnswer.word = firstAnswer.word.toUpperCase();
      // Update both the answer and answer list atomically
      setAnswer(firstAnswer);
      setAnswerList(shuffledList);
    }
  };

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        try {
          const customDictionary = JSON.parse(e.target?.result as string);
          // Validate the uploaded data
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
        // Clear the input value to allow reupload
        event.target.value = "";
      };
      reader.readAsText(file);
    } else {
      // Clear the input in case no file was selected
      event.target.value = "";
    }
  };

  const validateDictionary = (dict: any[]): dict is DictionaryItem[] => {
    return dict.every(
      (item) => typeof item.word === "string" && typeof item.hint === "string"
    );
  };

  const addAlphas = useCallback(
    (alpha: string): void => {
      if (gameStatus !== 0 || !answer) return; // Ignore inputs if the game is over

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

  const nextWord = useCallback((): void => {
    if (answerList.length === 0) {
      alert("No more words in the dictionary, YOU WIN!!!");
      return;
    }

    const nextAnswer = answerList.shift();
    if (nextAnswer) {
      nextAnswer.word = nextAnswer.word.toUpperCase();
      setAnswer(nextAnswer);
      setPicked([" "]);
      setIncorrectPicks(0);
      setGameStatus(0);
      setAnswerList([...answerList]);
    }
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
