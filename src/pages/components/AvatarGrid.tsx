import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

interface AvatarGridProps {
  currentItems: string[];
  avatarColors: string[];
}

const AvatarGrid: React.FC<AvatarGridProps> = ({ currentItems, avatarColors }) => {
  const { t } = useTranslation([`common`]);
  const [copiedAvatar, setCopiedAvatar] = useState<string | null>(null);

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

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 mb-24">
      {currentItems.map((avatar, index) => (
        <div key={avatar} className="relative group">
          <div 
            className="w-20 h-20 mx-auto rounded-full overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:-translate-y-6"
            style={{ backgroundColor: avatarColors[index % avatarColors.length] }}
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
            style={{ backgroundColor: avatarColors[index % avatarColors.length] }}
          >
            <button
              onClick={() => copyImageUrl(avatar)}
              className="mr-2 p-1 rounded-full bg-white-500 text-white hover:bg-blue-300 transition-colors duration-200"
              title={t(`copy`)}
            >
              <Image 
                src={copiedAvatar === avatar ? "/icon/check.svg" : "/icon/copy.svg"} 
                alt={copiedAvatar === avatar ? t(`copied`) : t(`copy`)} 
                width={20} 
                height={20} 
              />
            </button>
            <button
              onClick={() => downloadImage(avatar)}
              className="p-1 rounded-full bg-white-500 text-white hover:bg-blue-300 transition-colors duration-200"
              title={t(`download`)}
            >
              <Image src="/icon/download.svg" alt={t(`download`)} width={20} height={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarGrid;