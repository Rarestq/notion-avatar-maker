'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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

function LanguageSwitcher() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const router = useRouter();

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

  const changeLanguage = (langCode: string) => {
    if (langCode !== router.locale) {
      router.push(router.pathname, router.asPath, { locale: langCode });
    }
    setIsLangOpen(false);
  };

  return (
    <div className="relative lang-dropdown flex items-center">
      <button
        type="button"
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="bg-[#F6F6F6] text-[#1A237E] border-none focus:outline-none flex items-center"
      >
        {currentLang.code.toUpperCase()}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
  );
}

export default LanguageSwitcher;