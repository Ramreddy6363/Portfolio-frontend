import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-8 rounded-t-lg shadow-lg w-full relative mt-auto">
      <div className="container mx-auto text-center">
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; {new Date().getFullYear()} PixelCrafted by Ram. All rights
          reserved.
        </motion.p>
        <motion.p
          className="mt-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <a href="/contact" className="text-blue-400 hover:underline">
            Contact Me
          </a>
        </motion.p>
        <motion.div
          className="mt-4 flex justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href="https://github.com/Ramreddy6363"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 px-2 py-1 rounded bg-blue-500 hover:bg-blue-700 hover:scale-110 transition-transform"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ram-reddy-b35589305/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 px-2 py-1 rounded bg-blue-500 hover:bg-blue-700 hover:scale-110 transition-transform"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
