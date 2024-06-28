import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

type FAQ = {
  question: string;
  answer: string;
};

const FAQs = () => {
  const { t } = useTranslation(`faqs`);
  // const [faqArray, setFaqArray] = useState<FAQ[]>([]);

  const faqTitle = t(`faq.title`, `Frequently Asked Questions`);
  const faqData = t(`faq.data`, { returnObjects: true });

  if (!Array.isArray(faqData) || faqData.length === 0) {
    console.warn('FAQ data is not available or is empty');
    return null;
  }

  // useEffect(() => {
  //   const data = t(`faq.data`, { returnObjects: true });
  //   console.log("Is faqArray data array?  " + Array.isArray(data))
  //   setFaqArray(Array.isArray(data) ? data : []);
  // }, [t]);
  
  // console.log("faqArray data: " + faqArray)

  return (
    <div className="my-10 max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border-2">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#1A237E] mb-8 text-center">
          {faqTitle}
        </h2>
        <div className="space-y-8">
        {faqData.map((faq: FAQ, index: number) => (
            <div key={faq.question} className="bg-[#F6F1F1] shadow-sm rounded-lg overflow-hidden border-l-4 border-[#4D59E3]">
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-[#4D59E3] mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
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
      ...(await serverSideTranslations(locale, [`faqs`])),
    },
  };
}

export default FAQs;