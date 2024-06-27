import React from 'react';
import Head from 'next/head';
import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import GoogleAnalytics from './components/GoogleAnalytics';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';


const HowItWorksPage = () => {
  const { t } = useTranslation(`common`);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F1F1] to-[#F8E8EE]">
      <Head>
        <title>{t(`howItWorksTitle`)}</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="canonical" href="https://notion-avatar-maker.com/how-it-works" />
        <meta name="description" content={t(`howItWorksDescription`)} />
        <GoogleAnalytics />
      </Head>

      <Header />
      
      <main className="py-10">
        <h1 className="text-4xl font-extrabold text-[#4D59E3] mb-8 text-center">{t(`howItWorks`)}</h1>
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;

export async function getStaticProps({
  locale,
}: GetStaticPropsContext) {
  if (typeof locale !== 'string') {
    throw new Error('Locale is not a string');
  }
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}