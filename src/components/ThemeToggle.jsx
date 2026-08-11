function ThemeToggle({ theme, onToggle, className = '' }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      className={`theme-toggle ${className}`.trim()}
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={onToggle}
    >
      <span aria-hidden="true">mode: {theme}</span>
    </button>
  );
}

export default ThemeToggle;
