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
    <div className="w-full min-h-screen bg-black overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* GLOBAL ANIMATIONS */}
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        @keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
      `}</style>

      {/* BACKGROUND ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* HERO INTRO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            
            {/* Left: Narrative */}
            <div className="space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    Identity Verified
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    Beyond the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Event Horizon.</span>
                </h1>
                
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                    I am Ram Reddy, a Full Stack Developer navigating the vast digital expanse. I don't just build websites; I engineer resilient systems that thrive in the deep web. My passion lies in deciphering complex problems and rendering elegant solutions.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="#timeline" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                        View Journey
                    </a>
                    <a href="/contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                        Open Comms
                    </a>
                </div>
            </div>

            {/* Right: Holographic Visual */}
            <div className="relative group perspective-[1000px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse-slow"></div>
                
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6 min-h-[500px] flex items-end">
                    
                    <img src="/images/profile.png" alt="Ram Profile" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                    <div className="relative p-8 w-full z-10">
                        <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
                            <div>
                                <div className="text-xs text-blue-400 font-tech uppercase tracking-widest mb-1">Current Objective</div>
                                <div className="text-xl font-bold text-white">Software Excellence</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-slate-500 font-tech uppercase tracking-widest mb-1">Status</div>
                                <div className="text-emerald-400 font-bold glow-sm">ONLINE</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                             <div>
                                <div className="text-2xl font-bold text-white">New</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Talent</div>
                             </div>
                             <div>
                                <div className="text-2xl font-bold text-white">5+</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Projects</div>
                             </div>
                             <div>
                                <div className="text-2xl font-bold text-white">∞</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Learning</div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* MISSION LOG */}
        <div className="mb-32">
             <div className="max-w-4xl mx-auto bg-slate-900/40 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <div className="flex items-center gap-4 mb-8">
                     <span className="p-3 bg-blue-500/10 rounded-xl text-2xl">⚡</span>
                     <h2 className="text-3xl font-bold text-white">The Mission Log</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 text-slate-300 leading-relaxed">
                    <p>
                        My journey began with a simple curiosity: "How does this work?". That curiosity ignited a passion for breaking down complex systems and rebuilding them better. I transitioned from a learner to a builder, driven by the desire to create tools that empower others.
                    </p>
                    <p>
                        Today, my mission is clear: <span className="text-blue-400 font-bold">Launch My Career</span>. I have spent thousands of hours refining my skills in the MERN stack and modern web technologies. I am ready to bring my dedication, clean code, and hunger for learning to a forward-thinking team.
                    </p>
                </div>
             </div>
        </div>

        {/* SYSTEM CORE (Tech Stack) */}
        <div id="tech" className="mb-32">
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">System Core <span className="text-blue-500">.</span></h2>
                <p className="text-slate-400">Operational Technologies & Frameworks</p>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  { name: 'React', type: 'Frontend', color: 'border-cyan-500/30 text-cyan-400' },
                  { name: 'Next.js', type: 'Fullstack', color: 'border-white/20 text-white' },
                  { name: 'Node.js', type: 'Backend', color: 'border-green-500/30 text-green-400' },
                  { name: 'TypeScript', type: 'Language', color: 'border-blue-500/30 text-blue-400' },
                  { name: 'Tailwind', type: 'Styling', color: 'border-cyan-400/30 text-cyan-300' },
                  { name: 'PostgreSQL', type: 'Database', color: 'border-blue-600/30 text-blue-300' },
                  { name: 'MongoDB', type: 'Database', color: 'border-green-600/30 text-green-500' },
                  { name: 'Docker', type: 'DevOps', color: 'border-blue-400/30 text-blue-400' },
                  { name: 'Git', type: 'Version', color: 'border-orange-500/30 text-orange-400' },
                  { name: 'Figma', type: 'Design', color: 'border-purple-500/30 text-purple-400' },
                ].map((tech) => (
                    <div key={tech.name} className={`bg-slate-900/40 border ${tech.color} border-opacity-20 hover:border-opacity-100 rounded-xl p-6 group hover:-translate-y-1 transition-all duration-300`}>
                        <div className="text-xs text-slate-500 uppercase tracking-widest mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{tech.type}</div>
                        <div className={`text-xl font-bold ${tech.color.split(' ')[1]}`}>{tech.name}</div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* TIMELINE (Orbit Log) */}
        <div id="timeline" className="max-w-3xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Education Journey</h2>
                <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
             </div>

             <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 before:w-[1px] before:bg-white/10">
                
                {/* Item 1 */}
                <div className="relative pl-24 group">
                    <div className="absolute left-[28px] top-2 w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-950 group-hover:scale-150 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
                    <div className="text-sm text-blue-400 font-bold mb-1">2025 - Present</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Freelance & Open Source</h3>
                    <p className="text-slate-400 border-l-2 border-white/5 pl-4 ml-[-1rem]">
                        Developing responsive full-stack applications using the MERN stack. Building a robust portfolio of projects and deepening expertise in React, Node.js, and modern web best practices.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="relative pl-24 group">
                    <div className="absolute left-[28px] top-2 w-3 h-3 bg-purple-500 rounded-full border-4 border-slate-950 group-hover:scale-150 transition-transform"></div>
                    <div className="text-sm text-purple-400 font-bold mb-1">2021 - 2025</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Technology</h3>
                    <p className="text-slate-400 border-l-2 border-white/5 pl-4 ml-[-1rem]">
                        Graduated with a focus on Computer Science fundamentals. Specialized in Algorithm Design, Data Structures, and Web Engineering.
                    </p>
                </div>

             </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
