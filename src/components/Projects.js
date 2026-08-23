import React, { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Calendar,
  Zap,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolioData";

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  // Stagger variants for the list
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="section">
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}
      >
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}
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
            — Portfolio
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
            Selected <br />
            <span className="text-accent">Work.</span>
          </h1>
          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.1rem",
              color: "var(--color-text-secondary)",
              maxWidth: "550px",
              lineHeight: 1.6,
            }}
          >
            Each project reflects my dedication to building robust, scalable
            applications with clean architecture and user-first design.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: "flex", flexDirection: "column", gap: "0" }}
        >
          {projects.map((project, idx) => {
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                layout
                variants={itemVariants}
                key={project.id}
                className={isExpanded ? "glass-panel" : ""}
                style={{
                  borderTop:
                    idx === 0 && !isExpanded ? "1px solid var(--color-border)" : "none",
                  borderBottom: isExpanded
                    ? "none"
                    : "1px solid var(--color-border)",
                  cursor: "pointer",
                  overflow: "hidden",
                  borderRadius: isExpanded ? "24px" : "0",
                  marginTop: isExpanded ? "1rem" : "0",
                  marginBottom: isExpanded ? "1rem" : "0",
                  borderColor: isExpanded
                    ? "var(--color-accent)"
                    : "var(--color-border)",
                  boxShadow: isExpanded ? "0 10px 40px rgba(0,0,0,0.2), 0 0 20px rgba(255,215,0,0.05)" : "none",
                  zIndex: isExpanded ? 10 : 1,
                  position: "relative"
                }}
                onMouseEnter={() => setExpandedId(project.id)}
                onMouseLeave={() => setExpandedId(null)}
              >
                {/* Collapsed Header */}
                <motion.div
                  layout="position"
                  style={{
                    padding: isExpanded
                      ? "1.5rem 1.5rem 0.75rem"
                      : "1.75rem 0.5rem",
                  }}
                >
                  <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                    {/* Number */}
                    <div className="md:col-span-1 hidden md:block">
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1rem",
                          color: isExpanded
                            ? "var(--color-accent)"
                            : "var(--color-text-tertiary)",
                          fontWeight: 700,
                          transition: "color 0.3s",
                          opacity: 0.6,
                        }}
                      >
                        {String(project.id).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title Block */}
                    <div className="md:col-span-4 mb-1 md:mb-0">
                      <motion.h3
                        layout="position"
                        style={{
                          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                          fontWeight: 700,
                          fontFamily: "var(--font-display)",
                          color: isExpanded
                            ? "var(--color-accent)"
                            : "var(--color-text-primary)",
                          transition: "color 0.3s",
                          lineHeight: 1.15,
                        }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        layout="position"
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--color-text-tertiary)",
                          marginTop: "0.3rem",
                          fontWeight: 500,
                        }}
                      >
                        {project.subtitle}
                      </motion.p>
                    </div>

                    {/* Description Preview */}
                    <div className="md:col-span-5 hidden md:block">
                      <motion.p
                        layout="position"
                        style={{
                          color: "var(--color-text-secondary)",
                          fontSize: "0.95rem",
                          lineHeight: 1.5,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Action Circle */}
                    <div className="md:col-span-2 hidden md:flex justify-end">
                      <motion.div
                        layout="position"
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          border: `1.5px solid ${isExpanded ? "var(--color-accent)" : "var(--color-border)"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: isExpanded
                            ? "var(--color-accent)"
                            : "transparent",
                        }}
                      >
                        <ChevronRight
                          size={16}
                          style={{
                            color: isExpanded
                              ? "var(--color-bg-primary)"
                              : "var(--color-text-tertiary)",
                            transition: "color 0.3s",
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Expanded Detail Panel using AnimatePresence */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20, opacity: { duration: 0.2 } }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ padding: "0 1.5rem 2rem" }}>
                        {/* Thin accent divider */}
                        <div
                          style={{
                            height: "1px",
                            background: "var(--color-border)",
                            marginBottom: "1.25rem",
                            opacity: 0.5,
                          }}
                        />

                        <div className="md:grid md:grid-cols-12 md:gap-6">
                          {/* Image */}
                          <div className="md:col-span-5 mb-4 md:mb-0">
                            <motion.div
                              whileHover={{ scale: 1.02, rotateY: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              style={{
                                borderRadius: "12px",
                                overflow: "hidden",
                                aspectRatio: "16/10",
                                background: "var(--color-bg-tertiary)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                perspective: 1000
                              }}
                            >
                              <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  display: "block",
                                }}
                              />
                            </motion.div>
                          </div>

                          {/* Info Panel */}
                          <div
                            className="md:col-span-7"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "1.25rem",
                            }}
                          >
                            {/* Meta Badges */}
                            <div className="flex flex-wrap items-center gap-3">
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "0.4rem",
                                  fontSize: "0.85rem",
                                  fontWeight: 600,
                                  padding: "0.4rem 0.9rem",
                                  borderRadius: "999px",
                                  background: "rgba(255,255,255,0.05)",
                                  color: "var(--color-text-secondary)",
                                  border: "1px solid rgba(255,255,255,0.1)"
                                }}
                              >
                                <Calendar size={14} /> {project.date}
                              </span>
                              {project.impact && (
                                <span
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    fontSize: "0.85rem",
                                    fontWeight: 700,
                                    padding: "0.4rem 0.9rem",
                                    borderRadius: "999px",
                                    background: "var(--color-accent)",
                                    color: "var(--color-bg-primary)",
                                  }}
                                >
                                  <Zap size={14} /> {project.impact}
                                </span>
                              )}
                            </div>

                            {/* Key Features */}
                            <div>
                              <p
                                style={{
                                  fontSize: "0.8rem",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.12em",
                                  color: "var(--color-text-tertiary)",
                                  marginBottom: "0.5rem",
                                  fontWeight: 700,
                                }}
                              >
                                Highlights
                              </p>
                              <div
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: "1fr 1fr",
                                  gap: "0.5rem 1.25rem",
                                }}
                              >
                                {project.features.slice(0, 4).map((f, i) => (
                                  <div
                                    key={i}
                                    style={{
                                      fontSize: "0.95rem",
                                      color: "var(--color-text-secondary)",
                                      lineHeight: 1.5,
                                      display: "flex",
                                      alignItems: "flex-start",
                                      gap: "0.5rem",
                                    }}
                                  >
                                    <span
                                      style={{
                                        marginTop: "0.45rem",
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background: "var(--color-accent)",
                                        flexShrink: 0,
                                        boxShadow: "0 0 8px var(--color-accent)"
                                      }}
                                    />
                                    <span>{f}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((t, i) => (
                                <span
                                  key={i}
                                  style={{
                                    fontSize: "0.8rem",
                                    padding: "0.3rem 0.7rem",
                                    borderRadius: "6px",
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                    color: "var(--color-text-secondary)",
                                    fontWeight: 500,
                                    letterSpacing: "0.02em",
                                  }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>

                            {/* CTA Buttons */}
                            <div
                              className="flex gap-3"
                              style={{ marginTop: "auto", paddingTop: "1rem" }}
                            >
                              {project.githubUrl && (
                                <motion.a
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    padding: "0.6rem 1.2rem",
                                    borderRadius: "10px",
                                    border: "1px solid var(--color-border)",
                                    color: "var(--color-text-secondary)",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    background: "rgba(0,0,0,0.2)"
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Github size={16} /> Source
                                </motion.a>
                              )}
                              {project.liveUrl && (
                                <motion.a
                                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 215, 0, 0.3)" }}
                                  whileTap={{ scale: 0.95 }}
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    padding: "0.6rem 1.3rem",
                                    borderRadius: "10px",
                                    background: "var(--color-accent)",
                                    color: "var(--color-bg-primary)",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    fontSize: "0.9rem",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Live Demo <ArrowUpRight size={15} />
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
