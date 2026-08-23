import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { workExperience } from "../data/portfolioData";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        className="container"
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
            — Professional
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
            Work <br />
            <span className="text-accent">Experience.</span>
          </h1>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-8"
        >
          {workExperience.map((job) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              key={job.id}
              className="glass-panel group"
              style={{
                borderRadius: "20px",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                border: "1px solid var(--color-border)",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              <div className="md:flex justify-between items-start gap-6">
                {/* Left Side: Role and Company */}
                <div className="flex gap-5 items-start">
                  <div
                    style={{
                      fontSize: "2.5rem",
                      background: "var(--color-bg-tertiary)",
                      padding: "1rem",
                      borderRadius: "16px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    }}
                  >
                    {job.logo}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {job.role}
                    </h3>
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                      }}
                    >
                      {job.company}
                    </h4>
                  </div>
                </div>

                {/* Right Side: Date */}
                <div
                  className="mt-4 md:mt-0"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "var(--color-text-secondary)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  <Calendar size={16} />
                  {job.period}
                </div>
              </div>

              {/* Description */}
              <div>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                  }}
                >
                  {job.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-2">
                {job.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: "0.85rem",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "8px",
                      background: "var(--color-bg-tertiary)",
                      color: "var(--color-text-secondary)",
                      fontWeight: 500,
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience;
