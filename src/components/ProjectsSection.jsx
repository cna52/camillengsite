import { useState } from 'react';
import TerminalTypewriter from './TerminalTypewriter';
import TerminalPrintGroup from './TerminalPrintGroup';

const projectsCommand = ['grep -r "winner" ~/work'];

const projects = [
  {
    title: 'greenleaf dashboard',
    category: 'case competition winner',
    summary:
      'Analyzed farm, sensor, and financial data to surface insights on sustainability, profitability, and resource efficiency for precision agriculture decision-making.',
    tags: ['data analytics', 'data storytelling', 'business strategy', 'sustainability'],
    event: 'sfu beedie business analytics hackathon 2026',
    award: '1st place',
    contribution: null,
    linkedinUrl: 'https://www.linkedin.com/posts/sfubeedie_this-past-weekend-more-than-60-simon-fraser-activity-7467691110954553344-rhbS/',
    devpostUrl: null,
  },
  {
    title: 'hoppyhour',
    category: 'hackathon winner',
    summary:
      'A social app where friends answer hourly photo prompts, follow each other’s day on a shared timeline, and receive an automatically generated video recap.',
    tags: ['react native', 'next.js', 'mongodb', 'mongoose', 'rest api'],
    event: 'cmd-f 2026',
    award: '[mlh] best hack built with google antigravity',
    contribution: null,
    devpostUrl: 'https://devpost.com/software/hoppyhour',
  },
  {
    title: 'askless',
    category: 'hackathon winner',
    summary:
      'An AI-powered question forum that delivers instant, helpful answers with the opinionated personality of classic Stack Overflow.',
    tags: ['react', 'typescript', 'express.js', 'gemini', 'supabase'],
    event: 'systemshacks 2026: xhacks',
    award: 'interndb',
    contribution: null,
    devpostUrl: 'https://devpost.com/software/askless',
  },
  {
    title: 'cramsino',
    category: 'hackathon winner',
    summary:
      'A computer vision–driven study app that turns focused study time into currency for gacha-style card pulls.',
    tags: ['next.js', 'fastapi', 'mediapipe', 'opencv', 'postgresql'],
    event: 'journeyhacks 2026',
    award: 'best ui by huion',
    contribution: null,
    devpostUrl: 'https://devpost.com/software/cramsino',
  },
  {
    title: 'connectsfu',
    category: 'hackathon winner',
    summary:
      'A centralized hub for discovering SFU club events, with AI-powered search and a buddy-matching system for students who want someone to attend with.',
    tags: ['react', 'typescript', 'gemini', 'supabase', 'tailwind'],
    event: 'stormhacks 2025',
    award: 'software systems prize',
    contribution: null,
    devpostUrl: 'https://devpost.com/software/connectsfu',
  },
];

const actionLabels = {
  linkedin: 'view announcement',
  devpost: 'view on devpost',
};

function ProjectActions({ title, linkedinUrl, devpostUrl }) {
  const actions = [
    ['linkedin', linkedinUrl],
    ['devpost', devpostUrl],
  ].filter(([, href]) => href);

  if (!actions.length) return null;

  return (
    <div className="project-entry__actions">
      {actions.map(([label, href]) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${actionLabels[label]}: ${title}`}
        >
          <span>{actionLabels[label]}</span>
          <span className="link-arrow link-arrow--out" aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

function ProjectsSection() {
  const [openProject, setOpenProject] = useState(null);
  const [animatedProjects, setAnimatedProjects] = useState(() => new Set());

  const toggleProject = (index) => {
    if (openProject !== null) {
      setAnimatedProjects((current) => new Set(current).add(openProject));
    }

    setOpenProject(openProject === index ? null : index);
  };

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="site-container">
        <header className="section-heading">
          <p className="section-index">03</p>
          <h2 id="projects-title">events &amp; projects</h2>
        </header>

        <p className="section-command">
          <span aria-hidden="true">$ </span>
          <TerminalTypewriter
            phrases={projectsCommand}
            ariaLabel="Command: search work for winners"
            holdDelay={8000}
          />
        </p>
        <TerminalPrintGroup className="projects-directory" initialDelay={800}>
          <ol className="projects-directory__list">
            {projects.map((project, index) => {
              const entryNumber = String(index + 1).padStart(2, '0');
              const isOpen = openProject === index;
              const hasAnimated = animatedProjects.has(index);
              const summaryId = `project-summary-${index}`;
              const panelId = `project-panel-${index}`;

              return (
                <li
                  key={project.title}
                  className="terminal-print-item"
                  style={{ '--print-order': `${index * 110}ms` }}
                >
                  <article
                    className={`project-entry ${isOpen ? 'is-open' : ''} ${hasAnimated ? 'has-animated' : ''}`.trim()}
                  >
                    <button
                      id={summaryId}
                      className="project-entry__summary"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleProject(index)}
                    >
                      <span className="project-entry__index">{entryNumber}</span>
                      <span className="project-entry__title" role="heading" aria-level="3">
                        {project.title}
                      </span>
                      <span className="project-entry__category">{project.category}</span>
                      <span className="project-entry__toggle" aria-hidden="true" />
                    </button>
                    <div
                      id={panelId}
                      className="project-entry__panel"
                      role="region"
                      aria-labelledby={summaryId}
                      aria-hidden={!isOpen}
                      inert={isOpen ? undefined : ''}
                    >
                      <div className="project-entry__panel-inner">
                        <div className="project-entry__output">
                          {(project.award || project.event) && (
                            <p className="project-entry__status">
                              {[project.award, project.event].filter(Boolean).join(' · ')}
                            </p>
                          )}
                          <p className="project-entry__description">
                            <span aria-hidden="true">&gt; </span>
                            {hasAnimated ? (
                              project.summary
                            ) : (
                              <TerminalTypewriter
                                phrases={[project.summary]}
                                ariaLabel={project.summary}
                                typeDelay={16}
                                completionDelay={700}
                                loop={false}
                                className="project-entry__typewriter"
                              />
                            )}
                          </p>
                          {project.contribution && (
                            <p className="project-entry__contribution">{project.contribution}</p>
                          )}
                          <div className="tag-list" aria-label={`${project.title} technologies`}>
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tag}
                                style={{ '--tag-order': `${tagIndex * 60}ms` }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <ProjectActions {...project} />
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </TerminalPrintGroup>
      </div>
    </section>
  );
}

export default ProjectsSection;
