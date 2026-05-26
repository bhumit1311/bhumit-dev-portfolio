"use client";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    body: "I build production-ready web interfaces with React and Next.js — fast, accessible, and responsive across all screen sizes. Every component is typed, tested, and maintainable.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    outcome: "Clean UI that ships fast",
  },
  {
    num: "02",
    title: "Backend & API Integration",
    body: "REST APIs, authentication, database schemas, and server logic. I can take your frontend all the way to a working, deployed full-stack product — or slot into an existing system.",
    tech: ["Node.js", "Express", "MongoDB", "Firebase", "Postgres"],
    outcome: "Backend that handles real traffic",
  },
  {
    num: "03",
    title: "Python Development",
    body: "Custom backend scripts, web scrapers, data extraction pipelines, and robust backend integrations. I build clean and optimized Python tools utilizing modern libraries and frameworks to solve data automation and scripting problems.",
    tech: ["Python", "FastAPI", "Flask", "Pandas", "BeautifulSoup"],
    outcome: "Clean scripts and robust APIs",
  },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: "var(--c-surface-1)" }}>
      <div className="wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="services-header"
        >
          <div>
            <p className="eyebrow">Services</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1, color: "var(--c-fg)" }}>
              What I can build for you.
            </h2>
          </div>
          <p style={{ maxWidth: "360px", fontSize: "14px", lineHeight: 1.75, color: "var(--c-fg-3)" }}>
            Scoped work with real deliverables — I focus on shipping, not endless revisions.
          </p>
        </motion.div>

        {/* Service rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", background: "var(--c-border)", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--c-border)" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="service-row"
            >
              {/* Number */}
              <div style={{ paddingTop: "4px" }}>
                <span className="num-accent" style={{ fontSize: "13px" }}>{s.num}</span>
              </div>

              {/* Main content */}
              <div>
                <h3 style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "var(--c-fg)",
                  marginBottom: "12px",
                  lineHeight: 1.2,
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--c-fg-3)", maxWidth: "520px", marginBottom: "20px" }}>
                  {s.body}
                </p>
                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {s.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="service-outcome">
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(90,103,242,0.2)",
                  background: "rgba(90,103,242,0.07)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "var(--c-accent-light)",
                  letterSpacing: "0.01em",
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="3.5" stroke="var(--c-accent-light)" strokeWidth="1.2"/>
                    <path d="M3.5 5L4.5 6L6.5 4" stroke="var(--c-accent-light)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {s.outcome}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="services-cta-strip"
        >
          <div>
            <p style={{ fontSize: "16px", fontWeight: 700, color: "var(--c-fg)", marginBottom: "4px" }}>
              Have a project in mind?
            </p>
            <p style={{ fontSize: "13.5px", color: "var(--c-fg-3)" }}>
              I&apos;m available for freelance work and internship positions.
            </p>
          </div>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Let&apos;s talk
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>

      <style>{`
        .services-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }
        @media (min-width: 768px) {
          .services-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 64px;
          }
        }
        
        .service-row {
          background: var(--c-bg);
          padding: 24px 20px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          align-items: start;
          transition: background 0.2s ease;
          cursor: default;
        }
        .service-row:hover {
          background: var(--c-surface-1);
        }
        @media (min-width: 768px) {
          .service-row {
            padding: 36px 40px;
            grid-template-columns: 80px 1fr 280px;
            gap: 32px;
          }
        }
        
        .service-outcome {
          padding-top: 4px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          text-align: left;
        }
        @media (min-width: 768px) {
          .service-outcome {
            align-items: flex-end;
            text-align: right;
            padding-top: 4px;
          }
        }
        
        .services-cta-strip {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .services-cta-strip {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
}
