import React from "react";

const RpsPlaying = ({
  youPicked,
  youWon,
  housePicked,
  showResult,
  result,
  playAgain,
}) => {
  return (
    <>
      <div className="rps-playing">
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
          <div className="rps-result">
            <h1>{result}</h1>
            <button onClick={playAgain}>Play Again</button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default RpsPlaying;
