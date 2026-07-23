import { useState, useEffect } from 'react';

const links = [
  { href: '#about', label: '[01] ABOUT ME' },
  { href: '#experience', label: '[02] EXPERIENCE' },
  { href: '#projects', label: '[03] PROJECTS' },
  { href: '#contact', label: '[04] CONTACT ME' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('dark-mode');
    return () => document.body.classList.remove('dark-mode');
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar--visible">
      <a href="#home" className="navbar-brand">camille.</a>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={close}>{label}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <span className="navbar-status">SFU CS / SHE HER</span>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
