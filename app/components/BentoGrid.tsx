const BentoGrid = () => {
  return (
    <section className="relative py-32 overflow-hidden" id="about">
      
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 font-sans">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* COLUMN 1: VISUAL IDENTIY (The 'Portrait') */}
            <div className="relative group animate-fade-in-right">
                {/* Glowing Backdrops */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 aspect-[4/5] lg:aspect-square">
                    <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img 
                        src="/images/profile.png" 
                        alt="Ram Reddy" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                    
                    {/* Overlay Tech Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950/90 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="h-[2px] w-8 bg-blue-500"></div>
                             <span className="text-blue-400 font-tech text-xs tracking-[0.2em] uppercase">System Identity</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Ram Reddy</h3>
                        <p className="text-slate-400 text-sm">Full-Stack Engineer • Web Enthusiast</p>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 lg:-right-12 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-xl animate-float-slow hidden md:block">
                     <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Experience</span>
                     <span className="text-3xl font-bold text-white">1 Year</span>
                </div>
            </div>

            {/* COLUMN 2: THE NARRATIVE (Clean Typography) */}
            <div className="space-y-10 animate-fade-in-left">
                
                {/* Header */}
                <div>
                     <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] font-tech mb-6">
                        ABOUT THE DEVELOPER
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Future.</span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                        I am a passionate Full Stack Developer focused on growth and quality. I don't just write code; I build solutions. Constantly learning and evolving, I strive to create clean, responsive, and user-centric web applications that make a difference.
                    </p>
                </div>

                {/* Stats / Metrics (Clean Row) */}
                <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/5">
                    <div>
                        <span className="block text-3xl md:text-4xl font-bold text-white mb-1">5+</span>
                        <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Projects</span>
                    </div>
                    <div>
                        <span className="block text-3xl md:text-4xl font-bold text-white mb-1">100%</span>
                        <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Dedication</span>
                    </div>
                </div>

                {/* Tech Constellation (Clean List) */}
                <div className="space-y-4">
                    <h4 className="text-sm text-slate-300 font-bold uppercase tracking-wider">Core Technologies</h4>
                    <div className="flex flex-wrap gap-x-8 gap-y-3">
                        {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'].map((tech) => (
                            <div key={tech} className="flex items-center gap-2 group cursor-default">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></span>
                                <span className="text-slate-400 group-hover:text-white transition-colors">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="pt-2">
                    <a href="/contact" className="inline-flex items-center gap-3 text-white font-bold group">
                        <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                             <svg className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                        <span className="border-b border-transparent group-hover:border-white transition-colors">Start a Collaboration</span>
                    </a>
                </div>

            </div>

        </div>
      </div>
      
      <style>{`
        @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default BentoGrid;
