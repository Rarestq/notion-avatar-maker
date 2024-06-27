import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';
import Link from 'next/link';
{/* TODO by rarestzhou: move hard code to common.json */}
export default function Footer() {
  const { t } = useTranslation(`common`);

  return (
    <footer className="bg-[#F6F1F1] text-[#4D59E3] flex flex-col items-center py-12 border-t border-[#4D59E3]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.gif" alt="Notion-Avatar-Maker Logo" width={50} height={50} />
            <br />
            <span className="text-lg text-[#ED4059] ml-2">
            Notion-Avatar-Maker
            </span>
            <p className="mt-4">Create your custom Notion-style avatar for your social media profiles.</p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Explore</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#ED4059]">Home</Link></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Say Hi 👋</h2>
            <ul className="space-y-2">
              <li><a href="https://github.com/mayandev/notion-avatar" className="hover:text-[#ED4059]">GitHub</a></li>
              <li><a href="https://twitter.com/rarestzhou" className="hover:text-[#ED4059]">Twitter</a></li>
              <li><a href="https://www.notion.so/" className="hover:text-[#ED4059]">Notion</a></li>
              <li><a href="mailto:support@notion-avatar-maker.com" className="hover:text-[#ED4059]">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-[#ED4059]">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-[#ED4059]">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#C6E354] text-center">
          <p>
            <a href="https://abstractlab.gumroad.com/l/noto-avatar" className="hover:text-[#ED4059]">
              &copy; {t(`illustrations`)}
            </a>
            {t(`designedBy`)}
            <a href="https://twitter.com/felix12777" className="hover:text-[#ED4059]">
              {` Felix Wong `}
            </a>
            {t(`underDesign`)}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/" className="hover:text-[#ED4059]">
              {` CC0 `}
            </a>
            {t(`license`)}
          </p>
        </div>
      </div>
    </footer>
  );
}