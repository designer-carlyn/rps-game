import "@fontsource/barlow-semi-condensed/600.css";
import "@fontsource/barlow-semi-condensed/700.css";
import "@/styles/helpers/variables.scss";
import "@/styles/layout/index.scss";
import "@/styles/pages/home.scss";
import "@/styles/pages/original.scss";
import "@/styles/components/chip.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
