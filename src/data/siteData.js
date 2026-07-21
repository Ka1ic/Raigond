const media = {
  hero: new URL('../../data/photo_2026-07-03 19.24.16.jpeg', import.meta.url).href,
  aboutPrimary: new URL('../../data/photo_2026-07-03 19.24.11.jpeg', import.meta.url).href,
  aboutSecondary: new URL('../../data/photo_2026-07-03 19.24.19.jpeg', import.meta.url).href,
  gallery01: new URL('../../data/photo_2026-07-03 19.24.04.jpeg', import.meta.url).href,
  gallery02: new URL('../../data/photo_2026-07-03 19.24.09.jpeg', import.meta.url).href,
  gallery03: new URL('../../data/photo_2026-07-03 19.24.10.jpeg', import.meta.url).href,
  gallery04: new URL('../../data/photo_2026-07-03 19.24.12.jpeg', import.meta.url).href,
  gallery05: new URL('../../data/photo_2026-07-03 19.24.14.jpeg', import.meta.url).href,
  gallery06: new URL('../../data/photo_2026-07-03 19.24.17.jpeg', import.meta.url).href,
  gallery07: new URL('../../data/photo_2026-07-03 19.47.44.jpeg', import.meta.url).href,
  gallery08: new URL('../../data/photo_2026-07-03 19.47.45.jpeg', import.meta.url).href,
  gallery09: new URL('../../data/photo_2026-07-03 19.47.47.jpeg', import.meta.url).href,
  gallery10: new URL('../../data/photo_2026-07-03 19.47.49.jpeg', import.meta.url).href,
  gallery11: new URL('../../data/photo_2026-07-03 19.47.50.jpeg', import.meta.url).href,
  gallery12: new URL('../../data/photo_2026-07-03 19.47.52.jpeg', import.meta.url).href,
  houseCozy: new URL('../../data/photo_2026-07-03 19.47.48.jpeg', import.meta.url).href,
  houseLarge: new URL('../../data/photo_2026-07-03 19.47.49.jpeg', import.meta.url).href,
  houseNature: new URL('../../data/photo_2026-07-03 19.24.12.jpeg', import.meta.url).href,
  video: new URL('../../data/telegram-cloud-document-2-5291899853318662470.mp4', import.meta.url).href,
  howToFindVideo: new URL('../../data/how_to_find.mp4', import.meta.url).href
};

