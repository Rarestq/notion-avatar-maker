import React from 'react';
import Head from 'next/head';
import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleAnalytics from './components/google-analytics';

const PrivacyPolicy = () => {
  const { t } = useTranslation(`common`);

  return (
    
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>Privacy Policy | Notion-Avatar-Maker</title>
        <link rel="icon" href="favicon/favicon.ico" />
        <link rel="canonical" href="https://notion-avatar-maker.com/privacy-policy" />
        <meta name="description" content={t(`siteDescription`)} />
        <GoogleAnalytics />
      </Head>

      <Header />

      <main className="container mx-auto py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-black">Privacy Policy for Notion-Avatar-Maker</h1>
          <p className="mb-6 text-gray-600">Last updated: June 26, 2024</p>

          <h2 className="text-2xl mb-6 text-black">Overview</h2>
          <p className="mb-6 text-gray-600">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
          <p className="mb-6 text-gray-600">We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

          <h2 className="text-2xl mb-6 text-black">Collecting and Using Your Personal Data</h2>
          <h3 className="text-xl mb-4 text-black">Personal Data</h3>
          <p className="mb-6 text-gray-600">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
          <ul className="list-disc list-inside mb-6 text-gray-600">
            <li>Name</li>
            <li>Email Address</li>
            <li>Payment Information</li>
          </ul>
          <p className="mb-6 text-gray-600">This information is collected for the purpose of order processing on our Notion-Avatar-Maker.</p>

          <h3 className="text-xl mb-4 text-black">Usage Data</h3>
          <p className="mb-6 text-gray-600">Usage Data is collected automatically when using the Service.</p>
          <p className="mb-6 text-gray-600">Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
          <p className="mb-6 text-gray-600">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
          <p className="mb-6 text-gray-600">We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>

          <h3 className="text-xl mb-4 text-black">Information from Third-Party Social Media Services</h3>
          <p className="mb-6 text-gray-600">The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
          <ul className="list-disc list-inside mb-6 text-gray-600">
            <li>Google</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
          <p className="mb-6 text-gray-600">If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service&apos;s account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
          <p className="mb-6 text-gray-600">You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service&apos;s account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>

          <h3 className="text-xl mb-4 text-black">Tracking Technologies and Cookies</h3>
          <p className="mb-6 text-gray-600">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.</p>
          
          <h2 className="text-2xl mb-6 text-black">Purpose of Data Collection</h2>
          <p className="mb-6 text-gray-600">The primary purpose of collecting your data is to process your orders and improve our website&apos;s functionality and services.</p>

          <h2 className="text-2xl mb-6 text-black">Data Sharing</h2>
          <p className="mb-6 text-gray-600">Notion-Avatar-Maker respects your privacy. We do not share your personal data with any third parties, except as necessary to process your orders or comply with legal requirements.</p>

          <h2 className="text-2xl mb-6 text-black">Delete Your Personal Data</h2>
          <p className="mb-6 text-gray-600">You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
          <p className="mb-6 text-gray-600">Our Service may give You the ability to delete certain information about You from within the Service.</p>
          <p className="mb-6 text-gray-600">You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
          <p className="mb-6 text-gray-600">Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>

          <h2 className="text-2xl mb-6 text-black">Security of Your Personal Data</h2>
          <p className="mb-6 text-gray-600">The security of Your Personal Data is important to Notion-Avatar-Maker, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

          <h2 className="text-2xl mb-6 text-black">Children&apos;s Privacy</h2>
          <p className="mb-6 text-gray-600">Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>

          <h2 className="text-2xl mb-6 text-black">Updates to This Privacy Policy</h2>
          <p className="mb-6 text-gray-600">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
          <p className="mb-6 text-gray-600">We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
          <p className="mb-6 text-gray-600">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <h2 className="text-2xl mb-6 text-black">Contact Us</h2>
          <p className="mb-6 text-gray-600">If you have any questions or concerns about this Privacy Policy, please contact us at support@notion-avatar-maker.com.</p>
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
      ...(await serverSideTranslations(locale, [`common`])),
    },
  };
}

export default PrivacyPolicy;