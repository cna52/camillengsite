const skills = [
  {
    label: 'languages',
    value: 'Python, Java, C++, TypeScript',
  },
  {
    label: 'frameworks',
    value: 'React, Node.js, PyTorch',
  },
  {
    label: 'tools',
    value: 'Git, Docker, Figma, VS Code',
  },
  {
    label: 'interests',
    value: 'AI/ML, full-stack, UX, robotics',
  },
];

function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="section-frame section-frame--about">
        <div className="section-frame__header">
          <div className="section-title-wrap">
            <span className="section-number">01.</span>
            <h2>About Me</h2>
          </div>
          <span className="section-path">/about_me</span>
        </div>

        <div className="about-grid">
          <div className="about-photo-card">
            <div className="about-photo-card__frame" />
            <div className="about-photo-card__image" />
          </div>

          <div className="about-copy-card">
            <p>
              I&apos;m a Computer Science student at Simon Fraser University who
              loves the intersection of systems, design, and human impact.
            </p>
            <p>
              I build things that are reliable under the hood and intentional on
              the surface.
            </p>
            <div className="about-traits">
              <span>storyteller</span>
              <span>builder</span>
              <span>problem solver</span>
              <span>team player</span>
            </div>
          </div>

          <div className="about-skills-card">
            <div className="about-skills-card__header">
              <span>SKILLS.SYS</span>
              <span>+</span>
            </div>
            <div className="about-skills-list">
              {skills.map(({ label, value }) => (
                <div key={label} className="about-skill-row">
                  <span className="about-skill-label">{label}</span>
                  <span className="about-skill-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
