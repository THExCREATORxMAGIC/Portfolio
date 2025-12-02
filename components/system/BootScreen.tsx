import React, { useEffect, useState } from 'react';

const BootScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center text-white">
      {/* Windows Logo */}
      <div className="mb-16">
         <div className="grid grid-cols-2 gap-1">
            <div className="w-10 h-10 bg-[#00a4ef]"></div>
            <div className="w-10 h-10 bg-[#00a4ef]"></div>
            <div className="w-10 h-10 bg-[#00a4ef]"></div>
            <div className="w-10 h-10 bg-[#00a4ef]"></div>
         </div>
      </div>
      
      {/* Loading Spinner */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default BootScreen;
