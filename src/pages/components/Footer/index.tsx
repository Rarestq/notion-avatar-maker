import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { languageOptions } from '../../../languageOptions';

export default function Footer() {
  const { t } = useTranslation(`common`);
  const router = useRouter();

  const encodedEmail = 'support' + '@' + 'notion-avatar-maker.com';

  return (
    <footer className="bg-[#F6F1F1] text-[#1A237E] flex flex-col items-center py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.gif" alt={t(`logoAlt`)} width={50} height={50} priority />
            {/* <br /> */}
            <span className="text-lg text-[#ED4059] ml-2">
              {t(`siteName`)}
            </span>
            <p className="mt-4 text-[#3F51B5]">{t(`footerDescription`)}</p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">{t(`explore`)}</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#3F51B5] hover:text-[#ED4059]">{t(`siteName`)}</Link></li>
              <li><Link href="/discover" className="text-[#3F51B5] hover:text-[#ED4059]">{t(`discover`)}</Link></li>
              {/* TODO by rarestzhou： 多语言配置 */}
              {/* <li><Link href="/blog" className="text-[#3F51B5] hover:text-[#ED4059]">{t(`blog`)}</Link></li> */}
              {/* Add more links as needed */}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">{t(`sayHi`)}</h2>
            <ul className="space-y-2">
              <li><a href="https://github.com/mayandev/notion-avatar" className="text-[#3F51B5] hover:text-[#ED4059]">{t(`github`)}</a></li>
              <li><a href="https://twitter.com/rarestzhou" className="text-[#3F51B5] hover:text-[#ED4059]">{t(`twitter`)}</a></li>
              {/* <li><a href="https://www.notion.so/" className="hover:text-[#ED4059]">{t(`notion`)}</a></li> */}
              <li><a href={`mailto:${encodedEmail}`} className="text-[#3F51B5] hover:text-[#ED4059]">{t(`contactUs`)}</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">{t(`legal`)}</h2>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-[#3F51B5] hover:text-[#ED4059]">{t(`privacyPolicy`)}</Link></li>
              <li><Link href="/terms-of-service" className="text-[#3F51B5] hover:text-[#ED4059]">{t(`termsConditions`)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8 mt-8 pt-8">
          {languageOptions.map((lang) => (
            <Link 
              key={lang.code}
              href={router.asPath}
              locale={lang.code}
              className="text-[#3F51B5] hover:text-[#ED4059] flex items-center"
            >
              <span className="mr-1">{lang.flag}</span>
              {lang.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-[#1A237E] text-center text-[#3F51B5]">
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