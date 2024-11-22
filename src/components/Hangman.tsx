import React, { useState, useEffect } from "react";

interface HangmanProps {
  incorrectPicks: number;
  "data-testid"?: string;
}

// Define a type for the webpack context
interface WebpackContext {
  keys(): string[];
  (key: string): string;
  <T>(key: string): T;
}

const Hangman: React.FC<HangmanProps> = ({ incorrectPicks }) => {
  // Type the images state as HTMLImageElement array
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const importAll = async (
      context: WebpackContext
    ): Promise<HTMLImageElement[]> => {
      const keys = context.keys();
      const imagePromises = keys.map(async (key) => {
        const image = new Image();
        image.src = await context(key);
        return image;
      });
      return Promise.all(imagePromises);
    };

    const loadImages = async (): Promise<void> => {
      try {
        // Type assertion for webpack's require.context
        const context = require.context(
          "../images",
          false,
          /\.(png|jpe?g|svg)$/
        ) as WebpackContext;

        const loadedImages = await importAll(context);
        setImages(loadedImages);
      } catch (error) {
        console.error("Error loading images:", error);
      }
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
