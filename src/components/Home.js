import React, { useState, useEffect, useRef } from "react";
import { Github, ArrowRight } from "lucide-react";
import { personalInfo, stats, skills } from "../data/portfolioData";

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
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll (fade out completely by 500px or 1 viewport height)
  const heroOpacity = Math.max(0, 1 - scrollY / (window.innerHeight * 0.8));

  return (
    <div
      className="section relative overflow-hidden flex flex-col justify-start"
      ref={heroRef}
      style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "0" }}
    >
      {/* Vignette Overlay for depth */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        <div
          className={`absolute inset-0 bg-radial-gradient from-transparent opacity-80 ${
            darkMode ? "to-bg-primary" : "to-white"
          }`}
        />
      </div>

      <div className="container relative z-10 px-6 md:px-12">
        {/* ═══ HERO SECTION ═══ */}
        <div className="flex flex-col justify-start items-start text-left w-full pt-2 pb-2">
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
              <span
                className="block animate-slide-up"
                style={{
                  color: "transparent",
                  WebkitTextStroke: darkMode
                    ? "1px rgba(234, 226, 183, 0.5)"
                    : "1px rgba(26, 26, 26, 0.5)",
                  opacity: 0.9,
                  animationDelay: "0.1s",
                }}
              >
                Building
              </span>
              <span
                className="block mt-[-0.2em] animate-slide-up relative z-10"
                style={{ animationDelay: "0.2s" }}
              >
                Scalable Web
              </span>
              <span
                className="block mt-[-0.2em] animate-slide-up text-gradient"
                style={{
                  animationDelay: "0.3s",
                }}
              >
                Experiences.
              </span>
            </h1>

            {/* Text (Left) + Button (Right) */}
            <div
              className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mt-8 w-full animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
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
                  className="group relative px-8 py-4 bg-[#D62828] text-white font-bold rounded-full overflow-hidden shadow-lg shadow-[#D62828]/30 flex items-center gap-3 hover:shadow-[#D62828]/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    See My Work
                    <ArrowRight
                      className="group-hover:translate-x-1.5 transition-transform duration-300"
                      size={20}
                    />
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-out"></div>
                </button>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full border transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "border-white/20 text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      : "border-black/20 text-black hover:bg-black/5 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                  }`}
                >
                  <Github size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* 🌊 Premium Skills Reels */}
          <div
            className="w-full mt-6 pt-2 pb-4 relative z-10 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="text-sm font-bold tracking-[0.3em] opacity-40 uppercase mb-4 text-center md:text-left text-accent">
              Technologies & Tools
            </p>
            <div
              className="relative w-full overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              }}
            >
              <div className="marquee-container overflow-hidden whitespace-nowrap">
                <div
                  className="flex gap-8 animate-marquee items-center font-display"
                  style={{
                    animationDirection: "reverse",
                    animationDuration: "40s",
                  }}
                >
                  {[...allSkills, ...allSkills, ...allSkills].map(
                    (skill, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 font-black tracking-widest text-xl md:text-2xl uppercase transition-all duration-300 transform-gpu hover:scale-110 hover:-translate-y-1 ${
                          darkMode
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-600 hover:text-black"
                        }`}
                        style={{
                          textShadow: darkMode
                            ? "0 4px 20px rgba(255, 255, 255, 0.1)"
                            : "none",
                        }}
                      >
                        {skill}
                      </span>
                    ),
                  )}
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

export default Home;
