import React, { useEffect } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Heart,
  Send,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".contact-anim");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-anim-visible");
          }
        });
      },
      { threshold: 0.08 },
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
            — Get In Touch
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
            Let's <br />
            <span className="text-accent">Connect.</span>
          </h1>
          <p
            className="contact-anim"
            style={{
              marginTop: "2rem",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
              maxWidth: "550px",
            }}
          >
            Have a project in mind or want to collaborate? I'm always open to
            discussing new opportunities.
          </p>
        </div>

        {/* Big Email CTA */}
        <div
          className="contact-anim"
          style={{
            marginBottom: "1.5rem",
            paddingBottom: "1.5rem",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--color-text-tertiary)",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            Drop me an email
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
              fontWeight: 700,
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-primary)";
            }}
          >
            {personalInfo.email}
            <Send
              size={28}
              style={{ opacity: 0.5, transition: "transform 0.3s" }}
            />
          </a>
        </div>

        {/* Contact Cards Row */}
        <div
          className="grid md:grid-cols-3 gap-5"
          style={{ marginBottom: "1.25rem" }}
        >
          {[
            {
              icon: <MapPin size={22} />,
              label: "Location",
              value: personalInfo.location,
              href: null,
              delay: "0s",
            },
            {
              icon: <Phone size={22} />,
              label: "Phone",
              value: personalInfo.phone,
              href: `tel:${personalInfo.phone}`,
              delay: "0.08s",
            },
            {
              icon: <Mail size={22} />,
              label: "Email",
              value: personalInfo.email,
              href: `mailto:${personalInfo.email}`,
              delay: "0.15s",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="contact-anim"
              style={{
                padding: "2rem",
                borderRadius: "16px",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-secondary)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: item.delay,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  color: "var(--color-accent)",
                  marginBottom: "1.25rem",
                  padding: "0.6rem",
                  borderRadius: "12px",
                  background: "var(--color-bg-tertiary)",
                  display: "inline-flex",
                }}
              >
                {item.icon}
              </div>
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-text-tertiary)",
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  style={{
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    fontSize: "1.05rem",
                    textDecoration: "none",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                >
                  {item.value}
                </a>
              ) : (
                <p
                  style={{
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    fontSize: "1.05rem",
                  }}
                >
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Social + Availability Row */}
        <div
          className="contact-anim md:grid md:grid-cols-2 md:gap-6"
          style={{ marginBottom: "3.5rem" }}
        >
          {/* Social Links */}
          <div
            style={{
              padding: "2rem",
              borderRadius: "16px",
              border: "1px solid var(--color-border)",
              background: "var(--color-bg-secondary)",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-text-tertiary)",
                marginBottom: "1.25rem",
                fontWeight: 600,
              }}
            >
              Connect Online
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "12px",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--color-text-primary)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Github size={20} /> GitHub
                <ArrowUpRight size={14} style={{ opacity: 0.4 }} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "12px",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0077b5";
                  e.currentTarget.style.color = "#0077b5";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.color = "var(--color-text-primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Linkedin size={20} /> LinkedIn
                <ArrowUpRight size={14} style={{ opacity: 0.4 }} />
              </a>
            </div>
          </div>

          {/* Availability */}
          <div
            style={{
              padding: "2rem",
              borderRadius: "16px",
              border: "1px solid var(--color-border)",
              background: "var(--color-bg-secondary)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              className="flex items-center gap-3"
              style={{ marginBottom: "0.75rem" }}
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
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#22c55e",
                  fontWeight: 700,
                }}
              >
                Available
              </p>
            </div>
            <p
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                lineHeight: 1.5,
              }}
            >
              {personalInfo.availability}
            </p>
          </div>
        </div>

        {/* ─── Footer ─── */}
        <footer
          style={{
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <div
            className="md:grid md:grid-cols-3 md:gap-8"
            style={{ marginBottom: "3rem" }}
          >
            {/* Brand Column */}
            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                {personalInfo.name}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                  maxWidth: "280px",
                }}
              >
                {personalInfo.title} — crafting scalable web applications with
                modern technologies and clean architecture.
              </p>
            </div>

            {/* Quick Links */}
            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-text-tertiary)",
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
              >
                Navigation
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                }}
              >
                {[
                  "Home",
                  "About",
                  "Work",
                  "Expertise",
                  "Journey",
                  "Contact",
                ].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    style={{
                      color: "var(--color-text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.25s",
                      padding: "0.2rem 0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "var(--color-text-secondary)";
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Socials Column */}
            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-text-tertiary)",
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
              >
                Elsewhere
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#0077b5";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--color-border)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.75rem",
              paddingBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-tertiary)",
              }}
            >
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
              reserved.
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-tertiary)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              Built with <Heart size={12} style={{ color: "#ef4444" }} />
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
