import React, { Component } from "react";

class Hangman extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const images = await this.importAll(
      require.context("../images", false, /\.(png|jpe?g|svg)$/)
    );
    this.setState({ images });
  }

  importAll = async (context) => {
    const keys = context.keys();
    return Promise.all(
      keys.map(async (key) => {
        const image = new Image();
        image.src = await context(key);
        return image;
      })
    );
  };

  showHangman() {
    const { incorrectPicks } = this.props;
    const output = this.state.images.slice(0, incorrectPicks + 1);
    return output.map((image, index) => (
      <img key={index} alt="" src={image.src} />
    ));
  }

  render() {
    return (
      <div className="hangman" data-testid="hangman">
        {this.showHangman()}
      </div>
    );
  }
}

export default Hangman;
