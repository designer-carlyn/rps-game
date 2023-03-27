import React, { useState, useEffect } from "react";
import Image from "next/image";
import "animate.css";

/** Image **/
import logoScoreBoard from "../public/static/images/logo.svg";
import iconPaper from "../public/static/images/icon-paper.svg";
import iconScissors from "../public/static/images/icon-scissors.svg";
import iconRock from "../public/static/images/icon-rock.svg";

export default function Original() {
  const [score, setScore] = useState(0);
  const [youPicked, setYouPicked] = useState("scissors");
  const [housePicked, setHousePicked] = useState("paper");
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
  }, [result, youPicked, housePicked, youWon]);

  return (
    <main className="rps-original">
      <div className="container">
        <div className="rps-original__scoreboard">
          <div className="scoreboard-logo">
            <Image src={logoScoreBoard} alt="logo-original"></Image>
          </div>
          <div className="scoreboard-points">
            <small>SCORE</small>
            <h1>12</h1>
          </div>
        </div>
        {!playing ? (
          <>
            <div className="rps-original__picking">
              <div className="wrapper-chip paper-chip">
                <button name="paper" onClick={(e) => chooseChip(e)}></button>
                <div className="chip-image">
                  <Image src={iconPaper} alt="logo"></Image>
                </div>
              </div>
              <div className="wrapper-chip scissors-chip">
                <button name="scissors" onClick={(e) => chooseChip(e)}></button>
                <div className="chip-image">
                  <Image src={iconScissors} alt="logo"></Image>
                </div>
              </div>
              <div className="wrapper-chip rock-chip">
                <button name="rock" onClick={(e) => chooseChip(e)}></button>
                <div className="chip-image">
                  <Image src={iconRock} alt="logo"></Image>
                </div>
              </div>
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
