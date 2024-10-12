import { useTranslation } from 'react-i18next'

export const MyFeedback = () => {
  const { t } = useTranslation('translations')
  return (
    <section>
      <h2>{t('My feedback')}</h2>
    </section>
  )
}
