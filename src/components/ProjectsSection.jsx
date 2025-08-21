function ProjectsSection() {
  return (
    <section className="Projects" id="projects">
      <h2>Projects</h2>
      <p>Here are some of my projects</p>
      <div className="project-grid">
        <div className="card">
          <h3>Brain Tumor Segmentation using SAM</h3>
          <div className="tech-tags">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">PyTorch</span>
            <span className="tech-tag">NumPy</span>
            <span className="tech-tag">Matplotlib</span>
          </div>
          <p><em>Jan. 2025 – Apr. 2025</em></p>
          <ul>
            <li>Optimized Meta's SAM (ViT-B) for tumor segmentation on 2D FLAIR MRI slices by integrating custom loss functions and varied prompt strategies, including bounding boxes, reference points, and hybrid methods.</li>
            <li>Constructed an end-to-end pipeline from preprocessing to inference, supporting multi-slice input, 3D-aware postprocessing, and volume reconstruction via NIfTI metadata.</li>
            <li>Reduced segmentation false positives by 22% by integrating negative prompts, elastic deformation, and intensity scaling techniques.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Knight Club: Multiplayer LAN Game</h3>
          <div className="tech-tags">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Pygame</span>
            <span className="tech-tag">TCP & UDP</span>
            <span className="tech-tag">Sockets</span>
          </div>
          <p><em>Jan. 2025 – Apr. 2025</em></p>
          <ul>
            <li>Engineered a socket-based multiplayer game engine supporting up to 4 players over local Wi-Fi, maintaining latency under 150ms.</li>
            <li>Designed and implemented server-side logic with multithreading and per-object locks, enabling 100% race-condition-free gameplay across 20+ playtests.</li>
            <li>Programmed client-side systems in Pygame, including event handling, collision detection, UI updates, and real-time network state rendering.</li>
          </ul>
        </div>
        <div className="card">
          <h3>CalcQuest</h3>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">JSX</span>
            <span className="tech-tag">Tailwind CSS</span>
            <span className="tech-tag">GitHub</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">JavaScript</span>
          </div>
          <p><em>Oct. 2024 – Dec. 2024</em></p>
          <ul>
            <li>Created an interactive math RPG using React and JavaScript that provides real-time feedback to help students practice and reinforce core arithmetic and algebra skills.</li>
            <li>Styled the application using Tailwind CSS to ensure visual consistency and reduce UI development time by 25%.</li>
            <li>Containerized and deployed the project via Docker and GitHub, streamlining team collaboration and reducing environment setup time by 50%.</li>
          </ul>
        </div>
        <div className="card">
          <h3>GameState Reflex</h3>
          <div className="tech-tags">
            <span className="tech-tag">Real-time</span>
            <span className="tech-tag">Strategy</span>
            <span className="tech-tag">Robot Soccer</span>
          </div>
          <p><em>SFU Robot Soccer Club Project</em></p>
          <p>Real-time strategy system for robot soccer that improves decision-making speed and strategic response time by 30% during live match simulations.</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
