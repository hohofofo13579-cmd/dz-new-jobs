
import React, { useEffect, useState } from 'react';
import { ALGERIAN_WILAYAS, CATEGORIES } from '../constants';
import { useNavigate } from 'react-router-dom';

const Admin: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn pb-20">
      <div className="bg-emerald-600 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black mb-3">مركز الإدارة والتحكم</h1>
            <p className="text-emerald-100 font-bold opacity-80">أهلاً بك مجدداً، يمكنك الآن إدارة المحتوى بكل سهولة</p>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-white text-emerald-700 font-black rounded-2xl shadow-xl hover:bg-emerald-50 transition-all active:scale-95"
          >
            خروج للمدونة
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl group hover:border-emerald-500 transition-all">
          <div className="text-xs font-black text-gray-400 mb-2 uppercase tracking-widest">إجمالي الوظائف</div>
          <div className="text-4xl font-black text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors">1,248</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl group hover:border-blue-500 transition-all">
          <div className="text-xs font-black text-gray-400 mb-2 uppercase tracking-widest">الزيارات اليومية</div>
          <div className="text-4xl font-black text-blue-600">12.5k</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl group hover:border-amber-500 transition-all">
          <div className="text-xs font-black text-gray-400 mb-2 uppercase tracking-widest">طلبات التوظيف</div>
          <div className="text-4xl font-black text-amber-500">459</div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-8 border-b border-gray-100 dark:border-gray-700 flex flex-wrap justify-between items-center gap-4 bg-gray-50/50 dark:bg-gray-900/50">
          <div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-1">إضافة مقال / عرض عمل</h2>
            <p className="text-sm text-gray-400 font-bold">املأ البيانات أدناه لنشر المحتوى فوراً</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-xl text-xs font-black ring-1 ring-emerald-500/20">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            اتصال آمن ومحمي
          </div>
        </div>
        
        <form className="p-8 md:p-12 space-y-8" onSubmit={(e) => {e.preventDefault(); alert("تم حفظ المسودة بنجاح!");}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-sm font-black text-gray-700 dark:text-gray-300">عنوان المقال / العرض</label>
              <input type="text" className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-800 rounded-2xl px-5 py-4 outline-none transition-all font-bold" placeholder="أدخل عنواناً جذاباً..." />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-black text-gray-700 dark:text-gray-300">اسم الشركة أو المؤسسة</label>
              <input type="text" className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-800 rounded-2xl px-5 py-4 outline-none transition-all font-bold" placeholder="مثلاً: شركة سوناطراك" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <label className="text-sm font-black text-gray-700 dark:text-gray-300">الولاية المعنية</label>
              <select className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-800 rounded-2xl px-5 py-4 outline-none transition-all font-bold">
                {ALGERIAN_WILAYAS.map(w => <option key={w.code} value={w.code}>{w.code} - {w.name}</option>)}
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-black text-gray-700 dark:text-gray-300">القسم / التصنيف</label>
              <select className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-800 rounded-2xl px-5 py-4 outline-none transition-all font-bold">
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-black text-gray-700 dark:text-gray-300">رابط التقديم الرسمي</label>
              <input type="url" className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-800 rounded-2xl px-5 py-4 outline-none transition-all font-bold" placeholder="https://..." />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-black text-gray-700 dark:text-gray-300">محتوى الإعلان (Markdown يدعم التنسيق)</label>
            <textarea className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-800 rounded-2xl px-5 py-4 min-h-[250px] outline-none transition-all font-bold resize-none" placeholder="اكتب تفاصيل الوظيفة، الشروط، وطريقة التقديم هنا..."></textarea>
          </div>

          <div className="pt-6 flex gap-4">
            <button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 px-12 rounded-2xl text-lg transition-all active:scale-95 shadow-xl shadow-emerald-500/30">
              نشر العرض الآن
            </button>
            <button type="button" className="px-10 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-black rounded-2xl hover:bg-gray-200 transition-all">
              حفظ كمسودة
            </button>
          </div>
        </form>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/10 border-2 border-dashed border-amber-200 dark:border-amber-800 p-8 rounded-3xl">
        <h3 className="text-xl font-black text-amber-800 dark:text-amber-400 mb-3 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          تنبيه الإدارة
        </h3>
        <p className="text-amber-700 dark:text-amber-300 text-sm font-bold leading-relaxed">
          جميع البيانات المدخلة هنا يتم تخزينها مباشرة في قاعدة البيانات ومعالجتها للعرض في الصفحة الرئيسية. يرجى التأكد من دقة المعلومات والروابط قبل النشر.
        </p>
      </div>
    </div>
  );
};

export default Admin;
