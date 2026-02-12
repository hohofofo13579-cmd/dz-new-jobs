
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BreakingSlider from './components/BreakingSlider';
import Home from './pages/Home';
import JobDetail from './pages/JobDetail';
import Redirect from './pages/Redirect';
import Admin from './pages/Admin';
import AdPlaceholder from './components/AdPlaceholder';
import { MOCK_JOBS } from './mockData';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors font-cairo">
        {/* Top Floating Features */}
        <BreakingSlider jobs={MOCK_JOBS} />
        
        {/* Static Content Push for Floating Slider */}
        <div className="h-10 md:h-12"></div>

        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

        <main className="container mx-auto px-4 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="/go" element={<Redirect />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold">و</div>
                  <span className="font-bold text-xl text-gray-900 dark:text-white">وظائف الجزائر الجديدة</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                  المنصة الرائدة والأكثر مصداقية للتوظيف في الجزائر. نهدف لتمكين الشباب الجزائري من الوصول لأفضل الفرص المهنية والمسابقات الوطنية بكل شفافية.
                </p>
                <div className="flex gap-4">
                  {/* Mock Social Links */}
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-600 transition-colors cursor-pointer">
                      S
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">روابط سريعة</h4>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400 font-bold">
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">من نحن</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">اتصل بنا</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">سياسة الخصوصية</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition-colors">أعلن معنا</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">اشترك في النشرة</h4>
                <p className="text-xs text-gray-500 mb-4 font-medium">توصل بآخر الوظائف مباشرة في بريدك</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="بريدك..." className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm outline-none" />
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md">انضم</button>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
              <p className="text-xs text-gray-400 font-bold">
                جميع الحقوق محفوظة © {new Date().getFullYear()} - وظائف الجزائر الجديدة
              </p>
              <p className="text-[10px] text-gray-300 mt-2 font-medium">
                بني بكل حب في الجزائر 🇩🇿
              </p>
            </div>
          </div>
        </footer>

        {/* Global Anchor Ad */}
        <AdPlaceholder type="anchor" />
      </div>
    </Router>
  );
};

export default App;
