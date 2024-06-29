import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import GoogleAnalytics from './GoogleAnalytics';

interface Locale {
  code: string;
  hreflang: string;
}

interface PageHeadProps {
  pagePath: string;
  title: string;
  description: string;
  ogMetaTags?: React.ReactNode;
  twitterMetaTags?: React.ReactNode;
  additionalTags?: React.ReactNode;
  ogImage?: string;
  twitterImage?: string;
}

const supportedLocales: Locale[] = [
  { code: 'en', hreflang: 'en-US' },
  { code: 'zh', hreflang: 'zh-CN' },
  { code: 'tw', hreflang: 'zh-TW' },
  { code: 'ko', hreflang: 'ko-KR' },
  { code: 'ja', hreflang: 'ja-JP' },
  { code: 'de', hreflang: 'de-DE' },
  { code: 'es', hreflang: 'es-ES' },
  { code: 'fr', hreflang: 'fr-FR' },
  { code: 'nl', hreflang: 'nl-NL' },
  { code: 'pt', hreflang: 'pt-PT' },
  { code: 'ar', hreflang: 'ar-AE' }
];

const baseUrl = process.env.NEXT_PUBLIC_URL;

const PageHead: React.FC<PageHeadProps> = ({
  pagePath,
  title,
  description,
  ogMetaTags,
  twitterMetaTags,
  additionalTags,
  ogImage = 'https://img.mini-url.top/file/3d4a0a5b382e710d9279d.png',
  twitterImage = 'https://img.mini-url.top/file/3d4a0a5b382e710d9279d.png'
}) => {
  const router = useRouter();

  const currentLocale = supportedLocales.find(locale => locale.code === router.locale) || supportedLocales[0];
  const canonicalUrl = `${baseUrl}${router.locale === 'en' ? '' : `/${router.locale}`}${pagePath}`;

  const alternateLinks = supportedLocales
    .filter(({ code }) => code !== router.locale)
    .map(({ code, hreflang }) => (
      <link
        key={code}
        rel="alternate"
        hrefLang={hreflang}
        href={`${baseUrl}${code === 'en' ? '' : `/${code}`}${pagePath}`}
      />
    ));

  return (
    <Head>
      <GoogleAnalytics />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />

      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${pagePath}`} />
      {alternateLinks}
      <link rel="canonical" hrefLang={currentLocale.hreflang} href={canonicalUrl} />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />

      <meta name="msapplication-TileColor" content="#fffefc" />
      <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#fffefc" />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      {ogMetaTags}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:site" content="@rarestzhou" />
      {twitterMetaTags}
      
      {additionalTags}
    </Head>
  );
};

export default PageHead;