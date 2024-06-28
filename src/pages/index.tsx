import React, { useRef } from 'react';
import Link from 'next/link';
import type { GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import GoogleAnalytics from './components/GoogleAnalytics';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import AvatarEditor from './components/AvatarEditor';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

const URL = `https://notion-avatar-maker.com/`;

const Home: NextPage = () => {
  const { t } = useTranslation(`common`);
  const router = useRouter();

  const canonicalUrl = `https://notion-avatar-maker.com${
    router.locale === 'en' ? '' : `/${router.locale}`
  }`;

  // console.log('Translation Text unsuccessfully:', t(`siteNameDescOne`), t(`siteNameDescTwo`));
  // console.log('Translation Text:', t(`siteName`), t(`logoAlt`), t('privacyPolicy'), t('sayHi'));

  const howItWorksRef = useRef<HTMLDivElement>(null);

  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    howItWorksRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-[#F6F1F1] to-[#F8E8EE]">
      <Head>
        <GoogleAnalytics />
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
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="manifest" href="/manifest.json" />
        <title>{t(`siteTitle`)}</title>
        <meta name="description" content={t(`siteDescription`)} />
        <meta name="msapplication-TileColor" content="#fffefc" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#fffefc" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t(`siteTitle`)} />
        <meta property="og:title" content={t(`siteTitle`)} />
        <meta property="og:description" content={t(`siteDescription`)} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://img.mini-url.top/file/3d4a0a5b382e710d9279d.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://img.mini-url.top/file/3d4a0a5b382e710d9279d.png" />
        <meta name="twitter:site" content="@rarestzhou" />
        <meta name="twitter:title" content={t(`siteTitle`)} />
        <meta name="twitter:description" content={t(`siteDescription`)} />
      </Head>

      <Header />
      <div className="text-center pt-10">
        <h1 className="text-4xl font-extrabold text-[#1A237E] mb-2">
          {t(`siteName`)}
        </h1>
        <p className="text-[#1A237E] mb-8">
          {t(`siteNameDescOne`)}
        <br />
          {t(`siteNameDescTwo`)}
        </p>
        <Link href="#how-it-works" onClick={scrollToHowItWorks}>
            <span className="bg-white rounded-full shadow-lg text-[#1A237E] underline cursor-pointer px-3 py-1">
            {t(`howItWorks`)} →
            </span>
        </Link>
      </div>
      <main className="my-5 bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8">
        <AvatarEditor />
      </main>

      <div ref={howItWorksRef} id="how-it-works">
        <HowItWorks />
      </div>
      <FAQs />
      <Footer />
    </div>
    </>
  );
};

export async function getStaticProps({
  locale,
}: GetStaticPropsContext & { locale: string }) {
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  
  return {
    props: {
      ...(await serverSideTranslations(locale, [`common`])),
    },
  };
}

export default Home;
