import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { ReactElement } from "react";

const getConfig = () => ({
  urls: {},
});
const config = getConfig();

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fitdash</title>
        <meta name="description" content="fitdash" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Fitdash</h1>
      </main>
    </div>
  );
}
