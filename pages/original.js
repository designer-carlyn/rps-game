import React from "react";
import Image from "next/image";

/** Image **/
import logoScoreBoard from "../public/static/images/logo.svg";

export default function Original() {
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
        <div className="rps-original__picking"></div>
      </div>
    </main>
  );
}
