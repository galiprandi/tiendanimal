import { useTranslation } from 'react-i18next'

export const MyBestFriends = () => {
  const { t } = useTranslation('translations')
  return (
    <section>
      <h2>{t('My best friends')}</h2>
    </section>
  )
}
