export default function ComingSoon({ data }) {
  return (
    <section className="section section-coming-soon" id="soon">
      <div className="section-inner">
        <div className="soon-heading">
          <div className="reveal-item">
            <p className="section-label">{data.label}</p>
            <h2>{data.title}</h2>
          </div>
          <p className="soon-intro reveal-item" style={{ '--delay': '100ms' }}>
            {data.intro}
          </p>
        </div>

        <div className="soon-grid">
          {data.items.map((item, index) => (
            <article className="soon-card reveal-item" key={item.title} style={{ '--delay': `${160 + index * 100}ms` }}>
              <span className="soon-number">0{index + 1}</span>
              <div>
                <p>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className="soon-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="soon-note reveal-item" style={{ '--delay': '320ms' }}>
          <span>РАЙГОНД РАСТЁТ</span>
          <div className="soon-story">
            {data.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
