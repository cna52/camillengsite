const projects = [
  {
    title: 'Brain Tumor Segmentation',
    tags: ['PYTHON', 'PYTORCH', 'MONAI', 'SAM'],
    summary:
      'Built a segmentation pipeline with SAM and custom fine-tuning to assist radiologists with MRI analysis.',
    className: 'project-card--mri',
  },
  {
    title: 'LAN Game (The Lost Quack)',
    tags: ['C++', 'SFML', 'ENET'],
    summary:
      'Multiplayer game with custom networking layer and in-game level editor.',
    className: 'project-card--lan',
  },
  {
    title: 'CalcQuest',
    tags: ['REACT', 'TYPESCRIPT', 'SUPABASE'],
    summary:
      'Gamified learning platform that turns math practice into a story-driven experience.',
    className: 'project-card--calc',
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-frame section-frame--projects">
        <div className="section-frame__header">
          <div className="section-title-wrap">
            <span className="section-number">03.</span>
            <h2>Projects</h2>
          </div>
          <span className="section-path">/projects.dir</span>
        </div>

        <div className="projects-grid">
          <div className="projects-cards">
            {projects.map(({ title, tags, summary, className }) => (
              <article key={title} className={`project-card ${className}`}>
                <div className="project-card__thumb" />
                <h3>{title}</h3>
                <div className="project-card__tags">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p>{summary}</p>
                <span className="project-card__link">[VIEW CASE] →</span>
              </article>
            ))}
          </div>

          <aside className="projects-side-card">
            <div className="projects-side-card__header">
              <span>CURRENTLY.EXE</span>
              <span>+</span>
            </div>
            <p>Building useful things with good people.</p>
            <p>Always learning, always shipping.</p>
            <div className="projects-side-card__lily">
              <img src="/hero-lily-dark.png" alt="Decorative lily" />
            </div>
            <span className="projects-side-card__status">&gt; STATUS: IN PROGRESS</span>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
