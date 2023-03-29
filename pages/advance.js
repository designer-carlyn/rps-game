import React, { useContext } from "react";
import Image from "next/image";
import "animate.css";
import ScoreBoard from "@/components/score-board";
import ScoreStatus from "@/components/score-status";
import RpsRules from "@/components/rules";
import {
  ScoreContext,
  LifeContext,
  BestScoreContext,
} from "@/context/rps-context";
import { getRandomInt, originalChipElement } from "@/config.js";

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

  function chooseChip(event) {
    let name = event.target.name;
    console.log(name);
  }

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
      </div>
      <RpsRules imageRules={advanceRules}></RpsRules>
    </main>
  );
};

export default Advance;
