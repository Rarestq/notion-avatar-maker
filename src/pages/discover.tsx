import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import { useCallback, useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import PageHead from './components/PageHead';
import Footer from './components/Footer';

{/** TODO by rarestzhou: 
    1,代码优化; 
    2,bug:切换语言时，没有加载图片; ✅
    3,H1标题离Header近的问题 
    4,types 过多时，加一个水平滚动条 ✅
    5, 每个 type 下如果图片过多，那么折叠，点击 More/Less 来展开或折叠，或者直接分页 ✅
*/}
interface AvatarProps {
  avatars: string[];
}

const colors = [
    '#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFDFBA',
    '#E0BBE4', '#FEC8D8', '#FFDFD3', '#B5EAD7', '#C7CEEA',
    '#F0E6EF', '#DCE2F0', '#D6E5FA', '#F9D5E5', '#FFCB77',
    '#FFA45B', '#FFE5B4', '#E8F3D6', '#FCE4EC', '#F0F4C3',
    '#E0F7FA', '#FFF9C4', '#F3E5F5', '#E8EAF6', '#E1F5FE', '#FDFEFE'
];

export default function Discover({ avatars }: AvatarProps) {
  const { t, i18n } = useTranslation([`common`]);
  const getAvatarTypes = useCallback(() => [
    { key: 'all', label: t(`avatarTypes.all`) },
    { key: 'notion', label: t(`avatarTypes.notion`) },
    { key: '3d', label: t(`avatarTypes.3d`) },
    { key: 'memo', label: t(`avatarTypes.memo`) },
    { key: 'vibrant', label: t(`avatarTypes.vibrant`) },
    { key: 'toon', label: t(`avatarTypes.toon`) },
    { key: 'upstream', label: t(`avatarTypes.upstream`) },
    { key: 'bluey', label: t(`avatarTypes.bluey`) },
    { key: 'teams', label: t(`avatarTypes.teams`) }
  ], [t]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [avatarTypes, setAvatarTypes] = useState(getAvatarTypes());
  const [copiedAvatar, setCopiedAvatar] = useState<string | null>(null);
  const [avatarColors, setAvatarColors] = useState<string[]>([]);
  const [isRandomBtnHovered, setIsRandomBtnHovered] = useState(false);
  const [isResetBtnHovered, setIsResetBtnHovered] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [filteredAvatars, setFilteredAvatars] = useState(avatars);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(56);

  // Update avatarTypes when page language changes.
  useEffect(() => {
    setAvatarTypes(getAvatarTypes());
    // Keep the selected type when language changes, ❌: Not Solved
    setSelectedType(prevSelectedType => {
      const newTypes = getAvatarTypes();
      return newTypes.some(type => type.key === prevSelectedType) ? prevSelectedType : 'all';
    });
  }, [getAvatarTypes, i18n.language]);

  // Filter avatars based on selected type
  useEffect(() => {
    if (selectedType === "all") {
      setFilteredAvatars(avatars);
    } else {
      setFilteredAvatars(avatars.filter(avatar => avatar.toLowerCase().includes(selectedType.toLowerCase())));
    }
    setCurrentPage(1);
  }, [selectedType, avatars]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAvatars.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredAvatars.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const copyImageUrl = (imageName: string) => {
    const url = `${window.location.origin}/avatar/diverse_style_avatars/${imageName}`;
    navigator.clipboard.writeText(url);
    setCopiedAvatar(imageName);
    setTimeout(() => setCopiedAvatar(null), 2000);
  };

  const downloadImage = (imageName: string) => {
    const link = document.createElement('a');
    link.href = `/avatar/diverse_style_avatars/${imageName}`;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const changeBackgroundColors = useCallback(() => {
    setAvatarColors(avatars.map(() => colors[Math.floor(Math.random() * colors.length)]));
  }, [avatars]);

  const resetAvatarColors = useCallback(() => {
    setAvatarColors([]);  // Clear all colors
  }, [avatars]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 100;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const showScrollButtons = avatarTypes.length > 10;

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
        additionalTags={
          <>
            {/* additionalTags here */}
          </>
        }
      />
      
      <Header />
      <h1 className="text-4xl font-bold mb-6 text-center">{t(`diverseStyleAvatars`)}</h1>
      
      <p className="mb-12 text-lg text-center max-w-3xl mx-auto">
        {t(`discoverIntro`)}
      </p>

      <div className={`relative mb-6 ${showScrollButtons ? 'px-12' : 'px-4'}`}>
        {showScrollButtons && (
          <button onClick={() => scroll('left')} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2">
            &lt;
          </button>
        )}
        <div 
          ref={scrollContainerRef} 
          className={`flex ${showScrollButtons ? 'overflow-x-auto hide-scrollbar' : 'flex-wrap justify-center'} space-x-4 py-2`}
        >
          {avatarTypes.map(type => (
            <button
              key={type.key}
              onClick={() => setSelectedType(type.key)}
              className={`px-4 py-2 rounded transition-colors duration-200 whitespace-nowrap ${
                selectedType === type.key 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } ${!showScrollButtons ? 'mb-2' : ''}`}
            >
              {type.label}
            </button>
          ))}
        </div>
        {showScrollButtons && (
          <button onClick={() => scroll('right')} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2">
            &gt;
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 mb-24">
        {currentItems.map((avatar, index) => (
          <div key={avatar} className="relative group">
            <div 
              className="w-20 h-20 mx-auto rounded-full overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:-translate-y-6"
              style={{ backgroundColor: avatarColors[index] }}
            >
              <Image
                src={`/avatar/diverse_style_avatars/${avatar}`}
                alt={`Avatar ${avatar}`}
                width={80}
                height={80}
                className={`object-cover ${avatar.startsWith('memo_') ? '' : 'mix-blend-multiply'}`}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="100%" height="100%" fill="#f0f0f0"/></svg>')}`}
              />
            </div>
            <div 
              className="absolute inset-x-0 bottom-0 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-white bg-opacity-75 rounded-lg"
              style={{ backgroundColor: avatarColors[index] }}
            >
              <button
                onClick={() => copyImageUrl(avatar)}
                className="mr-2 p-1 rounded-full bg-white-500 text-white hover:bg-blue-300 transition-colors duration-200"
                title={t('copy')}
              >
              <Image 
                src={copiedAvatar === avatar ? "/icon/check.svg" : "/icon/copy.svg"} 
                alt={copiedAvatar === avatar ? t('copied') : t('copy')} 
                width={20} 
                height={20} 
              />
              </button>
              <button
                onClick={() => downloadImage(avatar)}
                className="p-1 rounded-full bg-white-500 text-white hover:bg-blue-300 transition-colors duration-200"
                title={t('download')}
              >
                <Image src="/icon/download.svg" alt={t('download')} width={20} height={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mb-8">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 bg-gray-200 rounded">
            &lt;
          </button>
          {[...Array(totalPages).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`px-3 py-1 rounded ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {number + 1}
            </button>
          ))}
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 bg-gray-200 rounded">
            &gt;
          </button>
        </div>
      )}

      <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
        <div
          className="transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsRandomBtnHovered(true)}
          onMouseLeave={() => setIsRandomBtnHovered(false)}
        >
          <button
            onClick={changeBackgroundColors}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-3 rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center transform w-14 h-14"
            title={isRandomBtnHovered ? t(`randomAvatarsColor`) : ""}
          >
            <span className="text-3xl">⚡</span>
          </button>
        </div>

        <div
          className="transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsResetBtnHovered(true)}
          onMouseLeave={() => setIsResetBtnHovered(false)}
        >
          <button
            onClick={resetAvatarColors}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-3 rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center transform w-14 h-14"
            title={isResetBtnHovered ? t(`reset`) : ""}
          >
            <span className="text-3xl">↺</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const avatarsDirectory = path.join(process.cwd(), 'public', 'avatar', 'diverse_style_avatars');
    const avatarFiles = fs.readdirSync(avatarsDirectory);
  
    const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  
    return {
      props: {
        avatars: avatarFiles,
        ...(await serverSideTranslations(locale || 'en', [`common`])),
      },
    };
};