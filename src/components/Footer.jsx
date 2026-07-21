export default function Footer({ siteName, nav, contacts }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <a className="footer-brand" href="#top">
            {siteName}
          </a>
          <p>Коттеджи, баня и спокойный отдых среди горной природы.</p>
        </div>
        <nav className="footer-nav" aria-label="Навигация в подвале сайта">
          {nav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-contacts">
          <a href={contacts.phoneHref}>{contacts.phone}</a>
          <span>{contacts.address}</span>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {siteName}. Все права защищены.</div>
    </footer>
  );
}
