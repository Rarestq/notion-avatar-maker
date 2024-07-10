import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import { useCallback, useState, useEffect } from 'react';
import Header from './components/Header';
import PageHead from './components/PageHead';
import Footer from './components/Footer';

{/** TODO by rarestzhou: 代码优化 */}
interface AvatarProps {
  avatars: string[];
}

const colors = [
    '#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFDFBA',
    '#E0BBE4', '#FEC8D8', '#FFDFD3', '#B5EAD7', '#C7CEEA',
    '#F0E6EF', '#DCE2F0', '#D6E5FA', '#F9D5E5', '#FFCB77',
    '#FFA45B', '#FFE5B4', '#E8F3D6', '#FCE4EC', '#F0F4C3',
    '#E0F7FA', '#FFF9C4', '#F3E5F5', '#E8EAF6', '#E1F5FE'
];

{/** TODO by rarestzhou: 多语言 */}
const avatarTypes = ['All', 'notion', '3d', 'memo', 'vibrant', 'toon', 'upstream', 'bluey', 'teams'];

export default function Discover({ avatars }: AvatarProps) {
  const { t } = useTranslation([`common`]);

  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [avatarColors, setAvatarColors] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedType, setSelectedType] = useState('All');
  const [filteredAvatars, setFilteredAvatars] = useState(avatars);

  useEffect(() => {
    resetAvatars();
  }, [avatars]);

  {/** TODO by rarestzhou: 鼠标悬浮到按钮时，需要有个背景颜色 */}
  useEffect(() => {
    if (selectedType === 'All') {
      setFilteredAvatars(avatars);
    } else {
      setFilteredAvatars(avatars.filter(avatar => avatar.includes(selectedType.toLowerCase())));
    }
  }, [selectedType, avatars]);

  const copyImageUrl = (imageName: string) => {
    const url = `${window.location.origin}/avatar/diverse_style_avatars/${imageName}`;
    navigator.clipboard.writeText(url);
    setCopiedUrl(imageName);
    setTimeout(() => setCopiedUrl(null), 2000);
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

  const resetAvatars = useCallback(() => {
    setSelectedType('All');
    setFilteredAvatars(avatars);
  }, [avatars]);

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
        {t('discoverIntro')}
      </p>

      <div className="flex justify-between items-center mb-6 px-6">
        <div className="flex space-x-4">
          {avatarTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded ${selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {type}
            </button>
          ))}
        </div>
        <button
          onClick={resetAvatars}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
        >
          Reset {/** TODO by rareszhou: Config in common.json file */}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 mb-24">
        {filteredAvatars.map((avatar, index) => (
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
                {/** TODO by rarestzhou: copy 点击后图案由复制按钮变为打钩按钮 */}
              <button
                onClick={() => copyImageUrl(avatar)}
                className="mr-2 p-1 rounded-full bg-white-500 text-white hover:bg-blue-300 transition-colors duration-200"
                title={t(`copy`)}
              >
                <Image src="/icon/copy.svg" alt={t(`copy`)} width={20} height={20} />
              </button>
              {/** TODO by rarestzhou: download 悬浮展示图片下载路径，位置在页面左下角 */}
              <button
                onClick={() => downloadImage(avatar)}
                className="p-1 rounded-full bg-white-500 text-white hover:bg-blue-300 transition-colors duration-200"
                title={avatar}
              >
                <Image src="/icon/download.svg" alt={t(`download`)} width={20} height={20} />
              </button>
            </div>
            {/** TODO by rarestzhou: 文案展示位置优化 */}
            {copiedUrl === avatar && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white px-2 py-1 rounded text-sm">
                {t(`copied`)}
              </div>
            )}
          </div>
        ))}
      </div>

      <div 
        className="fixed bottom-8 right-8 transition-all duration-300 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={changeBackgroundColors}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-3 rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center ${isHovered ? 'w-auto px-6' : 'w-14 h-14'}`}
        >
          {isHovered ? (
            t(`randomAvatarsColor`)
          ) : (
            <Image src="/icon/dice.png" alt={t(`randomAvatarsColor`)} width={28} height={28} />
          )}
        </button>
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