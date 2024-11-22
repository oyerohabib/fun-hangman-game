import React from "react";

interface StreakProps {
  streak: number; // The current streak count
}

const Streak: React.FC<StreakProps> = ({ streak }) => {
  return <div className="streak">Streak: {streak}</div>;
};

export default Streak;
