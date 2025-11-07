import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const base =
    'relative px-4 py-2 text-gray-300 font-medium transition-all duration-300 hover:text-white group';
  const active =
    'text-white bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg';
  const activeUnderline = 'w-full';
  const inactiveUnderline = 'w-0 group-hover:w-full';

  return (
    <nav className="bg-gradient-to-r from-black via-blue-950 to-black backdrop-blur-lg bg-opacity-90 border-b-2 border-b-blue-600/50 shadow-lg shadow-blue-600/20 sticky top-0 z-50 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-600 after:via-purple-600 after:to-blue-600">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with glow effect */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/30 blur-xl rounded-full group-hover:bg-blue-400/40 transition-all duration-300"></div>
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-auto relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${base} ${active}` : base
            }
            to="/"
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${isActive ? activeUnderline : inactiveUnderline}`}
                ></span>
              </>
            )}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${base} ${active}` : base
            }
            to="/projects"
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${isActive ? activeUnderline : inactiveUnderline}`}
                ></span>
              </>
            )}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${base} ${active}` : base
            }
            to="/blogs"
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">Blog</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${isActive ? activeUnderline : inactiveUnderline}`}
                ></span>
              </>
            )}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${base} ${active}` : base
            }
            to="/about"
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">About</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${isActive ? activeUnderline : inactiveUnderline}`}
                ></span>
              </>
            )}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${base} ${active}` : base
            }
            to="/contact"
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${isActive ? activeUnderline : inactiveUnderline}`}
                ></span>
              </>
            )}
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-blue-400 text-2xl hover:text-white transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
          <div className="px-2 py-2 flex gap-1 justify-between">
            <NavLink
              className={({ isActive }) =>
                `flex-1 text-center px-2 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex-1 text-center px-2 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
              to="/projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex-1 text-center px-2 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
              to="/blogs"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex-1 text-center px-2 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex-1 text-center px-2 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
