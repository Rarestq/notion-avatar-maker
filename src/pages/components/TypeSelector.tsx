import React, { useRef } from 'react';

interface TypeSelectorProps {
  avatarTypes: { key: string; label: string }[];
  selectedType: string;
  setSelectedType: (type: string) => void;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({ avatarTypes, selectedType, setSelectedType }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
  );
};

export default TypeSelector;