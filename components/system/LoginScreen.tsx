import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { AVATAR_URL, WALLPAPER_URL } from '../../constants';

const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(onLogin, 1500);
  };

  const today = new Date();

  return (
    <div 
      className="fixed inset-0 z-[90] bg-cover bg-center flex flex-col items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${WALLPAPER_URL})` }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="z-10 flex flex-col items-center w-full max-w-sm">
        {isLoading ? (
            <div className="flex flex-col items-center gap-4">
                 <img src={AVATAR_URL} alt="User" className="w-32 h-32 rounded-full border-4 border-white/20 shadow-xl" />
                 <h2 className="text-2xl text-white font-medium mb-4">Prateek Mishra</h2>
                 <div className="flex items-center gap-2 text-white">
                    <Loader2 className="animate-spin" size={20}/>
                    <span>Welcome</span>
                 </div>
            </div>
        ) : (
            <>
                <div className="mb-12 text-center text-white drop-shadow-md">
                    <div className="text-7xl font-light mb-2">
                        {today.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false })}
                    </div>
                    <div className="text-xl font-medium">
                        {today.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
                    <img src={AVATAR_URL} alt="User" className="w-32 h-32 rounded-full border-4 border-white/20 shadow-xl" />
                    <h2 className="text-3xl text-white font-medium">Prateek Mishra</h2>
                    
                    <button 
                        onClick={handleLogin}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 px-8 py-2 rounded-md font-medium transition-all flex items-center gap-2 group"
                    >
                        Sign In <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
