export default function Accommodation({ houses }) {
  return (
    <section className="section section-accommodation" id="accommodation">
      <div className="section-inner">
        <div className="section-heading section-heading-split">
          <div className="reveal-item">
            <p className="section-label">[ ДОМ ]</p>
            <h2>КОМНАТЫ ВНУТРИ</h2>
          </div>
          <p className="reveal-item" style={{ '--delay': '140ms' }}>
            Подберите формат отдыха для семьи или компании друзей.
          </p>
        </div>

        <div className="house-grid">
          {houses.map((house, index) => (
            <article className="house-card reveal-item" key={house.title} style={{ '--delay': `${index * 120}ms` }}>
              <img src={house.image} alt={house.alt} loading="lazy" />
              <div className="house-card-body">
                <p className="capacity">{house.capacity}</p>
                <h3>{house.title}</h3>
                <p>{house.description}</p>
                <a className="button button-dark" href="#booking">
                  Забронировать
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
