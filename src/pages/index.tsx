import React, { useRef } from 'react';
import Link from 'next/link';
import type { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import AvatarEditor from './components/AvatarEditor';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import PageHead from './components/PageHead';

const Home: NextPage = () => {
  const { t } = useTranslation([`common`, `how`, `faqs`]);
  const router = useRouter();

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
    <PageHead
        pagePath=""
        title={t(`siteTitle`)}
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
      {/** TODO by rarestzhou: 这个 div 也可以单独作为一个组件，然后直接 import 即可 */}
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
      ...(await serverSideTranslations(locale, [`common`, `how`, `faqs`])),
    },
  };
}

export default Home;
