
import React from 'react';
import { ALGERIAN_WILAYAS } from '../constants';
import { Link } from 'react-router-dom';

const WilayaGrid: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="w-2 h-6 bg-emerald-600 rounded-full"></span>
          الوظائف حسب الولاية (58 ولاية)
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {ALGERIAN_WILAYAS.map((wilaya) => (
          <Link
            key={wilaya.code}
            to={`/?wilaya=${wilaya.code}`}
            className="group flex items-center gap-2 p-2 rounded-lg border border-gray-50 dark:border-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:border-emerald-200 transition-all text-sm"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded text-[10px] font-bold text-gray-500 dark:text-gray-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              {wilaya.code}
            </span>
            <span className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
              {wilaya.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WilayaGrid;
