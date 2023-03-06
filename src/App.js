import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">Hangman Game</div>
        <div className="figureWrapper"></div>
        <div className="answerWrapper"></div>
      </div>
    );
  }
}

export default App;
