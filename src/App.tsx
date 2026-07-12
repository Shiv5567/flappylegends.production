import { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Shield, 
  FileText, 
  Sparkles, 
  Download, 
  Gamepad2, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Layers, 
  Bird,
  Compass,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Mail,
  ChevronRight,
  CloudLightning,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Types for the HTML5 Demo Game
interface Pipe {
  x: number;
  topHeight: number;
  bottomHeight: number;
  width: number;
  passed: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<"home" | "privacy">("home");

  // JSON-LD Structured Data Schema for Google indexing & search rich snippets
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Flappy Legends",
    "operatingSystem": "Android, iOS, Web",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "3820"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  // Sync with URL path/hash for soft routing & easy navigation linking without '#'
  useEffect(() => {
    const handleRouting = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      if (path === "/privacy-policy" || path === "/privacy" || hash === "#privacy-policy" || hash === "#privacy") {
        setCurrentTab("privacy");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setCurrentTab("home");
      }
    };

    // Initial check
    handleRouting();

    window.addEventListener("popstate", handleRouting);
    window.addEventListener("hashchange", handleRouting);
    return () => {
      window.removeEventListener("popstate", handleRouting);
      window.removeEventListener("hashchange", handleRouting);
    };
  }, []);

  const navigateTo = (tab: "home" | "privacy") => {
    setCurrentTab(tab);
    let targetPath = "/";
    if (tab === "privacy") {
      targetPath = "/privacy-policy";
    }
    
    window.history.pushState(null, "", targetPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col font-sans relative overflow-x-hidden">
      
      {/* Decorative ambient glowing backdrops matching Sleek blue theme */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[600px] left-0 w-[300px] h-[300px] bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Modern Sleek Navigation Bar */}
      <nav id="site-header" className="h-16 sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 flex items-center justify-between px-4 sm:px-8 shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Sleek brand backplate container */}
          <button 
            id="logo-brand-btn"
            onClick={() => navigateTo("home")}
            className="flex items-center gap-3 text-left hover:opacity-90 active:scale-98 transition-all"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-blue-500/10 border border-slate-150 flex items-center justify-center bg-slate-50 shrink-0">
              <img 
                src="/src/assets/images/eagle_logo_icon_1783730347798.jpg" 
                alt="Flappy Legends Eagle Hero Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-bold text-slate-800 text-lg tracking-tight block leading-none">
                Flappy Legends
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-blue-600 uppercase mt-1 block">
                Official Site
              </span>
            </div>
          </button>
        </div>

        {/* Tab Controls Navigation */}
        <div className="flex items-center gap-5 text-sm font-medium text-slate-500 mr-1 self-center">
          <button 
            id="nav-home"
            onClick={() => navigateTo("home")} 
            className={`py-1.5 px-2 relative transition-colors cursor-pointer ${currentTab === "home" ? "text-blue-600 font-bold" : "hover:text-slate-900"}`}
          >
            Home
            {currentTab === "home" && (
               <motion.div layoutId="activeNav" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>
        </div>
      </nav>

      {/* Main Container Area */}
      <main id="main-content" className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-8">
        <AnimatePresence mode="wait">
          {currentTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-16"
            >
              {/* Dual-Grid Splended Hero & Bento Feature Showcase */}
              <div id="hero-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4 sm:pt-6">
                
                {/* Left Side: Game Pitch & Call to Actions */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-block px-3 py-1 bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold rounded-full uppercase tracking-widest leading-none">
                    ⭐ Official Landing Page
                  </div>
                  
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                    Flappy Legends <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Bird Adventure!
                    </span>
                  </h1>
                  
                  <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                    <p className="font-semibold text-slate-800">
                      Ready for the ultimate high-flying challenge?
                    </p>
                    <p>
                      Welcome to Flappy Legends, the most visually stunning Tap to fly, avoid obstacles, destroy pipes, defeat monsters, and explore epic locations in this arcade game.
                    </p>
                    <p>
                      Command legendary birds, unlock powerful special abilities, lead a massive squad of birds in Flock Mode, or dodge active neon lasers with weapons in the hardcore Mayhem Mode. Fly through engaging and beautiful environments, complete missions, and write your own legacy in the legendary world!
                    </p>
                  </div>

                  {/* Playstore Badge CTA & Statistics */}
                  <div id="cta-group" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    
                    {/* Official Look Google Play Button */}
                    <a 
                      id="btn-google-play-store"
                      href="https://play.google.com/store/apps/details?id=com.advance.flappylegends"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#000000] text-white py-3 px-6 rounded-xl inline-flex items-center justify-center gap-3.5 transition-transform hover:-translate-y-0.5 active:translate-y-0 duration-200 shadow-lg shadow-slate-950/20 w-full sm:w-auto"
                    >
                      {/* Google Play Icon Vector */}
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14.05C20.44,13.03 20.44,10.97 18.66,9.95L16.81,8.88L14.89,10.8L16.81,12.72L16.81,15.12M4.27,2.45L14.3,12.48L16.25,10.53L4.27,2.45M14.3,11.52L4.27,21.55L16.25,13.47L14.3,11.52Z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-bold opacity-80 leading-none tracking-widest">Download Now</div>
                        <div className="text-lg font-bold leading-none mt-1 font-display">Google Play</div>
                      </div>
                    </a>

                  </div>
                </div>

                {/* Right Side: 3 Game Modes Grid */}
                <div id="bento-features" className="lg:col-span-5 flex flex-col gap-4 relative">
                  <div className="text-xs font-mono text-blue-600 font-extrabold uppercase tracking-wider">
                    ⚡ THREE GAME MODES
                  </div>
                  
                  {/* Mode 1 - Solo */}
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center border border-blue-100 shadow-sm">
                        <Bird className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">Solo Mode</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      <strong>The Ultimate Endurance Run:</strong> Experience classic arcade gameplay redesigned for a modern era. Fly a single bird with pixel-perfect control.
                    </p>
                  </div>

                  {/* Mode 2 - Flock */}
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center border border-orange-100 shadow-sm">
                        <Layers className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">Flock Mode</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      <strong>Command the Swarm!</strong> Take control of multiple birds at once. Rescue birds from cages, merge together and fight. Manage your size, dodge pipes, and activate flock protective ultimates!
                    </p>
                  </div>

                  {/* Mode 3 - Mayhem */}
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center border border-red-100 shadow-sm">
                        <Zap className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">Mayhem Mode</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      <strong>The Cyberpunk Chaos:</strong> Glitching zone with swaying obstacles and toggling neon lasers. Fire up weapons and smash HP-fortified destructible pillars.
                    </p>
                  </div>

                </div>
              </div>

              {/* Unlock Legendary Birds Section */}
              <div id="birds-catalogue" className="space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs font-mono text-blue-600 font-extrabold uppercase tracking-wider block">
                    LEGENDARY ROSTER
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    🐦 Unlock Legendary Birds & Ultimate Abilities
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Collect gold and diamonds to unlock a diverse cast of birds, each equipped with game-changing Ultimate Special Abilities:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Sky Sovereign (Default)",
                      ability: "Ultimate Micro Glider",
                      desc: "Shrinks your bird to 60% size, letting you slip through tight spots effortlessly.",
                      color: "from-blue-50 to-indigo-50 border-blue-200 text-blue-700",
                      badge: "👑 Starter"
                    },
                    {
                      name: "Angry Bird",
                      ability: "Ultimate Cyber Magnet",
                      desc: "Attracts all screen coins and gems directly to your bird.",
                      color: "from-amber-50 to-yellow-50 border-amber-200 text-amber-700",
                      badge: "⚡ Magnet"
                    },
                    {
                      name: "Lotus Hummingbird",
                      ability: "Ultimate Temporal Dilation",
                      desc: "Slows down obstacles by 70% and time by 35% with a smooth camera zoom-out.",
                      color: "from-emerald-50 to-teal-50 border-emerald-200 text-emerald-700",
                      badge: "⏳ Time"
                    },
                    {
                      name: "Azure Kingfisher",
                      ability: "Ultimate Temporal Focus",
                      desc: "Slows down game physics by 60% for precision maneuvering.",
                      color: "from-cyan-50 to-blue-50 border-cyan-200 text-cyan-700",
                      badge: "🎯 Focus"
                    },
                    {
                      name: "Ice Phoenix",
                      ability: "Ultimate Temporal Freeze",
                      desc: "Locks all oncoming obstacles completely in place.",
                      color: "from-sky-50 to-blue-100 border-sky-200 text-sky-700",
                      badge: "❄️ Freeze"
                    },
                    {
                      name: "Great Horned Owl",
                      ability: "Ultimate Ghost Phasing",
                      desc: "Turns transparent to fly directly through solid obstacles safely.",
                      color: "from-purple-50 to-indigo-50 border-purple-200 text-purple-700",
                      badge: "👻 Phase"
                    },
                    {
                      name: "Dragon",
                      ability: "Ultimate Lunar Sanctuary",
                      desc: "Deploys a protective energy shield and secures absolute invincibility.",
                      color: "from-red-50 to-orange-50 border-red-200 text-red-700",
                      badge: "🛡️ Invincible"
                    },
                    {
                      name: "Falcon",
                      ability: "Ultimate Sonic Boost",
                      desc: "Blasts forward at supersonic speed with absolute invincibility.",
                      color: "from-rose-50 to-pink-50 border-rose-200 text-rose-700",
                      badge: "🚀 Boost"
                    },
                    {
                      name: "Mountain Banshee",
                      ability: "Banshee Cyber Magnet Clone",
                      desc: "Summons a clone to replicate your character and harvest all screen wealth.",
                      color: "from-violet-50 to-fuchsia-50 border-violet-200 text-violet-700",
                      badge: "👥 Clone"
                    },
                    {
                      name: "Legendary Eagle King",
                      ability: "Ultimate Gilded Fortune",
                      desc: "Triple benefits: a durable shield, 3x score multipliers, and a massive coin magnet.",
                      color: "from-amber-100/50 to-yellow-100/50 border-yellow-300 text-yellow-800",
                      badge: "🌟 Legendary"
                    }
                  ].map((bird, idx) => (
                    <div key={idx} className={`bg-gradient-to-br ${bird.color} border rounded-2xl p-4.5 shadow-sm hover:scale-[1.01] transition-transform duration-200`}>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-mono tracking-wider font-extrabold uppercase px-2 py-0.5 rounded bg-white/80 border border-slate-100">
                          {bird.badge}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 font-bold">#0{idx+1}</span>
                      </div>
                      <h4 className="text-sm font-black tracking-tight text-slate-900">{bird.name}</h4>
                      <p className="text-[11px] font-mono font-bold text-indigo-600 mt-1 uppercase">
                        ✨ {bird.ability}
                      </p>
                      <p className="text-xs text-slate-600 mt-1.5 leading-normal">
                        {bird.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mythological Worlds Overview Section */}
              <div id="worlds-show-card" className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-blue-600 font-extrabold uppercase tracking-wider block">
                      🗺️ BREATHTAKING STUNNING WORLDS
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mt-1">
                      Fly through 6 beautifully detailed, hand-crafted worlds
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                    Each world features custom, immersive synthesizer sound effects upon selection. Experience unique environmental forces and magnificent backdrops:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "🌴 Amazon Rainforest", desc: "Verdant jungle canopy filled with ancient secrets." },
                      { name: "❄️ Frost Valley", desc: "Frozen winds that test your thermal gliding capacity." },
                      { name: "🌌 Twilight Horizon", desc: "Ethereal nightfall skies with stellar backdrops." },
                      { name: "🏜️ Desert Ruins", desc: "Sifting sandfalls concealing forgotten historic shrines." },
                      { name: "🌋 Volcanic Realm", desc: "Raging lava rivers and high temperature turbulence." },
                      { name: "☁️ Golden Cloud Kingdom", desc: "The high-altitude divine sanctuary of sovereign aviators." }
                    ].map((w, idx) => (
                      <div key={idx} className="flex gap-2.5 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div>
                          <p className="text-xs font-mono text-slate-400 font-bold">REGION 0{idx+1}</p>
                          <p className="text-sm font-bold text-slate-800 leading-snug mt-0.5">{w.name}</p>
                          <p className="text-[11px] text-slate-500 leading-normal mt-0.5">{w.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Game Features Grid */}
              <div id="game-features" className="space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs font-mono text-blue-600 font-extrabold uppercase tracking-wider block">
                    🌟 CORE HIGHLIGHTS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Game Features
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Everything you need for an immersive, pixel-perfect modern mobile arcade adventure:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Advanced gameplay mechanics", desc: "Pixel-perfect physical control, smooth landing mechanics, and active responsive controls." },
                    { title: "Multiple game modes", desc: "Toggle between classic Solo, tactical Flock swarm battles, and Mayhem modes." },
                    { title: "Rich visual effects", desc: "Immersive particle systems, screen shakes, and weather dynamics." },
                    { title: "Deep progression system", desc: "Collect gold and diamonds to expand your roster and upgrade birds." },
                    { title: "Interesting obstacle animation", desc: "Swaying neon pillars, physical lasers, and moving hazard traps." },
                    { title: "Dynamic Audio", desc: "Immersive custom-designed synthesizer tracks customized to each world." },
                    { title: "Progressive Difficulty", desc: "Adaptive difficulty scaling to test your elite flappy endurance." },
                    { title: "Missions & Achievements", desc: "Fulfill challenging flight objectives and claim epic rewards." },
                    { title: "Offline Play", desc: "No internet? No problem. Enjoy the full game anytime, anywhere." }
                  ].map((feat, idx) => (
                    <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-4.5 shadow-sm hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <h4 className="text-sm font-bold text-slate-800">{feat.title}</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-normal pl-6.5">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer Feedback & Support Section */}
              <div id="game-feedback-support" className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 text-center max-w-xl mx-auto space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-100 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                    Developer Feedback & Support
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
                    We'd love to hear your thoughts, feedback, or any suggestions you have for Flappy Legends! Contact Charan Studio directly at:
                  </p>
                </div>
                <div className="pt-1">
                  <a 
                    href="mailto:support.charan@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 text-blue-600 transition-all font-mono font-bold text-xs sm:text-sm rounded-xl shadow-sm"
                  >
                    <span>support.charan@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Ready to Download Quick Section */}
              <div className="text-center py-10 max-w-xl mx-auto space-y-6">
                <div className="w-14 h-14 bg-gradient-to-tr from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
                  <Download className="w-7 h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                  Take flight today! 🚀
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Show the world why you are a true Flappy Legend! Experience absolute offline-friendly, high-fidelity bird adventure action now.
                </p>
                <div className="pt-2">
                  <a 
                    id="btn-google-play-footer"
                    href="https://play.google.com/store/apps/details?id=com.advance.flappylegends"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-950 text-white hover:bg-slate-900 transition-colors font-bold text-sm tracking-wider uppercase rounded-2xl shadow-xl shadow-slate-950/10 active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Now</span>
                  </a>
                </div>
              </div>

            </motion.div>
          )}

          {currentTab === "privacy" && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto pb-10"
            >
              <button 
                id="back-home-privacy"
                onClick={() => navigateTo("home")}
                className="inline-flex items-center gap-1 text-xs font-mono text-blue-600 hover:text-blue-700 mb-6 cursor-pointer"
              >
                &larr; Back to Landing Page
              </button>

              <div id="privacy-card" className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-md">
                
                <div className="border-b border-slate-200 pb-6 mb-8">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-mono uppercase tracking-wider mb-3">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Hosted Page</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Privacy Policy for Flappy Legends
                  </h2>
                  <p className="text-xs font-mono text-slate-500">
                    Last Updated: June 21, 2026
                  </p>
                </div>

                {/* Pure, clear text contents */}
                <div className="text-slate-600 space-y-6 text-sm leading-relaxed max-w-none">
                  
                  <p>Welcome to Flappy Legends. Your privacy is important to us. This Privacy Policy explains how information is handled when you use our game.</p>
                  
                  <h3 className="text-lg font-bold text-slate-900 mt-6 border-b border-slate-100 pb-1.5">Information We Collect</h3>
                  <p>Flappy Legends does not collect any personal information from users.</p>
                  <p>We do not require:</p>
                  <ul className="list-disc list-inside space-y-1.5 pl-4 text-slate-500">
                    <li>User registration or login</li>
                    <li>Name, email, phone number, or address</li>
                    <li>Payment or billing information</li>
                    <li>Any custom analytics or tracking system</li>
                  </ul>
                  <p>We do not store any personal data on our servers.</p>

                  <h3 className="text-lg font-bold text-slate-900 mt-6 border-b border-slate-100 pb-1.5">Advertising</h3>
                  <p>Flappy Legends shows ads provided by third-party services:</p>
                  <ul className="list-disc list-inside space-y-1.5 pl-4 text-slate-500">
                    <li>Google AdMob</li>
                    <li>Unity Ads</li>
                  </ul>
                  <p>These services may automatically collect limited data such as:</p>
                  <ul className="list-disc list-inside space-y-1.5 pl-4 text-slate-500">
                    <li>Device information</li>
                    <li>Advertising ID</li>
                    <li>IP address</li>
                    <li>Ad interaction data</li>
                  </ul>
                  <p>This data is used only for:</p>
                  <ul className="list-disc list-inside space-y-1.5 pl-4 text-slate-500">
                    <li>Showing relevant ads</li>
                    <li>Fraud prevention</li>
                    <li>Improving ad performance</li>
                  </ul>
                  <p>We do not control this data collection. It is handled by the ad providers.</p>

                  <h3 className="text-lg font-bold text-slate-900 mt-6 border-b border-slate-100 pb-1.5">Third-Party Privacy Policies</h3>
                  <ul className="space-y-1 font-mono text-xs">
                    <li>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        https://policies.google.com/privacy
                      </a>
                    </li>
                    <li>
                      <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        https://unity.com/legal/privacy-policy
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-slate-900 mt-6 border-b border-slate-100 pb-1.5">Children’s Privacy</h3>
                  <p>Flappy Legends does not knowingly collect any personal data from children.</p>

                  <h3 className="text-lg font-bold text-slate-900 mt-6 border-b border-slate-100 pb-1.5">Data Security</h3>
                  <p>We do not store personal data on our servers. Third-party ad networks may process limited technical data securely.</p>

                  <h3 className="text-lg font-bold text-slate-900 mt-6 border-b border-slate-100 pb-1.5">Changes to This Policy</h3>
                  <p>We may update this Privacy Policy anytime. Changes will be posted on this page.</p>

                  <h3 className="text-lg font-bold text-slate-900 mt-6 border-b border-slate-100 pb-1.5">Contact</h3>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 font-mono text-xs space-y-1">
                    <p className="text-slate-500"><strong className="text-slate-800">Game:</strong> Flappy Legends</p>
                    <p className="text-slate-500">
                      <strong className="text-slate-800">Email:</strong> <a href="mailto:support.charan@gmail.com" className="text-blue-600 hover:underline">support.charan@gmail.com</a>
                    </p>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Sleek Footprint Footer Details */}
      <footer id="site-footer" className="h-14 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 border-t border-slate-200/80 bg-white shrink-0 gap-2 mt-auto">
        <span>&copy; 2026 Charan Studio. All Rights Reserved.</span>
        <div className="flex items-center gap-4 uppercase tracking-wider font-mono font-bold">
          <button
            id="footer-nav-home"
            onClick={() => navigateTo("home")}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            Home
          </button>
          <span className="text-slate-300">|</span>
          <button
            id="footer-nav-privacy"
            onClick={() => navigateTo("privacy")}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <span className="text-slate-300">|</span>
          <span>Region: Global</span>
        </div>
      </footer>

    </div>
  );
}

// ==========================================
// SEPARATE GAME COMPONENT FOR BEST MODULARITY
// ==========================================
function FlappyGameCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Game Setup Preferences
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [gameWorld, setGameWorld] = useState<"olympus" | "asgard" | "underworld">("olympus");
  const [isSquadMode, setIsSquadMode] = useState<boolean>(false);

  // Stats to render in React HUD
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);

  // We use stable mutable refs inside the animation request loop to prevent infinite React re-renders!
  const gameStateRef = useRef({
    isPlaying: false,
    score: 0,
    birdY: 150,
    birdVelocity: 0,
    gravity: 0.35,
    jumpStrength: -6.0,
    pipes: [] as Pipe[],
    particles: [] as Particle[],
    stars: [] as Star[],
    frameCount: 0,
    lastPipeFrame: 0,
    birdAngle: 0,
    isSquadMode: false,
    world: "olympus" as "olympus" | "asgard" | "underworld",
  });

  // Audio Synth triggers
  const playSound = (type: "jump" | "point" | "crash") => {
    if (isMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === "jump") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.12);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === "point") {
        osc.type = "square";
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === "crash") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.35);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      }
    } catch (e) {
      // Audio context permissions might block. Avoid showing errors.
    }
  };

  // Keep refs matching state hooks precisely
  useEffect(() => {
    gameStateRef.current.isSquadMode = isSquadMode;
    gameStateRef.current.world = gameWorld;
    gameStateRef.current.isPlaying = isPlaying;
  }, [isSquadMode, gameWorld, isPlaying]);

  // Load high score from localStore
  useEffect(() => {
    const saved = localStorage.getItem("flappy_high_score");
    if (saved) {
      setHighScore(parseInt(saved, 10));
    }
  }, []);

  // Update canvas sizing responsively using standard ResizeObserver rules
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        // Keep standard height or adaptive proportional ratio
        canvas.width = Math.min(width, 768);
        canvas.height = 340;
      }
    });

    resizeObserver.observe(container);

    // Initial background stars generation
    const stars: Star[] = [];
    for (let i = 0; i < 35; i++) {
      stars.push({
        x: Math.random() * 768,
        y: Math.random() * 340,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.4 + 0.1
      });
    }
    gameStateRef.current.stars = stars;

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Primary Game loop driven safely
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const step = () => {
      const state = gameStateRef.current;
      const width = canvas.width;
      const height = canvas.height;

      // Handle frames increment
      state.frameCount++;

      // Background drawing with specific World color themes
      let bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (state.world === "olympus") {
        // Celestial Amber Gold
        bgGrad.addColorStop(0, "#0f172a");
        bgGrad.addColorStop(1, "#312e81");
      } else if (state.world === "asgard") {
        // Divine Ice Blue/Indigo
        bgGrad.addColorStop(0, "#020617");
        bgGrad.addColorStop(1, "#1e1b4b");
      } else {
        // Flame Underworld Red
        bgGrad.addColorStop(0, "#090505");
        bgGrad.addColorStop(1, "#450a0a");
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Stars drawing with slow drifting speed
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      for (let star of state.stars) {
        ctx.fillRect(star.x, star.y, star.size, star.size);
        star.x -= star.speed;
        if (star.x < 0) {
          star.x = width;
          star.y = Math.random() * height;
        }
      }

      // Parallax Clouds drawing
      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      ctx.beginPath();
      ctx.arc(100, 100, 40, 0, Math.PI * 2);
      ctx.arc(140, 90, 60, 0, Math.PI * 2);
      ctx.arc(180, 100, 45, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(520, 150, 60, 0, Math.PI * 2);
      ctx.arc(570, 130, 80, 0, Math.PI * 2);
      ctx.arc(620, 150, 50, 0, Math.PI * 2);
      ctx.fill();

      // Dynamic Weather Elements (Snow/Thunder particles)
      if (state.world === "asgard" && state.isPlaying) {
        // Slow falling snow flakes
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        for (let i = 0; i < 3; i++) {
          ctx.fillRect(Math.random() * width, Math.random() * height, 2, 2);
        }
      } else if (state.world === "underworld" && state.isPlaying) {
        // Floating flame embers rising upwards
        ctx.fillStyle = "rgba(249, 115, 22, 0.3)";
        for (let i = 0; i < 2; i++) {
          ctx.beginPath();
          ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 3 + 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // -----------------------------
      // CORE BIRD PHYSICS AND CONTROL
      // -----------------------------
      if (state.isPlaying) {
        state.birdVelocity += state.gravity;
        state.birdY += state.birdVelocity;

        // Angle rotation depending on speed
        state.birdAngle = Math.min(Math.PI / 4, Math.max(-Math.PI / 7, state.birdVelocity * 0.05));

        // Keep inside boundaries
        if (state.birdY > height - 15) {
          state.birdY = height - 15;
          handleCrash();
        }
        if (state.birdY < 15) {
          state.birdY = 15;
          state.birdVelocity = 0.5;
        }

        // Generate moving obstacles (Pipes)
        state.frameCount++;
        if (state.frameCount - state.lastPipeFrame > 115) {
          const gap = state.isSquadMode ? 100 : 85; 
          const pipeWidth = 52;
          const minHeight = 40;
          const maxHeight = height - gap - minHeight;
          const topHeight = Math.random() * (maxHeight - minHeight) + minHeight;
          const bottomHeight = height - topHeight - gap;

          state.pipes.push({
            x: width,
            topHeight,
            bottomHeight,
            width: pipeWidth,
            passed: false
          });
          state.lastPipeFrame = state.frameCount;
        }

        // Update Pipes motion
        for (let i = state.pipes.length - 1; i >= 0; i--) {
          const pipe = state.pipes[i];
          pipe.x -= 2.4; // obstacle speed

          // Trigger score
          if (!pipe.passed && pipe.x + pipe.width < 120) {
            pipe.passed = true;
            state.score++;
            setCurrentScore(state.score);
            playSound("point");

            // Save High Score
            const currentHigh = parseInt(localStorage.getItem("flappy_high_score") || "0", 10);
            if (state.score > currentHigh) {
              localStorage.setItem("flappy_high_score", state.score.toString());
              setHighScore(state.score);
            }

            // Create success scores fireworks sparkles
            for (let j = 0; j < 12; j++) {
              state.particles.push({
                x: 150,
                y: state.birdY,
                vx: (Math.random() - 0.5) * 6,
                vy: (Math.random() - 0.5) * 6,
                size: Math.random() * 3 + 1,
                color: "rgba(251, 191, 36, 1)",
                alpha: 1,
                decay: Math.random() * 0.02 + 0.015
              });
            }
          }

          // Collision detection with standard hitbox margins
          const birdLeft = 110;
          const birdRight = 135;
          const birdRadius = 14;

          // If inside the pipe column
          if (pipe.x < birdRight && pipe.x + pipe.width > birdLeft) {
            // Check top blocking
            if (state.birdY - birdRadius < pipe.topHeight || state.birdY + birdRadius > height - pipe.bottomHeight) {
              handleCrash();
            }
          }

          // Remove out of bounds pipes
          if (pipe.x + pipe.width < -10) {
            state.pipes.splice(i, 1);
          }
        }
      }

      // --------------------
      // DRAW PIPE OBSTACLES
      // --------------------
      for (let pipe of state.pipes) {
        // Elegant gradient for pillars representing mythological divine architecture
        let pipeGrad = ctx.createLinearGradient(pipe.x, 0, pipe.x + pipe.width, 0);
        if (state.world === "olympus") {
          pipeGrad.addColorStop(0, "#ca8a04");
          pipeGrad.addColorStop(0.5, "#fef08a");
          pipeGrad.addColorStop(1, "#854d0e");
        } else if (state.world === "asgard") {
          pipeGrad.addColorStop(0, "#1d4ed8");
          pipeGrad.addColorStop(0.5, "#93c5fd");
          pipeGrad.addColorStop(1, "#1e3a8a");
        } else {
          pipeGrad.addColorStop(0, "#dc2626");
          pipeGrad.addColorStop(0.5, "#fca5a5");
          pipeGrad.addColorStop(1, "#7f1d1d");
        }

        ctx.fillStyle = pipeGrad;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 2;

        // Top Pillar
        ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight);
        ctx.strokeRect(pipe.x, -2, pipe.width, pipe.topHeight + 2);
        // Lip ring for beauty top pillar
        ctx.fillRect(pipe.x - 3, pipe.topHeight - 12, pipe.width + 6, 12);
        ctx.strokeRect(pipe.x - 3, pipe.topHeight - 12, pipe.width + 6, 12);

        // Bottom Pillar
        ctx.fillRect(pipe.x, height - pipe.bottomHeight, pipe.width, pipe.bottomHeight);
        ctx.strokeRect(pipe.x, height - pipe.bottomHeight, pipe.width, pipe.bottomHeight + 2);
        // Lip ring bottom pillar
        ctx.fillRect(pipe.x - 3, height - pipe.bottomHeight, pipe.width + 6, 12);
        ctx.strokeRect(pipe.x - 3, height - pipe.bottomHeight, pipe.width + 6, 12);
      }

      // -------------------------------
      // PARTICLES SPLASH AND SYSTEM
      // -------------------------------
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.alpha <= 0) {
          state.particles.splice(i, 1);
        }
      }
      ctx.globalAlpha = 1.0; // Reset alpha channels

      // --------------------
      // DRAW BIRD OR SQUAD
      // --------------------
      const drawFlappy = (bx: number, by: number, scale: number, angle: number, colorStart: string, colorEnd: string) => {
        ctx.save();
        ctx.translate(bx, by);
        ctx.rotate(angle);

        // Wing movement animation dependent on velocity
        const wingFlap = Math.sin(state.frameCount * 0.15) * 8;

        // Sparkle glowing trail
        if (state.isPlaying && state.frameCount % 2 === 0) {
          state.particles.push({
            x: bx - 14,
            y: by + (Math.random() - 0.5) * 8,
            vx: -1.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2.2 + 0.8,
            color: "rgba(253, 224, 71, 0.45)",
            alpha: 0.8,
            decay: 0.02
          });
        }

        // Draw bird model (Sleek vector style)
        // Feather tail glow
        ctx.fillStyle = colorEnd;
        ctx.beginPath();
        ctx.moveTo(-16 * scale, wingFlap * scale);
        ctx.quadraticCurveTo(-26 * scale, -8 * scale, -18 * scale, -10 * scale);
        ctx.quadraticCurveTo(-22 * scale, 12 * scale, -16 * scale, wingFlap * scale);
        ctx.fill();

        // Safe vector main circle
        let bodyGrad = ctx.createRadialGradient(-3 * scale, -3 * scale, 2 * scale, 0, 0, 12 * scale);
        bodyGrad.addColorStop(0, colorStart);
        bodyGrad.addColorStop(1, colorEnd);
        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.arc(0, 0, 11 * scale, 0, Math.PI * 2);
        ctx.fill();

        // Eye White
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(4 * scale, -4 * scale, 3.5 * scale, 0, Math.PI * 2);
        ctx.fill();

        // Pupil Eye
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(5 * scale, -4 * scale, 1.8 * scale, 0, Math.PI * 2);
        ctx.fill();

        // Golden Beak
        ctx.fillStyle = "#f59e0b";
        ctx.beginPath();
        ctx.moveTo(9 * scale, -2 * scale);
        ctx.lineTo(17 * scale, 2 * scale);
        ctx.lineTo(8 * scale, 4 * scale);
        ctx.closePath();
        ctx.fill();

        // Wing flap
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.beginPath();
        ctx.ellipse(-2 * scale, (1 + wingFlap * 0.4) * scale, 7 * scale, 4 * scale, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      };

      // Handle squad birds placement (V formation)
      if (state.isSquadMode) {
        // Main leader bird (Yellow Gold)
        drawFlappy(120, state.birdY, 1.1, state.birdAngle, "#fef08a", "#eab308");
        // Wingman 1 (Orange Phoenix)
        drawFlappy(94, state.birdY - 26, 0.85, state.birdAngle, "#fdba74", "#f97316");
        // Wingman 2 (Divine Ruby Phoenix)
        drawFlappy(94, state.birdY + 26, 0.85, state.birdAngle, "#fca5a5", "#ef4444");
      } else {
        // Single Classic bird (Celestial Gold)
        drawFlappy(120, state.birdY, 1.15, state.birdAngle, "#fef08a", "#ca8a04");
      }

      // HUD Text overlay if not playing
      if (!state.isPlaying) {
        ctx.fillStyle = "rgba(9, 9, 11, 0.65)";
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 20px 'Space Grotesk', system-ui";
        ctx.textAlign = "center";
        
        if (state.score > 0) {
          ctx.fillText("CRASHED!", width / 2, height / 2 - 25);
          ctx.fillStyle = "rgba(251, 191, 36, 1)";
          ctx.font = "bold 14px 'Space Grotesk', system-ui";
          ctx.fillText(`YOUR FLIGHT SCORE: ${state.score} POINTS`, width / 2, height / 2.5 + 15);
          ctx.fillStyle = "#94a3b8";
          ctx.fillText("TAP OR SPACE TO REDEEM YOUR GLORY", width / 2, height / 2 + 50);
        } else {
          ctx.fillText("PLAPPY LEGENDS BROWSER DEMO", width / 2, height / 2 - 20);
          ctx.fillStyle = "#f59e0b";
          ctx.font = "bold 12px monospace";
          ctx.fillText("TEST YOUR FLAPPING ARCADE REFLEXES NOW", width / 2, height / 2 + 10);
          ctx.fillStyle = "#94a3b8";
          ctx.font = "bold 14px 'Space Grotesk', system-ui";
          ctx.fillText("TAP WINDOW OR PRESS SPACEBAR TO FLY", width / 2, height / 2 + 50);
        }
      }

      animId = requestAnimationFrame(step);
    };

    const handleCrash = () => {
      const state = gameStateRef.current;
      playSound("crash");
      state.isPlaying = false;
      setIsPlaying(false);

      // Create rich fireworks collision debris
      for (let i = 0; i < 20; i++) {
        gameStateRef.current.particles.push({
          x: 120,
          y: state.birdY,
          vx: (Math.random() - 0.5) * 8 + (state.isSquadMode ? -1 : 0),
          vy: (Math.random() - 0.5) * 8,
          size: Math.random() * 4 + 1.5,
          color: "rgba(244, 63, 94, 0.95)",
          alpha: 1,
          decay: 0.02
        });
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isMuted]);

  // Jump control triggers
  const triggerFly = () => {
    const state = gameStateRef.current;
    if (!state.isPlaying) {
      // Start/reset game state cleanly
      state.score = 0;
      setCurrentScore(0);
      state.birdY = 150;
      state.birdVelocity = state.jumpStrength;
      state.pipes = [];
      state.particles = [];
      state.isPlaying = true;
      setIsPlaying(true);
    } else {
      state.birdVelocity = state.jumpStrength;
    }
    playSound("jump");
  };

  // Keyboard binding
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        triggerFly();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div id="demo-module" className="bg-white border border-slate-200 rounded-3xl p-5 max-w-4xl mx-auto shadow-sm relative">
      
      {/* Settings Navigation Bar for Game */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100 text-xs sm:text-sm">
        
        {/* World Select Mode */}
        <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200/60">
          {[
            { id: "olympus", name: "Olympus (Greek)" },
            { id: "asgard", name: "Asgard (Norse)" },
            { id: "underworld", name: "Hades (Fire)" }
          ].map((w) => (
            <button
              id={`world-toggle-${w.id}`}
              key={w.id}
              onClick={() => setGameWorld(w.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${gameWorld === w.id ? "bg-blue-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`}
            >
              {w.name}
            </button>
          ))}
        </div>

        {/* Squad Mode Toggle Controls */}
        <div className="flex items-center gap-3">
          <button
            id="squad-mode-badge"
            onClick={() => setIsSquadMode(!isSquadMode)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide flex items-center gap-1.5 border transition-all cursor-pointer ${isSquadMode ? "bg-indigo-600 border-indigo-500 text-white shadow-sm" : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100"}`}
          >
            <Bird className="w-3.5 h-3.5" />
            <span>SQUAD SURVIVAL: {isSquadMode ? "ACTIVE" : "OFF"}</span>
          </button>

          {/* Audio controls */}
          <button
            id="mute-badge-btn"
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800 cursor-pointer flex items-center justify-center transition-colors"
            title={isMuted ? "Unmute sound synthesis" : "Mute audio synthesis"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-blue-600" />}
          </button>
        </div>

      </div>

      {/* Primary Display Score Header */}
      <div className="grid grid-cols-2 text-center bg-slate-50 py-3 rounded-2xl border border-slate-100 mb-4 font-mono">
        <div>
          <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-bold">LIVE SCORE</span>
          <span className="text-xl sm:text-2xl font-bold font-mono text-slate-800">{currentScore}</span>
        </div>
        <div className="border-l border-slate-200">
          <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-bold">PERSONAL RECORD</span>
          <span className="text-xl sm:text-2xl font-bold font-mono text-blue-600">{highScore} pts</span>
        </div>
      </div>

      {/* ACTIVE CANVAS VIEWPORT STAGE */}
      <div 
        ref={containerRef}
        onClick={triggerFly}
        className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-950 cursor-pointer relative select-none shadow-inner"
        style={{ height: "340px" }}
      >
        <canvas 
          ref={canvasRef} 
          className="mx-auto block"
        />

        {/* Small controls floating helper overlay on startup */}
        {!isPlaying && (
          <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl text-[10px] font-mono text-slate-300 flex items-center gap-1.5 pointer-events-none">
            <Volume2 className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
            <span>Sound synthesizer {isMuted ? "muted" : "live"}</span>
          </div>
        )}
      </div>

      {/* Control instructions bottom line */}
      <div className="text-center text-[11px] font-mono text-slate-500 mt-3">
        🖥️ Desktop: Click inside the stage or hit <kbd className="bg-slate-50 px-1.5 py-0.5 border border-slate-200 rounded">Spacebar</kbd> to fly. | 📱 Mobile: Tap anywhere inside the stage container.
      </div>

    </div>
  );
}
