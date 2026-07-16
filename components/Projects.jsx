"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GITHUB_USERNAME = "bhumit1311";
const REPO_LIMIT = 6;
const fmt = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" });

const GH = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const ExternalLink = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const LANG_COLOR = {
  JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572a5",
  Java: "#b07219", CSS: "#563d7c", HTML: "#e34c26", "Next.js": "#ffffff",
  React: "#61dafb",
};

const CATEGORY_COLORS = {
  "Ops Tool":    { bg: "rgba(251,191,36,0.08)",  border: "rgba(251,191,36,0.2)",  text: "#fbbf24" },
  "Inventory":   { bg: "rgba(52,211,153,0.08)",   border: "rgba(52,211,153,0.2)",   text: "#34d399" },
  "Portfolio":   { bg: "rgba(220,38,38,0.08)",    border: "rgba(220,38,38,0.2)",    text: "#f87171" },
  "Website":     { bg: "rgba(96,165,250,0.08)",   border: "rgba(96,165,250,0.2)",   text: "#60a5fa" },
  "AI Tool":     { bg: "rgba(167,139,250,0.08)",  border: "rgba(167,139,250,0.2)",  text: "#a78bfa" },
  "Dashboard":   { bg: "rgba(244,114,182,0.08)",  border: "rgba(244,114,182,0.2)",  text: "#f472b6" },
  "E-Commerce":  { bg: "rgba(251,146,60,0.08)",   border: "rgba(251,146,60,0.2)",   text: "#fb923c" },
  "Project":     { bg: "rgba(255,255,255,0.04)",  border: "rgba(255,255,255,0.1)",  text: "rgba(255,255,255,0.5)" },
};

