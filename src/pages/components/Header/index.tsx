import Link from 'next/link';
import Image from 'next/legacy/image';
import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import Guides from '../Guides';

export default function Header() {
  const { t } = useTranslation([`common`]);

  return (
    <nav className="bg-[#F6F1F1] border-b-0 border-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.gif"
              alt={t(`logoAlt`)}
              width={50}
              height={50}
              unoptimized
            />  
            <span className="text-lg text-[#F2613F] ml-2">
              Notion
              <br />
              Avatar Maker
            </span>
          </Link>
          <Guides />
          <Link href="/discover" className="text-[#1A237E] hover:text-[#ED4059]">
            {t(`discover`)}
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          {/* <button className="bg-[#1A237E] text-white px-3 py-1 rounded hover:bg-[#E1AFD1] hover:text-[#4D59E3]">
            {t(`login`)}
          </button> */}
        </div>
      </div>
    </nav>
  );
}

export async function getStaticProps({
  locale,
}: GetStaticPropsContext & { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [`common`])),
    },
  };
}