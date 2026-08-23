import React from "react";
import { Code2, Globe, Database, Wrench, Brain, Cpu } from "lucide-react";
import { skills, certifications } from "../data/portfolioData";
import { motion } from "framer-motion";

// Category config with icons and accent colors
const categories = [
  {
    key: "languages",
    label: "Languages",
    icon: <Code2 size={20} />,
    items: skills.languages.map((s) => s.name),
    color: "#FCBF49",
  },
  {
    key: "frontend",
    label: "Frontend",
    icon: <Globe size={20} />,
    items: skills.frontend,
    color: "#D62828",
  },
  {
    key: "backend",
    label: "Backend",
    icon: <Cpu size={20} />,
    items: skills.backend,
    color: "#EAE2B7",
  },
  {
    key: "databases",
    label: "Databases",
    icon: <Database size={20} />,
    items: skills.databases,
    color: "#4ecdc4",
  },
  {
    key: "tools",
    label: "Tools & Systems",
    icon: <Wrench size={20} />,
    items: skills.tools,
    color: "#a78bfa",
  },
  {
    key: "competencies",
    label: "Core Competencies",
    icon: <Brain size={20} />,
    items: skills.competencies,
    color: "#f472b6",
  },
];

const Skills = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="section">
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
            — What I Work With
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
            Technical <br />
            <span className="text-accent">Expertise.</span>
          </h1>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: `0 20px 40px ${cat.color}20`,
                borderColor: cat.color
              }}
              key={cat.key}
              className="glass-panel"
              style={{
                borderRadius: "20px",
                padding: "2rem",
                cursor: "default",
                transition: "border-color 0.3s"
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    color: cat.color,
                    padding: "0.6rem",
                    borderRadius: "12px",
                    background: `${cat.color}15`,
                    boxShadow: `0 0 20px ${cat.color}20`
                  }}
                >
                  {cat.icon}
                </motion.div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {cat.label}
                </h3>
              </div>

              {/* Skill Items */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      backgroundColor: `${cat.color}20`,
                      borderColor: cat.color,
                      color: cat.color
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{
                      fontSize: "0.85rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.02)",
                      color: "var(--color-text-secondary)",
                      cursor: "default",
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-16 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <h3
            style={{
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--color-text-tertiary)",
              marginBottom: "2rem",
              fontWeight: 700,
            }}
          >
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <motion.div
                whileHover={{ scale: 1.02, x: 10, borderColor: "var(--color-accent)" }}
                key={cert.id}
                className="glass-panel"
                style={{
                  padding: "1.5rem",
                  borderRadius: "16px",
                  cursor: "default",
                  transition: "border-color 0.3s"
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4
                      style={{
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {cert.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-text-tertiary)",
                      }}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      whiteSpace: "nowrap",
                      background: "rgba(255,215,0,0.1)",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "6px"
                    }}
                  >
                    {cert.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
