import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import GoogleAnalytics from './components/GoogleAnalytics';

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link href="/fonts/Quicksand.tff" as="font" crossOrigin="anonymous" />
          <GoogleAnalytics />
        </Head>
        <body className="font-bold">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
