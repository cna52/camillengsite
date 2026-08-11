import TerminalLogFeed from './TerminalLogFeed';
import TerminalTypewriter from './TerminalTypewriter';
import useAnimationActivity from '../hooks/useAnimationActivity';

const contactCommand = ['ssh visitor@camille.ng'];

const contactChannels = [
  { number: '01', label: 'email', detail: 'cna52@sfu.ca', href: 'mailto:cna52@sfu.ca', suffix: '↗' },
  { number: '02', label: 'github', detail: '@cna52', href: 'https://github.com/cna52', suffix: '↗' },
  { number: '03', label: 'linkedin', detail: 'camillekng', href: 'https://www.linkedin.com/in/camillekng', suffix: '↗' },
];

function ContactSection() {
  const { elementRef, isVisible, reduceMotion } = useAnimationActivity();

  return (
    <section id="contact" className="section section--contact" aria-labelledby="contact-title">
      <div className="site-container contact">
        <header className="section-heading">
          <p className="section-index">04</p>
          <h2 id="contact-title">contact</h2>
        </header>

        <div
          ref={elementRef}
          className={`contact-terminal ${isVisible || reduceMotion ? 'is-visible' : ''}`}
        >
          <div className="contact-terminal__command">
            <span>
              <span aria-hidden="true">$ </span>
              <TerminalTypewriter
                phrases={contactCommand}
                ariaLabel="Command: ssh visitor at camille dot ng"
                holdDelay={8000}
              />
            </span>
            <span className="contact-terminal__location">vancouver, canada</span>
          </div>
          <div className="contact-session">
            <div className="contact-session__transcript">
              <TerminalLogFeed />
            </div>
            <nav className="contact-channels" aria-label="Contact channels">
              <ol>
                {contactChannels.map(({ number, label, detail, href, suffix }) => (
                  <li key={number}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      <span className="contact-channel__number">{number}</span>
                      <span className="contact-channel__label">{label}</span>
                      <span className="contact-channel__detail">{detail}</span>
                      <span
                        className="link-arrow link-arrow--out"
                        aria-hidden="true"
                      >
                        {suffix}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <footer className="site-container footer">
        <span>© 2026 camille ng</span>
        <a href="#home">
          <span>back to top</span>
          <span className="link-arrow link-arrow--up" aria-hidden="true">↑</span>
        </a>
      </footer>
    </section>
  );
}

export default ContactSection;
