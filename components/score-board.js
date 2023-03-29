import React, { useContext } from "react";
import Image from "next/image";
import { ScoreContext } from "@/context/rps-context";

function ScoreBoard({ logoScoreBoard, logoAlt }) {
  const [score, setScore] = useContext(ScoreContext);

  return (
    <div className="rps-scoreboard">
      <div className="scoreboard-logo">
        <Image src={logoScoreBoard} alt={logoAlt}></Image>
      </div>
      <div className="scoreboard-points">
        <small>SCORE</small>
        <h1>{score}</h1>
      </div>
    </div>
  );
}

export default ScoreBoard;
