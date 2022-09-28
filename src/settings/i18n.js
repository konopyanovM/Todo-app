import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../public/locales/en/common.json'
import ru from '../public/locales/ru/common.json'

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources,
  })

export default i18n
