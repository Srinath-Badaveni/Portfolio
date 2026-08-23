import React, { useState, useEffect, useRef } from "react";
import { Github, ArrowRight } from "lucide-react";
import { personalInfo, stats, skills } from "../data/portfolioData";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

// Collect all skills for marquee
const allSkills = [
  ...skills.languages.map((s) => s.name),
  ...skills.frontend,
  ...skills.backend,
  ...skills.databases,
  ...skills.tools,
];

// Magnetic Button Component
const MagneticButton = ({ children, onClick, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const xPos = (clientX - (left + width / 2)) * 0.3;
    const yPos = (clientY - (top + height / 2)) * 0.3;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className={className}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

const Home = ({ setActiveSection, darkMode }) => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  
  // Tilt effect for profile picture
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  const handleProfileMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left - rect.width / 2;
    const yPos = e.clientY - rect.top - rect.height / 2;
    x.set(xPos);
    y.set(yPos);
  };

  const handleProfileMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / (window.innerHeight * 0.8));

  // Stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

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
          
          <motion.div 
            className="space-y-6 max-w-7xl w-full relative"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Intro Label */}
            <motion.h2
              variants={itemVariants}
              className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-4"
              style={{ color: darkMode ? "#FCBF49" : "var(--color-accent)" }}
            >
              <span className="w-12 h-[2px] bg-current opacity-50"></span>
              Hi, I'm Srinath Badaveni
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className={`absolute right-0 -top-12 hidden md:block rounded-full overflow-hidden shadow-2xl cursor-pointer ${
                !darkMode ? "border-4 border-gray-200" : ""
              }`}
              style={{
                width: "14rem",
                height: "14rem",
                perspective: 1000,
              }}
            >
              <motion.img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                style={{ rotateX, rotateY }}
                onMouseMove={handleProfileMouseMove}
                onMouseLeave={handleProfileMouseLeave}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black tracking-tighter mb-8 leading-none"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
                textTransform: "uppercase",
                color: darkMode ? "#EAE2B7" : "#1a1a1a",
              }}
            >
              <span
                className="block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: darkMode
                    ? "1px rgba(234, 226, 183, 0.5)"
                    : "1px rgba(26, 26, 26, 0.5)",
                  opacity: 0.9,
                }}
              >
                Building
              </span>
              <span className="block mt-[-0.2em] relative z-10">
                Scalable Web
              </span>
              <span className="block mt-[-0.2em] text-gradient">
                Experiences.
              </span>
            </motion.h1>

            {/* Text (Left) + Button (Right) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mt-8 w-full"
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
                <MagneticButton
                  onClick={() => setActiveSection("projects")}
                  className="group relative px-8 py-4 bg-[#D62828] text-white font-bold rounded-full overflow-hidden shadow-lg shadow-[#D62828]/30 flex items-center gap-3 hover:shadow-[#D62828]/50 transition-colors"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    See My Work
                    <ArrowRight
                      className="group-hover:translate-x-1.5 transition-transform duration-300"
                      size={20}
                    />
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-out"></div>
                </MagneticButton>
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
            </motion.div>
          </motion.div>

          {/* 🌊 Premium Skills Reels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-full mt-6 pt-2 pb-4 relative z-10"
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
          </motion.div>
        </div>

        {/* Minimal Stats - Adapts to Dark/Light */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 border-t border-gray-800 pt-16"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
