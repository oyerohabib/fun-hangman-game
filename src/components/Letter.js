// Letter.jsx
import React from "react";

const Letter = (props) => {
  const handleClick = () => {
    if (props.gameStatus === 0 && !props.pickedArray.includes(props.alpha)) {
      props.addAlphas(props.alpha);
    }
  };

  if (props.pickedArray.indexOf(props.alpha) > -1 || props.gameStatus > 0) {
    return (
      <li className="picked" data-testid={`letter-${props.alpha}`}>
        {props.alpha}
      </li>
    );
  }

  return (
    <li onClick={handleClick} data-testid={`letter-${props.alpha}`}>
      {props.alpha}
    </li>
  );
};

export default Letter;
