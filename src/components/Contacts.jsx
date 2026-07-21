function RouteVideo({ src }) {
  return (
    <div className="route-video-block">
      <h3>КАК ДО НАС ДОБРАТЬСЯ</h3>
      <video className="route-video" src={src} controls playsInline preload="metadata">
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
    </div>
  );
}

export default function Contacts({ contacts }) {
  return (
    <section className="section section-contacts" id="contacts">
      <div className="section-inner contacts-layout">
        <div className="contacts-copy">
          <p className="section-label reveal-item">[ КОНТАКТЫ ]</p>
          <h2 className="reveal-item" style={{ '--delay': '90ms' }}>
            СВЯЗАТЬСЯ С НАМИ
          </h2>

          <dl className="contacts-list">
            <div className="reveal-item" style={{ '--delay': '160ms' }}>
              <dt>Телефон</dt>
              <dd>{contacts.phone}</dd>
            </div>
            <div className="reveal-item" style={{ '--delay': '230ms' }}>
              <dt>WhatsApp / Telegram</dt>
              <dd>{contacts.messenger}</dd>
            </div>
            <div className="reveal-item" style={{ '--delay': '300ms' }}>
              <dt>Адрес</dt>
              <dd>{contacts.address}</dd>
            </div>
          </dl>

          <div className="contact-actions reveal-item" style={{ '--delay': '370ms' }}>
            <a className="button button-primary" href={contacts.phoneHref}>
              Позвонить
            </a>
            <a className="button button-ghost-light" href={contacts.whatsappUrl}>
              Написать в WhatsApp
            </a>
            <a className="button button-ghost-light" href={contacts.routeUrl}>
              Построить маршрут
            </a>
          </div>
        </div>
        <div className="reveal-item reveal-image" style={{ '--delay': '220ms' }}>
          <RouteVideo src={contacts.howToFindVideo} />
        </div>
      </div>
    </section>
  );
}