function formatName(n) {
  return n.replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

function getCategory(name, desc, lang) {
  const s = `${name} ${desc}`.toLowerCase();
  if (s.includes("inventory")) return "Inventory";
  if (s.includes("management")) return "Ops Tool";
  if (s.includes("portfolio")) return "Portfolio";
  if (s.includes("website")) return "Website";
  if (s.includes("ai")) return "AI Tool";
  if (s.includes("dashboard")) return "Dashboard";
  if (s.includes("ecommerce") || s.includes("commerce")) return "E-Commerce";
  return lang || "Project";
}

function toProject(r, i) {
  const sub = r.description || "A project on GitHub.";
  let liveUrl = r.homepage || "";
  
  if (r.name.toLowerCase() === "smartfarmer") {
    liveUrl = "https://smartfarmer-uuvz.onrender.com/dashboard/";
  }

  return {
    id: String(i + 1).padStart(2, "0"),
    title: formatName(r.name),
    subtitle: sub.length > 110 ? sub.slice(0, 107) + "…" : sub,
    category: getCategory(r.name, sub, r.language),
    updated: fmt.format(new Date(r.updated_at)),
    url: r.html_url,
    live: liveUrl,
    stars: r.stargazers_count,
    forks: r.forks_count,
    lang: r.language || "",
    isPublic: !r.private,
  };
}

const FALLBACK = [
  { id: "01", title: "MongoMeals", subtitle: "Premium Restaurant Web App with table booking and gourmet menu catalog.", category: "Website", updated: "2026", url: "https://github.com/bhumit1311/MongoMeal23", live: "https://mongo-meal23.vercel.app", stars: 0, forks: 0, lang: "React", isPublic: true },
  { id: "02", title: "SmartFarmer", subtitle: "AI Crop Diagnostic Platform for farmers featuring AI-powered crop disease diagnosis.", category: "AI Tool", updated: "2026", url: "https://github.com/bhumit1311/SmartFarmer", live: "", stars: 0, forks: 0, lang: "Python", isPublic: true },
  { id: "03", title: "Shraddha Videology", subtitle: "Freelance portfolio site for a video editor client with a 3D animated intro.", category: "Portfolio", updated: "2026", url: "https://github.com/bhumit1311/manavwebsite", live: "", stars: 0, forks: 0, lang: "Next.js", isPublic: true },
];

function ProjectCard({ project, index }) {
  const catColor = CATEGORY_COLORS[project.category] || CATEGORY_COLORS["Project"];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="card card-accent"
      style={{
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        background: "var(--c-surface-1)",
        height: "100%",
      }}
    >
      {/* Top row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "22px" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          {/* Category badge */}
          <span style={{
            fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", padding: "3px 10px",
            borderRadius: "6px", background: catColor.bg, border: `1px solid ${catColor.border}`, color: catColor.text,
            textTransform: "uppercase",
          }}>
            {project.category}
          </span>
          <span style={{
            fontSize: "10px", padding: "3px 10px", borderRadius: "6px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em",
            background: project.isPublic ? "rgba(52,211,153,0.07)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${project.isPublic ? "rgba(52,211,153,0.18)" : "var(--c-border)"}`,
            color: project.isPublic ? "var(--c-green)" : "var(--c-fg-3)",
          }}>
            {project.isPublic ? "Public" : "Private"}
          </span>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 700, color: "var(--c-fg-3)", letterSpacing: "0.04em" }}>
          {project.id}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: "19px",
        fontFamily: "var(--font-readable)",
        fontWeight: 700, letterSpacing: "-0.02em", color: "var(--c-fg)",
        marginBottom: "10px", lineHeight: 1.25,
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: "14px", fontFamily: "var(--font-readable)", lineHeight: 1.75, color: "var(--c-fg-2)", marginBottom: "28px" }}>
        {project.subtitle}
      </p>

      {/* Bottom */}
      <div style={{ marginTop: "auto" }}>
        <div className="divider" style={{ marginBottom: "18px" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {project.lang && (
              <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--c-fg-3)", fontWeight: 600 }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: LANG_COLOR[project.lang] || "#666", display: "inline-block", boxShadow: `0 0 6px ${LANG_COLOR[project.lang] || "#666"}55` }} />
                {project.lang}
              </span>
            )}
            <span style={{ fontSize: "12px", color: "var(--c-fg-3)", fontFamily: "var(--font-mono)" }}>
              ★ {project.stars} &nbsp; ⑂ {project.forks}
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-ghost"
                style={{ padding: "7px 14px", borderRadius: "8px", fontSize: "12px", gap: "5px" }}>
                <GH size={12} /> GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary"
                style={{ padding: "7px 14px", borderRadius: "8px", fontSize: "12px", gap: "5px" }}>
                <ExternalLink size={12} /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${REPO_LIMIT}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!alive) return;
        const repos = Array.isArray(data) ? data.filter(r => !r.fork).slice(0, REPO_LIMIT) : [];
        setProjects(repos.length ? repos.map(toProject) : FALLBACK);
      })
      .catch(() => { if (alive) setProjects(FALLBACK); })
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, []);

  const display = loading ? FALLBACK : projects;

  return (
    <section id="projects" className="section">
      <div className="wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", marginBottom: "52px", paddingBottom: "32px", borderBottom: "1px solid var(--c-border)" }}
        >
          <div>
            <p className="eyebrow">Projects</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontFamily: "var(--font-readable)", fontWeight: 700, lineHeight: 1.05, color: "var(--c-fg)" }}>
              Selected work.
            </h2>
            <p style={{ marginTop: "12px", fontSize: "14.5px", fontFamily: "var(--font-readable)", lineHeight: 1.8, color: "var(--c-fg-2)", maxWidth: "380px" }}>
              Real projects — built and shipped. Pulling live from GitHub.
            </p>
          </div>
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer"
            className="btn-ghost" style={{ gap: "6px", padding: "9px 18px", borderRadius: "10px", fontSize: "13px" }}>
            <GH size={13} /> View all on GitHub
          </a>
        </motion.div>

        {/* Cards grid */}
        <div style={{ display: "grid", gap: "20px" }} className="projects-grid">
          {display.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 680px) {
          .projects-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
