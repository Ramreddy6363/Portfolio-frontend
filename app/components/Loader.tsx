import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-blue-950 to-black">
      <div className="relative flex flex-col items-center">
        {/* Glowing background effect */}
        <div className="absolute inset-0 -m-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-75"></div>
        </div>

        {/* Logo with animation */}
        <div className="relative z-10 mb-8">
          <div className="relative animate-bounce-slow">
            {/* Rotating ring around logo */}
            <div className="absolute inset-0 -m-4 rounded-full border-4 border-transparent border-t-blue-500 border-r-cyan-500 animate-spin"></div>
            <div className="absolute inset-0 -m-6 rounded-full border-2 border-transparent border-b-purple-500 border-l-blue-400 animate-spin-slow"></div>

            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="Loading"
              className="h-24 w-24 object-contain drop-shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Loading text with gradient */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Loading...
          </h2>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        
        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
        
        .delay-75 {
          animation-delay: 0.75s;
        }
      `}</style>
    </div>
  );
};

export default Loader;
