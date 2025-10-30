import profileImage from '/images/pofile.png'; /* Updated path to new images folder */
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loader from '~/components/Loader';

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-md">
        <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
          <motion.img
            src={profileImage}
            alt="Profile"
            className="w-50 h-50 rounded-full object-cover border-4 border-blue-500"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div>
            <h1 className="text-3xl font-bold text-blue-400">
              Hi, This is Ram👋
            </h1>
            <p className="text-lg text-white mb-2">
              I'm a passionate web developer with a knack for creating dynamic
              and responsive web applications.
            </p>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            My mission is to leverage technology to build innovative solutions
            that enhance user experiences and drive business growth. I strive to
            stay at the forefront of web development trends and continuously
            improve my skills to deliver high-quality projects.
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">Tech I Use</h2>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          {[
            'JavaScript',
            'TypeScript',
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'GraphQL',
            'Tailwind CSS',
            'Git',
          ].map((tech) => (
            <motion.li
              key={tech}
              className="bg-gray-700 px-3 py-1 rounded-full hover:scale-110 transition-transform duration-200"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.li>
          ))}
        </ul>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>I can code for 12 hours straight without coffee!</li>
            <li>I once built a website in under 24 hours for a hackathon.</li>
            <li>My favorite coding playlist includes lo-fi beats.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
