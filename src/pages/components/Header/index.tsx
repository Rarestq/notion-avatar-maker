import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';

export default function Header() {
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const dropdown = document.querySelector('.relative');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsGuidesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#F6F1F1] border-b-0 border-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex py-5 px-5 sm:px-16 md:px-32">
          <Link href="/">
            <Image
              src="/logo.gif"
              alt="Notion-Avatar-Maker Logo"
              width={50}
              height={50}
            />  
          </Link>  
          <span className="text-lg text-[#F2613F] ml-2">
            Notion
            <br />
            Avatar Maker
          </span>
        </div>
        
        <div className="space-x-4 relative">
          {/* <a href="#" className="text-[#4D59E3] hover:text-[#ED4059]">Discover Avatars</a>
          <a href="#" className="text-[#4D59E3] hover:text-[#ED4059]">Blog</a> */}
          <div className="inline-block relative">
            <button 
              onClick={() => setIsGuidesOpen(!isGuidesOpen)}
              className="text-[#4D59E3] hover:text-[#ED4059] focus:outline-none"
            >
              Guides
              <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isGuidesOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link href="/how-it-works" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  How it works
                </Link>
                {/* Add more guide links as needed */}
              </div>
            )}
          </div>
          <select className="bg-[#F6F6F6] text-[#4D59E3] border-none">
            <option>EN</option>
          </select>
          <button className="bg-[#ED4059] text-white px-3 py-1 rounded hover:bg-[#C6E354] hover:text-[#4D59E3]">Log in</button>
        </div>
       
      </div>
    </nav>
  );
}