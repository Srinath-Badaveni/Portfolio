import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Github,
  Calendar,
  Zap,
  ChevronRight,
} from "lucide-react";
import { projects } from "../data/portfolioData";

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const items = document.querySelectorAll(".project-anim");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-anim-visible");
          }
        });
      },
      { threshold: 0.05 },
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="section">
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}
      >
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
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
        </div>

        {/* Project Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {projects.map((project, idx) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className="project-anim"
                style={{
                  borderTop:
                    idx === 0 ? "1px solid var(--color-border)" : "none",
                  borderBottom: isExpanded
                    ? "none"
                    : "1px solid var(--color-border)",
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  overflow: "hidden",
                  background: isExpanded
                    ? "var(--color-bg-secondary)"
                    : "transparent",
                  borderRadius: isExpanded ? "16px" : "0",
                  marginTop: isExpanded ? "0.5rem" : "0",
                  marginBottom: isExpanded ? "0.5rem" : "0",
                  borderColor: isExpanded
                    ? "var(--color-accent)"
                    : "var(--color-border)",
                }}
                onMouseEnter={() => setExpandedId(project.id)}
                onMouseLeave={() => setExpandedId(null)}
              >
                {/* Collapsed Header */}
                <div
                  style={{
                    padding: isExpanded
                      ? "1.5rem 1.5rem 0.75rem"
                      : "1.75rem 0.5rem",
                    transition: "padding 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
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
                      <h3
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
                      </h3>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--color-text-tertiary)",
                          marginTop: "0.3rem",
                          fontWeight: 500,
                        }}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description Preview */}
                    <div className="md:col-span-5 hidden md:block">
                      <p
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
                      </p>
                    </div>

                    {/* Action Circle */}
                    <div className="md:col-span-2 hidden md:flex justify-end">
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          border: `1.5px solid ${isExpanded ? "var(--color-accent)" : "var(--color-border)"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                          transform: isExpanded
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                          background: isExpanded
                            ? "var(--color-accent)"
                            : "transparent",
                        }}
                      >
                        <ChevronRight
                          size={14}
                          style={{
                            color: isExpanded
                              ? "var(--color-bg-primary)"
                              : "var(--color-text-tertiary)",
                            transition: "color 0.3s",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Detail Panel */}
                <div
                  style={{
                    maxHeight: isExpanded ? "700px" : "0",
                    opacity: isExpanded ? 1 : 0,
                    transition:
                      "max-height 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
                    overflow: "hidden",
                  }}
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
                        <div
                          style={{
                            borderRadius: "12px",
                            overflow: "hidden",
                            aspectRatio: "16/10",
                            background: "var(--color-bg-tertiary)",
                            border: "1px solid var(--color-border)",
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
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "scale(1.03)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          />
                        </div>
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
                              background: "var(--color-bg-tertiary)",
                              color: "var(--color-text-secondary)",
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
                                    width: "5px",
                                    height: "5px",
                                    borderRadius: "50%",
                                    background: "var(--color-accent)",
                                    flexShrink: 0,
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
                                background: "var(--color-bg-tertiary)",
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
                          style={{ marginTop: "auto" }}
                        >
                          {project.githubUrl && (
                            <a
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
                                transition: "all 0.25s",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor =
                                  "var(--color-text-primary)";
                                e.currentTarget.style.color =
                                  "var(--color-text-primary)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor =
                                  "var(--color-border)";
                                e.currentTarget.style.color =
                                  "var(--color-text-secondary)";
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={16} /> Source
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
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
                                transition: "all 0.25s",
                                boxShadow: "0 2px 12px var(--color-accent)25",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                  "translateY(-1px)";
                                e.currentTarget.style.boxShadow =
                                  "0 4px 20px var(--color-accent)40";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                  "translateY(0)";
                                e.currentTarget.style.boxShadow =
                                  "0 2px 12px var(--color-accent)25";
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              Live Demo <ArrowUpRight size={15} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
