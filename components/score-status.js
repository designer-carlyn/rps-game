import React, { useContext } from "react";
import Image from "next/image";
import { BestScoreContext, LifeContext } from "@/context/rps-context";

/** Image **/
import iconLife from "../public/static/images/heart.png";

function ScoreStatus() {
  const [bestScore, setBestScore] = useContext(BestScoreContext);
  const [life, setLife] = useContext(LifeContext);

  return (
    <div className="rps-status">
      <div className="status-item">
        <small>Best Score</small>
        <div className="item-best">{bestScore}</div>
      </div>
      <div className="status-item">
        <small>Your Life</small>
        <div className="item-life">
          {life == 3 ? (
            <>
              <Image src={iconLife} alt="icon-life"></Image>{" "}
              <Image src={iconLife} alt="icon-life"></Image>{" "}
              <Image src={iconLife} alt="icon-life"></Image>
            </>
          ) : life == 2 ? (
            <>
              <Image src={iconLife} alt="icon-life"></Image>{" "}
              <Image src={iconLife} alt="icon-life"></Image>
            </>
          ) : life == 1 ? (
            <>
              <Image src={iconLife} alt="icon-life"></Image>
            </>
          ) : (
            <>
              <Image src={iconLife} alt="icon-life"></Image>{" "}
              <Image src={iconLife} alt="icon-life"></Image>{" "}
              <Image src={iconLife} alt="icon-life"></Image>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScoreStatus;
