import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Rock+Salt&family=Walter+Turncoat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          style={{
            backgroundImage: `url('../static/images/simple-old-paper-1-light.jpg')`,
          }}
        >
          <Main />
          <NextScript />
          <div id='overlays' />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
