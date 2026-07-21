export default function Hero({ data }) {
  return (
    <section className="hero" id="top" aria-label="Первый экран">
      <img className="hero-media" src={data.image} alt={data.imageAlt} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="section-label hero-reveal hero-kicker">{data.label}</p>
        <h1 className="hero-reveal hero-title">{data.title}</h1>
        <p className="hero-subtitle hero-reveal">{data.subtitle}</p>
        <div className="hero-actions hero-reveal" aria-label="Основные действия">
          <a className="button button-primary" href="#contacts">
            Забронировать домик
          </a>
          <a className="button button-ghost" href="#gallery">
            Смотреть галерею
          </a>
        </div>
      </div>
    </section>
  );
}
