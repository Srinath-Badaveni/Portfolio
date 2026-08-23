import React from "react";
import {
  ArrowUpRight,
  Github,
  Calendar,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

const Projects = () => {
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
    hidden: { opacity: 0, y: 30 },
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
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.2)", borderColor: "var(--color-accent)" }}
              key={project.id}
              className="glass-panel group"
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.3s"
              }}
            >
              {/* Image Section */}
              <div 
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  overflow: "hidden",
                  position: "relative",
                  borderBottom: "1px solid rgba(255,255,255,0.05)"
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
                    transition: "transform 0.6s ease",
                  }}
                  className="group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "0.3rem 0.8rem",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.05)",
                      color: "var(--color-text-secondary)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      textTransform: "uppercase"
                    }}
                  >
                    <Calendar size={12} /> {project.date}
                  </span>
                  {project.impact && (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "0.3rem 0.8rem",
                        borderRadius: "999px",
                        background: "rgba(255, 215, 0, 0.1)",
                        color: "var(--color-accent)",
                        border: "1px solid rgba(255, 215, 0, 0.2)",
                      }}
                    >
                      <Zap size={12} /> {project.impact}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text-primary)",
                    lineHeight: 1.2,
                    marginBottom: "0.5rem"
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--color-text-tertiary)",
                    fontWeight: 600,
                    marginBottom: "1.5rem"
                  }}
                >
                  {project.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem"
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
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

                {/* Spacer to push buttons to bottom */}
                <div style={{ flexGrow: 1 }} />

                {/* CTA Buttons */}
                <div className="flex gap-3 mt-4 pt-4 border-t border-white/5">
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
                    >
                      Live Demo <ArrowUpRight size={15} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
