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
        </div>
        <div className="hero-visual" style={{ alignItems: "flex-end" }}>
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
      url: "https://github.com/SaaimCash/Personal-Library-System",
    },
    {
      tag: "Rust · Iced GUI",
      title: "Rust File Manager",
      desc: "Cross-platform desktop app that scans directories, visualizes disk usage, detects duplicate files, and lets users manage files through a clean Iced GUI interface.",
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
    { icon: "🎓", title: "Add your certification", issuer: "Issuer name", year: "2024" },
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

function ContactPage() {
  const links = [
    { icon: "✉", type: "Email",    val: "saaimchashoo07@gmail.com",                          href: "mailto:saaimchashoo07@gmail.com" },
    { icon: "⌥", type: "GitHub",   val: "github.com/SaaimCash",                              href: "https://github.com/SaaimCash" },
    { icon: "in", type: "LinkedIn", val: "saaim-chashoo",                                     href: "https://www.linkedin.com/in/saaim-chashoo-5598ab374/" },
  ];

  return (
    <div className="page">
      <div className="section-pad" style={{ paddingTop: "48px" }}>
        <div className="section-label">Contact</div>
        <div className="contact-layout">
          <div>
            <h2 className="contact-heading">Let's <em>build</em> something together</h2>
            <p className="contact-sub">
              Open to internships, collaborations, and interesting problems.
              Send a message and I'll get back to you.
            </p>
          </div>
          <div className="contact-links">
            {links.map((l) => (
              <a className="contact-item" href={l.href} target="_blank" rel="noreferrer" key={l.type}>
                <div className="contact-icon">{l.icon}</div>
                <div className="contact-detail">
                  <div className="contact-type">{l.type}</div>
                  <div className="contact-val">{l.val}</div>
                </div>
                <div className="contact-arr">→</div>
              </a>
            ))}
          </div>
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
    { id: "contact",  label: "Contact" },
  ];

  return (
    <div className="portfolio">
      <nav>
        <div className="nav-logo">Saaim</div>
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
      {page === "contact"  && <ContactPage />}
    </div>
  );
}