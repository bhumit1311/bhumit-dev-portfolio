"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GITHUB_USERNAME = "bhumit1311";
const INTERNSHIP_ORG = "admintechofay-a11y";
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

const BriefcaseIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const LANG_COLOR = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572a5",
  Java: "#b07219",
  CSS: "#563d7c",
  HTML: "#e34c26",
  "Next.js": "#ffffff",
  React: "#61dafb",
  PHP: "#777bb4",
};

const CATEGORY_COLORS = {
  "AI & SaaS":        { bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.3)",  text: "#c4b5fd" },
  "Fintech":          { bg: "rgba(52,211,153,0.12)",  border: "rgba(52,211,153,0.3)",   text: "#6ee7b7" },
  "E-Commerce":       { bg: "rgba(251,146,60,0.12)",  border: "rgba(251,146,60,0.3)",   text: "#fdba74" },
  "Hospitality":      { bg: "rgba(251,191,36,0.12)",  border: "rgba(251,191,36,0.3)",   text: "#fde047" },
  "Sports & Leisure": { bg: "rgba(74,222,128,0.12)",  border: "rgba(74,222,128,0.3)",   text: "#86efac" },
  "B2B Platform":     { bg: "rgba(96,165,250,0.12)",  border: "rgba(96,165,250,0.3)",   text: "#93c5fd" },
  "Visa & Legal":     { bg: "rgba(192,132,252,0.12)", border: "rgba(192,132,252,0.3)",  text: "#d8b4fe" },
  "Event & Expo":     { bg: "rgba(244,114,182,0.12)", border: "rgba(244,114,182,0.3)",  text: "#f472b6" },
  "Corporate":        { bg: "rgba(148,163,184,0.12)", border: "rgba(148,163,184,0.3)",  text: "#cbd5e1" },
  "Manufacturing":    { bg: "rgba(234,179,8,0.12)",   border: "rgba(234,179,8,0.3)",    text: "#fde047" },
  "Logistics":        { bg: "rgba(56,189,248,0.12)",  border: "rgba(56,189,248,0.3)",   text: "#7dd3fc" },
  "Ops Tool":         { bg: "rgba(251,191,36,0.08)",  border: "rgba(251,191,36,0.2)",   text: "#fbbf24" },
  "Inventory":        { bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.2)",   text: "#34d399" },
  "Portfolio":        { bg: "rgba(220,38,38,0.08)",   border: "rgba(220,38,38,0.2)",    text: "#f87171" },
  "Website":          { bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.2)",   text: "#60a5fa" },
  "AI Tool":          { bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)",  text: "#a78bfa" },
  "Dashboard":        { bg: "rgba(244,114,182,0.08)", border: "rgba(244,114,182,0.2)",  text: "#f472b6" },
  "Project":          { bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.1)",  text: "rgba(255,255,255,0.5)" },
};

