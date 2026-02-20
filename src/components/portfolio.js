import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, Volume2, VolumeX } from "lucide-react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [lastVolume, setLastVolume] = useState(0.2);
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  const volumeTimeoutRef = useRef(null);
  const navContainerRef = useRef(null);
  const isScrolling = useRef(false);
  const audioRef = useRef(null);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  // Apply theme on toggle
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Background Music setup
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) {
      setLastVolume(newVolume);
    }
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume === 0 && isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else if (newVolume > 0 && !isMusicPlaying) {
        audioRef.current.play().catch(console.error);
        setIsMusicPlaying(true);
      }
    }
  };

  const toggleMusic = () => {
    if (isMusicPlaying || volume > 0) {
      // Mute
      audioRef.current.pause();
      setIsMusicPlaying(false);
      setVolume(0);
    } else {
      // Unmute/Play
      const playVol = lastVolume > 0 ? lastVolume : 0.2;
      setVolume(playVol);
      audioRef.current.volume = playVol;
      audioRef.current.play().catch(console.error);
      setIsMusicPlaying(true);
    }
  };

  // Close Volume auto-timeout and click outside
  useEffect(() => {
    // Reset timer function
    const resetTimer = () => {
      if (volumeTimeoutRef.current) clearTimeout(volumeTimeoutRef.current);
      if (isVolumeOpen) {
        volumeTimeoutRef.current = setTimeout(() => {
          setIsVolumeOpen(false);
        }, 4000);
      }
    };

    // Click outside handler
    const handleClickOutside = (event) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target)
      ) {
        setIsVolumeOpen(false);
      }
    };

    if (isVolumeOpen) {
      setIsVolumeVisible(true);
      resetTimer();
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      // Listen for any interactions to reset the timer
      window.addEventListener("mousemove", resetTimer);
      window.addEventListener("keydown", resetTimer);
    } else {
      // Delay unmounting from DOM to allow fade out transition
      const fadeOutTimeout = setTimeout(() => setIsVolumeVisible(false), 300);
      return () => clearTimeout(fadeOutTimeout);
    }

    return () => {
      if (volumeTimeoutRef.current) clearTimeout(volumeTimeoutRef.current);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, [isVolumeOpen]);

  // Extend volume interaction
  const handleVolumeInteraction = (e) => {
    handleVolumeChange(e);
    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current);
      volumeTimeoutRef.current = setTimeout(() => setIsVolumeOpen(false), 4000);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "skills", label: "Expertise" },
    { id: "experience", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll-spy: update active nav based on which section is visible
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "projects",
      "skills",
      "experience",
      "contact",
    ];

    const handleIntersect = (entries) => {
      if (isScrolling.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(handleIntersect, observerOptions);
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Animate sections on scroll into view
  useEffect(() => {
    const animatedEls = document.querySelectorAll(".section-animate");
    const animObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.05 },
    );

    animatedEls.forEach((el) => animObs.observe(el));
    return () => animObs.disconnect();
  }, []);

  // Nav click: smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    isScrolling.current = true;
    setActiveSection(id);
    setIsMenuOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : "light"}`}
    >
      {/* Navigation Bar - Floating Pill Design */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center items-start pointer-events-none px-4">
        <div
          ref={navContainerRef}
          className={`relative pointer-events-auto backdrop-blur-xl border rounded-full p-2 flex items-center shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden
                    ${
                      darkMode
                        ? "bg-black/50 border-white/10 hover:bg-black/70"
                        : "bg-white/80 border-black/5 hover:bg-white/90 shadow-lg"
                    }
                `}
        >
          {/* Logo Pill */}
          <button
            onClick={() => scrollToSection("home")}
            className={`rounded-full px-4 py-2 flex items-center gap-2 mr-2 border transition-colors
                            ${
                              darkMode
                                ? "bg-zinc-900/80 border-white/5 hover:bg-zinc-800"
                                : "bg-gray-100 border-black/5 hover:bg-gray-200"
                            }
                        `}
          >
            <span
              className={`font-display font-bold text-lg ${darkMode ? "text-white" : "text-black"}`}
            >
              S<span className="text-accent">.</span>
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 px-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeSection === item.id
                    ? darkMode
                      ? "bg-yellow-400 text-black shadow-xl scale-105"
                      : "bg-green-700 text-white shadow-lg scale-105"
                    : darkMode
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-gray-600 hover:text-black hover:bg-black/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div
            className={`w-px h-6 mx-2 hidden md:block ${darkMode ? "bg-white/10" : "bg-black/10"}`}
          ></div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Music Controls Toggle */}
            <button
              onClick={() => setIsVolumeOpen(true)}
              className={`p-3 rounded-full transition-colors ${
                darkMode
                  ? "hover:bg-white/10 text-gray-400 hover:text-accent"
                  : "hover:bg-black/5 text-gray-500 hover:text-accent"
              }`}
              aria-label="Open Music Controls"
            >
              {isMusicPlaying && volume > 0 ? (
                <Volume2 size={18} />
              ) : (
                <VolumeX size={18} />
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-full transition-colors ${
                darkMode
                  ? "hover:bg-white/10 text-gray-400 hover:text-accent"
                  : "hover:bg-black/5 text-gray-500 hover:text-accent"
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 rounded-full transition-colors ${
                darkMode
                  ? "hover:bg-white/10 text-white"
                  : "hover:bg-black/5 text-black"
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Volume Overlay */}
          {isVolumeVisible && (
            <div
              className={`absolute inset-0 flex items-center justify-between px-2 z-10 transition-all duration-300 rounded-full overflow-hidden ${
                isVolumeOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } ${darkMode ? "bg-zinc-900/95" : "bg-white/95"}`}
            >
              {/* Dynamic Fill Background */}
              <div
                className={`absolute inset-y-0 left-0 ${darkMode ? "bg-yellow-400/20" : "bg-green-700/20"} transition-[width] duration-300 ease-out`}
                style={{ width: `${volume * 100}%` }}
              />

              <div className="flex items-center gap-4 w-full relative z-20 px-4">
                <button
                  onClick={toggleMusic}
                  className={`p-2 rounded-full transition-colors z-20 ${
                    darkMode
                      ? "hover:bg-white/10 text-accent"
                      : "hover:bg-black/5 text-green-700"
                  }`}
                >
                  {isMusicPlaying && volume > 0 ? (
                    <Volume2 size={24} />
                  ) : (
                    <VolumeX size={24} />
                  )}
                </button>
                <div className="flex-1 flex items-center relative h-full min-h-[40px]">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeInteraction}
                    onPointerDown={() => {
                      // Pause timeout while actively dragging
                      if (volumeTimeoutRef.current)
                        clearTimeout(volumeTimeoutRef.current);
                    }}
                    onPointerUp={() => {
                      // Restart timeout after letting go
                      volumeTimeoutRef.current = setTimeout(
                        () => setIsVolumeOpen(false),
                        4000,
                      );
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30 touch-none"
                    aria-label="Volume Control"
                  />
                  <span
                    className={`text-sm font-bold ml-4 relative z-20 ${darkMode ? "text-white" : "text-black"}`}
                  >
                    {Math.round(volume * 100)}%
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsVolumeOpen(false)}
                className={`p-2 rounded-full transition-colors relative z-20 ${
                  darkMode
                    ? "hover:bg-white/10 text-white"
                    : "hover:bg-black/5 text-black"
                }`}
                aria-label="Close Volume Control"
              >
                <X size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 z-40 pt-32 px-6 backdrop-blur-xl ${
            darkMode ? "bg-black/95" : "bg-white/95"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-2xl font-bold font-display transition-all p-4 rounded-xl border
                                ${
                                  activeSection === item.id
                                    ? "text-accent border-accent/20 bg-accent/5"
                                    : darkMode
                                      ? "text-gray-400 border-white/5 hover:text-white hover:bg-white/5"
                                      : "text-gray-500 border-black/5 hover:text-black hover:bg-black/5"
                                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* All Sections on Single Page */}
      <audio ref={audioRef} src="/Summer%20Life.mp3" loop />
      <main>
        <section id="home" className="section-animate section-visible">
          <Home
            setActiveSection={(id) => scrollToSection(id)}
            darkMode={darkMode}
          />
        </section>
        <section id="about" className="section-animate">
          <About />
        </section>
        <section id="projects" className="section-animate">
          <Projects />
        </section>
        <section id="skills" className="section-animate">
          <Skills />
        </section>
        <section id="experience" className="section-animate">
          <Experience />
        </section>
        <section id="contact" className="section-animate">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
