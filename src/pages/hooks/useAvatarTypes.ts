import { useTranslation } from 'next-i18next';
import { useCallback, useState, useEffect } from 'react';

export const useAvatarTypes = () => {
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

  const [avatarTypes, setAvatarTypes] = useState(getAvatarTypes());
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    setAvatarTypes(getAvatarTypes());
    setSelectedType(prevSelectedType => {
      const newTypes = getAvatarTypes();
      return newTypes.some(type => type.key === prevSelectedType) ? prevSelectedType : 'all';
    });
  }, [getAvatarTypes, i18n.language]);

  return { avatarTypes, selectedType, setSelectedType };
};
