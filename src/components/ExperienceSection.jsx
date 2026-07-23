const experiences = [
  {
    title: 'Software Head Developer',
    org: 'SFU Robot Soccer Club',
    period: 'SEP 2024 - PRESENT',
    tag: 'LEADERSHIP',
    summary:
      'Leading a team of 30+ to build autonomous systems and game state software for competitive robot soccer.',
  },
  {
    title: 'Developer & Events Lead',
    org: 'Google Developer Student Clubs SFU',
    period: 'MAY 2024 - PRESENT',
    tag: 'COMMUNITY',
    summary:
      'Organized workshops and built internal tools to support a community of 300+ students.',
  },
  {
    title: 'Peer Programming Educator',
    org: 'SFU CS Department',
    period: 'JAN 2023 - PRESENT',
    tag: 'MENTORSHIP',
    summary:
      'Support students in data structures, algorithms, and software design through 1:1 and group sessions.',
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-frame section-frame--experience">
        <div className="section-frame__header">
          <div className="section-title-wrap">
            <span className="section-number">02.</span>
            <h2>Experience</h2>
          </div>
          <span className="section-path">/experience.log</span>
        </div>

        <div className="experience-grid">
          <div className="experience-timeline">
            {experiences.map(({ title, org, period, tag, summary }) => (
              <article key={title} className="experience-row">
                <div className="experience-dot" />
                <div className="experience-main">
                  <h3>{title}</h3>
                  <p className="experience-org">{org}</p>
                  <p className="experience-summary">{summary}</p>
                </div>
                <div className="experience-side">
                  <span className="experience-period">{period}</span>
                  <span className="experience-tag">{tag}</span>
                </div>
              </article>
            ))}
          </div>

          <aside className="impact-card">
            <div className="impact-card__image" />
            <div className="impact-card__code">
              <span>// impact.log</span>
              <pre>{`const impact = {\n  teams_led: 30+,\n  events_hosted: 25+,\n  students_helped: 200+\n};\n\nreturn impact;`}</pre>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
