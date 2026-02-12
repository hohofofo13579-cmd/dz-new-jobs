
import React from 'react';

interface AdPlaceholderProps {
  type: 'banner' | 'square' | 'anchor';
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ type, className = '' }) => {
  if (type === 'anchor') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 h-16 md:h-20 flex items-center justify-center text-xs text-gray-400 font-bold overflow-hidden shadow-lg">
        إعلان (Anchor Ad)
        <button className="absolute top-0 left-0 p-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px]" onClick={() => (event?.target as HTMLElement).parentElement?.remove()}>×</button>
      </div>
    );
  }

  const height = type === 'banner' ? 'h-24 md:h-32' : 'h-64';
  
  return (
    <div className={`${height} ${className} w-full bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center rounded-lg overflow-hidden`}>
      <span className="text-gray-400 font-bold">إعلان AdSense</span>
    </div>
  );
};

export default AdPlaceholder;
