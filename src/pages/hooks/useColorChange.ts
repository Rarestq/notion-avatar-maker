import { useState, useCallback } from 'react';

const colors = [
  '#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFDFBA',
  '#E0BBE4', '#FEC8D8', '#FFDFD3', '#B5EAD7', '#C7CEEA',
  '#F0E6EF', '#DCE2F0', '#D6E5FA', '#F9D5E5', '#FFCB77',
  '#FFA45B', '#FFE5B4', '#E8F3D6', '#FCE4EC', '#F0F4C3',
  '#E0F7FA', '#FFF9C4', '#F3E5F5', '#E8EAF6', '#E1F5FE', '#FDFEFE'
];

export const useColorChange = (avatars: string[]) => {
  const [avatarColors, setAvatarColors] = useState<string[]>([]);

  const changeBackgroundColors = useCallback(() => {
    setAvatarColors(avatars.map(() => colors[Math.floor(Math.random() * colors.length)]));
  }, [avatars]);

  const resetAvatarColors = useCallback(() => {
    setAvatarColors([]);
  }, []);

  return { avatarColors, changeBackgroundColors, resetAvatarColors };
};

export default useColorChange;