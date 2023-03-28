import React, { useState, useEffect, useContext } from "react";
import ScoreBoard from "@/components/score-board";
import { ScoreContext } from "@/context/rps-context";
import Image from "next/image";
import "animate.css";

import iconPaper from "../public/static/images/icon-paper.svg";
import iconScissors from "../public/static/images/icon-scissors.svg";
import iconRock from "../public/static/images/icon-rock.svg";

export default function Original() {
  const [score, setScore] = useContext(ScoreContext);
  const [youPicked, setYouPicked] = useState("");
  const [housePicked, setHousePicked] = useState("");
  const [playing, setPlaying] = useState(false);
  const [youWon, setYouWon] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");

  const chipElement = ["rock", "paper", "scissors"];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function chooseChip(event) {
    let name = event.target.name;
    setYouPicked(name);
    setPlaying(!playing);

    const housePicking = setInterval(() => {
      setHousePicked(chipElement[getRandomInt(0, 3)]);
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
  }

  useEffect(() => {
    if (result !== "") {
      finalResult();
    }

    if (result == "You Won") {
      setScore((score) => score + 1);
    }
  }, [result, youPicked, housePicked, youWon]);

  return (
    <main className="rps-original">
      <div className="container">
        <ScoreBoard></ScoreBoard>
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
    </main>
  );
}
