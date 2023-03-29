import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RPS Game</title>
      </Head>
      <main className="rps-game">
        <h1>Choose the mode you want to play.</h1>
        <div className="rps-game__button">
          <Link href="/original">Original Mode</Link>
          <Link href="/advance">Advance Mode</Link>
        </div>
      </main>
    </>
  );
}
