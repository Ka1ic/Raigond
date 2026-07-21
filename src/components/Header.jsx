import { useEffect, useState } from 'react';

export default function Header({ siteName, nav }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label={`${siteName}: на первый экран`}>
        <span className="brand-mark">GB</span>
        <span>{siteName}</span>
      </a>

      <button
        className={`menu-toggle ${isOpen ? 'is-open' : ''}`}
        type="button"
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="main-navigation" className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Основная навигация">
        {nav.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="header-cta" href="#contacts" onClick={closeMenu}>
          Забронировать
        </a>
      </nav>
    </header>
  );
}
