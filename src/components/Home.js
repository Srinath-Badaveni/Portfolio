import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Github, Linkedin, ArrowRight } from "lucide-react";
import { personalInfo, stats, skills, projects } from "../data/portfolioData";

// Collect all skills for marquee
const allSkills = [
  ...skills.languages.map((s) => s.name),
  ...skills.frontend,
  ...skills.backend,
  ...skills.databases,
  ...skills.tools,
];

const Home = ({ setActiveSection, darkMode }) => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const particles = useRef([]);
  const requestRef = useRef();

  // Initialize Particles (Squares & Circles) starting from center
  useEffect(() => {
    const particleCount = 40;
    const colors = darkMode
      ? ["#EAE2B7", "#D62828", "#FCBF49", "#ffffff"]
      : ["#2d6a4f", "#d62828", "#1b4332", "#000000"];

    particles.current = [...Array(particleCount)].map((_, i) => ({
      id: i,
      // Start relatively central (30-70% of screen)
      left: 50 + (Math.random() * 40 - 20),
      top: 50 + (Math.random() * 20 - 10),
      // Random drift direction (CSS vars)
      tx: (Math.random() - 0.5) * 400, // Move up to 200px in any direction
      ty: (Math.random() - 0.5) * 400,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 7 + 8, // Faster drift (8-15s instead of 20s+)
      delay: Math.random() * -20,
      type: Math.random() > 0.8 ? "square" : "circle",
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [darkMode]);

  // Constant Animation Loop (Floating Up)
  // No JS loop needed as we use CSS animation for floatUp!
  // But we can keep one for complex movement if desired, or skip.
  const animate = () => {
    // Rely on CSS animation for smooth, constant movement
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll (fade out completely by 500px or 1 viewport height)
  const heroOpacity = Math.max(0, 1 - scrollY / (window.innerHeight * 0.8));

  return (
    <div
      className="section relative overflow-hidden flex flex-col justify-start"
      ref={heroRef}
      style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "0" }}
    >
      {/* 🌌 Center-Spawning Particles */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          opacity: heroOpacity,
          perspective: "1000px",
        }}
      >
        {/* Vignette Overlay for depth - Adapts to theme */}
        <div
          className={`absolute inset-0 bg-radial-gradient from-transparent opacity-80 ${
            darkMode ? "to-bg-primary" : "to-white"
          }`}
        />

        {particles.current.map((p) => (
          <div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              borderRadius: p.type === "circle" ? "50%" : "0%",
              opacity: 0, // Handled by animation
              "--tx": `${p.tx}px`,
              "--ty": `${p.ty}px`,
              animation: `driftFromCenter ${p.duration}s infinite linear`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6 md:px-12">
        {/* ═══ HERO SECTION ═══ */}
        <div className="flex flex-col justify-start items-start text-left min-h-screen pt-4 pb-4">
          {/* Main Headings */}
          <div className="space-y-6 max-w-7xl w-full relative">
            {/* Intro Label */}
            <h2
              className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in-up flex items-center gap-4"
              style={{
                color: darkMode ? "#FCBF49" : "var(--color-accent)",
                animationDelay: "0.2s",
              }}
            >
              <span className="w-12 h-[2px] bg-current opacity-50"></span>
              Hi, I'm Srinath Badaveni
            </h2>

            <div
              className={`absolute right-0 -top-12 hidden md:block rounded-full overflow-hidden shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-125 cursor-pointer ${
                !darkMode ? "border-4 border-gray-200" : ""
              }`}
              style={{
                width: "14rem",
                height: "14rem",
              }}
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mobile Profile Photo - Inline/Different spot or hidden? 
                  User said "top right to fill that empty space", usually implies desktop. 
                  On mobile, spaces are tight. I'll hide it on mobile for now to avoid breaking layout 
                  as per "dont disturb a single component". 
              */}

            {/* Main Headline */}
            <h1
              className="font-display font-black tracking-tighter mb-8 leading-none"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
                textTransform: "uppercase",
                color: darkMode ? "#EAE2B7" : "#1a1a1a",
              }}
            >
              {/* Line 1: Outline Style */}
              <span
                className="block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: darkMode ? "1px #EAE2B7" : "1px #1a1a1a",
                  opacity: 0.8,
                }}
              >
                Building
              </span>

              {/* Line 2: Solid Primary Style */}
              <span className="block mt-[-0.2em]">Scalable Web</span>

              {/* Line 3: Accent Style */}
              <span
                className="block mt-[-0.2em]"
                style={{
                  color: darkMode ? "#FCBF49" : "var(--color-accent)",
                }}
              >
                Experiences.
              </span>
            </h1>

            {/* Text (Left) + Button (Right) */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mt-8 w-full">
              <p
                className="text-lg md:text-xl opacity-80 font-light leading-relaxed max-w-md"
                style={{
                  color: darkMode ? "#a0a0a0" : "var(--color-text-secondary)",
                }}
              >
                Passionate about building modern and scalable web applications.
              </p>
              <div className="flex gap-4 items-center shrink-0">
                <button
                  onClick={() => setActiveSection("projects")}
                  className="group px-8 py-4 bg-[#D62828] text-white font-bold rounded-full hover:bg-white hover:text-[#D62828] transition-all duration-300 shadow-lg flex items-center gap-3"
                >
                  See My Work
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full border transition-colors ${
                    darkMode
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-black/20 text-black hover:bg-black/5"
                  }`}
                >
                  <Github size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* 🌊 Skills Marquee — Full Width, Minimal Gap */}
          <div className="w-full mt-6 border-t border-gray-800/30 pt-4">
            <p className="text-xs font-bold tracking-[0.2em] opacity-50 uppercase mb-6">
              Technologies & Tools
            </p>
            <div className="relative w-full overflow-hidden mask-linear-fade">
              <div className="marquee-container overflow-hidden whitespace-nowrap">
                <div
                  className="flex gap-12 animate-marquee items-center font-display font-bold text-xl opacity-70"
                  style={{
                    color: darkMode ? "#EAE2B7" : "#2d6a4f",
                    animationDirection: "reverse",
                  }}
                >
                  {allSkills.map((skill, i) => (
                    <span key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full"></span>
                      {skill}
                    </span>
                  ))}
                  {allSkills.map((skill, i) => (
                    <span key={`dup-${i}`} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Stats - Adapts to Dark/Light */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 border-t border-gray-800 pt-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div
                className={`text-5xl md:text-7xl font-black font-display ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper for pure opacity fade
const fadeOutOnScroll = (y) => Math.max(0, 1 - y / 300);

export default Home;
