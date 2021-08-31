import "../styles/globals.css";
import type { AppProps } from "next/app";
import LogRocket from "logrocket";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    LogRocket.init("apfj24/portfolio");
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;
