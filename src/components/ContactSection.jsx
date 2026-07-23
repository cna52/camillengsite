const contacts = [
  {
    label: 'EMAIL',
    value: 'cna52@sfu.ca',
    href: 'mailto:cna52@sfu.ca',
  },
  {
    label: 'GITHUB',
    value: 'github.com/cna52',
    href: 'https://github.com/cna52',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/camille-ng',
    href: 'https://www.linkedin.com/in/camille-ng',
  },
];

function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-frame section-frame--contact">
        <div className="section-frame__header">
          <div className="section-title-wrap">
            <span className="section-number">04.</span>
            <h2>Contact Me</h2>
          </div>
          <span className="section-path">/contact.me</span>
        </div>

        <div className="contact-grid-shell">
          <div className="contact-copy-block">
            <p>
              Let&apos;s build something meaningful together. I&apos;m open to
              co-ops, collabs, and cool opportunities.
            </p>
          </div>

          <div className="contact-links-block">
            {contacts.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                className="contact-link-row"
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                <span>{label}</span>
                <span>{value}</span>
              </a>
            ))}
          </div>

          <div className="contact-promise-card">
            <div className="contact-promise-card__copy">
              <span>Say hi.</span>
              <span>I don&apos;t bite.</span>
              <span>Promise.</span>
            </div>
            <div className="contact-promise-card__art">
              <img src="/hero-lily-dark.png" alt="Decorative lily" />
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <span>© 2026 camille ng</span>
          <span>BUILT WITH {'<3'} AND TOO MUCH COFFEE</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
