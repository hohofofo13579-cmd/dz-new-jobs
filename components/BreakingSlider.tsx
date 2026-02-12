
import React, { useState, useEffect } from 'react';
import { Job } from '../types';
import { Link } from 'react-router-dom';

interface BreakingSliderProps {
  jobs: Job[];
}

const BreakingSlider: React.FC<BreakingSliderProps> = ({ jobs }) => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ease-in-out bg-emerald-600 text-white shadow-md ${isShrunk ? 'h-8 py-1' : 'h-10 py-2'}`}>
      <div className="container mx-auto px-4 flex items-center overflow-hidden h-full">
        <div className="whitespace-nowrap bg-red-500 text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-sm mr-2 shrink-0 animate-pulse">
          جديد الوظائف:
        </div>
        <div className="flex-1 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-6 whitespace-nowrap animate-marquee md:animate-none md:flex-row items-center h-full">
            {jobs.slice(0, 10).map((job) => (
              <Link 
                key={job.id} 
                to={`/job/${job.id}`}
                className="text-[11px] md:text-sm hover:underline flex items-center gap-1"
              >
                <span className="opacity-70">•</span>
                {job.title} ({job.wilaya})
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingSlider;
