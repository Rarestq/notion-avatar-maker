import Image from 'next/legacy/image';
import Decoration from './decoration';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-white border-b-0 border-gray-200 p-4">
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
          <span className="text-lg">
            Notion
            <br />
            Avatar Maker
          </span>
        </div>
        <Decoration className="absolute top-0 right-0 w-24 sm:w-28 md:w-36" />
        {/* <div className="space-x-4">
          <a href="#" className="text-gray-600">Discover Avatars</a>
          <a href="#" className="text-gray-600">Blog</a>
          <select className="bg-white text-gray-600 border-none">
            <option>EN</option>
          </select>
          <button className="bg-[#ff8000] text-white px-3 py-1 rounded">Log in</button>
        </div> */}
      </div>
    </nav>
  );
}
