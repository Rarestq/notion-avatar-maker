import React from 'react';
import Head from 'next/head';
import type { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import GoogleAnalytics from './components/GoogleAnalytics';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

const HowItWorksPage = () => {
  const { t } = useTranslation([`common`, `how`]);
  const router = useRouter();

  const canonicalUrl = `https://notion-avatar-maker.com${
    router.locale === 'en' ? '' : `/${router.locale}`
  }/how-it-works`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F1F1] to-[#F8E8EE]">
      <Head>
        <title>{t(`howItWorksTitle`)}</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
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
}: GetStaticPropsContext & { locale: string }) {
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  
  return {
    props: {
      ...(await serverSideTranslations(locale, [`common`, `how`])),
    },
  };
}