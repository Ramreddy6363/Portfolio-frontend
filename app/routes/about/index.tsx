import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About Ram Reddy - Web Developer | Skills & Experience' },
    {
      name: 'description',
      content:
        'Learn about Ram Reddy, a passionate full-stack web developer with expertise in React, Node.js, and modern web technologies. Discover my skills, experience, and approach to building exceptional web applications.',
    },
    {
      name: 'keywords',
      content:
        'about me, web developer skills, React expertise, Node.js developer, full stack experience, web development portfolio',
    },

    // Open Graph
    { property: 'og:type', content: 'profile' },
    {
      property: 'og:url',
      content: 'https://www.pixcelcraftedbyram.tech/about',
    },
    { property: 'og:title', content: 'About Ram Reddy - Web Developer' },
    {
      property: 'og:description',
      content:
        'Learn about Ram Reddy, a passionate full-stack web developer with expertise in React, Node.js, and modern web technologies.',
    },
    {
      property: 'og:image',
      content: 'https://www.pixcelcraftedbyram.tech/images/profile.png',
    },

    // Twitter
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'About Ram Reddy - Web Developer' },
    {
      name: 'twitter:description',
      content:
        'Learn about my skills, experience, and approach to building exceptional web applications.',
    },

    // Additional SEO
    { name: 'robots', content: 'index, follow' },
  ];
}

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <img
                  src="/images/profile.png"
                  alt="Ram - Web Developer"
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4 shadow-xl">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Hey, I am Ram
                </span>
                <span className="inline-block ml-2 animate-wave">👋!</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                I am a passionate{' '}
                <span className="text-blue-400 font-semibold">
                  web developer
                </span>{' '}
                who loves building friendly digital experiences and helping
                others grow into confident modern developers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get in Touch
                </a>
                <a
                  href="#tech"
                  className="px-6 py-3 bg-gray-800 border-2 border-blue-500 rounded-lg font-semibold hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300"
                >
                  View Skills
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 lg:p-12 shadow-2xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">??</span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              My Mission
            </h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            After turning my life around, I made it my mission to share what I
            have learned with others � not just about code, but about building a
            life you are proud of.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Through <span className="text-blue-400">tutorials</span>,{' '}
            <span className="text-cyan-400">courses</span>, and{' '}
            <span className="text-blue-400">real-world projects</span>, I aim to
            make development accessible, friendly, and something you look
            forward to each day.
          </p>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div id="tech" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              ?? Tech Stack
            </span>
          </h2>
          <p className="text-gray-400">Technologies I work with daily</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { name: 'HTML', icon: '??', color: 'from-orange-500 to-red-500' },
            { name: 'CSS', icon: '??', color: 'from-blue-400 to-cyan-500' },
            {
              name: 'JavaScript',
              icon: '?',
              color: 'from-yellow-400 to-yellow-600',
            },
            {
              name: 'Tailwind',
              icon: '??',
              color: 'from-cyan-400 to-blue-500',
            },
            {
              name: 'Node.js',
              icon: '??',
              color: 'from-green-500 to-lime-500',
            },
            {
              name: 'TypeScript',
              icon: '??',
              color: 'from-blue-500 to-blue-700',
            },
            { name: 'React', icon: '??', color: 'from-blue-400 to-cyan-400' },
            {
              name: 'Express.js',
              icon: '??',
              color: 'from-gray-200 to-gray-400',
            },
            { name: 'SQL', icon: '???', color: 'from-blue-500 to-indigo-500' },
            {
              name: 'MongoDB',
              icon: '??',
              color: 'from-green-500 to-teal-500',
            },
          ].map((tech) => (
            <div
              key={tech.name}
              className="group relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="relative text-center">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3
                  className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}
                >
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
