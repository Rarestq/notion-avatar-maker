import React from 'react';
import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation(`howItWorks`);

  return (
    <div className="my-10 max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border-2">
      <h2 className="text-2xl font-bold text-[#4D59E3] mb-6 text-center">{t(`title`)}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-[#F6F1F1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#4D59E3]">1</span>
          </div>
          <h3 className="font-semibold mb-2 text-[#4D59E3]">{t(`step1.title`)}</h3>
          <p className="text-gray-600">{t(`step1.description`)}</p>
        </div>
        <div className="text-center">
          <div className="bg-[#F6F1F1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#4D59E3]">2</span>
          </div>
          <h3 className="font-semibold mb-2 text-[#4D59E3]">{t(`step2.title`)}</h3>
          <p className="text-gray-600">{t(`step2.description`)}</p>
        </div>
        <div className="text-center">
          <div className="bg-[#F6F1F1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#4D59E3]">3</span>
          </div>
          <h3 className="font-semibold mb-2 text-[#4D59E3]">{t(`step3.title`)}</h3>
          <p className="text-gray-600">{t(`step3.description`)}</p>
        </div>
      </div>
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

export default HowItWorks;