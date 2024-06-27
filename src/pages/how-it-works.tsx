import React from 'react';
import Head from 'next/head';
import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import HowItWorks from './components/HowItWorks';
{/* TODO by rarestzhou: i18n */}
const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F1F1] to-[#F8E8EE]">
      <Head>
        <title>How it works | Notion-Avatar-Maker</title>
        <link rel="icon" href="favicon/favicon.ico" />
        <link rel="canonical" href="https://notion-avatar-maker.com/privacy-policy" />
        <meta name="description" content="Learn how to use Notion-Avatar-Maker to create your custom avatar." />
        <GoogleAnalytics />
      </Head>

      <Header />
      
      <main className="py-10">
        <h1 className="text-4xl font-extrabold text-[#4D59E3] mb-8 text-center">How it works</h1>
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;