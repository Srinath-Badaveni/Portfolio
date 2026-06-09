import React, { useEffect, useRef } from "react";
import { Award, Code, Rocket, GraduationCap, Trophy, Briefcase } from "lucide-react";
import { timeline } from "../data/portfolioData";

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
  const timelineRef = useRef(null);

  // Animate timeline items on scroll
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-item-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
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
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div
            className="absolute top-0 bottom-0 hidden md:block"
            style={{
              left: "120px",
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent, var(--color-accent), var(--color-border), transparent)",
            }}
          />

          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="timeline-item"
              style={{
                marginBottom: idx < timeline.length - 1 ? "4rem" : 0,
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                {/* Year Badge */}
                <div
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
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Dot on timeline */}
                <div
                  className="hidden md:flex items-start pt-4"
                  style={{ position: "relative", left: "-3px" }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "var(--color-accent)",
                      border: "3px solid var(--color-bg-primary)",
                      boxShadow: "0 0 12px var(--color-accent)",
                    }}
                  />
                </div>

                {/* Events Grid */}
                <div
                  className="flex-1 grid gap-3"
                  style={{ paddingLeft: "0.5rem" }}
                >
                  {item.events.map((event, i) => (
                    <div
                      key={i}
                      className="group"
                      style={{
                        padding: "1.25rem 1.5rem",
                        borderRadius: "12px",
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg-secondary)",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--color-accent)";
                        e.currentTarget.style.transform = "translateX(8px)";
                        e.currentTarget.style.background =
                          "var(--color-bg-tertiary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--color-border)";
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.background =
                          "var(--color-bg-secondary)";
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          style={{
                            color: "var(--color-accent)",
                            opacity: 0.7,
                            transition: "opacity 0.3s",
                          }}
                          className="group-hover:opacity-100"
                        >
                          {getEventIcon(event)}
                        </span>
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "var(--color-text-primary)",
                            lineHeight: 1.4,
                          }}
                        >
                          {event}
                        </h3>
                      </div>
                    </div>
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
