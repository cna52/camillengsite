function ExperienceSection() {
  return (
    <section className="Experience" id="experience">
      <h2>Experience</h2>
      <p>Here are some of my experiences</p>
      <div className="experience-list">
        <div className="card">
          <h3>Software Head Developer, Simon Fraser University Robot Soccer Club (SFURS)</h3>
          <p><em>Sept. 2024 – Present | Burnaby, BC</em></p>
          <ul>
            <li>Led development of the GameState Reflex system, improving robot decision-making speed and strategic response time by 30% during live match simulations.</li>
            <li>Redesigned match control UI and integrated real-time diagnostics, cutting setup time by 40% and accelerating live debugging workflows.</li>
            <li>Collaborated with a 30+ person dev team through weekly Agile-style meetings, aligning on sprints and resolving blockers, which accelerated feature delivery by 20%.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Computer Science Peer Educator, Simon Fraser University</h3>
          <p><em>Sept. 2024 – Present | Burnaby, BC</em></p>
          <ul>
            <li>Tutored 20+ first-year computer science students in core topics such as sorting algorithms, recursion, and data structures, leading to improved assignment performance and higher student confidence.</li>
            <li>Delivered one-on-one help desk support for common debugging and logic issues, resolving 90% of queries within the same session.</li>
            <li>Designed diagrams to explain topics like recursion and complexity analysis, used by 3+ CS classes as supplementary material.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Co-Director of Partnership, Google Developer Student Club (GDSC) Simon Fraser University</h3>
          <p><em>Jan. 2025 – Present | Burnaby, BC</em></p>
          <ul>
            <li>Secured 5+ sponsorships and speakers through targeted LinkedIn/email outreach, raising event attendance by 200% compared to previous term.</li>
            <li>Co-managed outreach strategy with another director, streamlining speaker onboarding and reducing scheduling conflicts by 70%.</li>
            <li>Established long-term partnerships with local startups and tech professionals, resulting in 3 recurring guest speaker collaborations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
