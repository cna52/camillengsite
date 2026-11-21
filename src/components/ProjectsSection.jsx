const projects = [
  {
    title: 'cs/sosy roadmap night',
    images: [{ src: '/photos/sosy-roadmap-night.jpg', alt: 'Camille and another mentor holding name badges in front of the CS/SoSy Roadmap Night backdrop' }],
    tagline: 'Mentored new cs students, giving advice and answering their questions.',
    badge: 'event mentor',
    summary:
      'Mentored at a Software Systems Student Society (SoSy) event for new CS students, talking with students and giving advice as a mentor.',
    tags: [],
    event: 'software systems student society (sosy)',
    award: null,
    contribution: null,
    eventUrl: 'https://www.linkedin.com/events/7508049233569308672/',
  },
  {
    title: 'greenleaf dashboard',
    images: [{ src: '/photos/greenleaf-win.jpg', alt: 'The greenleaf dashboard team holding first place certificates from the SFU Beedie Business Analytics Hackathon' }],
    tagline: 'A farm data dashboard for smarter sustainability and profit decisions.',
    badge: '1st place, beedie hackathon',
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
    title: 'networking night',
    images: [{ src: '/photos/gdsc-event.jpg', alt: 'GDSC SFU organizers on stage at the event, with Camille introduced as co-director of partnerships' }],
    tagline: 'A pre-hackathon networking evening with mentors, speed networking and a keynote.',
    badge: 'gdsc event',
    summary:
      'A networking evening that kicked off hackathon weekend, with industry mentors, alumni and student hackers, a speed-networking session, dinner, and a short keynote.',
    tags: [],
    event: 'google developer student club sfu · mar 16, 2026 · sfu sub ballroom',
    award: null,
    contribution: null,
    lumaUrl: 'https://luma.com/jibg2atg',
  },
  {
    title: 'hoppyhour',
    images: [{ src: '/photos/hoppyhour-win.jpg', alt: 'The hoppyhour team holding Google Cloud prizes at CMD-F 2026' }],
    tagline: 'A social app for hourly photo prompts, with an auto-generated video recap.',
    badge: 'best google antigravity hack',
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
    images: [{ src: '/photos/askless-win.jpg', alt: 'The askless team and other hackers working at their laptops during SystemsHacks 2026' }],
    tagline: 'An AI Q&A forum with the personality of classic Stack Overflow.',
    badge: 'interndb prize',
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
    images: [{ src: '/photos/cramsino-win.jpg', alt: 'The cramsino team gathered around laptops at JourneyHacks 2026, with the Cramsino title screen on display' }],
    tagline: 'A study app that turns focus time into gacha card pulls.',
    badge: 'best ui by huion',
    summary:
      'A computer vision–driven study app that turns focused study time into currency for gacha-style card pulls.',
    tags: ['next.js', 'fastapi', 'mediapipe', 'opencv', 'postgresql'],
    event: 'journeyhacks 2026',
    award: 'best ui by huion',
    contribution: null,
    devpostUrl: 'https://devpost.com/software/cramsino',
  },
  {
    title: 'portfolio review workshop',
    images: [{ src: '/photos/portfolio-review.jpg', alt: 'Attendees and organizers posing in front of the Portfolio and Resume Review workshop slide' }],
    tagline: 'A hands-on resume review with small-group feedback from student mentors.',
    badge: 'gdsc event',
    summary:
      'A hands-on resume and portfolio review workshop, co-presented with the Computing Science Student Society, where students got small-group feedback from upper-year students and early-career mentors.',
    tags: [],
    event: 'google developer student club sfu × csss · nov 6, 2025 · sfu sub ballroom',
    award: null,
    contribution: null,
    lumaUrl: 'https://luma.com/ely9qawh',
  },
  {
    title: 'connectsfu',
    images: [{ src: '/photos/connectsfu-win.jpg', alt: 'The connectsfu team talking with a judge at StormHacks 2025' }],
    tagline: 'A hub for SFU club events with AI search and buddy matching.',
    badge: 'software systems prize',
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
  luma: 'view on luma',
  event: 'view event',
};

function ProjectActions({ title, linkedinUrl, devpostUrl, lumaUrl, eventUrl }) {
  const actions = [
    ['linkedin', linkedinUrl],
    ['devpost', devpostUrl],
    ['luma', lumaUrl],
    ['event', eventUrl],
  ].filter(([, href]) => href);

  if (!actions.length) return null;

  return (
    <div className="project__actions">
      {actions.map(([label, href]) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${actionLabels[label]}: ${title}`}
        >
          {actionLabels[label]} ↗
        </a>
      ))}
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="site-container">
        <h2 id="projects-title">events &amp; projects</h2>

        <div className="projects">
          {projects.map((project) => (
            <details key={project.title} className="project">
              <summary>
                <span className="project__main">
                  <span className="project__head">
                    <span className="project__title">{project.title}</span>
                    <span className="project__award">{project.badge}</span>
                  </span>
                  <span className="project__tagline">{project.tagline}</span>
                </span>
              </summary>
              <div className="project__body">
                {project.images?.length > 0 && (
                  <div className="project__photos">
                    {project.images.map(({ src, alt }) => (
                      <img key={src} src={src} alt={alt} loading="lazy" decoding="async" />
                    ))}
                  </div>
                )}
                {(project.award || project.event) && (
                  <p className="project__status">
                    {[project.award, project.event].filter(Boolean).join(' · ')}
                  </p>
                )}
                <p>{project.summary}</p>
                {project.tags.length > 0 && (
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                )}
                <ProjectActions {...project} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
