import { useEffect, useState } from 'react'
import i18n from '../libs/i18n'

const availableLangs = {
  en: '🇺🇸',
  es: '🇪🇸',
}

export const ToggleLanguage = () => {
  const [lang, setLang] = useState<AvailableLangs>(
    i18n.language as AvailableLangs
  )

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en')

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  return (
    <button className="icon" onClick={toggleLang}>
      {availableLangs[lang]}
    </button>
  )
}

type AvailableLangs = keyof typeof availableLangs
