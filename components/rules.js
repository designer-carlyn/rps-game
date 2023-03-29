import React, { useState } from "react";
import Image from "next/image";

import iconClose from "../public/static/images/icon-close.svg";

export const RpsRules = ({ imageRules, points }) => {
  const [showRules, setShowResult] = useState(false);

  function onClickShowRules() {
    setShowResult(!showRules);
  }

  function onClickCloseRules() {
    setShowResult(!showRules);
  }

  return (
    <div className="rules-wrapper">
      <div className={`rules-wrapper__modal ${showRules ? "active" : ""}`}>
        <div className="modal-header">
          <div className="title">
            <h1>Rules</h1>
            <small>{points} per win</small>
          </div>
          <button onClick={onClickCloseRules}>
            <Image src={iconClose} alt="original-rules" />
          </button>
        </div>
        <div className="modal-image">
          <Image src={imageRules} alt="rps-rules" />
        </div>
      </div>
      <div
        className={`overlay ${showRules ? "active" : ""}`}
        onClick={onClickCloseRules}
        role="presentation"
      ></div>
      <button onClick={onClickShowRules}>Rules</button>
    </div>
  );
};

export default RpsRules;
