import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

interface ColorChangeButtonsProps {
  changeBackgroundColors: () => void;
  resetAvatarColors: () => void;
}

const ColorChangeButtons: React.FC<ColorChangeButtonsProps> = ({ changeBackgroundColors, resetAvatarColors }) => {
  const { t } = useTranslation([`common`]);
  const [isRandomBtnHovered, setIsRandomBtnHovered] = useState(false);
  const [isResetBtnHovered, setIsResetBtnHovered] = useState(false);

  return (
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
  );
};

export default ColorChangeButtons;