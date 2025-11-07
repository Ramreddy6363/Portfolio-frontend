import { Link } from 'react-router';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Animated background effects - much softer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-white px-4 max-w-2xl mx-auto text-center">
        {/* 404 Number with animation - softer colors */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 blur-3xl opacity-30">
            <h1 className="text-[180px] sm:text-[220px] md:text-[280px] font-black bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              404
            </h1>
          </div>
          <h1 className="relative text-[180px] sm:text-[220px] md:text-[280px] font-black bg-gradient-to-r from-gray-400 via-blue-300 to-gray-400 bg-clip-text text-transparent leading-none">
            404
          </h1>
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-md mx-auto">
            Oops! The page you're looking for seems to have vanished into the
            digital void. 🌌
          </p>
        </motion.div>

        {/* Animated illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="my-8"
        >
          <div className="relative w-64 h-64">
            {/* Floating elements - softer colors */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-500/20"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gray-500/10 rounded-full backdrop-blur-sm border border-gray-500/20"
            ></motion.div>
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute top-1/2 right-1/3 w-12 h-12 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-500/20 rotate-45"
            ></motion.div>
          </div>
        </motion.div>

        {/* Action buttons - softer colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            to="/projects"
            className="px-8 py-4 border-2 border-gray-600 text-gray-400 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 hover:shadow-lg hover:shadow-gray-700/20 hover:scale-105"
          >
            View Projects
          </Link>
        </motion.div>

        {/* Help text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-sm text-gray-600 mt-8"
        >
          If you believe this is an error, please{' '}
          <Link
            to="/contact"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            contact us
          </Link>
        </motion.p>
      </div>

      {/* Decorative grid overlay - much subtler */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
    </div>
  );
};

export default NotFound;
