
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [search, setSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/?q=${encodeURIComponent(search)}`);
      setIsMenuOpen(false);
    }
  };

  const handleAdminAccess = () => {
    const password = window.prompt("يرجى إدخال رمز الوصول السري:");
    if (password === "dz2025") {
      navigate('/admin');
    } else if (password !== null) {
      alert("رمز خاطئ! الوصول مرفوض.");
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-10 md:top-12 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800 transition-all">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        
        {/* Improved Logo & Title */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 text-white w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-xl md:text-2xl shadow-xl transform group-hover:rotate-6 transition-transform border-2 border-white/20">
              DZ
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-lg md:text-xl text-emerald-600 dark:text-emerald-400 tracking-tight">وظائف الجزائر</span>
            <span className="text-[10px] md:text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">الجديدة | NEW JOB</span>
          </div>
        </Link>

        {/* Improved Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden lg:flex relative group">
          <input
            type="text"
            placeholder="ابحث عن منصب عمل أو ولاية..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-100 dark:bg-gray-800/50 border border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-800 rounded-2xl py-3 px-12 outline-none dark:text-white transition-all text-sm font-bold shadow-inner"
          />
          <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
        </form>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          
          {/* Theme Toggle with New Icons */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-yellow-400 hover:ring-2 ring-emerald-500/20 transition-all"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            )}
          </button>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
              <span>القائمة</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMenuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsMenuOpen(false)}></div>
                <div className="absolute left-0 mt-3 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 z-20 overflow-hidden py-2 animate-slideUp">
                  <div className="px-4 py-2 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50 dark:border-gray-700 mb-1">تصفح حسب القسم</div>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat}
                      to={`/?q=${encodeURIComponent(cat)}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 transition-colors"
                    >
                      وظائف {cat}
                    </Link>
                  ))}
                  <div className="h-px bg-gray-100 dark:bg-gray-700 my-2"></div>
                  <button
                    onClick={handleAdminAccess}
                    className="w-full text-right px-4 py-2 text-sm font-black text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-between"
                  >
                    <span>لوحة الإدارة</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
