import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import GoogleAnalytics from './components/GoogleAnalytics';
import GoogleAdsense from './components/GoogleAdsense';

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link href="/fonts/Quicksand.tff" as="font" crossOrigin="anonymous" />
          <GoogleAnalytics />
          <GoogleAdsense />
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
