export default function Services({ services }) {
  return (
    <section className="section section-services" id="services">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-label reveal-item">[ НАШИМ ГОСТЯМ ]</p>
          <h2 className="reveal-item" style={{ '--delay': '90ms' }}>
            ВСЁ ДЛЯ КОМФОРТНОГО ОТДЫХА
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card reveal-item" key={service} style={{ '--delay': `${index * 70}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
