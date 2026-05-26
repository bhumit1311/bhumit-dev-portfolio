"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

/* ── Icons ─────────────────────────────────────── */
const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.428a.5.5 0 0 0 .609.61l5.652-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.208-1.433l-.374-.222-3.853 1.01 1.028-3.758-.243-.386A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

/* ── Contact info ───────────────────────────────── */
const CONTACTS = [
  { label: "Email", value: "bhumitvaghela71@gmail.com", href: "mailto:bhumitvaghela71@gmail.com", icon: <MailIcon />, copy: true },
  { label: "WhatsApp", value: "+91 9898471014", href: "https://wa.me/919898471014?text=Hi%20Bhumit%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!", icon: <WhatsAppIcon />, newTab: true, whatsapp: true },
  { label: "LinkedIn", value: "bhumit-vaghela", href: "https://www.linkedin.com/in/bhumit-vaghela-752130330/", icon: <LinkedinIcon />, newTab: true },
  { label: "GitHub", value: "bhumit1311", href: "https://github.com/bhumit1311", icon: <GithubIcon />, newTab: true },
];

function ContactRow({ item }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    if (!item.copy) return;
    e.preventDefault();
    navigator.clipboard.writeText(item.value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <a
      href={item.href}
      target={item.newTab ? "_blank" : undefined}
      rel={item.newTab ? "noopener noreferrer" : undefined}
      onClick={handleCopy}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid var(--c-border)",
        background: "var(--c-surface-2)",
        textDecoration: "none",
        transition: "border-color 0.2s ease, background 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(90,103,242,0.3)";
        e.currentTarget.style.background = "var(--c-surface-3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--c-border)";
        e.currentTarget.style.background = "var(--c-surface-2)";
      }}
    >
      <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: item.whatsapp ? "rgba(37,211,102,0.1)" : "rgba(90,103,242,0.1)", border: item.whatsapp ? "1px solid rgba(37,211,102,0.2)" : "1px solid rgba(90,103,242,0.15)", display: "grid", placeItems: "center", color: item.whatsapp ? "#25d366" : "var(--c-accent-light)", flexShrink: 0 }}>
        {item.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--c-fg-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>{item.label}</p>
        <p style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--c-fg)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.value}</p>
      </div>
      {item.copy && (
        <span style={{ fontSize: "11px", color: copied ? "var(--c-green)" : "var(--c-fg-3)", fontWeight: 600, flexShrink: 0 }}>
          {copied ? "Copied!" : "Copy"}
        </span>
      )}
      {item.newTab && (
        <ArrowIcon />
      )}
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", type: "" });
  const [status, setStatus] = useState({ msg: "", tone: "" });
  const [busy, setBusy] = useState(false);

  const set = (f) => (e) => setForm((c) => ({ ...c, [f]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ msg: "All fields are required.", tone: "err" });
      return;
    }
    setBusy(true);
    setStatus({ msg: "Sending…", tone: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim(), type: form.type }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed.");
      setForm({ name: "", email: "", message: "", type: "" });
      setStatus({ msg: "Message sent — I'll reply within 24 hours.", tone: "ok" });
    } catch (err) {
      setStatus({ msg: err.message || "Something went wrong.", tone: "err" });
    } finally {
      setBusy(false);
    }
  };

  const fadeUp = {
    hidden: { y: 22, opacity: 0 },
    visible: (i = 0) => ({ y: 0, opacity: 1, transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] } }),
  };

  return (
    <section id="contact" className="section">
      <div className="wrapper">

        {/* ── Section header ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p className="eyebrow" style={{ justifyContent: "center" }}>Contact</p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1, color: "var(--c-fg)", letterSpacing: "-0.035em", marginBottom: "16px" }}>
            Let&apos;s build something great.
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--c-fg-3)", maxWidth: "480px", margin: "0 auto" }}>
            I&apos;m open to internships, freelance projects, and junior dev roles. I reply within 24 hours.
          </p>
        </motion.div>

        {/* ── Two-column layout ────────────────────── */}
        <div className="contact-grid">

          {/* Left: contact info + extras */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

            {/* Contact cards */}
            <div className="contact-cards-grid">
              {CONTACTS.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={i}
                  variants={fadeUp}
                >
                  <ContactRow item={c} />
                </motion.div>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={3}
              variants={fadeUp}
              style={{
                marginTop: "8px",
                padding: "16px 20px",
                borderRadius: "14px",
                border: "1px solid rgba(52,211,153,0.18)",
                background: "rgba(52,211,153,0.05)",
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
              }}
            >
              <div style={{ marginTop: "3px" }}>
                <span className="dot-live" />
              </div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--c-green)", marginBottom: "4px" }}>
                  Available for work right now
                </p>
                <p style={{ fontSize: "13px", color: "var(--c-fg-3)", lineHeight: 1.6 }}>
                  Looking for internships and junior web developer positions. Open to remote or hybrid work.
                </p>
              </div>
            </motion.div>

            {/* What I&apos;m good for */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={4}
              variants={fadeUp}
              style={{
                padding: "16px 20px",
                borderRadius: "14px",
                border: "1px solid var(--c-border)",
                background: "var(--c-surface-1)",
              }}
            >
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c-fg-3)", marginBottom: "14px" }}>
                Best for
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Web app development (React / Next.js)",
                  "Backend APIs and database integration",
                  "Python development & scripting",
                  "Portfolio or landing page builds",
                ].map((line, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: "2px", flexShrink: 0 }}>
                      <path d="M3 7L5.5 9.5L11 4" stroke="var(--c-accent-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: "13.5px", color: "var(--c-fg-2)", lineHeight: 1.5 }}>{line}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="card contact-card"
            >
              {/* Accent line */}
              <div style={{ height: "2px", background: "linear-gradient(90deg, var(--c-accent), var(--c-accent-light), transparent)", borderRadius: "99px", marginBottom: "24px" }} />

              <p style={{ fontSize: "17px", fontWeight: 700, color: "var(--c-fg)", marginBottom: "6px", letterSpacing: "-0.015em" }}>
                Send a message
              </p>
              <p style={{ fontSize: "13.5px", color: "var(--c-fg-3)", marginBottom: "20px", lineHeight: 1.6 }}>
                Describe your project or opportunity and I&apos;ll get back to you quickly.
              </p>

              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "14px" }} noValidate>
                {/* Name + Email side by side */}
                <div className="contact-form-row">
                  <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                    <label htmlFor="c-name" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c-fg-3)" }}>Name</label>
                    <input
                      id="c-name"
                      type="text"
                      value={form.name}
                      onChange={set("name")}
                      className="input"
                      placeholder="Your name"
                      autoComplete="name"
                      disabled={busy}
                      required
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                    <label htmlFor="c-email" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c-fg-3)" }}>Email</label>
                    <input
                      id="c-email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      className="input"
                      placeholder="you@email.com"
                      autoComplete="email"
                      disabled={busy}
                      required
                    />
                  </div>
                </div>

                {/* Subject / type dropdown using select */}
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  <label htmlFor="c-type" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c-fg-3)" }}>Regarding</label>
                  <select
                    id="c-type"
                    className="input"
                    style={{ cursor: "pointer" }}
                    disabled={busy}
                    value={form.type}
                    onChange={set("type")}
                  >
                    <option value="" disabled>Select a topic…</option>
                    <option value="internship">Internship opportunity</option>
                    <option value="job">Junior dev role</option>
                    <option value="freelance">Freelance project</option>
                    <option value="collaboration">Open source / collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  <label htmlFor="c-message" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c-fg-3)" }}>Message</label>
                  <textarea
                    id="c-message"
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    className="input"
                    placeholder="Describe what you have in mind…"
                    disabled={busy}
                    required
                    style={{ resize: "vertical", minHeight: "100px" }}
                  />
                </div>

                {/* Status */}
                {status.msg && (
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    background: status.tone === "err" ? "rgba(248,113,113,0.08)" : status.tone === "ok" ? "rgba(52,211,153,0.08)" : "transparent",
                    border: `1px solid ${status.tone === "err" ? "rgba(248,113,113,0.2)" : status.tone === "ok" ? "rgba(52,211,153,0.2)" : "transparent"}`,
                  }}>
                    <span style={{ fontSize: "13px", fontWeight: 500, color: status.tone === "err" ? "#f87171" : status.tone === "ok" ? "var(--c-green)" : "var(--c-fg-3)" }}>
                      {status.msg}
                    </span>
                  </div>
                )}

                {/* Submit */}
                <MagneticButton
                  as="button"
                  type="submit"
                  disabled={busy}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "14px", borderRadius: "10px", fontSize: "14px", fontWeight: 700, opacity: busy ? 0.65 : 1, cursor: busy ? "not-allowed" : "pointer", border: "none" }}
                >
                  {busy ? "Sending…" : "Send message"} {!busy && <SendIcon />}
                </MagneticButton>

                <p style={{ fontSize: "11.5px", color: "var(--c-fg-3)", textAlign: "center", lineHeight: 1.5 }}>
                  No spam. I read every message personally and reply within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-card {
          padding: 20px;
          border: 1px solid var(--c-border-strong);
        }
        @media (min-width: 640px) {
          .contact-card {
            padding: 30px;
          }
        }
        
        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 640px) {
          .contact-form-row {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
