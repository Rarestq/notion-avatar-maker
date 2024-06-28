import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';

function Guides() {
    const [isGuidesOpen, setIsGuidesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation(`common`);
  
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsGuidesOpen(false);
        }
      }
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  return (
    <div className="ml-8 relative guides-dropdown" ref={dropdownRef}>
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
        {/* <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          {t(`faq:title`)}
        </Link> */}
      </div>
      )}
  </div>
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

export default Guides;