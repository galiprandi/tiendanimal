import { useTranslation } from 'react-i18next'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
export const NavBar = () => {
  const { t } = useTranslation('translations')
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>
          <NavLink to="data">{t('My data')}</NavLink>
        </li>
        <li className={styles.active}>
          <NavLink to="tasks">{t('My tasks')}</NavLink>
        </li>
        <li>
          <NavLink to="feedback">{t('My feedback')}</NavLink>
        </li>
        <li>
          <NavLink to="communications">{t('My communications')}</NavLink>
        </li>
        <li>
          <NavLink to="friends">{t('My best friends')}</NavLink>
        </li>
      </ul>
    </nav>
  )
}
