import "../styles/globals.css";
import type { AppProps } from "next/app";
import LogRocket from "logrocket";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    LogRocket.init("apfj24/portfolio");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
