import "@fontsource/barlow-semi-condensed/600.css";
import "@fontsource/barlow-semi-condensed/700.css";
import "@/styles/helpers/variables.scss";
import "@/styles/layout/index.scss";
import "@/styles/pages/home.scss";
import "@/styles/pages/original.scss";
import "@/styles/components/chip.scss";
import "@/styles/components/scoreboard.scss";
import { ScoreContext } from "@/context/rps-context";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [score, setScore] = useState(0);

  return (
    <>
      <ScoreContext.Provider value={[score, setScore]}>
        <Component {...pageProps} />
      </ScoreContext.Provider>
    </>
  );
}
