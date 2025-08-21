function SkillsSection() {
  return (
    <section className="Skills" id="skills">
      <h2>Skills</h2>
      <p>Here are some of my skills</p>
      <div className="skills-list">
        <div className="card">
          <h3>Languages</h3>
          <p>Proficient in various programming languages</p>
          <ul>
            <li>Java, Python, C/C++, JavaScript</li>
            <li>HTML, CSS, SQL, SQLite</li>
          </ul>
        </div>
        <div className="card">
          <h3>Frameworks & Libraries</h3>
          <p>Experienced with popular development frameworks and tools</p>
          <ul>
            <li>React, Node.js, Flask, Tailwind CSS</li>
            <li>PyTorch, NumPy, Matplotlib</li>
            <li>WebStorage API</li>
          </ul>
        </div>
        <div className="card">
          <h3>Developer Tools</h3>
          <p>Version control and development environment tools</p>
          <ul>
            <li>Git, Docker, GitLab, GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>
        <div className="card">
          <h3>Leadership & Communication</h3>
          <p>Strong project management and technical communication skills</p>
          <ul>
            <li>Team leadership and Agile methodologies</li>
            <li>Technical tutoring and mentoring</li>
            <li>Partnership development and outreach</li>
            <li>Problem solving & help desk skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
