
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_JOBS } from '../mockData';
import { Job } from '../types';
import SocialShare from '../components/SocialShare';
import AdPlaceholder from '../components/AdPlaceholder';
// Fix: Import the JobCard component used in the similar jobs section
import JobCard from '../components/JobCard';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const found = MOCK_JOBS.find(j => j.id === id);
    if (found) {
      setJob(found);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!job) return <div className="text-center py-20">جاري التحميل...</div>;

  return (
    <div className="max-w-4xl mx-auto animate-slideUp">
      <nav className="mb-6 flex items-center gap-2 text-sm font-bold text-gray-500">
        <Link to="/" className="hover:text-emerald-600">الرئيسية</Link>
        <span>/</span>
        <span className="text-emerald-600">{job.category}</span>
        <span>/</span>
        <span className="truncate">{job.title}</span>
      </nav>

      <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Header Header */}
        <div className="bg-gray-50 dark:bg-gray-900/50 p-6 md:p-10 border-b border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800 shrink-0">
                <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-2">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">{job.company}</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">{job.wilaya}</span>
                  <span className="text-gray-400 text-xs font-bold">{new Date(job.publishDate).toLocaleDateString('ar-DZ')}</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => navigate(`/go?url=${encodeURIComponent(job.applyUrl)}`)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 px-10 rounded-xl text-lg shadow-lg shadow-emerald-500/20 transition-all active:scale-95 shrink-0"
            >
              قدم الآن للوظيفة
            </button>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <AdPlaceholder type="banner" className="mb-8" />
          
          <SocialShare title={job.title} url={window.location.href} position="inline" />

          <div className="prose prose-emerald dark:prose-invert max-w-none">
            <h3 className="text-xl font-bold mb-4 text-emerald-600 border-r-4 border-emerald-600 pr-3">تفاصيل العرض والشروط:</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line mb-8">
              {job.content}
              {"\n\n"}
              تعلن شركة {job.company} الكائن مقرها بولاية {job.wilaya} عن حاجتها الماسة لتوظيف {job.title}.
              {"\n\n"}
              **الشروط المطلوبة:**
              - خبرة لا تقل عن سنتين في المجال.
              - مستوى تعليمي يتناسب مع المنصب.
              - إقامة في ولاية {job.wilaya} أو ما جاورها.
              - السن لا يتجاوز 40 سنة.
              {"\n\n"}
              **الملف المطلوب:**
              - السيرة الذاتية (CV).
              - نسخة من الشهادة أو الدبلوم.
              - نسخة من بطاقة التعريف الوطنية.
            </p>
          </div>

          <AdPlaceholder type="banner" className="my-8" />

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 dark:text-amber-400 mb-2">ملاحظة هامة:</h4>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              يرجى التأكد من صحة المعلومات المقدمة والالتزام بمواعيد التقديم. نحن في منصة "وظائف الجزائر الجديدة" مجرد وسيط لنشر الاعلانات ولا نتحمل مسؤولية التوظيف.
            </p>
          </div>

          <div className="mt-10 pt-10 border-t border-gray-100 dark:border-gray-800 flex justify-center">
            <button 
              onClick={() => navigate(`/go?url=${encodeURIComponent(job.applyUrl)}`)}
              className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 px-16 rounded-2xl text-xl shadow-xl shadow-emerald-500/30 transition-all hover:-translate-y-1"
            >
              اضغط هنا للتقديم على الرابط الرسمي
            </button>
          </div>

          <SocialShare title={job.title} url={window.location.href} position="inline" />
        </div>
      </article>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">وظائف مشابهة قد تهمك</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MOCK_JOBS.slice(0, 4).map(j => <JobCard key={j.id} job={j} />)}
        </div>
      </div>

      <SocialShare title={job.title} url={window.location.href} position="fixed-bottom" />
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default JobDetail;
