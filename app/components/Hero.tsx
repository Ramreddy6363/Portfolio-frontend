import { Link } from 'react-router';
import SplitText from '../Animations/SplitText';
import RotatingText from '~/Animations/RotatingText';
import DarkVeil from '~/Animations/DarkVeil';
const Hero = () => {
  return (
    <header className="text-center py-10 px-5 bg-gray-800 text-white transition-colors duration-300 rounded-lg shadow-lg relative mb-4">
      <DarkVeil
        style={{
          zIndex: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0, 
        }}
      />

      <div className="relative z-10 mb-6 mx-auto">
        <SplitText
          text="Hi there, I'm Ram👋!"
          className="text-4xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center gap-3 mt-6">
        <p className="text-2xl text-gray-100">I’m a</p>
        <RotatingText
          texts={['Web Developer', 'UI/UX Designer', 'Tech Explorer']}
          mainClassName="inline-block bg-blue-800 text-white overflow-hidden py-2 px-5 rounded-lg text-xl font-semibold"
          staggerFrom={'last'}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-110%' }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden"
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
      <div className="relative z-10 flex items-center justify-center gap-4 mt-6">
        <Link
          to="/projects"
          className="text-gray-100 bg-blue-500 py-2 px-6 hover:text-blue-400 transition-colors rounded duration-300"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="text-gray-100 border border-blue-500 px-6 py-2 hover:text-blue-400 transition-colors duration-300 rounded"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Hero;
