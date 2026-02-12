
import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MOCK_JOBS } from '../mockData';
import JobCard from '../components/JobCard';
import WilayaGrid from '../components/WilayaGrid';
import AdPlaceholder from '../components/AdPlaceholder';
import { ALGERIAN_WILAYAS, CATEGORIES } from '../constants';

const Home: React.FC = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const wilayaFilter = queryParams.get('wilaya');
  const searchFilter = queryParams.get('q');

  const filteredJobs = useMemo(() => {
    let result = [...MOCK_JOBS];
    if (wilayaFilter) {
      result = result.filter(j => j.wilayaCode === wilayaFilter);
    }
    if (searchFilter) {
      const q = searchFilter.toLowerCase();
      result = result.filter(j => 
        j.title.toLowerCase().includes(q) || 
        j.wilaya.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [wilayaFilter, searchFilter]);

  const activeWilayaName = useMemo(() => {
    return ALGERIAN_WILAYAS.find(w => w.code === wilayaFilter)?.name;
  }, [wilayaFilter]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Search Filter Chips */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
        <Link 
          to="/" 
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all border ${!searchFilter && !wilayaFilter ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-emerald-500'}`}
        >
          الكل
        </Link>
        {CATEGORIES.map(cat => (
          <Link 
            key={cat}
            to={`/?q=${encodeURIComponent(cat)}`}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all border ${searchFilter === cat ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-emerald-500'}`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-white/10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest mb-6">
            منصة الجزائر للتوظيف 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
            مستقبلك المهني <span className="text-emerald-300">يبدأ من هنا</span>
          </h1>
          <p className="text-emerald-50 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed opacity-90">
            تصفح آلاف عروض العمل الموثقة والمسابقات الوطنية في 58 ولاية. نقوم بتحديث الوظائف لحظة بلحظة لضمان وصولك للأفضل.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-600 rounded-full shadow-lg shadow-emerald-500/50"></span>
              {wilayaFilter ? `وظائف ولاية ${activeWilayaName}` : searchFilter ? `نتائج البحث عن: ${searchFilter}` : "أحدث عروض العمل المضافة"}
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg text-xs font-bold text-gray-500 dark:text-gray-400">
              {filteredJobs.length} وظيفة متاحة
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <React.Fragment key={job.id}>
                  <JobCard job={job} />
                  {(index + 1) % 6 === 0 && (
                    <div className="col-span-1 md:col-span-2 xl:col-span-3">
                      <AdPlaceholder type="banner" className="my-2" />
                    </div>
                  )}
                </React.Fragment>
              ))
            ) : (
              <div className="col-span-full py-32 text-center bg-white dark:bg-gray-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
                <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                   </svg>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-black text-xl mb-4">نأسف، لا توجد نتائج مطابقة</p>
                <Link to="/" className="text-emerald-600 font-black hover:underline px-6 py-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl">
                  تصفح كافة الوظائف
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <AdPlaceholder type="square" className="shadow-lg" />
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-800">
            <h3 className="font-black text-lg mb-4 text-emerald-600 border-r-4 border-emerald-600 pr-3">إحصائيات المنصة</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <span className="text-xs font-bold text-gray-500">وظائف اليوم</span>
                <span className="text-sm font-black text-emerald-600">+124</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <span className="text-xs font-bold text-gray-500">مسابقات وطنية</span>
                <span className="text-sm font-black text-blue-600">32</span>
              </div>
            </div>
          </div>
          <AdPlaceholder type="square" className="h-96 shadow-lg" />
        </aside>
      </div>

      <WilayaGrid />
    </div>
  );
};

export default Home;
