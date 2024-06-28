import type { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';

const FAQs = () => {
  const { t } = useTranslation(`faqs`);

  return (
    <div className="my-10 max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border-2">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#1A237E] mb-8 text-center">
          {t(`faq.title`)}
        </h2>
        <div className="space-y-8">
          <div className="bg-[#F6F1F1] shadow-sm rounded-lg overflow-hidden border-l-4 border-[#4D59E3]">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-[#4D59E3] mb-2">
                {t(`faq.question1`)}
              </h3>
              <p className="text-gray-700">{t(`faq.answer1`)}</p>
            </div>
          </div>

          <div className="bg-[#F6F1F1] shadow-sm rounded-lg overflow-hidden border-l-4 border-[#4D59E3]">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-[#4D59E3] mb-2">
                {t(`faq.question2`)}
              </h3>
              <p className="text-gray-700">{t(`faq.answer2`)}</p>
            </div>
          </div>

          <div className="bg-[#F6F1F1] shadow-sm rounded-lg overflow-hidden border-l-4 border-[#4D59E3]">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-[#4D59E3] mb-2">
                {t(`faq.question3`)}
              </h3>
              <p className="text-gray-700">{t(`faq.answer3`)}</p>
            </div>
          </div>

          <div className="bg-[#F6F1F1] shadow-sm rounded-lg overflow-hidden border-l-4 border-[#4D59E3]">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-[#4D59E3] mb-2">
                {t(`faq.question4`)}
              </h3>
              <p className="text-gray-700">{t(`faq.answer4`)}</p>
            </div>
          </div>

          <div className="bg-[#F6F1F1] shadow-sm rounded-lg overflow-hidden border-l-4 border-[#4D59E3]">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-[#4D59E3] mb-2">
                {t(`faq.question5`)}
              </h3>
              <p className="text-gray-700">{t(`faq.answer5`)}</p>
            </div>
          </div>

          <div className="bg-[#F6F1F1] shadow-sm rounded-lg overflow-hidden border-l-4 border-[#4D59E3]">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-[#4D59E3] mb-2">
                {t(`faq.question6`)}
              </h3>
              <p className="text-gray-700">{t(`faq.answer6`)}</p>
            </div>
          </div>

          <div className="bg-[#F6F1F1] shadow-sm rounded-lg overflow-hidden border-l-4 border-[#4D59E3]">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-[#4D59E3] mb-2">
                {t(`faq.question7`)}
              </h3>
              <p className="text-gray-700">{t(`faq.answer7`)}</p>
            </div>
          </div>

          <div className="bg-[#F6F1F1] shadow-sm rounded-lg overflow-hidden border-l-4 border-[#4D59E3]">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-[#4D59E3] mb-2">
                {t(`faq.question8`)}
              </h3>
              <p className="text-gray-700">{t(`faq.answer8`)}</p>
            </div>
          </div>

          <div className="bg-[#F6F1F1] shadow-sm rounded-lg overflow-hidden border-l-4 border-[#4D59E3]">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-[#4D59E3] mb-2">
                {t(`faq.question9`)}
              </h3>
              <p className="text-gray-700">{t(`faq.answer9`)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({
  locale,
}: GetStaticPropsContext & { locale: string }) {
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  
  return {
    props: {
      ...(await serverSideTranslations(locale, [`faqs`])),
    },
  };
}

export default FAQs;