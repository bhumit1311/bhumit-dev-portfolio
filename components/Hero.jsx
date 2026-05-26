"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const Arrow = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const FileIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M8 1H3C2.45 1 2 1.45 2 2v10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5L8 1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 1v4h4M4.5 8.5h5M4.5 10.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TICKER_ITEMS = [
  "React", "·", "Next.js", "·", "Node.js", "·", "TypeScript", "·",
  "MongoDB", "·", "Framer Motion", "·", "Python", "·", "FastAPI", "·",
  "Tailwind CSS", "·", "Firebase", "·", "Express", "·", "REST APIs", "·",
];

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "14px 0", position: "relative", background: "rgba(255,255,255,0.01)" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(90deg, var(--c-bg), transparent)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(-90deg, var(--c-bg), transparent)", zIndex: 1, pointerEvents: "none" }} />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
        style={{ display: "flex", gap: "28px", whiteSpace: "nowrap", width: "max-content" }}
      >
        {doubled.map((it, i) => (
          <span key={i} style={{
            fontSize: "11px",
            fontWeight: it === "·" ? 400 : 700,
            color: it === "·" ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.28)",
            letterSpacing: it === "·" ? 0 : "0.12em",
            textTransform: "uppercase",
          }}>
            {it}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const STATS = [
  { value: "3+", label: "Projects" },
  { value: "0 to 1yr", label: "Experience" },
  { value: "24h", label: "Response" },
  { value: "∞", label: "Passion" },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : 0.08 } } };
  const fadeUp = { hidden: { y: 28, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

  return (
    <section id="hero" ref={ref} style={{ position: "relative", minHeight: "100dvh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Noise texture */}
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`, opacity: 0.6, pointerEvents: "none" }} />

      {/* Fine grid lines */}
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse 80% 70% at 70% 50%,black 20%,transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 70% 50%,black 20%,transparent 100%)" }} />

      {/* Red atmospheric glow – right side behind the photo */}
      <div aria-hidden style={{ position: "absolute", width: "900px", height: "900px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(220,38,38,0.12) 0%, rgba(220,38,38,0.03) 45%, transparent 70%)", top: "-200px", right: "-200px", pointerEvents: "none" }} />

      {/* Subtle indigo left-side accent behind text */}
      <div aria-hidden style={{ position: "absolute", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(90,103,242,0.06) 0%, transparent 70%)", bottom: "-100px", left: "-100px", pointerEvents: "none" }} />

      {/* Red quarter-circle arc – bottom right */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "absolute", bottom: "40px", right: "-80px", width: "260px", height: "260px", borderRadius: "50%", border: "52px solid #dc2626", clipPath: "polygon(0 50%,100% 50%,100% 100%,0 100%)", pointerEvents: "none", zIndex: 0, opacity: 0.5 }}
      />

      {/* Horizontal line accent */}
      <div aria-hidden style={{ position: "absolute", bottom: "170px", left: "80px", width: "120px", height: "1px", background: "linear-gradient(90deg, rgba(220,38,38,0.4), transparent)", pointerEvents: "none" }} />

      {/* ── Main grid ── */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "100px 48px 60px", position: "relative", zIndex: 1 }} className="hero-section-container">
        <div className="hero-grid" style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", display: "grid", alignItems: "center" }}>

          {/* ══ LEFT — Intro Text ══ */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="hero-text-col">

            {/* Role badge */}
            <motion.div variants={fadeUp} style={{ marginBottom: "28px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px 6px 10px", borderRadius: "99px", background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.18)", fontSize: "12px", fontWeight: 600, color: "var(--c-accent-light)", letterSpacing: "0.04em" }}>
                <span className="dot-live" style={{ width: "6px", height: "6px", background: "#dc2626", boxShadow: "0 0 0 3px rgba(220,38,38,0.2)" }} />
                Full-Stack Web Developer
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(48px, 6.5vw, 84px)",
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: "4px",
                fontFamily: "var(--font-display), sans-serif",
                textTransform: "uppercase",
              }}
            >
              BHUMIT
            </motion.h1>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(48px, 6.5vw, 84px)",
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.6)",
                marginBottom: "24px",
                fontFamily: "var(--font-display), sans-serif",
                textTransform: "uppercase",
              }}
            >
              VAGHELA
            </motion.h1>

            {/* Tagline + red dot row */}
            <motion.div variants={fadeUp} className="hero-tagline">
              <p style={{ fontSize: "clamp(15px, 1.7vw, 19px)", fontWeight: 400, color: "rgba(240,242,252,0.75)", letterSpacing: "0.02em", margin: 0, fontFamily: "var(--font-sans), sans-serif" }}>
                Developing Ideas Into Reality
              </p>
              <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                {[8,7,6,5,5,4,4,3].map((s, i) => (
                  <span key={i} style={{ width: `${s}px`, height: `${s}px`, borderRadius: "50%", background: "#dc2626", display: "inline-block", opacity: 0.2 + i * 0.1 }} />
                ))}
              </div>
            </motion.div>

            {/* Divider line */}
            <motion.div variants={fadeUp} className="hero-divider" />

            {/* Description */}
            <motion.p variants={fadeUp} style={{ fontSize: "15.5px", lineHeight: 1.8, color: "var(--c-fg-2)", maxWidth: "480px", marginBottom: "36px", fontWeight: 400 }}>
              Web developer turning ideas into fast, clean products that ship.
              Specializing in React&nbsp;/&nbsp;Next.js frontends, Node.js backends, and Python development.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="hero-ctas">
              <MagneticButton as="a" href="#projects" className="btn-primary">
                View my work <Arrow />
              </MagneticButton>
              <MagneticButton as="a" href="#contact" className="btn-ghost">
                Let&apos;s talk
              </MagneticButton>
              <MagneticButton as="a" href="/Bhumit-Vaghela-Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Resume <FileIcon />
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="hero-stats">
              {STATS.map((s, i) => (
                <div key={s.label} className={`hero-stat-card stat-${i}`}>
                  <p className="stat-value" style={{ fontSize: "22px", fontWeight: 800, color: i === 0 ? "var(--c-accent-light)" : "#fff", letterSpacing: "-0.04em", lineHeight: 1, fontFamily: "var(--font-display)", margin: 0 }}>{s.value}</p>
                  <p className="stat-label" style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "5px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* ══ RIGHT — Photo (No box container, floating ambient aura) ══ */}
          <motion.div
            className="hero-photo-col"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            {/* Ambient background glow behind the photo */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: "120%",
                height: "120%",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(220,38,38,0.2) 0%, rgba(90,103,242,0.1) 40%, transparent 70%)",
                filter: "blur(40px)",
                zIndex: 0,
                pointerEvents: "none"
              }}
            />

            {/* Floating dot grid - top right of photo */}
            <div aria-hidden style={{ position: "absolute", top: "-28px", right: "-28px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px", zIndex: 0, opacity: 0.25 }}>
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#dc2626" }} />
              ))}
            </div>

            {/* Photo wrapper with parallax */}
            <motion.div
              style={{ y: photoY, scale: photoScale, position: "relative", zIndex: 1, width: "100%", maxWidth: "380px" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div style={{
                position: "relative",
                borderRadius: "80px 24px 80px 24px",
                overflow: "hidden",
                boxShadow: "0 30px 70px -15px rgba(0,0,0,0.8), 0 0 50px rgba(220,38,38,0.15)",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "var(--c-surface-1)",
              }}>
                {/* Photo image */}
                <img
                  src="/bhumit-photo.png"
                  alt="Bhumit Vaghela — Full-Stack Developer"
                  style={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "3/4",
                    objectFit: "cover",
                    objectPosition: "center 15%",
                    filter: "contrast(1.05) brightness(0.98)"
                  }}
                />
              </div>

              {/* Floating "Open to Work" badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{
                  position: "absolute",
                  bottom: "-15px",
                  right: "15px",
                  zIndex: 10,
                  background: "rgba(5,7,13,0.85)",
                  border: "1px solid rgba(220,38,38,0.3)",
                  borderRadius: "20px",
                  padding: "8px 16px",
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                }}
              >
                <span className="dot-live" />
                <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--c-green)", letterSpacing: "0.08em" }}>OPEN TO WORK</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Ticker */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Ticker />
      </div>

      <style>{`
        .hero-grid { grid-template-columns: 1.25fr 1fr; gap: 80px; }
        .hero-divider { width: 60px; height: 2px; background: linear-gradient(90deg, #dc2626, transparent); margin-bottom: 24px; border-radius: 99px; }
        .hero-tagline { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; flex-wrap: wrap; }
        .hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 44px; }
        .hero-stats { display: flex; width: fit-content; }
        .hero-stat-card {
          padding: 16px 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          border-right: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          text-align: center;
        }
        .hero-stat-card.stat-0 {
          border-left: 1px solid rgba(255,255,255,0.06);
          background: rgba(220,38,38,0.05);
          border-radius: 10px 0 0 10px;
        }
        .hero-stat-card.stat-3 {
          border-radius: 0 10px 10px 0;
        }

        @media (max-width: 1024px) {
          .hero-grid { gap: 40px !important; }
        }

        @media (max-width: 960px) {
          .hero-section-container { padding: 100px 32px 60px !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .hero-photo-col { max-width: 320px; margin: 0 auto; order: -1; }
          .hero-text-col { display: flex; flex-direction: column; align-items: center; text-align: center; }
          .hero-divider { background: linear-gradient(90deg, transparent, #dc2626, transparent) !important; margin: 0 auto 24px !important; }
          .hero-tagline { justify-content: center !important; }
          .hero-text-col p { margin-left: auto; margin-right: auto; }
          .hero-ctas { justify-content: center; }
          .hero-stats { margin: 0 auto; }
        }

        @media (max-width: 600px) {
          .hero-section-container { padding: 80px 16px 40px !important; }
          .hero-grid { gap: 40px !important; }
          .hero-ctas { width: 100%; gap: 10px !important; margin-bottom: 32px !important; }
          .hero-ctas > * { flex: 1 1 calc(50% - 5px) !important; justify-content: center; }
          .hero-ctas > *:last-child { flex: 1 1 100% !important; }
          .hero-stats {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            width: 100% !important;
            gap: 8px !important;
          }
          .hero-stat-card {
            border: 1px solid rgba(255,255,255,0.06) !important;
            border-radius: 10px !important;
            padding: 12px 16px !important;
          }
          .hero-stat-card.stat-0 {
            border-left: 1px solid rgba(255,255,255,0.06) !important;
            border-radius: 10px !important;
          }
          .hero-stat-card.stat-3 {
            border-radius: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
