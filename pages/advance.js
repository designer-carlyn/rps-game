import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import "animate.css";
import ScoreBoard from "@/components/score-board";
import ScoreStatus from "@/components/score-status";
import RpsRules from "@/components/rules";
import RpsPlaying from "@/components/rps-playing";
import {
  ScoreContext,
  LifeContext,
  BestScoreContext,
} from "@/context/rps-context";
import { getRandomInt, chipElement } from "@/config.js";

import iconPaper from "../public/static/images/icon-paper.svg";
import iconScissors from "../public/static/images/icon-scissors.svg";
import iconRock from "../public/static/images/icon-rock.svg";
import iconLizard from "../public/static/images/icon-lizard.svg";
import iconSpock from "../public/static/images/icon-spock.svg";
import advanceRules from "../public/static/images/image-rules-bonus.svg";
import advanceLogo from "../public/static/images/logo-bonus.svg";

const Advance = () => {
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
      setHousePicked(chipElement[getRandomInt(0, 5)]);
    }, 75);

    setTimeout(() => {
      clearInterval(housePicking);
      setShowResult(!showResult);
      finalResult();
    }, 2000);
  }

  function finalResult() {
    if (youPicked === "scissors" && housePicked === "paper") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === "paper" && housePicked === "rock") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === "rock" && housePicked === "lizard") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === "lizard" && housePicked === "spock") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === "spock" && housePicked === "scissors") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === "scissors" && housePicked === "lizard") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === "lizard" && housePicked === "paper") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === "paper" && housePicked === "spock") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === "spock" && housePicked === "rock") {
      setResult("You Won");
      setYouWon(true);
    } else if (youPicked === "rock" && housePicked === "scissors") {
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
      setScore((score) => score + 2);
    }

    if (result == "You Lose") {
      setLife((life) => life - 1);
    }
  }, [result, youPicked, housePicked, youWon]);

  return (
    <main className="rps-advance">
      <div className="container">
        <div className="rps-advance__header">
          <ScoreBoard
            logoScoreBoard={advanceLogo}
            logoAlt="advance-logo"
          ></ScoreBoard>
          <ScoreStatus></ScoreStatus>
        </div>
        {!playing ? (
          <div className="rps-advance__picking">
            <button name="scissors" onClick={(e) => chooseChip(e)}>
              <span className="wrapper-chip scissors-chip">
                <span className="chip-image">
                  <Image src={iconScissors} alt="logo"></Image>
                </span>
              </span>
            </button>
            <button name="paper" onClick={(e) => chooseChip(e)}>
              <span className="wrapper-chip paper-chip">
                <span className="chip-image">
                  <Image src={iconPaper} alt="logo"></Image>
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
            <button name="lizard" onClick={(e) => chooseChip(e)}>
              <span className="wrapper-chip lizard-chip">
                <span className="chip-image">
                  <Image src={iconLizard} alt="logo"></Image>
                </span>
              </span>
            </button>
            <button name="spock" onClick={(e) => chooseChip(e)}>
              <span className="wrapper-chip spock-chip">
                <span className="chip-image">
                  <Image src={iconSpock} alt="logo"></Image>
                </span>
              </span>
            </button>
          </div>
        ) : null}
        {playing ? (
          <RpsPlaying
            youPicked={youPicked}
            youWon={youWon}
            housePicked={housePicked}
            showResult={showResult}
            result={result}
            playAgain={playAgain}
          ></RpsPlaying>
        ) : null}
      </div>
      <RpsRules imageRules={advanceRules} points="2 points"></RpsRules>
    </main>
  );
};

export default Advance;
