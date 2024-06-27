import React from 'react';
import Head from 'next/head';
import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';

const TermsConditions = () => {
  const { t } = useTranslation(`common`);

  return (
    
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>Terms of Service | Notion-Avatar-Maker</title>
        <link rel="icon" href="favicon/favicon.ico" />
        <link rel="canonical" href="https://notion-avatar-maker.com/terms-of-service" />
        <meta name="description" content={t(`siteDescription`)} />
        <GoogleAnalytics />
      </Head>

      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Terms of Service for Notion-Avatar-Maker</h1>
          <p className="mb-6 text-gray-600">Last updated: June 26, 2024</p>

          <div className="space-y-6 text-gray-600 text-justify">
            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">Overview</h2>
            <p className="mb-6 text-gray-600">Welcome to Notion-Avatar-Maker!</p>
            <p className="mb-6 text-gray-600">These terms and conditions outline the rules and regulations for the use of Notion-Avatar-Maker&apos;s Website, located at https://notion-avatar-maker.com/.</p>
            <p className="mb-6 text-gray-600">By accessing this website we assume you accept these terms and conditions. Do not continue to use Notion-Avatar-Maker if you do not agree to take all of the terms and conditions stated on this page.</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">Cookies</h2>
            <p className="mb-6 text-gray-600">We employ the use of cookies. By accessing Notion-Avatar-Maker, you agreed to use cookies in agreement with the Notion-Avatar-Maker&apos;s Privacy Policy. </p>
            <p className="mb-6 text-gray-600">Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">License</h2>
            <p className="mb-6 text-gray-600">Unless otherwise stated, Notion-Avatar-Maker and/or its licensors own the intellectual property rights for all material on Notion-Avatar-Maker. All intellectual property rights are reserved. You may access this from Notion-Avatar-Maker for your own personal use subjected to restrictions set in these terms and conditions.</p>
          
            <p className="mb-6 text-gray-600">You must not:</p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>Republish material from Notion-Avatar-Maker</li>
              <li>Sell, rent or sub-license material from Notion-Avatar-Maker</li>
              <li>Reproduce, duplicate or copy material from Notion-Avatar-Maker</li>
              <li>Redistribute content from Notion-Avatar-Maker</li>
            </ul>
          
            <p className="mb-6 text-gray-600">This Agreement shall begin on the date hereof.</p>
            <p className="mb-6 text-gray-600">Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Notion-Avatar-Maker does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Notion-Avatar-Maker,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Notion-Avatar-Maker shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
            <p className="mb-6 text-gray-600">Notion-Avatar-Maker reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
            <p className="mb-6 text-gray-600">You warrant and represent that:</p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
              <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
              <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
              <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
            </ul>

            <p className="mb-6 text-gray-600">You hereby grant Notion-Avatar-Maker a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
          
            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">Content Liability</h2>
            <p className="mb-6 text-gray-600">We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">Reservation of Rights</h2>
            <p className="mb-6 text-gray-600">We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it&apos;s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">Disclaimer</h2>
            <p className="mb-6 text-gray-600">To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            <p className="mb-6 text-gray-600">The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
            <p className="mb-6 text-gray-600">As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">Modifications</h2>
            <p className="mb-6 text-gray-600">Notion-Avatar-Maker may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.</p>

            <h2 className="text-xl md:text-2xl mb-4 text-black font-semibold">Contact Us</h2>
            <p className="mb-6 text-gray-600">If you have any questions or concerns about this Terms, please contact us at support@notion-avatar-maker.com.</p>
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
      ...(await serverSideTranslations(locale, [`common`])),
    },
  };
}

export default TermsConditions;