import './App.css';
import { useEffect, useState } from 'react';
import HomeSection from './components/HomeSection';
import ExperienceSection from './components/ExperienceSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';

const THEME_STORAGE_KEY = 'camille-theme';
const THEME_TOGGLE_ENABLED = false;

const getStoredTheme = () => {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
  } catch {
    return null;
  }
};

const getSystemTheme = () => (
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
);

function App() {
  const [themeState, setThemeState] = useState(() => {
    if (!THEME_TOGGLE_ENABLED) return { theme: 'dark', followsSystem: false };

    const storedTheme = getStoredTheme();
    const initialTheme = document.documentElement.dataset.theme || storedTheme || getSystemTheme();
    return { theme: initialTheme, followsSystem: !storedTheme };
  });

  useEffect(() => {
    document.documentElement.dataset.theme = themeState.theme;
    document.documentElement.style.colorScheme = themeState.theme;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', themeState.theme === 'dark' ? '#08070b' : '#f4f5f6');
    }
  }, [themeState.theme]);

  useEffect(() => {
    if (!THEME_TOGGLE_ENABLED || !themeState.followsSystem) return undefined;

    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (event) => {
      setThemeState({ theme: event.matches ? 'dark' : 'light', followsSystem: true });
    };

    colorSchemeQuery.addEventListener('change', handleSystemThemeChange);
    return () => colorSchemeQuery.removeEventListener('change', handleSystemThemeChange);
  }, [themeState.followsSystem]);

  const toggleTheme = () => {
    if (!THEME_TOGGLE_ENABLED) return;

    const nextTheme = themeState.theme === 'dark' ? 'light' : 'dark';

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The theme still applies for this session when storage is unavailable.
    }

    setThemeState({ theme: nextTheme, followsSystem: false });
  };

  return (
    <main className="App-container">
      <Navbar
        theme={themeState.theme}
        onToggleTheme={toggleTheme}
        showThemeToggle={THEME_TOGGLE_ENABLED}
      />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default App;
