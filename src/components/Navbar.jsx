import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'highlights' },
  { href: '#contact', label: 'contact' },
];

function Navbar() {
  return (
    <header className="navbar">
      <nav className="site-container navbar__inner" aria-label="Main navigation">
        <a href="#home" className="navbar__brand">
          camille<span>.ng</span>
        </a>
        <ul className="navbar__links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
