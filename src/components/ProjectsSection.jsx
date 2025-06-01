function ProjectsSection() {
  return (
    <section className="Projects" id="projects">
      <h2>Projects</h2>
      <p>Here are some of my projects</p>
      <div className="project-grid">
        {/* Each card */}
        <div className="card">
          <h3>Brain Tumor Segmentation using SAM</h3>
          <p>Fine-tuned Meta’s SAM on MRI data...</p>
        </div>
        <div className="card">
          <h3>Knight Club</h3>
          <p>Multiplayer game using Python sockets...</p>
        </div>
        <div className="card">
          <h3>CalcQuest</h3>
          <p>Interactive math game built in React...</p>
        </div>
        <div className="card">
          <h3>GameState Reflex</h3>
          <p>Project at SFU Robot Soccer Club...</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
