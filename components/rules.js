import React, { useState } from "react";
import Image from "next/image";

import originalRules from "../public/static/images/image-rules.svg";
import iconClose from "../public/static/images/icon-close.svg";

export const OriginalRules = () => {
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
          <h1>Rules</h1>
          <button onClick={onClickCloseRules}>
            <Image src={iconClose} alt="original-rules" />
          </button>
        </div>
        <div className="modal-image">
          <Image src={originalRules} alt="original-rules" />
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

export const AdvanceRules = () => {
  return (
    <div>
      <h1>THIS IS THE ADVANCE RULES</h1>
    </div>
  );
};
