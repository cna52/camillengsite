import TerminalTypewriter from './TerminalTypewriter';
import TerminalPrintGroup from './TerminalPrintGroup';

const aboutCommand = ['cat about.md'];

const facts = [
  ['school', 'simon fraser university'],
  ['degree', 'b.sc. computer science'],
  ['focus', 'machine learning, data, full-stack'],
];

function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="site-container">
        <header className="section-heading">
          <p className="section-index">01</p>
          <h2 id="about-title">about</h2>
        </header>

        <TerminalPrintGroup className="about" initialDelay={760}>
          <div className="about__copy">
            <p className="section-command about__command">
              <span aria-hidden="true">$ </span>
              <TerminalTypewriter
                phrases={aboutCommand}
                ariaLabel="Command: cat about.md"
                holdDelay={8000}
              />
            </p>
            <p
              className="about__intro terminal-print-item terminal-print-item--clip"
              style={{ '--print-order': '0ms' }}
            >
              I&apos;m a computer science student at Simon Fraser University who likes building
              cool, useful things—especially around machine learning, data, and automation.
              Outside of CS, I love trying good food and doing nail art.
            </p>

            <dl className="fact-list">
              {facts.map(([label, value], index) => (
                <div
                  key={label}
                  className="terminal-print-item"
                  style={{ '--print-order': `${720 + (index * 110)}ms` }}
                >
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure
            className="about__portrait terminal-print-item terminal-print-item--media"
            style={{ '--print-order': '0ms' }}
          >
            <div className="about__portrait-frame">
              <img
                src="/camillepic.jpg"
                alt="Camille Ng standing by the waterfront"
                loading="lazy"
              />
            </div>
            <figcaption>camillepic.jpg // portrait</figcaption>
          </figure>
        </TerminalPrintGroup>
      </div>
    </section>
  );
}

export default AboutSection;
