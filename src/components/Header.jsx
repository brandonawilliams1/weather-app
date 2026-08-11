import { useState } from 'react';
import { Icon } from './Icon';
import { NAV_LINKS } from '../data/content';
import { useScrolled } from '../hooks/useScrollReveal';
import '../styles/header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(40);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className="logo-mark">
            <Icon name="sparkle" size={18} strokeWidth={2.5} />
          </span>
          <span className="logo-text">
            LoVo<span className="logo-sub">Advertising</span>
          </span>
        </a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-box">
            <span className="hamburger-line top"></span>
            <span className="hamburger-line middle"></span>
            <span className="hamburger-line bottom"></span>
          </span>
        </button>

        {menuOpen && (
          <nav className="dropdown-menu animate-scale-in" role="menu">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    role="menuitem"
                  >
                    <span className="dropdown-num">0{NAV_LINKS.indexOf(link) + 1}</span>
                    <span className="dropdown-label">{link.label}</span>
                    <Icon name="arrow" size={16} className="dropdown-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
