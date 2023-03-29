import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>RPS Game</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="Entertain yourself by playing RPS."
        ></meta>
        <meta property="og:title" content="RPS Game" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Entertain yourself by playing RPS."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/rps-game_M1OH4Eos.webp?updatedAt=1680076784507"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
