const experiences = [
  {
    title: 'machine learning engineer intern',
    org: 'royal bank of canada (rbc)',
    summary: 'building llm agents for text-to-sql, with tracing, evaluation and production deploys.',
    period: 'may 2026 — dec 2026',
    current: true,
    technologies: ['python', 'opensearch', 'snowflake cortex', 'aws bedrock'],
  },
  {
    title: 'quality analyst & rpa developer intern',
    org: 'ledcor group of companies',
    summary: 'automated internal workflows in power automate and tested them to stay reliable.',
    period: 'sep 2025 — apr 2026',
    technologies: ['power automate', 'sql', 'testrail', 'jira'],
  },
  {
    title: 'director of partnerships',
    org: 'google developer student club sfu',
    summary: 'ran partnerships and events for the club, from networking nights to workshops.',
    period: 'jan 2025 — apr 2026',
    technologies: ['partnerships', 'events', 'mentorship'],
  },
  {
    title: 'software team lead',
    org: 'sfu robot soccer club',
    summary: 'leading the software team on referee logic, localization and the match control ui.',
    period: 'sep 2024 — present',
    technologies: ['c++', 'python', 'qt6 / qml', 'protobuf'],
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="site-container">
        <h2 id="experience-title">experience</h2>

        <ol className="rail">
          {experiences.map(({ title, org, summary, period, current, technologies }) => (
            <li key={title} className={current ? 'is-current' : undefined}>
              <div className="rail__head">
                <div>
                  <h3>{title}</h3>
                  <p className="rail__org">{org}</p>
                </div>
                <p className="rail__date">
                  {current && <span className="rail__status">[current]</span>}
                  {period}
                </p>
              </div>
              <p className="rail__summary">{summary}</p>
              <ul className="tag-list" aria-label="Related skills">
                {technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ExperienceSection;
