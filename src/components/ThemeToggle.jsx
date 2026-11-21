import { useEffect, useState } from 'react';

const storageKey = 'camille-theme';

function getInitialTheme() {
  const applied = document.documentElement.dataset.theme;
  return applied === 'light' ? 'light' : 'dark';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    theme === 'dark' ? '#08070b' : '#f4f5f6',
  );
}

const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'square',
  'aria-hidden': true,
};

function SunIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg {...iconProps}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />
    </svg>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // follow the system theme until the visitor picks one with the toggle
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (event) => {
      try {
        if (localStorage.getItem(storageKey)) return;
      } catch {
        // storage unavailable; treat as no saved choice
      }
      setTheme(event.matches ? 'light' : 'dark');
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const next = theme === 'dark' ? 'light' : 'dark';

  const toggle = () => {
    setTheme(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // storage unavailable; the choice just won't persist
    }
  };

  return (
    <button type="button" onClick={toggle} aria-label={`Switch to ${next} mode`}>
      {next === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default ThemeToggle;
