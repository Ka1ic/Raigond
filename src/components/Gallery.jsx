import { useEffect, useState } from 'react';

export default function Gallery({ data }) {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="section section-gallery" id="gallery">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-label reveal-item">{data.label}</p>
          <h2 className="reveal-item" style={{ '--delay': '90ms' }}>
            {data.title}
          </h2>
          <p className="reveal-item" style={{ '--delay': '180ms' }}>
            {data.subtitle}
          </p>
        </div>

        <div className="gallery-grid">
          {data.images.map((image, index) => (
            <button
              className={`gallery-item gallery-item-${(index % 5) + 1} reveal-item reveal-image`}
              type="button"
              key={image.src}
              style={{ '--delay': `${index * 75}ms` }}
              onClick={() => setActiveImage(image)}
              aria-label={`Открыть фотографию: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading={index < 2 ? 'eager' : 'lazy'} />
            </button>
          ))}
        </div>

        <div className="video-block reveal-item">
          <div>
            <p className="section-label">[ ВИДЕО ]</p>
            <h3>{data.video.title}</h3>
          </div>
          <video src={data.video.src} poster={data.video.poster} controls muted loop playsInline preload="metadata" />
        </div>
      </div>

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Просмотр фотографии" onClick={() => setActiveImage(null)}>
          <button className="lightbox-close" type="button" aria-label="Закрыть фотографию" onClick={() => setActiveImage(null)}>
            x
          </button>
          <img src={activeImage.src} alt={activeImage.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      ) : null}
    </section>
  );
}
