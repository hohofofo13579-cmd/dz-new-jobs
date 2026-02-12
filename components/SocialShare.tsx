
import React from 'react';

interface SocialShareProps {
  title: string;
  url: string;
  position: 'inline' | 'fixed-bottom';
}

const SocialShare: React.FC<SocialShareProps> = ({ title, url, position }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const platforms = [
    { 
      name: 'فيسبوك', 
      color: 'bg-[#1877F2]', 
      icon: 'F', 
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` 
    },
    { 
      name: 'واتساب', 
      color: 'bg-[#25D366]', 
      icon: 'W', 
      link: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}` 
    },
    { 
      name: 'تلجرام', 
      color: 'bg-[#0088cc]', 
      icon: 'T', 
      link: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}` 
    }
  ];

  if (position === 'fixed-bottom') {
    return (
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around p-2 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${p.color} text-white px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2`}
          >
            شارك على {p.name}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 py-4 border-y border-gray-100 dark:border-gray-800 my-6">
      <span className="w-full text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">شارك هذا العرض:</span>
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${p.color} text-white px-4 py-2 rounded-lg font-bold text-xs hover:opacity-90 transition-opacity flex items-center gap-2`}
        >
          {p.name}
        </a>
      ))}
      <button 
        onClick={() => {
          navigator.clipboard.writeText(url);
          alert('تم نسخ الرابط!');
        }}
        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-bold text-xs hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        نسخ الرابط
      </button>
    </div>
  );
};

export default SocialShare;
