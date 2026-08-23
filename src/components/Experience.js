import React, { useRef } from "react";
import { Award, Code, Rocket, GraduationCap, Trophy, Briefcase } from "lucide-react";
import { timeline } from "../data/portfolioData";
import { motion, useScroll, useTransform } from "framer-motion";

// Map icon to each event for visual flair
const getEventIcon = (event) => {
  const lower = event.toLowerCase();
  if (lower.includes("certification") || lower.includes("certified"))
    return <Award size={18} />;
  if (
    lower.includes("competition") ||
    lower.includes("rank") ||
    lower.includes("place")
  )
    return <Trophy size={18} />;
  if (
    lower.includes("b.tech") ||
    lower.includes("intermediate") ||
    lower.includes("ssc") ||
    lower.includes("cgpa")
  )
    return <GraduationCap size={18} />;
  if (
    lower.includes("launch") ||
    lower.includes("platform") ||
    lower.includes("application")
  )
    return <Rocket size={18} />;
  if (
    lower.includes("intern") ||
    lower.includes("developer") ||
    lower.includes("developed")
  )
    return <Briefcase size={18} />;
  return <Code size={18} />;
};

const Experience = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="section" ref={containerRef}>
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}
      >
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "5rem" }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--color-accent)",
              marginBottom: "1.5rem",
              fontWeight: 700,
            }}
          >
            — Timeline
          </p>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 800,
              fontFamily: "var(--font-display)",
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
            }}
          >
            My <br />
            <span className="text-accent">Journey.</span>
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Static Background Line */}
          <div
            className="absolute top-0 bottom-0 hidden md:block"
            style={{
              left: "120px",
              width: "2px",
              background: "rgba(255,255,255,0.05)",
            }}
          />
          
          {/* Animated Glowing Progress Line */}
          <motion.div
            className="absolute top-0 hidden md:block"
            style={{
              left: "120px",
              width: "2px",
              background: "linear-gradient(to bottom, var(--color-accent), transparent)",
              height: lineHeight,
              boxShadow: "0 0 15px var(--color-accent)",
              zIndex: 1
            }}
          />

          {timeline.map((item, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: idx < timeline.length - 1 ? "4rem" : 0,
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start relative z-10">
                {/* Year Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="shrink-0 relative z-10"
                  style={{ width: "100px", textAlign: "right" }}
                >
                  <span
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      fontWeight: 900,
                      fontFamily: "var(--font-display)",
                      color: "var(--color-accent)",
                      lineHeight: 1,
                      display: "block",
                      textShadow: "0 0 20px rgba(255, 215, 0, 0.2)"
                    }}
                  >
                    {item.year}
                  </span>
                </motion.div>

                {/* Dot on timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="hidden md:flex items-start pt-4"
                  style={{ position: "relative", left: "-4px" }}
                >
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: "var(--color-bg-primary)",
                      border: "3px solid var(--color-accent)",
                      boxShadow: "0 0 15px var(--color-accent)",
                    }}
                  />
                </motion.div>

                {/* Events Grid */}
                <div
                  className="flex-1 grid gap-4"
                  style={{ paddingLeft: "0.5rem" }}
                >
                  {item.events.map((event, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      whileHover={{ 
                        x: 10, 
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        borderColor: "var(--color-accent)"
                      }}
                      className="glass-panel group"
                      style={{
                        padding: "1.25rem 1.5rem",
                        borderRadius: "16px",
                        cursor: "default",
                        transition: "border-color 0.3s, background-color 0.3s"
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          style={{
                            color: "var(--color-accent)",
                            opacity: 0.7,
                            transition: "opacity 0.3s",
                          }}
                          className="group-hover:opacity-100 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
                        >
                          {getEventIcon(event)}
                        </span>
                        <h3
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: 500,
                            color: "var(--color-text-primary)",
                            lineHeight: 1.5,
                          }}
                        >
                          {event}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
