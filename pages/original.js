import React, { useState, useEffect, useContext } from "react";
import ScoreBoard from "@/components/score-board";
import ScoreStatus from "@/components/score-status";
import RpsRules from "@/components/rules";
import {
  ScoreContext,
  LifeContext,
  BestScoreContext,
} from "@/context/rps-context";
import { getRandomInt, originalChipElement } from "@/config.js";
import Image from "next/image";
import "animate.css";

import iconPaper from "../public/static/images/icon-paper.svg";
import iconScissors from "../public/static/images/icon-scissors.svg";
import iconRock from "../public/static/images/icon-rock.svg";
import originalRules from "../public/static/images/image-rules.svg";

export default function Original() {
  const [score, setScore] = useContext(ScoreContext);
  const [life, setLife] = useContext(LifeContext);
  const [bestScore, setBestScore] = useContext(BestScoreContext);
  const [youPicked, setYouPicked] = useState("");
  const [housePicked, setHousePicked] = useState("");
  const [playing, setPlaying] = useState(false);
  const [youWon, setYouWon] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");

  function chooseChip(event) {
    let name = event.target.name;
    setYouPicked(name);
    setPlaying(!playing);

    const housePicking = setInterval(() => {
      setHousePicked(originalChipElement[getRandomInt(0, 3)]);
    }, 75);

    setTimeout(() => {
      clearInterval(housePicking);
      setShowResult(!showResult);
      finalResult();
    }, 2000);
  }

  function finalResult() {
    if (youPicked === "rock" && housePicked === "scissors") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === "scissors" && housePicked === "paper") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === "paper" && housePicked === "rock") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === housePicked) {
      setResult("Draw");
    } else {
      setResult("You Lose");
      setYouWon(false);
    }
  }

  function playAgain() {
    setShowResult(!showResult);
    setPlaying(!playing);
    setYouPicked("");
    setHousePicked("");
    setResult("");
    setYouWon("");

    if (life === 0) {
      setScore(0);
      setLife(3);

      if (score > bestScore) {
        alert("Your new best score is " + score);
        setBestScore(score);
      } else {
        alert("Your score is " + score);
      }
    }
  }

  useEffect(() => {
    if (result !== "") {
      finalResult();
    }

    if (result == "You Won") {
      setScore((score) => score + 1);
    }

    if (result == "You Lose") {
      setLife((life) => life - 1);
    }
  }, [result, youPicked, housePicked, youWon]);

  return (
    <main className="rps-original">
      <div className="container">
        <div className="rps-original__header">
          <ScoreBoard></ScoreBoard>
          <ScoreStatus></ScoreStatus>
        </div>
        {!playing ? (
          <>
            <div className="rps-original__picking">
              <button name="paper" onClick={(e) => chooseChip(e)}>
                <span className="wrapper-chip paper-chip">
                  <span className="chip-image">
                    <Image src={iconPaper} alt="logo"></Image>
                  </span>
                </span>
              </button>
              <button name="scissors" onClick={(e) => chooseChip(e)}>
                <span className="wrapper-chip scissors-chip">
                  <span className="chip-image">
                    <Image src={iconScissors} alt="logo"></Image>
                  </span>
                </span>
              </button>
              <button name="rock" onClick={(e) => chooseChip(e)}>
                <span className="wrapper-chip rock-chip">
                  <span className="chip-image">
                    <Image src={iconRock} alt="logo"></Image>
                  </span>
                </span>
              </button>
            </div>
          </>
        ) : null}
        {playing ? (
          <>
            <div className="rps-original__playing">
              <div className="playing-wrapper">
                <h1>You Picked</h1>
                <div
                  className={`wrapper-chip ${youPicked}-chip wrapper-chip--lg ${
                    youWon === true ? ` winner-${youPicked}-chip` : ``
                  }`}
                >
                  <div className="chip-image">
                    <img
                      src={`/static/images/icon-${youPicked}.svg`}
                      alt={`icon-${youPicked}`}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="playing-wrapper">
                <h1>The House Picked</h1>
                <div
                  className={`wrapper-chip ${housePicked}-chip wrapper-chip--lg ${housePicked}-chip wrapper-chip--lg animate__animated animate__flash ${
                    youWon === false ? `winner-${housePicked}-chip` : ``
                  }`}
                >
                  <div className="chip-image">
                    <img
                      src={`/static/images/icon-${housePicked}.svg`}
                      alt={`icon-${housePicked}`}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            {showResult ? (
              <>
                <div className="rps-original__result">
                  <h1>{result}</h1>
                  <button onClick={playAgain}>Play Again</button>
                </div>
              </>
            ) : null}
          </>
        ) : null}
      </div>
      <RpsRules imageRules={originalRules}></RpsRules>
    </main>
  );
}
