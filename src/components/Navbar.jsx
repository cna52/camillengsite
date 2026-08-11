import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#about', label: '[01] about' },
  { href: '#experience', label: '[02] experience' },
  { href: '#projects', label: '[03] highlights' },
  { href: '#contact', label: '[04] contact' },
];

function Navbar({ theme, onToggleTheme, showThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [navVisible, setNavVisible] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const hero = document.querySelector('#home');
    if (!hero) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      const shouldShowNav = !entry.isIntersecting;
      setNavVisible(shouldShowNav);
      if (!shouldShowNav) setMenuOpen(false);
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = links
      .filter(({ href }) => href.startsWith('#'))
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;
      const pageBottom = window.scrollY + window.innerHeight;
      const documentBottom = document.documentElement.scrollHeight;

      if (pageBottom >= documentBottom - 2) {
        setActiveSection(sections.at(-1)?.id ?? 'about');
        return;
      }

      const activationLine = 56 + Math.min(window.innerHeight * 0.22, 180);
      let nextSection = null;

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= activationLine) nextSection = section;
      });

      setActiveSection(nextSection?.id ?? '');
    };

    const scheduleUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 767) setMenuOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className={`navbar ${navVisible ? 'is-visible' : ''} ${menuOpen ? 'is-menu-open' : ''}`}
      aria-label="Main navigation"
    >
      <div className="site-container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          camille<span>.ng</span>
        </a>

        <button
          ref={toggleRef}
          className="navbar__toggle"
          type="button"
          aria-label={`${menuOpen ? 'Close' : 'Open'} navigation menu`}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'close' : 'menu'}
        </button>

        <ul id="primary-navigation" className={`navbar__links ${menuOpen ? 'is-open' : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                aria-current={activeSection === href.slice(1) ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          {showThemeToggle && (
            <li>
              <ThemeToggle
                theme={theme}
                onToggle={onToggleTheme}
                className="navbar__theme-toggle"
              />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
