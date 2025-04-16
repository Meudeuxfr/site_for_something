import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        welcome: 'Welcome to Our Restaurant',
        reserve: 'Reserve your table with ease',
        book_now: 'Book Now'
      }
    },
    pt: {
      translation: {
        welcome: 'Bem-vindo ao Nosso Restaurante',
        reserve: 'Reserve sua mesa com facilidade',
        book_now: 'Reserve Agora'
      }
    }
  };

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;