import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { ReactElement } from "react";

interface IDeficitResponse {
  averageDeficitCurrentMonth: string;
  predictedWeeklyWeightDiff: {
    noMovingAverage: {
      weightDiffKilos: string;
      deficitForRemainingDaysThisMonth: string;
    };
  };
  deficits: IDeficitApiData[];
}

interface IDeficitApiData {
  dateTime: string;
  deficit: string;
}
const getConfig = () => ({
  urls: {
    deficit: process.env.NEXT_PUBLIC_DEFICIT_URL || "",
  },
  fitbit: {
    clientId: process.env.NEXT_PUBLIC_FITBIT_CLIENT_ID || "",
    redirectUri: process.env.NEXT_PUBLIC_FITBIT_REDIRECT_URI,
  },
});
const config = getConfig();

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fitdash</title>
        <meta name="description" content="deficit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Fitdash</h1>
      </main>
    </div>
  );
}
