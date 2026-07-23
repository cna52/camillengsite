import AsciiFlowerVideo from './AsciiFlowerVideo';

function HomeSection() {
  return (
    <section className="HomePage" id="home">
      <div className="hero-terminal-shell">
        <div className="hero-topbar">
          <span className="hero-brand-mark">+</span>
          <span className="hero-brand">camille.ng</span>
          <div className="hero-topbar__links">
            <span>[01] ABOUT ME</span>
            <span>[02] EXPERIENCE</span>
            <span>[03] PROJECTS</span>
            <span>[04] CONTACT ME</span>
          </div>
          <span className="hero-brand-mark">+</span>
        </div>

        <div className="hero-main-grid">
          <div className="hero-background-panel">
            <div className="hero-ascii-panel">
              <AsciiFlowerVideo className="hero-ascii-canvas" />
            </div>
          </div>

          <div className="hero-copy-panel">
            <div className="hero-terminal-log">
              <span>&gt; INITIALIZING PORTFOLIO.EXE</span>
              <span>&gt; LOADING ASSETS...</span>
              <span>&gt; READY.</span>
            </div>

            <h1 className="hero-title">
              systems.
              <br />
              code.
              <br />
              aesthetics.
              <br />
              <em>in bloom.</em>
            </h1>

            <p className="hero-summary">
              Computer Science student building elegant systems and thoughtful
              experiences that last.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="hero-button hero-button--primary">
                [ ENTER PORTFOLIO ]
              </a>
              <a href="#about" className="hero-scroll-link">
                ↓ SCROLL TO EXPLORE
              </a>
            </div>
          </div>

          <aside className="hero-side-panel">
            <div className="hero-side-meta">
              <span>SFU CS STUDENT</span>
              <span>SHE / HER</span>
              <span>BASED IN VANCOUVER</span>
              <span>OPEN TO 2026 CO-OPS</span>
            </div>
            <div className="hero-side-art">
              <div className="hero-side-art__viewport">
                <AsciiFlowerVideo className="hero-side-art__canvas" compact />
              </div>
            </div>
          </aside>
        </div>

        <div className="hero-version-rail">V1.0.0 / 2026</div>
      </div>
    </section>
  );
}

export default HomeSection;
