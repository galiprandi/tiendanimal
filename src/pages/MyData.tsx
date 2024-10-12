import { useTranslation } from 'react-i18next'

export const MyData = () => {
  const { t } = useTranslation('translations')
  return (
    <section>
      <h2>{t('My data')}</h2>
    </section>
  )
}
