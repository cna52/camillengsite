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
            <li>HTML, CSS</li>
          </ul>
        </div>
        <div className="card">
          <h3>Frameworks & Tools</h3>
          <p>Experienced with popular dev tools</p>
          <ul>
            <li>React, Node.js, Flask</li>
            <li>Tailwind CSS, WebStorage API</li>
            <li>Git, Docker, VS Code</li>
          </ul>
        </div>
        <div className="card">
          <h3>IT & Support</h3>
          <p>Strong troubleshooting and technical communication</p>
          <ul>
            <li>Network & user account support</li>
            <li>Printer and AV setup</li>
            <li>Problem solving & help desk skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
