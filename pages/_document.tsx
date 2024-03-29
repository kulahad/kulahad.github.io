import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

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
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans|Lato&display=optional"
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

          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-258YQEEJME"
          ></script>
          <script dangerouslySetInnerHTML={{ __html: gtagCode }} />
          <script
            async
            crossOrigin="anonymous"
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
