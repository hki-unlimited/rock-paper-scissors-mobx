import i18n from 'i18next';
import translationFI from './assets/locales/fi.json';
import translationEN from './assets/locales/en.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN.en.translation
      },
      fi: {
        translation: translationFI.fi.translation
      }
    },
    lng: "en",
    fallbackLng: ["en", "fi"],
    whitelist: ["en", "fi"],

    interpolation: {
      escapeValue: false
    }
});

export default i18n