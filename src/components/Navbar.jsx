import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Optional: Persist user choice in localStorage
    return localStorage.getItem('theme') === 'dark' ||
           (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <button
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </button>

      {isOpen && (
        <ul>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact Me</a></li>
        </ul>
      )}

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle dark mode"
        className="theme-toggle"
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;
