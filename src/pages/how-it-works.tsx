import React from 'react';
import type { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import PageHead from './components/PageHead';

const HowItWorksPage = () => {
  const { t } = useTranslation([`common`, `how`]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F1F1] to-[#F8E8EE]">
      <PageHead
        pagePath="/how-it-works"
        title={t(`howItWorksTitle`)}
        description={t(`siteDescription`)}
        ogMetaTags={
          <>
            <meta property="og:site_name" content={t(`siteTitle`)} />
            <meta property="og:title" content={t(`siteTitle`)} />
            <meta property="og:description" content={t(`siteDescription`)} />
          </>
        }
        twitterMetaTags={
          <>
            <meta name="twitter:title" content={t(`siteTitle`)} />
            <meta name="twitter:description" content={t(`siteDescription`)} />
          </>
        }
        additionalTags={
          <>
            {/* additionalTags here */}
          </>
        }
      />

      <Header />
      
      <main className="py-10">
        <h1 className="text-4xl font-extrabold text-[#0C359E] mb-8 text-center">{t(`howItWorks`)}</h1>
        {/** TODO by rarestzhou: Add "About Notion-Avatar-Maker" descriptipn */}
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