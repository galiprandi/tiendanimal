import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export const availableLangs = {
  en: '🇺🇸',
  es: '🇪🇸',
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: 'es',
    supportedLngs: ['en', 'es'],
    backend: {
      loadPath: '/tiendanimal/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
