import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { useState, useEffect, lazy, Suspense } from 'react';
import BlurText from '~/Animations/BlurText';
import RotatingText from '~/Animations/RotatingText';

// Lazy load the heavy WebGL component
const DarkVeil = lazy(() => import('~/Animations/DarkVeil'));

type HeroProps = {
  name?: string;
  text?: string;
};

const Hero: React.FC<HeroProps> = ({}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="relative min-h-[30vh] sm:min-h-[35vh] md:min-h-[45vh] flex items-center justify-center text-white overflow-hidden">
      {/* DarkVeil animated background wrapper */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '100%',
          zIndex: 0,
        }}
      >
        {mounted ? (
          <Suspense
            fallback={
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'transparent',
                }}
              />
            }
          >
            <DarkVeil />
          </Suspense>
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
            }}
          />
        )}
      </div>

      {/* Content with relative positioning to appear above DarkVeil */}
      <div className="relative z-10 max-w-5xl mx-auto py-4 sm:py-6 md:py-4 px-4">
        {mounted ? (
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            {/* Animated heading */}
            <BlurText
              text="Hi there, I'm Ram 👋!"
              delay={250}
              animateBy="words"
              direction="bottom"
              className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight"
            />

            {/* Rotating text section */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-gray-200">I'm a</span>
              <RotatingText
                texts={['Web Developer', 'UI/UX Designer', 'Tech Enthusiast']}
                mainClassName="px-3 sm:px-4 md:px-5 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white font-semibold overflow-hidden py-1.5 sm:py-2 md:py-2.5 rounded-xl shadow-lg"
                staggerFrom={'last'}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/projects"
                className="group relative px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <a
                href="/Ramreddy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
              >
                <span>📄</span>
                <span>Resume</span>
              </a>
            </motion.div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            {/* Fallback content for SSR */}
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Hi there, I'm Ram 👋!
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-gray-200">I'm a</span>
              <span className="px-3 sm:px-4 md:px-5 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white font-semibold py-1.5 sm:py-2 md:py-2.5 rounded-xl shadow-lg">
                Web Developer
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/projects"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg"
              >
                View Projects
              </Link>
              <a
                href="/Ramreddy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg"
              >
                <span>📄</span>
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Hero;
