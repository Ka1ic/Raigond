import { useState } from 'react';

const initialForm = {
  name: '',
  phone: '',
  date: '',
  guests: '',
  comment: ''
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const request = { ...form };
    setStatus(`Спасибо${request.name ? `, ${request.name}` : ''}! Заявка отправлена. Мы скоро свяжемся с вами.`);
    setForm(initialForm);
  };

  return (
    <section className="section section-booking" id="booking">
      <div className="section-inner booking-layout">
        <div className="booking-copy">
          <p className="section-label reveal-item">[ ЗАЯВКА ]</p>
          <h2 className="reveal-item" style={{ '--delay': '90ms' }}>
            ОСТАВЬТЕ ЗАЯВКУ
          </h2>
          <p className="reveal-item" style={{ '--delay': '180ms' }}>
            Мы свяжемся с вами и поможем подобрать удобный вариант отдыха.
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <label className="reveal-item" style={{ '--delay': '80ms' }}>
            <span>Имя</span>
            <input type="text" name="name" value={form.name} onChange={updateField} placeholder="Ваше имя" required />
          </label>
          <label className="reveal-item" style={{ '--delay': '160ms' }}>
            <span>Телефон</span>
            <input type="tel" name="phone" value={form.phone} onChange={updateField} placeholder="+7 ___ ___-__-__" required />
          </label>
          <label className="reveal-item" style={{ '--delay': '240ms' }}>
            <span>Дата заезда</span>
            <input type="date" name="date" value={form.date} onChange={updateField} />
          </label>
          <label className="reveal-item" style={{ '--delay': '320ms' }}>
            <span>Количество гостей</span>
            <input type="number" name="guests" value={form.guests} onChange={updateField} min="1" placeholder="2" />
          </label>
          <label className="form-wide reveal-item" style={{ '--delay': '400ms' }}>
            <span>Комментарий</span>
            <textarea name="comment" value={form.comment} onChange={updateField} rows="5" placeholder="Расскажите, какой отдых планируете" />
          </label>
          <button className="button button-primary form-wide reveal-item" style={{ '--delay': '480ms' }} type="submit">
            Отправить заявку
          </button>
          {status ? (
            <p className="form-status" role="status">
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
