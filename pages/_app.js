import "@fontsource/barlow-semi-condensed/600.css";
import "@fontsource/barlow-semi-condensed/700.css";
import "@/styles/helpers/variables.scss";
import "@/styles/layout/index.scss";
import "@/styles/pages/home.scss";
import "@/styles/pages/original.scss";
import "@/styles/components/chip.scss";
import "@/styles/components/score-board.scss";
import "@/styles/components/score-status.scss";
import "@/styles/components/rules.scss";
import "@/styles/components/rps-playing.scss";
import {
  ScoreContext,
  BestScoreContext,
  LifeContext,
} from "@/context/rps-context";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [life, setLife] = useState(0);

  useEffect(() => {
    const score = JSON.parse(localStorage.getItem("score"));
    const bestScore = JSON.parse(localStorage.getItem("bestScore"));
    const life = JSON.parse(localStorage.getItem("life"));

    if (score) {
      setScore(score);
    }

    if (bestScore) {
      setBestScore(bestScore);
    }

    if (life) {
      setLife(life);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score);
    localStorage.setItem("bestScore", bestScore);
    localStorage.setItem("life", life);
  }, [score, bestScore, life]);

  return (
    <>
      <ScoreContext.Provider value={[score, setScore]}>
        <BestScoreContext.Provider value={[bestScore, setBestScore]}>
          <LifeContext.Provider value={[life, setLife]}>
            <Component {...pageProps} />
          </LifeContext.Provider>
        </BestScoreContext.Provider>
      </ScoreContext.Provider>
    </>
  );
}
