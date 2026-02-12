
import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const timeAgo = (dateString: string) => {
    const now = new Date();
    const then = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'الآن';
    if (diffInHours === 1) return 'منذ ساعة';
    if (diffInHours === 2) return 'منذ ساعتين';
    if (diffInHours < 24) return `منذ ${diffInHours} ساعة`;
    return `منذ ${Math.floor(diffInHours / 24)} يوم`;
  };

  return (
    <Link 
      to={`/job/${job.id}`}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 transition-all hover:shadow-md hover:-translate-y-1 block relative overflow-hidden"
    >
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-700 shrink-0 border border-gray-100 dark:border-gray-600">
          <img 
            src={job.logo} 
            alt={job.company} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 min-w-0">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] md:text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded uppercase tracking-wider">
                {job.category}
              </span>
              <span className="text-[10px] md:text-xs text-gray-400 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {timeAgo(job.publishDate)}
              </span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white line-clamp-2 leading-snug">
              {job.title}
            </h3>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {job.company}
            </span>
            <span className="text-[10px] md:text-xs font-bold text-white bg-blue-600 dark:bg-blue-500 px-2 py-0.5 rounded-full">
              {job.wilayaCode} - {job.wilaya}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
