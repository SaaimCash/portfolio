import { useState } from "react";
import "./index.css";

function HomePage() {
  return (
    <div className="page">
      <div className="hero">
        <div>
          <div className="hero-eyebrow">Software Engineering Student — KMITL</div>
          <h1 className="hero-name">Saaim Chashoo</h1>
          <div className="hero-tags">
            <span className="tag">Python</span>
            <span className="tag">Rust</span>
            <span className="tag">C++</span>
            <span className="tag">Power BI</span>
          </div>
          <div className="hero-socials">
            <a href="mailto:saaimchashoo07@gmail.com" className="social-icon" title="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            <a href="https://github.com/SaaimCash" className="social-icon" title="GitHub" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/saaim-chashoo-5598ab374/" className="social-icon" title="LinkedIn" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/profile.jpg"
            alt="Profile"
            style={{ width: "200px", borderRadius: "50%" }}
          />
        </div>
      </div>

      <div className="section-pad">
        <div className="section-label">About me</div>
        <div className="about-grid">
          <div>
            <h2 className="about-heading">Engineering <em>ideas</em> into reality</h2>
            <p className="about-text">
              I am a Software Engineering student at KMITL with experience in Python, Rust, and C++.
              I have built projects involving file systems, data management, and data visualization.
              I am currently focusing on backend development and full-stack web applications.
            </p>
          </div>
          <div className="skills-block">
            {[
              { name: "Python", pct: 88 },
              { name: "Rust",   pct: 75 },
              { name: "C++",    pct: 70 },
            ].map((s) => (
              <div className="skill-row" key={s.name}>
                <span className="skill-name">{s.name}</span>
                <div className="skill-bar-wrap">
                  <div className="skill-bar" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage() {
  const projects = [
    {
      tag: "Python · Custom TKInter",
      title: "Personal Library System",
      desc: "A Python-based system to store, manage, and retrieve ebooks with file handling and data organization. Mimics a real library for tracking your book collection.",
      img: "/library-preview.png",
      url: "https://github.com/SaaimCash/Personal-Library-System",
    },
    {
      tag: "Rust · Iced GUI",
      title: "Rust File Manager",
      desc: "Cross-platform desktop app that scans directories, visualizes disk usage, detects duplicate files, and lets users manage files through a clean Iced GUI interface.",
      img: "/filemanager-preview.png",
      url: "https://github.com/ifelsebetter/disk-usage-visualizer",
    },
  ];

  return (
    <div className="page">
      <div className="section-pad" style={{ paddingTop: "48px" }}>
        <div className="section-label">Projects</div>
        <div className="projects-grid">
          {projects.map((p) => (
            <a className="project-card" href={p.url} target="_blank" rel="noreferrer" key={p.title}>
              <div className="project-tag">{p.tag}</div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-preview">
                <img src={p.img} alt={`${p.title} preview`} />
              </div>
              <div className="project-link">View on GitHub</div>
            </a>
          ))}
          <div className="project-card" style={{ borderStyle: "dashed", opacity: 0.4, cursor: "default" }}>
            <div className="project-tag">Coming soon</div>
            <div className="project-title">Next project...</div>
            <p className="project-desc">Something new is in the works. Check back soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CertsPage() {
  // Add your real certifications here
  const certs = [
    { icon: "🎓", title: "certification", issuer: "Issuer name", year: "2024" },
  ];

  return (
    <div className="page">
      <div className="section-pad" style={{ paddingTop: "48px" }}>
        <div className="section-label">Certifications</div>
        <div className="certs-grid">
          {certs.map((c) => (
            <div className="cert-card" key={c.title}>
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-title">{c.title}</div>
              <div className="cert-issuer">{c.issuer}</div>
              <div className="cert-year">{c.year}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default function App() {
  const [page, setPage] = useState("home");

  const pages = [
    { id: "home",     label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "certs",    label: "Certifications" },
  ];

  return (
    <div className="portfolio">
      <nav>
        <div className="nav-logo" onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
          Saaim
        </div>
        <div className="nav-links">
          {pages.map((p) => (
            <button
              key={p.id}
              className={`nav-btn ${page === p.id ? "active" : ""}`}
              onClick={() => setPage(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </nav>

      {page === "home"     && <HomePage />}
      {page === "projects" && <ProjectsPage />}
      {page === "certs"    && <CertsPage />}
    </div>
  );
}