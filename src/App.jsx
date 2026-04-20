function App() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <img
          src="/profile.jpg"
          alt="Profile"
          style={{ width: "100px", borderRadius: "50%" }}
        />

        <div>
          <h1>Saaim Chashoo</h1>
          <p4>Software Engineering Student at KMITL | Python, Rust, C++ | Aspiring Backend Developer</p4>
        </div>
      </div>

      <section>
        <h2>About</h2>
        <p>
          I am a Software Engineering student at KMITL with experience in Python,
          Rust, and C++. I have built projects involving file systems, data
          management, and data visualization. I am currently focusing on backend
          development and full-stack web applications.
        </p>
      </section>

      <section>
  <h2>Projects</h2>

  <div>
    <h3>Personal Library System</h3>
    <p>
      Built a Python-based system to store, manage, and retrieve ebooks,
      implementing file handling and data organization features. This projects 
      mimics a real library system, making it easy for users to keep trach of books they have. 
    </p>
    <a href="https://github.com/SaaimCash/Personal-Library-System" target="_blank">
      View Project
    </a>
  </div>

<div>
         
   ------------------------------------------------------------------------------------------
</div>
  <div>
    <h3>Rust File Manager</h3>
    <p>A cross-platform desktop application built in Rust that scans directories, 
      visualizes disk usage, detects duplicate files, and lets users manage 
      (delete, move, or duplicate) their files — all through a clean Iced GUI interface.</p>
    <a href="https://github.com/ifelsebetter/disk-usage-visualizer" target="_blank">
      View Project
    </a>
  </div>
</section>

      <section>
        <h2>Skills</h2>
        <p>Python, Rust, C++, Power BI</p>
      </section>

      <section>
  <h2>Contact</h2>
  <p>Email: saaimchashoo07@gmail.com</p>
  <p>
    GitHub: <a href="https://github.com/SaaimCash" target="_blank">My GitHub</a>
  </p>
  <p>
    LinkedIn: <a href="https://www.linkedin.com/in/saaim-chashoo-5598ab374/" target="_blank">My LinkedIn</a>
  </p>
</section>

<footer style={{ marginTop: "50px", textAlign: "center" }}>
  <p>© 2026 Saaim Chashoo</p>
</footer>

    </div>
  );
}
export default App;