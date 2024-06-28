import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation(`common`);

  return (
    <footer className="bg-[#F6F1F1] text-[#1A237E] flex flex-col items-center py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.gif" alt={t(`logoAlt`)} width={50} height={50} unoptimized />
            {/* <br /> */}
            <span className="text-lg text-[#ED4059] ml-2">
              {t(`siteName`)}
            </span>
            <p className="mt-4">{t(`footerDescription`)}</p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">{t(`explore`)}</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#ED4059]">{t(`siteName`)}</Link></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">{t(`sayHi`)}</h2>
            <ul className="space-y-2">
              <li><a href="https://github.com/mayandev/notion-avatar" className="hover:text-[#ED4059]">{t(`github`)}</a></li>
              <li><a href="https://twitter.com/rarestzhou" className="hover:text-[#ED4059]">{t(`twitter`)}</a></li>
              <li><a href="https://www.notion.so/" className="hover:text-[#ED4059]">{t(`notion`)}</a></li>
              <li><a href="mailto:support@notion-avatar-maker.com" className="hover:text-[#ED4059]">{t(`contactUs`)}</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">{t(`legal`)}</h2>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-[#ED4059]">{t(`privacyPolicy`)}</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-[#ED4059]">{t(`termsConditions`)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#1A237E] text-center">
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

export async function getStaticProps({
  locale,
}: GetStaticPropsContext & { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [`common`])),
    },
  };
}