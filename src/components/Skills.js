import React, { useEffect } from "react";
import { Code2, Globe, Database, Wrench, Brain, Cpu } from "lucide-react";
import { skills, certifications } from "../data/portfolioData";

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
  // Animate skill cards on scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card-anim");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("skill-card-visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    cards.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="section">
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}
      >
        {/* Header */}
        <div style={{ marginBottom: "5rem" }}>
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
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.key}
              className="skill-card-anim group"
              style={{
                transitionDelay: `${idx * 0.1}s`,
                border: "1px solid var(--color-border)",
                borderRadius: "16px",
                padding: "2rem",
                background: "var(--color-bg-secondary)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cat.color;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 8px 30px ${cat.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  style={{
                    color: cat.color,
                    padding: "0.5rem",
                    borderRadius: "10px",
                    background: `${cat.color}15`,
                  }}
                >
                  {cat.icon}
                </div>
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
                  <span
                    key={i}
                    style={{
                      fontSize: "0.85rem",
                      padding: "0.4rem 0.9rem",
                      borderRadius: "999px",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-secondary)",
                      transition: "all 0.3s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = cat.color;
                      e.currentTarget.style.color = cat.color;
                      e.currentTarget.style.background = `${cat.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.color =
                        "var(--color-text-secondary)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Language Proficiency Bars */}
        <div className="mt-20">
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
            Language Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.languages.map((lang, idx) => (
              <div
                key={idx}
                className="skill-card-anim"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span
                    style={{
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      fontSize: "1rem",
                    }}
                  >
                    {lang.name}
                  </span>
                  <span
                    style={{
                      color: "var(--color-accent)",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    {lang.level}%
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "999px",
                    background: "var(--color-bg-tertiary)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="proficiency-bar"
                    style={{
                      width: `${lang.level}%`,
                      height: "100%",
                      borderRadius: "999px",
                      background: "var(--color-accent)",
                      transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div
          className="mt-20 pt-16 border-t"
          style={{ borderColor: "var(--color-border)" }}
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
              <div
                key={cert.id}
                className="group skill-card-anim"
                style={{
                  padding: "1.5rem",
                  border: "1px solid var(--color-border)",
                  borderRadius: "12px",
                  background: "var(--color-bg-secondary)",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4
                      style={{
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        marginBottom: "0.25rem",
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
                    }}
                  >
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
