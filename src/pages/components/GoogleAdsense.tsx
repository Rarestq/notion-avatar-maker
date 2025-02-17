import React from 'react';

const GoogleAdsense = () => (
  <>
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
      crossOrigin="anonymous"
    />
  </>
);

export default GoogleAdsense;