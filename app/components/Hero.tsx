import { Link } from 'react-router';
import { useState, useEffect } from 'react';

const useTypewriter = (words: string[], typingSpeed: number = 80, deletingSpeed: number = 40, pauseTime: number = 1500) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const waitTimeout = setTimeout(() => {
        setReverse(true);
      }, pauseTime);
      return () => clearTimeout(waitTimeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const typeTimeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typeTimeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

  return { text: words[index].substring(0, subIndex), blink };
};

const Hero = () => {
  // Use specific roles requested: Web Developer -> UI/UX Designer -> Tech Enthusiast
  const { text, blink } = useTypewriter(["Web Developer", "UI/UX Designer", "Tech Enthusiast"], 70, 50, 2000); 
  
  // Interactive Mouse Parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20, // Move range -10px to 10px
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // --- 1. MEMOIZED STATIC STAR FIELDS (Client-Side Only to fix Hydration Mismatch) ---
  const [starFields, setStarFields] = useState({ small: '', medium: '', large: '' });

  useEffect(() => {
    const generateStars = (count: number) => {
      let shadow = '';
      for (let i = 0; i < count; i++) {
        shadow += `${Math.random() * 100}vw ${Math.random() * 100}vh #fff, `; 
      }
      return shadow.slice(0, -2);
    };

    setStarFields({
       small: generateStars(400),
       medium: generateStars(150),
       large: generateStars(50),
    });
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 lg:pt-0 bg-[#020617] overflow-hidden px-6 perspective-[1000px] group/hero font-sans">
      
      {/* INJECT FONT & CUSTOM ANIMATIONS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
        .font-tech { font-family: 'Rajdhani', sans-serif; }
        
        @keyframes drift-up {
          from { transform: translateY(0); }
          to { transform: translateY(-100vh); }
        }
        @keyframes orbit-pass {
          0% { left: -10%; top: 20%; opacity: 0; }
          100% { left: 110%; top: 30%; opacity: 0; }
        }
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 1; }
          100% { transform: translateX(-500px) translateY(500px) rotate(-45deg); opacity: 0; }
        }
        @keyframes twinkle-lights {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animate-drift-slow { animation: drift-up 200s linear infinite; }
        .animate-drift-medium { animation: drift-up 120s linear infinite; }
        .animate-satellite-pass { animation: orbit-pass 80s linear infinite; }
        .animate-shooting-star { animation: shooting-star 5s ease-out infinite; animation-delay: 3s; }
        .animate-city-lights { animation: twinkle-lights 4s ease-in-out infinite; }
      `}</style>
      
      {/* 1. CRYSTAL CLEAR SPACE BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Deepest Void Base (No muddy gradients) */}
        <div className="absolute inset-0 bg-[#000]"></div>

        {/* PARALLAX STARS (Crisp & Clear) */}
        <div className="absolute inset-0 animate-drift-slow opacity-60 transition-transform duration-100 ease-out"
             style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}>
           <div className="w-[1px] h-[1px] bg-white" style={{ boxShadow: starFields.small }}></div>
        </div>
        <div className="absolute inset-0 animate-drift-medium opacity-90 transition-transform duration-100 ease-out"
             style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}>
           <div className="w-[1.5px] h-[1.5px] bg-white" style={{ boxShadow: starFields.medium }}></div>
        </div>
        
        {/* SHOOTING STAR (Elegant) */}
        <div className="absolute top-[10%] right-[10%] w-[150px] h-[1px] bg-gradient-to-l from-transparent via-blue-100 to-transparent opacity-0 animate-shooting-star"></div>

        {/* REALISTIC SATELLITE */}
        <div className="absolute w-[2px] h-[2px] bg-white shadow-[0_0_4px_1px_rgba(255,255,255,1)] animate-satellite-pass"></div>

        {/* NIGHT EARTH FROM SPACE (Photo-Realistic) */}
        {/* We use a high-quality satellite image texture for maximum realism */}
        <div className="absolute left-1/2 bottom-[-85vh] w-[200vw] h-[100vh] -translate-x-1/2 rounded-[100%] bg-[#000] overflow-hidden shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.8)] z-10 transition-transform duration-100 ease-out"
             style={{ transform: `translate(-50%, ${mousePos.y * 2}px)` }}>
            
            {/* 1. REALISTIC TEXTURE (NASA Black Marble / Unsplash) */}
            <div className="absolute inset-0 opacity-80 animate-[spin_240s_linear_infinite]"
                 style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
                    backgroundSize: '120% 120%',
                    backgroundPosition: 'center 20%', // Focus on the lighted areas
                    transformOrigin: 'center 200%' // Rotate around the core
                 }}>
            </div>

            {/* 2. ATMOSPHERE LIMB (Bright Blue Rim) */}
            {/* This inner shadow creates the 3D sphere glass feeling over the image */}
            <div className="absolute inset-0 rounded-[100%] shadow-[inset_0_10px_50px_0px_rgba(59,130,246,0.6),_0_-5px_30px_0px_rgba(147,197,253,0.4)]"></div>
            
            {/* 3. CLOUD MOVING LAYER (Optional subtle drift) */}
            <div className="absolute inset-x-0 top-0 h-[200px] opacity-30 mix-blend-overlay bg-gradient-to-b from-blue-400 to-transparent"></div>
        </div>

        {/* ATMOSPHERE HAZE (Outer Glow rising into space) */}
        <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-blue-900/30 blur-[60px] pointer-events-none z-0 mix-blend-screen"></div>
        
        {/* HORIZON LIGHT SCATTER (The 'Sunrise' edge effect) */}
        <div className="absolute bottom-[-5vh] left-[20%] right-[20%] h-[15vh] bg-cyan-500/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>

        {/* CRISP VIGNETTE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_150%)] opacity-50 pointer-events-none z-20"></div>

      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Content */}
        <div className="flex flex-col items-start text-left z-20 font-tech">
          
          <div className="mb-6 animate-slide-down">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 shadow-lg backdrop-blur-md transition-transform hover:scale-105 hover:bg-slate-700/50 cursor-default">
              <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-emerald-100 tracking-wider uppercase">Open to Work</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1] tracking-tight animate-slide-up relative group cursor-default">
            Hi, I'm <br />
            <span className="relative inline-block mt-1">
              <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(100,100,255,0.4)] group-hover:animate-pulse">
                Ram Reddy
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[1px] group-hover:translate-y-[-1px] mix-blend-screen transition-all duration-100">Ram Reddy</span>
            </span>
          </h1>

          <div className="h-16 md:h-20 mb-6 text-xl md:text-3xl text-gray-300 font-medium leading-relaxed flex items-center gap-3">
            <span className="opacity-60 whitespace-nowrap tracking-wide">I am a</span>
            <div className="relative inline-flex items-center min-w-[280px] md:min-w-[350px]">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-300% animate-gradient-x drop-shadow-sm filter brightness-125">
                   {text}
                </span>
                <span className={`${blink ? 'opacity-100' : 'opacity-0'} ml-1 text-cyan-400 font-light h-6 md:h-8 w-0.5 bg-cyan-400 block`}></span>
             </div>
          </div>

          <p className="text-gray-400 text-base md:text-lg font-normal mb-8 max-w-lg leading-relaxed animate-fade-in animation-delay-200 tracking-wide">
             Crafting immersive digital experiences with <span className="text-white font-medium">pixel-perfect design</span> and <span className="text-white font-medium">robust engineering</span>. Transforming ideas into scalable reality.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-400">
             <Link 
               to="/projects"
               className="group relative px-6 py-3 bg-white text-black font-bold text-base rounded-lg overflow-hidden shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-95 tracking-wide"
             >
               <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <span className="relative z-10 flex items-center gap-2">
                 EXPLORE WORK
                 <svg className="w-4 h-4 transition-transform group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </span>
             </Link>
             
             <a 
               href="/Ramreddy_Resume.pdf"
               target="_blank"
               className="group px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-base rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3 hover:border-white/30 tracking-wide"
             >
               <span>RESUME</span>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
               </svg>
             </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive "Reactor Core" Visualization */}
        <div className="relative h-[600px] w-full flex items-center justify-center perspective-[2000px] z-10">
           
           {/* Interaction Zone: Hover to accelerate/expand */}
           <div className="relative group cursor-pointer w-[300px] h-[300px] transform-style-3d hover:scale-110 transition-transform duration-700"> 
              
              {/* Central Glowing Energy Orb - Pulses Faster on Hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full blur-xl shadow-[0_0_100px_rgba(59,130,246,0.6)] animate-pulse-slow group-hover:animate-pulse"></div>
              
              {/* Core Shield */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/95 rounded-full blur-lg mix-blend-overlay"></div>

              {/* Gyroscopic Rings - Faster Spin on Hover */}
              {/* Ring 1 - Horizontal Spin */}
              <div className="absolute inset-0 border-[2px] border-cyan-500/40 rounded-full transform-style-3d animate-[spin_12s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] transition-all">
                 <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)] blur-[0.5px]"></div>
              </div>

              {/* Ring 2 - Tilted Reverse Spin */}
              <div className="absolute inset-[-40px] border-[2px] border-purple-500/30 rounded-full transform-style-3d animate-[spin_18s_linear_infinite_reverse] group-hover:animate-[spin_6s_linear_infinite_reverse] transition-all rotate-x-60">
                 <div className="absolute bottom-0 right-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_25px_rgba(168,85,247,1)]"></div>
              </div>

              {/* Ring 3 - Large Diagonal Orbiter */}
              <div className="absolute inset-[-80px] border-[1px] border-blue-500/20 rounded-full transform-style-3d animate-[spin_25s_linear_infinite] group-hover:animate-[spin_10s_linear_infinite] transition-all rotate-y-45 rotate-x-45 border-dashed"></div>

              {/* Stabilized Data Panels - Expand on Hover */}
              {[
                { label: 'REACT', x: 150, y: -60, z: 40, color: 'text-cyan-300' },
                { label: 'NEXTjs', x: -150, y: 80, z: 70, color: 'text-white' },
                { label: 'NODE', x: 100, y: 130, z: -30, color: 'text-green-300' },
                { label: 'DESIGN', x: -100, y: -100, z: -20, color: 'text-purple-300' }
              ].map((item, i) => (
                  <div key={i} 
                    className={`absolute left-1/2 top-1/2 px-4 py-2 bg-black/50 border border-white/10 backdrop-blur-md rounded-lg transform-style-3d shadow-xl transition-all duration-500 group-hover:scale-125 group-hover:border-white/30 cursor-default`}
                    style={{ 
                        transform: `translate3d(${item.x}px, ${item.y}px, ${item.z}px)`,
                    }}
                  >
                    <div className={`text-[11px] font-bold tracking-[0.2em] ${item.color} drop-shadow-md`}>{item.label}</div>
                  </div>
              ))}

           </div>

        </div>

      </div>
    </section>
  );
};
export default Hero;
