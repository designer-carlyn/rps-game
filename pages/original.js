import React from "react";
import Image from "next/image";
import "animate.css";

/** Image **/
import logoScoreBoard from "../public/static/images/logo.svg";
import iconPaper from "../public/static/images/icon-paper.svg";
import iconScissor from "../public/static/images/icon-scissors.svg";
import iconRock from "../public/static/images/icon-rock.svg";

export default function Original() {
  const chipElement = ["rock", "paper", "scissor"];

  function chooseChip(event) {
    let name = event.target.name;
    console.log(name);
  }

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
        <div className="rps-original__picking">
          <div className="picking-chip paper-chip">
            <button name="paper" onClick={(e) => chooseChip(e)}></button>
            <div className="chip-wrapper">
              <Image src={iconPaper} alt="logo"></Image>
            </div>
          </div>
          <div className="picking-chip scissor-chip">
            <button name="scissor" onClick={(e) => chooseChip(e)}></button>
            <div className="chip-wrapper">
              <Image src={iconScissor} alt="logo"></Image>
            </div>
          </div>
          <div className="picking-chip rock-chip">
            <button name="rock" onClick={(e) => chooseChip(e)}></button>
            <div className="chip-wrapper">
              <Image src={iconRock} alt="logo"></Image>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
