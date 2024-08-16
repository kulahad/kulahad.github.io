import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const gtagCode = `{  window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-258YQEEJME');}`;
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Whisper&family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"
          />

          <script
            async
            src="https://kit.fontawesome.com/dba5f5b919.js"
            crossOrigin="anonymous"
          ></script>

          <script
            async
            crossOrigin="anonymous"
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          ></script>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <GoogleAnalytics gaId="G-258YQEEJME" />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
