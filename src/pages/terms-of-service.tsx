import React from 'react';
import Head from 'next/head';
import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';

const TermsConditions = () => {
  const { t: tCommon } = useTranslation('common');
  const { t: tTerms } = useTranslation('terms');

  return (
    
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>{tTerms('termsTitle')}</title>
        <link rel="icon" href="favicon/favicon.ico" />
        <link rel="canonical" href="https://notion-avatar-maker.com/terms-of-service" />
        <meta name="description" content={tCommon(`siteDescription`)} />
        <GoogleAnalytics />
      </Head>

      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center">
            {tTerms('termsOfService.title')}
          </h1>
          <p className="mb-6 text-gray-600 text-center">{tTerms('termsOfService.lastUpdated')}</p>

          <div className="space-y-6 text-gray-600 text-justify">
            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tTerms('termsOfService.overview.title')}
            </h2>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.overview.content1')}</p>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.overview.content2')}</p>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.overview.content3')}</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tTerms('termsOfService.cookies.title')}
            </h2>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.cookies.content1')}</p>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.cookies.content2')}</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tTerms('termsOfService.license.title')}
            </h2>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.license.content1')}</p>
  
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.license.content2')}</p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>{tTerms('termsOfService.license.content3')}</li>
              <li>{tTerms('termsOfService.license.content4')}</li>
              <li>{tTerms('termsOfService.license.content5')}</li>
              <li>{tTerms('termsOfService.license.content6')}</li>
            </ul>
  
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.license.content7')}</p>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.license.content8')}</p>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.license.content9')}</p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>{tTerms('termsOfService.license.content10')}</li>
              <li>{tTerms('termsOfService.license.content11')}</li>
              <li>{tTerms('termsOfService.license.content12')}</li>
              <li>{tTerms('termsOfService.license.content13')}</li>
              <li>{tTerms('termsOfService.license.content14')}</li>
              <li>{tTerms('termsOfService.license.content15')}</li>
            </ul>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tTerms('termsOfService.contentLiability.title')}
            </h2>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.contentLiability.content')}</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tTerms('termsOfService.reservationOfRights.title')}
            </h2>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.reservationOfRights.content')}</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tTerms('termsOfService.disclaimer.title')}
            </h2>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.disclaimer.content1')}</p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>{tTerms('termsOfService.disclaimer.content2')}</li>
              <li>{tTerms('termsOfService.disclaimer.content3')}</li>
              <li>{tTerms('termsOfService.disclaimer.content4')}</li>
              <li>{tTerms('termsOfService.disclaimer.content5')}</li>
            </ul>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.disclaimer.content6')}</p>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.disclaimer.content7')}</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tTerms('termsOfService.modifications.title')}
            </h2>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.modifications.content')}</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tTerms('termsOfService.contactUs.title')}
            </h2>
            <p className="mb-6 text-gray-600">{tTerms('termsOfService.contactUs.content')}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps({
  locale,
}: GetStaticPropsContext & { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [`common`, `terms`])),
    },
  };
}

export default TermsConditions;