function formatName(n) {
  return n.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// All 13 internship projects from https://github.com/admintechofay-a11y/
const INTERNSHIP_PROJECTS_DATA = [
  {
    repoName: "Techofay_AI_Powered_Gym_managment",
    title: "Techofay GymOS — AI SaaS Platform",
    subtitle: "AI-powered multi-tenant SaaS gym management platform with automated member tracking, workout regimens, and subscription billing.",
    category: "AI & SaaS",
    lang: "TypeScript",
    live: "https://techofayaipoweredgymmanagment.vercel.app",
    url: "https://github.com/admintechofay-a11y/Techofay_AI_Powered_Gym_managment",
    isPublic: true,
  },
  {
    repoName: "EdutradeFX",
    title: "EdutradeFX Trading Ecosystem",
    subtitle: "Production-ready Forex marketplace, trading education ecosystem, interactive analytics, and student onboarding portal.",
    category: "Fintech",
    lang: "TypeScript",
    live: "https://edutrade-fx-frontend.vercel.app",
    url: "https://github.com/admintechofay-a11y/EdutradeFX",
    isPublic: true,
  },
  {
    repoName: "E-commerce_glassofy",
    title: "Glassofy Architectural E-Commerce",
    subtitle: "Architectural hardware and glass fitting e-commerce store with dynamic catalog filters, cart management, and checkout.",
    category: "E-Commerce",
    lang: "JavaScript",
    live: "https://e-commerceglassofy.vercel.app",
    url: "https://github.com/admintechofay-a11y/E-commerce_glassofy",
    isPublic: true,
  },
  {
    repoName: "lemon_cafe",
    title: "Lemon Café · Restaurant · Pool",
    subtitle: "Cinematic hospitality web showcase featuring restaurant menu explorer, poolside reservation system, and dynamic animations.",
    category: "Hospitality",
    lang: "JavaScript",
    live: "https://lemon-cafe-nine.vercel.app",
    url: "https://github.com/admintechofay-a11y/lemon_cafe",
    isPublic: true,
  },
  {
    repoName: "The-Gaekwad-Golf-Club",
    title: "The Gaekwad Golf Club",
    subtitle: "Historic royal golf club digital showcase featuring course layouts, heritage galleries, tournament updates, and member portals.",
    category: "Sports & Leisure",
    lang: "JavaScript",
    live: "https://thegaekwad.vercel.app",
    url: "https://github.com/admintechofay-a11y/The-Gaekwad-Golf-Club",
    isPublic: true,
  },
  {
    repoName: "LVP_GOLF",
    title: "LVP Golf & Country Club",
    subtitle: "Luxury golf club & academy portal with tee-time booking, golf simulator packages, tournament schedule, and membership info.",
    category: "Sports & Leisure",
    lang: "JavaScript",
    live: "https://lvp-golf.vercel.app",
    url: "https://github.com/admintechofay-a11y/LVP_GOLF",
    isPublic: true,
  },
  {
    repoName: "aurachemicals",
    title: "Aura Space Infra (Aura Chemicals)",
    subtitle: "Next-generation B2B chemical & pharmaceutical trading platform with catalog browsing, RFQ quotation workflow, and responsive React/Next architecture.",
    category: "B2B Platform",
    lang: "TypeScript",
    live: "https://frontend-bhumit1.vercel.app",
    url: "https://github.com/admintechofay-a11y/aurachemicals",
    isPublic: true,
  },
  {
    repoName: "bmsimmigration",
    title: "BMS Immigration 3D",
    subtitle: "Interactive 3D web experience for overseas visa & immigration consultancy with modern animated assessments and appointment booking.",
    category: "Visa & Legal",
    lang: "JavaScript",
    live: "https://bmsimmigration.vercel.app",
    url: "https://github.com/admintechofay-a11y/bmsimmigration",
    isPublic: true,
  },
  {
    repoName: "GUJCORE",
    title: "GUJCORR 2027 Expo Portal",
    subtitle: "AMPP Gujarat Global Conference & Expo portal for corrosion control with delegate registration, technical sessions, and exhibitor booths.",
    category: "Event & Expo",
    lang: "TypeScript",
    live: "https://gujcore.vercel.app",
    url: "https://github.com/admintechofay-a11y/GUJCORE",
    isPublic: true,
  },
  {
    repoName: "GLASSOFY-INDIA",
    title: "Glassofy India",
    subtitle: "Architectural glass fittings & hardware manufacturer corporate portfolio showcasing premium catalogs and technical specifications.",
    category: "Corporate",
    lang: "JavaScript",
    live: "https://glassofy.vercel.app",
    url: "https://github.com/admintechofay-a11y/GLASSOFY-INDIA",
    isPublic: true,
  },
  {
    repoName: "tejmet",
    title: "Tejmet Metals & Engineering",
    subtitle: "Industrial metal manufacturing and engineering website featuring material specifications, ISO certifications, and RFQ submission.",
    category: "Manufacturing",
    lang: "TypeScript",
    live: "https://tejmet.vercel.app",
    url: "https://github.com/admintechofay-a11y/tejmet",
    isPublic: true,
  },
  {
    repoName: "TECHOFAY-GLOBAL-VENTURES",
    title: "Techofay Global Ventures",
    subtitle: "Official corporate portal for Techofay Global Ventures highlighting digital enterprise services, client case studies, and engineering capabilities.",
    category: "Corporate",
    lang: "JavaScript",
    live: "https://techofay-global-ventures.vercel.app",
    url: "https://github.com/admintechofay-a11y/TECHOFAY-GLOBAL-VENTURES",
    isPublic: true,
  },
  {
    repoName: "Transport_techofay",
    title: "Techofay Fleet Transport & Logistics",
    subtitle: "Enterprise logistics and fleet operations management platform for tracking transit routes, driver allocations, and freight manifests.",
    category: "Logistics",
    lang: "PHP",
    live: "",
    url: "https://github.com/admintechofay-a11y/Transport_techofay",
    isPublic: true,
  },
];

// Fallback curated personal projects from https://github.com/bhumit1311
const PERSONAL_PROJECTS_DATA = [
  {
    id: "01",
    title: "MongoMeals",
    subtitle: "Premium restaurant web application featuring dynamic gourmet catalogs, online table reservation, and interactive menu order flows.",
    category: "Website",
    updated: "2026",
    url: "https://github.com/bhumit1311/MongoMeal23",
    live: "https://mongo-meal23.vercel.app",
    stars: 0,
    forks: 0,
    lang: "React",
    isPublic: true,
  },
  {
    id: "02",
    title: "SmartFarmer",
    subtitle: "AI crop diagnostic and advisory platform for farmers featuring machine learning crop disease diagnosis and tailored remedies.",
    category: "AI Tool",
    updated: "2026",
    url: "https://github.com/bhumit1311/SmartFarmer",
    live: "https://smartfarmer-uuvz.onrender.com/dashboard/",
    stars: 0,
    forks: 0,
    lang: "Python",
    isPublic: true,
  },
  {
    id: "03",
    title: "Shraddha Videology",
    subtitle: "Freelance portfolio site for a professional video editor client with 3D animated hero section and cinematic media showcase.",
    category: "Portfolio",
    updated: "2026",
    url: "https://github.com/bhumit1311/manavwebsite",
    live: "",
    stars: 0,
    forks: 0,
    lang: "Next.js",
    isPublic: true,
  },
  {
    id: "04",
    title: "CampusCuisine",
    subtitle: "Campus cafeteria ordering and meal scheduling web platform with live queue updates and kitchen order tracking.",
    category: "Website",
    updated: "2026",
    url: "https://github.com/bhumit1311/CampusCuisine",
    live: "https://campus-cuisine-five.vercel.app",
    stars: 0,
    forks: 0,
    lang: "React",
    isPublic: true,
  },
  {
    id: "05",
    title: "RentNest PG Management",
    subtitle: "Hostel and PG accommodation management web system featuring tenant room allotment, document verification, and rent tracking.",
    category: "Ops Tool",
    updated: "2026",
    url: "https://github.com/bhumit1311/rentnest-pg-management",
    live: "",
    stars: 0,
    forks: 0,
    lang: "Python",
    isPublic: true,
  },
  {
    id: "06",
    title: "StockWise Inventory System",
    subtitle: "Business inventory and product stock management software with low-stock alerts, sales analytics, and supplier records.",
    category: "Inventory",
    updated: "2026",
    url: "https://github.com/bhumit1311/stockwise-inventory-system",
    live: "",
    stars: 0,
    forks: 0,
    lang: "JavaScript",
    isPublic: true,
  },
];

function ProjectCard({ project, index, prefix = "INT" }) {
  const catColor = CATEGORY_COLORS[project.category] || CATEGORY_COLORS["Project"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="card card-accent"
      style={{
        padding: "26px",
        display: "flex",
        flexDirection: "column",
        background: "var(--c-surface-1)",
        height: "100%",
        borderRadius: "14px",
        border: "1px solid var(--c-border)",
        transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Top row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", marginBottom: "18px" }}>
        <div style={{ display: "flex", gap: "7px", alignItems: "center", flexWrap: "wrap" }}>
          {/* Category badge */}
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              padding: "3px 9px",
              borderRadius: "6px",
              background: catColor.bg,
              border: `1px solid ${catColor.border}`,
              color: catColor.text,
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </span>

          {/* Internship or Type badge */}
          {project.isInternship && (
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                padding: "3px 8px",
                borderRadius: "6px",
                background: "rgba(220, 38, 38, 0.12)",
                border: "1px solid rgba(220, 38, 38, 0.3)",
                color: "#f87171",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <BriefcaseIcon size={10} /> Techofay
            </span>
          )}

          <span
            style={{
              fontSize: "10px",
              padding: "3px 8px",
              borderRadius: "6px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              background: project.isPublic ? "rgba(52,211,153,0.08)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${project.isPublic ? "rgba(52,211,153,0.2)" : "var(--c-border)"}`,
              color: project.isPublic ? "var(--c-green)" : "var(--c-fg-3)",
            }}
          >
            {project.isPublic ? "Public" : "Private"}
          </span>
        </div>

        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, color: "var(--c-fg-3)", letterSpacing: "0.04em" }}>
          {project.displayId || `${prefix}-${String(index + 1).padStart(2, "0")}`}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "18px",
          fontFamily: "var(--font-readable)",
          fontWeight: 700,
          letterSpacing: "-0.015em",
          color: "var(--c-fg)",
          marginBottom: "10px",
          lineHeight: 1.3,
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "13.5px",
          fontFamily: "var(--font-readable)",
          lineHeight: 1.7,
          color: "var(--c-fg-2)",
          marginBottom: "24px",
        }}
      >
        {project.subtitle}
      </p>

      {/* Bottom */}
      <div style={{ marginTop: "auto" }}>
        <div className="divider" style={{ marginBottom: "16px" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {project.lang && (
              <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--c-fg-3)", fontWeight: 600 }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: LANG_COLOR[project.lang] || "#888",
                    display: "inline-block",
                    boxShadow: `0 0 6px ${LANG_COLOR[project.lang] || "#888"}66`,
                  }}
                />
                {project.lang}
              </span>
            )}
            <span style={{ fontSize: "11px", color: "var(--c-fg-3)", fontFamily: "var(--font-mono)" }}>
              ★ {project.stars ?? 0} &nbsp; ⑂ {project.forks ?? 0}
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ padding: "6px 12px", borderRadius: "8px", fontSize: "11.5px", gap: "5px" }}
              >
                <GH size={12} /> GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "6px 12px", borderRadius: "8px", fontSize: "11.5px", gap: "5px" }}
              >
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
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'internship' | 'personal'
  const [internshipProjects, setInternshipProjects] = useState(
    INTERNSHIP_PROJECTS_DATA.map((p, i) => ({
      ...p,
      id: `INT-${String(i + 1).padStart(2, "0")}`,
      displayId: `INT-${String(i + 1).padStart(2, "0")}`,
      isInternship: true,
      stars: 0,
      forks: 0,
    }))
  );
  const [personalProjects, setPersonalProjects] = useState(PERSONAL_PROJECTS_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    // Fetch personal repos and merge
    const fetchPersonal = fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!alive || !Array.isArray(data)) return;
        const repos = data.filter((r) => !r.fork);
        if (!repos.length) return;

        setPersonalProjects((prev) => {
          return prev.map((p) => {
            const match = repos.find(
              (r) => r.name.toLowerCase() === p.title.toLowerCase().replace(/\s+/g, "") || r.html_url.toLowerCase() === p.url.toLowerCase()
            );
            if (match) {
              return {
                ...p,
                stars: match.stargazers_count,
                forks: match.forks_count,
                updated: fmt.format(new Date(match.updated_at)),
              };
            }
            return p;
          });
        });
      })
      .catch(() => {});

    // Fetch internship repos from admintechofay-a11y and merge live stats
    const fetchInternship = fetch(
      `https://api.github.com/users/${INTERNSHIP_ORG}/repos?per_page=100&sort=updated`
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!alive || !Array.isArray(data) || !data.length) return;

        setInternshipProjects((prev) => {
          return prev.map((item, idx) => {
            const apiRepo = data.find(
              (r) => r.name.toLowerCase() === item.repoName.toLowerCase() || r.html_url.toLowerCase() === item.url.toLowerCase()
            );
            if (apiRepo) {
              return {
                ...item,
                stars: apiRepo.stargazers_count,
                forks: apiRepo.forks_count,
                live: apiRepo.homepage || item.live,
                url: apiRepo.html_url || item.url,
                updated: fmt.format(new Date(apiRepo.updated_at)),
              };
            }
            return item;
          });
        });
      })
      .catch(() => {});

    Promise.allSettled([fetchPersonal, fetchInternship]).finally(() => {
      if (alive) setLoading(false);
    });

    return () => {
      alive = false;
    };
  }, []);

  const totalProjectsCount = internshipProjects.length + personalProjects.length;

  return (
    <section id="projects" className="section" style={{ position: "relative" }}>
      <div className="wrapper">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "36px",
            paddingBottom: "28px",
            borderBottom: "1px solid var(--c-border)",
          }}
        >
          <div>
            <p className="eyebrow">Projects & Portfolio</p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                fontFamily: "var(--font-readable)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "var(--c-fg)",
              }}
            >
              Selected work.
            </h2>
            <p
              style={{
                marginTop: "12px",
                fontSize: "14.5px",
                fontFamily: "var(--font-readable)",
                lineHeight: 1.8,
                color: "var(--c-fg-2)",
                maxWidth: "480px",
              }}
            >
              Production platforms, client web apps, and personal engineering — featuring work done during internship at Techofay and open source projects.
            </p>
          </div>

          {/* Quick tab switcher */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "var(--c-surface-2)",
              border: "1px solid var(--c-border)",
              borderRadius: "12px",
              padding: "4px",
              gap: "4px",
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              style={{
                padding: "8px 16px",
                borderRadius: "9px",
                fontSize: "13px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: activeTab === "all" ? "var(--c-accent)" : "transparent",
                color: activeTab === "all" ? "#ffffff" : "var(--c-fg-2)",
                boxShadow: activeTab === "all" ? "0 2px 10px rgba(220,38,38,0.3)" : "none",
              }}
            >
              All Work ({totalProjectsCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("internship")}
              style={{
                padding: "8px 16px",
                borderRadius: "9px",
                fontSize: "13px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: activeTab === "internship" ? "var(--c-accent)" : "transparent",
                color: activeTab === "internship" ? "#ffffff" : "var(--c-fg-2)",
                boxShadow: activeTab === "internship" ? "0 2px 10px rgba(220,38,38,0.3)" : "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <BriefcaseIcon size={13} />
              Internship Work ({internshipProjects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("personal")}
              style={{
                padding: "8px 16px",
                borderRadius: "9px",
                fontSize: "13px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: activeTab === "personal" ? "var(--c-accent)" : "transparent",
                color: activeTab === "personal" ? "#ffffff" : "var(--c-fg-2)",
                boxShadow: activeTab === "personal" ? "0 2px 10px rgba(220,38,38,0.3)" : "none",
              }}
            >
              Personal ({personalProjects.length})
            </button>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════
            SUB-SECTION 1: WORK DONE DURING INTERNSHIP (TECHOFAY)
        ══════════════════════════════════════════════════════════════ */}
        {(activeTab === "all" || activeTab === "internship") && (
          <div id="internship-projects" style={{ marginBottom: activeTab === "all" ? "80px" : "20px" }}>
            {/* Subsection Header Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
              style={{
                background: "linear-gradient(135deg, rgba(220,38,38,0.08) 0%, rgba(15,18,32,0.85) 100%)",
                border: "1px solid rgba(220,38,38,0.22)",
                borderRadius: "16px",
                padding: "26px 30px",
                marginBottom: "32px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--c-accent)",
                      boxShadow: "0 0 10px var(--c-accent)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--c-accent-light)",
                    }}
                  >
                    Internship Experience · Techofay
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 28px)",
                    fontFamily: "var(--font-readable)",
                    fontWeight: 700,
                    color: "var(--c-fg)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Work Done During Internship
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    fontFamily: "var(--font-readable)",
                    color: "var(--c-fg-2)",
                    marginTop: "8px",
                    maxWidth: "680px",
                    lineHeight: 1.6,
                  }}
                >
                  Production client web applications, AI SaaS systems, 3D interactive portals, and enterprise platforms developed during my software engineering internship at Techofay. Sourced from GitHub{" "}
                  <a
                    href="https://github.com/admintechofay-a11y/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--c-accent-light)", textDecoration: "underline" }}
                  >
                    @admintechofay-a11y
                  </a>.
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "var(--font-mono)",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--c-border)",
                    color: "var(--c-fg-2)",
                  }}
                >
                  {internshipProjects.length} Repositories
                </span>
                <a
                  href={`https://github.com/${INTERNSHIP_ORG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{
                    gap: "7px",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    fontSize: "12.5px",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  <GH size={14} /> Org GitHub
                </a>
              </div>
            </motion.div>

            {/* Internship Projects Grid */}
            <div style={{ display: "grid", gap: "20px" }} className="projects-grid">
              {internshipProjects.map((p, i) => (
                <ProjectCard key={p.repoName || p.id} project={p} index={i} prefix="INT" />
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════
            SUB-SECTION 2: PERSONAL & OPEN-SOURCE PROJECTS
        ══════════════════════════════════════════════════════════════ */}
        {(activeTab === "all" || activeTab === "personal") && (
          <div id="personal-projects">
            {/* Subsection Header Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
              style={{
                background: "linear-gradient(135deg, rgba(90,103,242,0.07) 0%, rgba(15,18,32,0.85) 100%)",
                border: "1px solid rgba(90,103,242,0.2)",
                borderRadius: "16px",
                padding: "24px 28px",
                marginBottom: "32px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--c-indigo-light)",
                      boxShadow: "0 0 10px var(--c-indigo)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--c-indigo-light)",
                    }}
                  >
                    Personal Work · Open Source
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 28px)",
                    fontFamily: "var(--font-readable)",
                    fontWeight: 700,
                    color: "var(--c-fg)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Personal Projects
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    fontFamily: "var(--font-readable)",
                    color: "var(--c-fg-2)",
                    marginTop: "8px",
                    maxWidth: "600px",
                    lineHeight: 1.6,
                  }}
                >
                  Full-stack applications, AI tools, and independent client freelance projects developed from scratch.
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{
                    gap: "7px",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    fontSize: "12.5px",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  <GH size={14} /> @bhumit1311 GitHub
                </a>
              </div>
            </motion.div>

            {/* Personal Projects Grid */}
            <div style={{ display: "grid", gap: "20px" }} className="projects-grid">
              {personalProjects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} prefix="DEV" />
              ))}
            </div>
          </div>
        )}
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
