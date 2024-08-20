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
        <title>Mohammed Ahad&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio of Mohammed Muqtadir Ahad."
        />
        <meta property="og:title" content="Mohammed Ahad's Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Mohammed Muqtadir Ahad."
        />
        <meta property="og:image" content="/images/framedpfp.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
