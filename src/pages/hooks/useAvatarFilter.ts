import { useState, useEffect } from 'react';

export const useAvatarFilter = (avatars: string[], selectedType: string) => {
  const [filteredAvatars, setFilteredAvatars] = useState(avatars);

  useEffect(() => {
    if (selectedType === "all") {
      setFilteredAvatars(avatars);
    } else {
      setFilteredAvatars(avatars.filter(avatar => avatar.toLowerCase().includes(selectedType.toLowerCase())));
    }
  }, [selectedType, avatars]);

  return { filteredAvatars };
};