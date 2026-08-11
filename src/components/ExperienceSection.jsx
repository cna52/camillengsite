import TerminalTypewriter from './TerminalTypewriter';
import TerminalPrintGroup from './TerminalPrintGroup';

const experienceCommand = ['cat experience.log'];

const experiences = [
  {
    title: 'machine learning engineer intern',
    org: 'royal bank of canada (rbc)',
    period: 'may 2026 — dec 2026',
    current: true,
    group: 'technical',
    technologies: ['python', 'opensearch', 'snowflake cortex', 'aws bedrock'],
  },
  {
    title: 'quality analyst & rpa developer intern',
    org: 'ledcor group of companies',
    period: 'sep 2025 — apr 2026',
    group: 'technical',
    technologies: ['power automate', 'sql', 'testrail', 'jira'],
  },
  {
    title: 'software team lead',
    org: 'sfu robot soccer club',
    period: 'sep 2024 — present',
    group: 'technical',
    technologies: ['c++', 'python', 'qt6 / qml', 'protobuf'],
  },
  {
    title: 'director of partnerships',
    org: 'google developer student club sfu',
    period: 'jan 2025 — apr 2026',
    group: 'leadership',
    technologies: ['partnerships', 'events', 'mentorship'],
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="site-container">
        <header className="section-heading">
          <p className="section-index">02</p>
          <h2 id="experience-title">experience</h2>
        </header>

        <p className="section-command">
          <span aria-hidden="true">$ </span>
          <TerminalTypewriter
            phrases={experienceCommand}
            ariaLabel="Command: cat experience.log"
            holdDelay={8000}
          />
        </p>
        <TerminalPrintGroup
          className="timeline"
          initialDelay={1080}
          aria-label="Experience timeline"
        >
          <div className="timeline__entries">
            {experiences.map(({ title, org, period, current, technologies }, index) => (
              <article
                key={title}
                className="timeline__item terminal-print-item"
                style={{ '--print-order': `${index * 165}ms` }}
              >
                <p className="timeline__date">{period}</p>
                <div className="timeline__content">
                  <div className="timeline__title-row">
                    <h3>{title}</h3>
                    {current && <span className="timeline__status">● current</span>}
                  </div>
                  <p className="timeline__org">{org}</p>
                  <div className="tag-list" aria-label="Related skills">
                    {technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </TerminalPrintGroup>
      </div>
    </section>
  );
}

export default ExperienceSection;
