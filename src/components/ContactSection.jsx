import AsciiFlowerBanner from './AsciiFlowerBanner';

const links = [
  { label: 'cna52@sfu.ca', href: 'mailto:cna52@sfu.ca' },
  { label: 'github ↗', href: 'https://github.com/cna52', external: true },
  { label: 'linkedin ↗', href: 'https://www.linkedin.com/in/camillekng', external: true },
];

function ContactSection() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="site-container">
        <h2 id="contact-title">contact me</h2>
        <AsciiFlowerBanner />
        <p className="contact__links">
          {links.map(({ label, href, external }) => (
            <a
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
            >
              {label}
            </a>
          ))}
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
