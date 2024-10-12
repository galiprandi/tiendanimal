import { useTranslation } from 'react-i18next'

export const AddTask = () => {
  const { t } = useTranslation('translations')
  return (
    <section>
      <button className="action">{t('Add task')}</button>
    </section>
  )
}
