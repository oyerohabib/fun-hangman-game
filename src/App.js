import React, { Component } from "react";
import Hangman from "./components/hangman";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">Hangman Game</div>
        <div className="figureWrapper">
          <Hangman incorrectPicks={6} />
        </div>
        <div className="answerWrapper"></div>
      </div>
    );
  }
}

export default App;
