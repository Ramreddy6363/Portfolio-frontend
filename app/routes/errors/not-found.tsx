import { Link } from 'react-router';
import FuzzyText from '~/components/FuzzyText';

const hoverIntensity = 0.5; // Defined hoverIntensity
const enableHover = true; // Defined enableHover

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center min-h-[70vh] justify-center gap-6 text-white px-4">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
          color='blue'
        >
          404
        </FuzzyText>
        <div>
          
            <FuzzyText>Page Not Found</FuzzyText>
          <div className="text-xs text-center">
            <p>The page you are looking for does not exist.</p>
          </div> 
        </div>
        <Link to="/" className="text-white hover:bg-blue-700 px-5 py-2 border border-blue-500 rounded transition-colors duration-300 bg-blue-600">
          Go back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
