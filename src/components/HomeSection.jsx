import NameScramble from './NameScramble';

const links = [
  { label: 'highlights', href: '#projects' },
  { label: 'github', href: 'https://github.com/cna52', external: true },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/camillekng', external: true },
];

function HomeSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="site-container hero__inner">
        <div>
          <NameScramble id="hero-title" text="camille ng" />
          <p className="hero__school">cs @ sfu</p>

          <p className="hero__intro">
            building cool, useful things with machine learning, data, and automation.
          </p>

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
        </div>

        <img
          className="hero__portrait"
          src="/camillepic.jpg"
          alt="Camille Ng standing by the waterfront"
        />
      </div>
    </section>
  );
}

export default HomeSection;
