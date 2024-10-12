import { useTranslation } from 'react-i18next'

export const MyCommunications = () => {
  const { t } = useTranslation('translations')
  return (
    <section>
      <h2>{t('My communication')}</h2>
    </section>
  )
}
