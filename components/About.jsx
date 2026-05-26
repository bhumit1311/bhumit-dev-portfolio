"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 32, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const DETAILS = [
  { label: "Education", value: "B.E. in IT (Pursuing) · Diploma Completed" },
  { label: "Location", value: "Veraval, Gujarat, India" },
  { label: "Looking for", value: "Internship or Junior Dev Role" },
  { label: "Work style", value: "Remote-first, async-friendly" },
  { label: "Languages", value: "JavaScript · TypeScript · Python" },
];

const PILLARS = [
  {
    num: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/>
      </svg>
    ),
    title: "Frontend",
    body: "Pixel-sharp, accessible, fast UIs — built with React and Next.js, animated with Framer Motion.",
  },
  {
    num: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Backend",
    body: "REST APIs, database design, server logic with Node.js. Full-stack when the project needs it.",
  },
  {
    num: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    ),
    title: "Python Development",
    body: "Custom scripting, data automation, web scraping, and API integrations built with clean, modern Python.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrapper">

        {/* ── Top two-column ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="about-grid">

          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="eyebrow">About me</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, lineHeight: 1.05, color: "var(--c-fg)", marginBottom: "28px" }}>
              Building things that{" "}
              <span className="text-gradient">work well</span>{" "}
              and look sharp.
            </h2>

            <p style={{ fontSize: "15.5px", lineHeight: 1.85, color: "var(--c-fg-2)", marginBottom: "20px" }}>
              I&apos;m a web developer from Veraval, Gujarat — holding an IT Diploma, currently pursuing
              my Bachelor&apos;s Degree, and actively building real-world projects while looking for internships or junior developer roles.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--c-fg-3)" }}>
              I care deeply about code quality, consistent design systems, and shipping work that
              doesn&apos;t just look good in a mockup — it has to hold up in production.
            </p>

            {/* Pull quote */}
            <div style={{ marginTop: "40px", padding: "20px 24px", borderLeft: "2px solid var(--c-accent)", background: "rgba(220,38,38,0.04)", borderRadius: "0 10px 10px 0" }}>
              <p style={{ fontSize: "14.5px", fontStyle: "italic", color: "var(--c-fg-2)", lineHeight: 1.75 }}>
                &ldquo;I write the kind of code I&apos;d be happy to read six months from now.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right – detail rows */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            style={{ display: "flex", flexDirection: "column", gap: "0" }}
          >
            {DETAILS.map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "24px",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--c-border)",
                  transition: "background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => e.currentTarget.style.paddingLeft = "8px"}
                onMouseLeave={e => e.currentTarget.style.paddingLeft = "0px"}
              >
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--c-fg-3)", flexShrink: 0 }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--c-fg)", textAlign: "right" }}>
                  {item.value}
                </span>
              </div>
            ))}

            <div style={{ marginTop: "32px", display: "flex", gap: "10px" }} className="about-ctas">
              <a href="#contact" className="btn-primary" style={{ flex: 1, justifyContent: "center", borderRadius: "10px" }}>
                Open to opportunities
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="https://github.com/bhumit1311" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ flex: 1, justifyContent: "center", borderRadius: "10px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Capability pillars ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginTop: "80px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", background: "var(--c-border)", borderRadius: "20px", overflow: "hidden", border: "1px solid var(--c-border)" }}
          className="pillars-grid"
        >
          {PILLARS.map((c, i) => (
            <div
              key={c.num}
              style={{ background: "var(--c-surface-1)", padding: "32px 30px 36px", transition: "background 0.25s ease", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--c-surface-2)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--c-surface-1)"; }}
            >
              {/* Number */}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, color: "var(--c-accent)", letterSpacing: "0.12em", display: "block", marginBottom: "16px" }}>{c.num}</span>
              {/* Icon */}
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.15)", display: "grid", placeItems: "center", color: "var(--c-accent-light)", marginBottom: "18px" }}>
                {c.icon}
              </div>
              <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--c-fg)", marginBottom: "10px", letterSpacing: "-0.02em" }}>{c.title}</h3>
              <p style={{ fontSize: "13.5px", lineHeight: 1.75, color: "var(--c-fg-3)" }}>{c.body}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .about-ctas { flex-direction: column !important; gap: 10px !important; }
          .about-ctas > a { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
