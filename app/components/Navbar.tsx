import { NavLink } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '/images/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const base = 'transition hover:text-blue-300';
  const active =
    'text-black bg-white px-2 py-1 rounded-lg font-semibold transition';

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-gradient-to-r from-black via-blue-900 to-black border-b-2 border-blue-500 shadow-md sticky top-0 z-50"
      style={{ height: 'calc(100% - 10px)', padding: '0.5rem 1rem' }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="PixelCrafted by Ram"
            className="h-16 w-auto"
            style={{ objectFit: 'contain' }}
          />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300 font-semibold">
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/blogs"
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-300 focus:outline-none cursor-pointer"
          >
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-r from-black via-blue-900 to-black border-t border-gray-700 px-4 py-2 space-y-2 text-center text-md absolute left-0 w-full text-gray-200 font-medium flex items-center justify-center gap-4"
          style={{ top: '100%' }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/blogs"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
