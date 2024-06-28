import React from 'react';
import Head from 'next/head';
import type { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Header from './components/Header';
import GoogleAnalytics from './components/GoogleAnalytics';
import Footer from './components/Footer';

const PrivacyPolicy = () => {
  const { t: tCommon } = useTranslation('common');
  const { t: tPrivacy } = useTranslation('privacy');

  const router = useRouter();

  const canonicalUrl = `https://notion-avatar-maker.com${
    router.locale === 'en' ? '' : '/' + router.locale
  }/privacy-policy`;

  return (
    
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <GoogleAnalytics />
        <title>{tPrivacy(`privacyTitle`)}</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={tCommon(`siteDescription`)} />
      </Head>

      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center">
            {tPrivacy('privacyPolicy.title')}
          </h1>
          <p className="mb-6 text-gray-600 text-center">{tPrivacy('privacyPolicy.lastUpdated')}</p>

          <div className="space-y-6 text-gray-600 text-justify">
            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tPrivacy('privacyPolicy.overview.title')}
            </h2>
            <p className="mb-6 text-gray-600">{tPrivacy('privacyPolicy.overview.content1')}</p>
            <p className="mb-6 text-gray-600">{tPrivacy('privacyPolicy.overview.content2')}</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tPrivacy('privacyPolicy.collectingAndUsing.title')}
            </h2>
            <h3 className="text-lg md:text-xl mb-2 text-black">
              {tPrivacy('privacyPolicy.collectingAndUsing.personalData.title')}
            </h3>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.collectingAndUsing.personalData.content')}
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>{tPrivacy('privacyPolicy.collectingAndUsing.personalData.name')}</li>
              <li>{tPrivacy('privacyPolicy.collectingAndUsing.personalData.email')}</li>
              <li>{tPrivacy('privacyPolicy.collectingAndUsing.personalData.paymentInfo')}</li>
            </ul>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.collectingAndUsing.personalData.content')}
            </p>

            <h3 className="text-lg md:text-xl mb-2 text-black">
              {tPrivacy('privacyPolicy.collectingAndUsing.usageData.title')}
            </h3>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.collectingAndUsing.usageData.content1')}
            </p>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.collectingAndUsing.usageData.content2')}
            </p>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.collectingAndUsing.usageData.content3')}
            </p>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.collectingAndUsing.usageData.content4')}
            </p>

            <h3 className="text-lg md:text-xl mb-2 text-black">
              {tPrivacy('privacyPolicy.collectingAndUsing.thirdParty.title')}
            </h3>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.collectingAndUsing.thirdParty.content1')}
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>{tPrivacy('privacyPolicy.collectingAndUsing.thirdParty.google')}</li>
              <li>{tPrivacy('privacyPolicy.collectingAndUsing.thirdParty.facebook')}</li>
              <li>{tPrivacy('privacyPolicy.collectingAndUsing.thirdParty.instagram')}</li>
              <li>{tPrivacy('privacyPolicy.collectingAndUsing.thirdParty.twitter')}</li>
              <li>{tPrivacy('privacyPolicy.collectingAndUsing.thirdParty.linkedIn')}</li>
            </ul>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.collectingAndUsing.thirdParty.content2')}
            </p>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.collectingAndUsing.thirdParty.content3')}
            </p>

            <h3 className="text-lg md:text-xl mb-2 text-black">
              {tPrivacy('privacyPolicy.collectingAndUsing.tracking.title')}
            </h3>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.collectingAndUsing.tracking.content')}
            </p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tPrivacy('privacyPolicy.purpose.title')}
            </h2>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.purpose.content')}
            </p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tPrivacy('privacyPolicy.dataSharing.title')}
            </h2>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.dataSharing.content')}
            </p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tPrivacy('privacyPolicy.deleteData.title')}
            </h2>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.deleteData.content1')}
            </p>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.deleteData.content2')}
            </p>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.deleteData.content3')}
            </p>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.deleteData.content4')}
            </p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tPrivacy('privacyPolicy.security.title')}
            </h2>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.security.content')}
            </p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tPrivacy('privacyPolicy.children.title')}
            </h2>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.children.content')}
            </p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tPrivacy('privacyPolicy.updates.title')}
            </h2>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.updates.content1')}
            </p>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.updates.content2')}
            </p>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.updates.content3')}
            </p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">
              {tPrivacy('privacyPolicy.contact.title')}
            </h2>
            <p className="mb-6 text-gray-600">
              {tPrivacy('privacyPolicy.contact.content')}
            </p>
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
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', `privacy`])),
    },
  };
}

export default PrivacyPolicy;