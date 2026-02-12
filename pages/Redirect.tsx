
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';

const Redirect: React.FC = () => {
  const [timer, setTimer] = useState(15);
  const { search } = useLocation();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(search);
  const targetUrl = urlParams.get('url');

  useEffect(() => {
    if (!targetUrl) {
      navigate('/');
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetUrl, navigate]);

  const handleGo = () => {
    if (timer === 0 && targetUrl) {
      window.open(targetUrl, '_blank');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 md:py-20 text-center animate-fadeIn">
      <AdPlaceholder type="banner" className="mb-10" />

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-2 bg-emerald-600">
           <div 
             className="h-full bg-emerald-300 transition-all duration-1000 ease-linear" 
             style={{ width: `${(timer / 15) * 100}%` }}
           ></div>
        </div>

        <div className="mb-8">
          <div className="w-24 h-24 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6 border-4 border-emerald-100 dark:border-emerald-800">
             <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400">{timer}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4">
            جاري تحويلك للموقع الرسمي للمسابقة.. يرجى الانتظار
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-bold">
            يتم فحص الرابط الآن للتأكد من أمانه وفعاليته
          </p>
        </div>

        <AdPlaceholder type="banner" className="my-8" />

        <div className="space-y-4">
          <button
            onClick={handleGo}
            disabled={timer > 0}
            className={`w-full py-5 px-8 rounded-2xl text-xl font-black transition-all shadow-xl ${
              timer > 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/30 active:scale-95'
            }`}
          >
            {timer > 0 ? `يرجى الانتظار ${timer} ثانية...` : 'انقر هنا للتوجه للرابط الآن'}
          </button>
          
          <p className="text-xs text-gray-400 font-medium">
            في حال لم يتم تحويلك تلقائياً، يرجى الضغط على الزر أعلاه
          </p>
        </div>
      </div>

      <AdPlaceholder type="banner" className="mt-10" />
    </div>
  );
};

export default Redirect;
