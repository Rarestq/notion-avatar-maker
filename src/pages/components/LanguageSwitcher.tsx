import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { languageOptions, LanguageOption } from '../../languageOptions';
import { useTranslation } from 'next-i18next';

function LanguageSwitcher() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('common');

  const currentLang = languageOptions.find(lang => lang.code === router.locale) || languageOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const langDropdown = document.querySelector('.lang-dropdown');
      if (langDropdown && !langDropdown.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = async (langOption: LanguageOption) => {
    if (langOption.code !== router.locale) {
      // setIsLoading(true);
      await router.push(router.pathname, router.asPath, { locale: langOption.code });
      // setIsLoading(false);
    }
    setIsLangOpen(false);
  };

  return (
    <div className="relative lang-dropdown flex items-center">
      <button
        type="button"
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="bg-[#F6F6F6] text-[#1A237E] border-none focus:outline-none flex items-center px-3 py-2 rounded"
      >
        <span className="mr-2" role="img" aria-label={`Flag for ${currentLang.label}`}>
          {currentLang.flag}
        </span>
        {currentLang.code.toUpperCase()}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isLangOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg py-1 z-10 top-full max-h-80 overflow-y-auto">
          {languageOptions.map((lang) => (
            <button
              type="button"
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center whitespace-nowrap"
            >
              <span className="mr-2" role="img" aria-label={`Flag for ${lang.label}`}>
                {lang.flag}
              </span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
      {/* {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md">
            <p>{t('loading')}</p>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default LanguageSwitcher;