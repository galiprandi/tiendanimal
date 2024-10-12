import { useTranslation } from 'react-i18next'
import styles from './NavBar.module.css'
export const NavBar = () => {
  const { t } = useTranslation('translations')
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>{t('My data')}</li>
        <li className={styles.active}>{t('My tasks')}</li>
        <li>{t('My feedback')}</li>
        <li>{t('My communications')}</li>
        <li>{t('My best friends')}</li>
      </ul>
    </nav>
  )
}
