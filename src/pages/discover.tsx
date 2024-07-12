import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Header from './components/Header';
import PageHead from './components/PageHead';
import Footer from './components/Footer';
import AvatarGrid from './components/AvatarGrid';
import TypeSelector from './components/TypeSelector';
import Pagination from './components/Pagination';
import ColorChangeButtons from './components/ColorChangeButtons';
import { useAvatarTypes } from './hooks/useAvatarTypes';
import { useAvatarFilter } from './hooks/useAvatarFilter';
import { usePagination } from './hooks/usePagination';
import { useColorChange } from './hooks/useColorChange';

interface DiscoverProps {
  avatars: string[];
}

export default function Discover({ avatars }: DiscoverProps) {
  const { t } = useTranslation([`common`]);
  const { avatarTypes, selectedType, setSelectedType } = useAvatarTypes();
  const { filteredAvatars } = useAvatarFilter(avatars, selectedType);
  const { currentItems, currentPage, totalPages, paginate } = usePagination(filteredAvatars, 56);
  const { avatarColors, changeBackgroundColors, resetAvatarColors } = useColorChange(avatars);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHead
        pagePath="/discover"
        title={t(`discoverTitle`)}
        description={t(`discoverDescription`)}
        ogMetaTags={
          <>
            <meta property="og:site_name" content={t(`siteTitle`)} />
            <meta property="og:title" content={t(`siteTitle`)} />
            <meta property="og:description" content={t(`siteDescription`)} />
          </>
        }
        twitterMetaTags={
          <>
            <meta name="twitter:title" content={t(`siteTitle`)} />
            <meta name="twitter:description" content={t(`siteDescription`)} />
          </>
        }
      />
      
      <Header />
      <h1 className="text-4xl font-bold mb-6 mt-12 text-center">{t(`diverseStyleAvatars`)}</h1>
      
      <h2 className="mb-12 text-lg text-center max-w-3xl mx-auto text-gray-600">
        {t(`discoverIntro`)}
      </h2>

      <TypeSelector 
        avatarTypes={avatarTypes} 
        selectedType={selectedType} 
        setSelectedType={setSelectedType} 
      />

      <AvatarGrid 
        currentItems={selectedType === 'all' ? currentItems : filteredAvatars} 
        avatarColors={avatarColors} 
      />

      {selectedType === 'all' && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      )}

      <ColorChangeButtons 
        changeBackgroundColors={changeBackgroundColors}
        resetAvatarColors={resetAvatarColors}
      />

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const fs = await import('fs');
  const path = await import('path');
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');

  const avatarsDirectory = path.join(process.cwd(), 'public', 'avatar', 'diverse_style_avatars');
  const avatarFiles = fs.readdirSync(avatarsDirectory);

  return {
    props: {
      avatars: avatarFiles,
      ...(await serverSideTranslations(locale || 'en', [`common`])),
    },
  };
};