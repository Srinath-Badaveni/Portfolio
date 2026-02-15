import React, { useEffect } from "react";
import { MapPin, GraduationCap, Award, Briefcase } from "lucide-react";
import {
  personalInfo,
  education,
  certifications,
  skills,
} from "../data/portfolioData";

const About = () => {
  // Animate items on scroll
  useEffect(() => {
    const items = document.querySelectorAll(".about-anim");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-anim-visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="section">
      <div
        className="container"
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
            — Who I Am
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
            About <br />
            <span className="text-accent">Me.</span>
          </h1>
        </div>

        {/* Bio */}
        <div
          className="grid md:grid-cols-2 gap-12"
          style={{ marginBottom: "4rem" }}
        >
          <div className="about-anim">
            <p
              style={{
                fontSize: "1.3rem",
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
              }}
            >
              {personalInfo.bio}. {personalInfo.subtitle}.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
                marginTop: "1.5rem",
              }}
            >
              Based in{" "}
              <span
                style={{ color: "var(--color-text-primary)", fontWeight: 600 }}
              >
                {personalInfo.location}
              </span>
              , I'm focused on building scalable, user-centric digital products
              with modern technologies and clean architecture.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="about-anim"
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-secondary)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <MapPin
                size={20}
                style={{
                  color: "var(--color-accent)",
                  marginBottom: "0.75rem",
                }}
              />
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-text-tertiary)",
                  marginBottom: "0.25rem",
                }}
              >
                Location
              </p>
              <p
                style={{
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  fontSize: "0.95rem",
                }}
              >
                Hyderabad, India
              </p>
            </div>
            <div
              className="about-anim"
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-secondary)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Briefcase
                size={20}
                style={{
                  color: "var(--color-accent)",
                  marginBottom: "0.75rem",
                }}
              />
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-text-tertiary)",
                  marginBottom: "0.25rem",
                }}
              >
                Role
              </p>
              <p
                style={{
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  fontSize: "0.95rem",
                }}
              >
                {personalInfo.title}
              </p>
            </div>
            <div
              className="about-anim"
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-secondary)",
                gridColumn: "span 2",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#22c55e";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 8px #22c55e",
                    animation: "pulse-dot 2s infinite",
                  }}
                />
                <p
                  style={{
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    fontSize: "0.95rem",
                  }}
                >
                  {personalInfo.availability}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div
          className="about-anim"
          style={{
            marginBottom: "3rem",
            paddingTop: "3rem",
            borderTop: "1px solid var(--color-border)",
          }}
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
            Education
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="about-anim group"
                style={{
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg-secondary)",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <GraduationCap
                  size={20}
                  style={{ color: "var(--color-accent)", marginBottom: "1rem" }}
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-accent)",
                    marginBottom: "0.25rem",
                    fontWeight: 600,
                  }}
                >
                  {edu.period}
                </p>
                <h4
                  style={{
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    fontSize: "1rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {edu.institution}
                </h4>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {edu.degree}
                </p>
                <span
                  style={{
                    fontSize: "0.8rem",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    border: "1px solid var(--color-accent)",
                    color: "var(--color-accent)",
                    fontWeight: 600,
                  }}
                >
                  {edu.grade}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div
          className="about-anim"
          style={{
            marginBottom: "3rem",
            paddingTop: "3rem",
            borderTop: "1px solid var(--color-border)",
          }}
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
                className="about-anim group"
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRadius: "12px",
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
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
                <Award
                  size={20}
                  style={{ color: "var(--color-accent)", flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {cert.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
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
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div
          className="about-anim"
          style={{
            paddingTop: "3rem",
            borderTop: "1px solid var(--color-border)",
          }}
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
            Current Focus
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {skills.competencies.map((item, idx) => (
              <div
                key={idx}
                className="about-anim"
                style={{
                  padding: "1rem 1.25rem",
                  borderRadius: "10px",
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg-secondary)",
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.color = "var(--color-text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.color = "var(--color-text-secondary)";
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
