import AsciiFlowerVideo from './AsciiFlowerVideo';
import TerminalTypewriter from './TerminalTypewriter';

const interestPhrases = [
  'interests: machine learning',
  'interests: data',
  'interests: full-stack',
];

const links = [
  { label: 'highlights', href: '#projects' },
  { label: 'github', href: 'https://github.com/cna52', external: true },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/camillekng', external: true },
];

function HomeSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__flower" role="img" aria-label="Animated ASCII lily">
        <AsciiFlowerVideo className="hero__ascii" />
      </div>

      <div className="site-container hero__content">
        <div className="hero__identity">
          <p className="hero__prompt"><span aria-hidden="true">$ </span>whoami</p>
          <h1 id="hero-title">camille ng</h1>
          <p className="hero__school">cs @ sfu</p>
          <p className="hero__interests">
            <TerminalTypewriter
              phrases={interestPhrases}
              ariaLabel="Interests: machine learning, data, and full-stack development"
              className="hero__status-typewriter"
            />
          </p>
        </div>

        <nav className="hero__links" aria-label="Portfolio links">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
            >
              {label}{external ? ' ↗' : ''}
            </a>
          ))}
        </nav>

        <a className="hero__scroll" href="#about">
          <span>scroll</span>
          <span className="hero__scroll-arrow" aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

export default HomeSection;
