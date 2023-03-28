import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [score, setScore] = useState(0);
  const [youPicked, setYouPicked] = useState("");
  const [housePicked, setHousePicked] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [counter, setCounter] = useState("");
  const [life, setLife] = useState(3);

  const elementChips = ["rock", "scissor", "paper"];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function chooseChips(event) {
    let name = event.target.name;
    setYouPicked(name);
    setShowResult(!showResult);

    const housePicking = setInterval(() => {
      setHousePicked(elementChips[getRandomInt(0, 3)]);
    }, 75);

    setTimeout(() => {
      clearInterval(housePicking);
      finalResult();
    }, 2000);
  }

  function finalResult() {
    if (youPicked === "rock" && housePicked === "scissor") {
      setResult("You Won");
    } else if (youPicked === "scissor" && housePicked === "paper") {
      setResult("You Won");
    } else if (youPicked === "paper" && housePicked === "rock") {
      setResult("You Won");
    } else if (youPicked === housePicked) {
      setResult("Draw");
    } else {
      setResult("You Lose");
    }
  }

  function playAgain() {
    setShowResult(!showResult);
    setYouPicked("");
    setHousePicked("");
    setResult("");
  }

  useEffect(() => {
    if (result !== "") {
      finalResult();
    }

    if (result === "You Won") {
      setScore((score) => score + 1);
    } else if (result === "You Lose") {
      setLife((life) => life - 1);
    }

    if (life === 0) {
      alert("Your best score is " + score + " point(s)");
      setScore(0);
      setLife(3);
    }
  }, [result, youPicked, housePicked]);

  return (
    <>
      <main className="rps-game">
        {/* <div className="score">
          You have {life} {life > 1 ? "lives" : "life"} to play
        </div>
        <div className="score">
          Score: {score} {score > 1 ? "points" : "point"}
        </div>
        {!showResult ? (
          <div className="set-chips">
            <button name="rock" onClick={(e) => chooseChips(e)}>
              Rock
            </button>
            <button name="paper" onClick={(e) => chooseChips(e)}>
              Paper
            </button>
            <button name="scissor" onClick={(e) => chooseChips(e)}>
              Scissor
            </button>
          </div>
        ) : null} */}
        {/* {showResult ? (
          <div className="result">
            <h1>You Picked: {youPicked}</h1>
            <h1>The House Picked: {housePicked}</h1>
            <h1>{result}</h1>
            <button onClick={playAgain}>Play Again</button>
          </div>
        ) : null} */}
        <h1>Choose mode you want to play.</h1>
        <div className="rps-game__button">
          <Link href="/original">Original Mode</Link>
          <Link href="/original">Advance Mode</Link>
        </div>
      </main>
    </>
  );
}
