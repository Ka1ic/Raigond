export default function About({ data }) {
  return (
    <section className="section section-about" id="about">
      <div className="section-inner about-layout">
        <div className="about-copy">
          <p className="section-label reveal-item">{data.label}</p>
          <h2 className="reveal-item" style={{ '--delay': '90ms' }}>
            {data.title}
          </h2>
          <p className="lead reveal-item" style={{ '--delay': '180ms' }}>
            {data.text}
          </p>
          <div className="stats-grid" aria-label="Краткая статистика">
            {data.stats.map((stat, index) => (
              <div className="stat-item reveal-item" key={stat.label} style={{ '--delay': `${260 + index * 80}ms` }}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-media" aria-label="Фотографии базы отдыха">
          {data.images.map((image, index) => (
            <img
              className={`${index === 0 ? 'about-image-large' : 'about-image-small'} reveal-item reveal-image`}
              src={image.src}
              alt={image.alt}
              key={image.src}
              style={{ '--delay': `${index * 160}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
