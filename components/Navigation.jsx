"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: "60px",
          display: "flex",
          alignItems: "center",
          padding: "0 32px",
          transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
          background: pinned ? "rgba(5,7,13,0.9)" : "transparent",
          backdropFilter: pinned ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: pinned ? "blur(20px) saturate(180%)" : "none",
          borderBottom: pinned ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
          boxShadow: pinned ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>

          {/* Logo */}
          <a href="#hero" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <span style={{ fontSize: "18px", fontWeight: 800, fontFamily: "var(--font-display)", letterSpacing: "-0.03em", color: "var(--c-fg)" }}>
              Bhumit<span style={{ color: "var(--c-accent)" }}>.</span>Dev
            </span>
          </a>

          {/* Desktop links */}
          <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden md:flex">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link"
                onMouseEnter={() => setActive(l.label)}
                onMouseLeave={() => setActive("")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="hidden md:flex">
            <a href="/Bhumit-Vaghela-Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "7px 16px", borderRadius: "8px", fontSize: "13px" }}>
              Resume
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="btn-primary" style={{ padding: "7px 16px", borderRadius: "8px", fontSize: "13px" }}>
              Hire me
            </a>
          </div>

          {/* Hamburger */}
          <button type="button" onClick={() => setOpen(v => !v)} className="md:hidden" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px", width: "36px", height: "36px", background: "transparent", border: "none", cursor: "pointer", padding: "6px" }} aria-label="Toggle menu">
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} transition={{ duration: 0.22 }} style={{ display: "block", height: "1.5px", background: "var(--c-fg)", borderRadius: "99px", transformOrigin: "center" }} />
            <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }} transition={{ duration: 0.22 }} style={{ display: "block", height: "1.5px", background: "var(--c-fg)", borderRadius: "99px" }} />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} transition={{ duration: 0.22 }} style={{ display: "block", height: "1.5px", background: "var(--c-fg)", borderRadius: "99px", transformOrigin: "center" }} />
          </button>
        </div>
      </motion.header>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden"
            style={{ position: "fixed", top: "60px", left: 0, right: 0, zIndex: 190, background: "rgba(5,7,13,0.98)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "24px 32px 32px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.045, duration: 0.22 }}
                  style={{ fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-display)", color: "var(--c-fg-2)", textDecoration: "none", letterSpacing: "-0.03em", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--c-fg)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--c-fg-2)"}
                >
                  {l.label}
                </motion.a>
              ))}
              <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <motion.a
                  href="/Bhumit-Vaghela-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: links.length * 0.045 + 0.05 }}
                  className="btn-ghost"
                  style={{ flex: 1, justifyContent: "center", borderRadius: "10px" }}
                >
                  Resume
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: links.length * 0.045 + 0.1 }}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: "center", borderRadius: "10px" }}
                >
                  Hire me
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
