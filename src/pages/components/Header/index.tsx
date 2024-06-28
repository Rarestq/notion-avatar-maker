import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '简体中文' },
  { code: 'tw', label: '繁體中文' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'pt', label: 'Português' },
  { code: 'ar', label: 'العربية' }
];

export default function Header() {
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation(`common`);

  const currentLang = languageOptions.find(lang => lang.code === router.locale) || languageOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const guidesDropdown = document.querySelector('.guides-dropdown');
      const langDropdown = document.querySelector('.lang-dropdown');
      if (guidesDropdown && !guidesDropdown.contains(event.target as Node)) {
        setIsGuidesOpen(false);
      }
      if (langDropdown && !langDropdown.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (langCode: string) => {
    if (langCode !== router.locale) {
      router.push(router.pathname, router.asPath, { locale: langCode });
    }
    setIsLangOpen(false);
  };

  return (
    <nav className="bg-[#F6F1F1] border-b-0 border-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
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
          
          <div className="ml-8 relative guides-dropdown">
            <button
              type="button"
              onClick={() => setIsGuidesOpen(!isGuidesOpen)}
              className="text-[#1A237E] hover:text-[#ED4059] focus:outline-none"
            >
              {t(`guides`)}
              <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isGuidesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link href="/how-it-works" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t(`howItWorks`)}
                </Link>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative lang-dropdown flex items-center">
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-[#F6F6F6] text-[#4D59E3] border-none focus:outline-none flex items-center"
            >
              {currentLang.code.toUpperCase()}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 top-full">
                {languageOptions.map((lang) => (
                  <button
                    type="button"
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
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