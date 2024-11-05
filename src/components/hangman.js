import React, { useState, useEffect } from "react";

const Hangman = ({ incorrectPicks }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importAll = async (context) => {
      const keys = context.keys();
      const imagePromises = keys.map(async (key) => {
        const image = new Image();
        image.src = await context(key);
        return image;
      });
      return Promise.all(imagePromises);
    };

    const loadImages = async () => {
      const loadedImages = await importAll(
        require.context("../images", false, /\.(png|jpe?g|svg)$/)
      );
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <div className="hangman" data-testid="hangman">
      {images.slice(0, incorrectPicks + 1).map((image, index) => (
        <img key={index} alt="" src={image.src} />
      ))}
    </div>
  );
};

export default Hangman;
