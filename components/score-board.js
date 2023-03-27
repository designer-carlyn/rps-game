import React, { useContext } from "react";
import Image from "next/image";
import { ScoreContext } from "@/context/rps-context";

/** Image **/
import logoScoreBoard from "../public/static/images/logo.svg";

function ScoreBoard() {
  const [score, setScore] = useContext(ScoreContext);

  return (
    <div className="rps-scoreboard">
      <div className="scoreboard-logo">
        <Image src={logoScoreBoard} alt="logo-original"></Image>
      </div>
      <div className="scoreboard-points">
        <small>SCORE</small>
        <h1>{score}</h1>
      </div>
    </div>
  );
}

export default ScoreBoard;