export const siteData = {
  name: 'Ваш дом в горах',
  hero: {
    label: '',
    title: 'РАЙГОНД',
    subtitle: 'Ваш дом в горах',
    image: media.hero,
    imageAlt: 'Горные домики у воды на территории базы отдыха'
  },
  nav: [
    { label: 'О нас', href: '#about' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Услуги', href: '#services' },
    { label: 'Скоро', href: '#soon' },
    { label: 'Контакты', href: '#contacts' }
  ],
  advantages: ['[ ДОМ ]', '[ БАНЯ ]', '[ МАНГАЛЫ ]', '[ ДЕТСКАЯ ЗОНА ]', '[ ПАРКОВКА ]', '[ РЯДОМ С ПРИРОДОЙ ]'],
  about: {
    label: '[ О НАС ]',
    title: 'МЕНЯЕМ ГОРОДСКУЮ РУТИНУ НА ОТДЫХ СРЕДИ ПРИРОДЫ',
    text:
      'Мы создали уютное место для отдыха с семьей, друзьями и близкими. Здесь можно провести выходные, отметить праздник, насладиться тишиной, свежим воздухом и атмосферой загородного отдыха.',
    images: [
      {
        src: media.aboutPrimary,
        alt: 'Вид на территорию базы, домики и горы'
      },
      {
        src: media.aboutSecondary,
        alt: 'Горячий напиток на фоне горной территории базы'
      }
    ],
    stats: [
      { value: '15+', label: 'мест для размещения' },
      { value: '2+', label: 'мангальные зоны' },
      { value: '1', label: 'баня / сауна' },
      { value: '360°', label: 'зоны отдыха' }
    ]
  },
  gallery: {
    label: '[ ФОТОГРАФИИ ]',
    title: 'ГАЛЕРЕЯ',
    subtitle: 'Атмосфера вашего дома в горах в фотографиях',
    images: [
      { src: media.gallery01, alt: 'Горная долина и облачное небо' },
      { src: media.gallery02, alt: 'Территория базы с домиками и горным видом' },
      { src: media.gallery03, alt: 'Склон горы и зелень рядом с базой' },
      { src: media.gallery04, alt: 'Домик на фоне гор и ухоженной территории' },
      { src: media.gallery05, alt: 'Домики среди зелени у подножия горы' },
      { src: media.gallery06, alt: 'Водная зона и мостик на территории' },
      { src: media.gallery07, alt: 'Кухня в деревянном домике' },
      { src: media.gallery08, alt: 'Спальня в уютном домике' },
      { src: media.gallery09, alt: 'Спальня с деревянной отделкой' },
      { src: media.gallery10, alt: 'Гостиная зона с печью и деревянными стенами' },
      { src: media.gallery11, alt: 'Гостиная с лестницей в деревянном доме' },
      { src: media.gallery12, alt: 'Кухонная зона в домике' }
    ],
    video: {
      src: media.video,
      poster: media.hero,
      title: 'Виды'
    }
  },
  houses: [
    {
      title: 'Уютный домик',
      capacity: 'до 4 гостей',
      description: 'Комфортный домик для семейного отдыха и спокойных выходных.',
      image: media.houseCozy,
      alt: 'Спальная зона уютного домика'
    },
    {
      title: 'Большой домик',
      capacity: 'до 6 гостей',
      description: 'Просторный вариант для компании друзей или большой семьи.',
      image: media.houseLarge,
      alt: 'Гостиная большого домика с деревянной отделкой'
    },
    {
      title: 'Домик у природы',
      capacity: 'до 2-3 гостей',
      description: 'Атмосферное размещение для тихого отдыха вдали от городской суеты.',
      image: media.houseNature,
      alt: 'Домик у природы на фоне гор'
    }
  ],
  services: [
    'Живописный пруд',
    'Баня и бассейн',
    'Мангальная зона',
    'Беседка',
    'Парковка',
    'Семейный отдых',
    'Праздники и мероприятия',
    'Фото-зоны / красивая территория'
  ],
  comingSoon: {
    label: '',
    title: 'СКОРО ЗДЕСЬ СТАНЕТ ЕЩЁ УЮТНЕЕ',
    intro: 'Мы развиваем РАЙГОНД, чтобы в горах у вас было ещё больше поводов задержаться подольше.',
    items: [
      {
        eyebrow: 'Место для встреч',
        title: 'УЮТНОЕ КАФЕ',
        description: 'Пространство для неспешных завтраков, тёплых разговоров и чашки ароматного кофе с видом на горы.'
      },
      {
        eyebrow: 'Больше личного пространства',
        title: 'КОМФОРТАБЕЛЬНЫЕ НОМЕРА',
        description: 'Отдельные номера для спокойного проживания, полноценного отдыха и пробуждений в окружении природы.'
      }
    ],
    story: [
      'Мы не просто сдаём дом в горах — мы создаём место, в которое хочется возвращаться. И это возвращение становится всё приятнее.',
      'Каждый сезон мы вносим что-то новое: то проложим дорожку из дикого камня, то разобьём цветник там, где раньше был просто склон, то поставим удобные кресла на веранде с видом на закат.',
      'Для нас «уют» — это не разовая акция, а непрерывный процесс. Мы прислушиваемся к ветру, к шуму листвы и к вашим отзывам, чтобы каждый квадратный метр территории дышал гармонией. Здесь всегда что-то цветёт, где-то зажигается новый огонёк, и даже камни оказываются на своих местах не случайно.',
      '«Райгонд» хорошеет с каждым днём — потому что ваше право на идеальный отдых мы считаем главным законом.'
    ]
  },
  contacts: {
    phone: '+7 918 822-45-22',
    phoneHref: 'tel:+79188224522',
    messenger: '+7 918 822-45-22',
    whatsappUrl: 'https://wa.me/79188224522',
    address: 'Ирафский район, селение Ахсау',
    howToFindVideo: media.howToFindVideo,
    routeUrl: 'https://yandex.ru/maps/?rtext=~42.950157%2C43.717412&rtt=auto'
  }
};
