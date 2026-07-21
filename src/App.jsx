import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Services from './components/Services.jsx';
import ComingSoon from './components/ComingSoon.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';
import { siteData } from './data/siteData.js';

export default function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal, .reveal-item');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header siteName={siteData.name} nav={siteData.nav} />
      <main>
        <Hero data={siteData.hero} />
        <About data={siteData.about} />
        <Gallery data={siteData.gallery} />
        <Services services={siteData.services} />
        <ComingSoon data={siteData.comingSoon} />
        <Contacts contacts={siteData.contacts} />
      </main>
      <Footer siteName={siteData.name} nav={siteData.nav} contacts={siteData.contacts} />
    </>
  );
}
