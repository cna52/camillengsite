function ExperienceSection() {
  return (
    <section className="Experience" id="experience">
      <h2>Experience</h2>
      <p>Here are some of my experiences</p>
      <div className="experience-list">
        {/* Cards here */}
        <div className="card">
          <h3>Software Head Developer, SFU Robot Soccer Club</h3>
          <p>Led real-time strategy system development...</p>
        </div>
        {/* Repeat for each experience */}
      </div>
    </section>
  );
}

export default ExperienceSection;
