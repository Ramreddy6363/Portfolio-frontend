import { Link } from 'react-router';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-black via-blue-950 to-black border-t border-blue-500/20 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4">
              About Me
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate web developer crafting beautiful and functional digital
              experiences. Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-blue-500">→</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-blue-500">→</span> Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-blue-500">→</span> Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-blue-500">→</span> About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-blue-500">→</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4">
              Connect
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Let's connect and build something amazing together!
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                aria-label="Email"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Ramreddy. Made with
              <FaHeart className="text-red-500 animate-pulse" />
              and lots of ☕
            </p>
            <p className="text-gray-500 text-xs">
              Designed & Developed with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
