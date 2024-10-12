import styles from './Footer.module.css'
import { ToggleLanguage } from './ToggleLanguage'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://galiprandi.github.io/me/" target="_blank">
          <small>© Germán Aliprandi. 2023 All right reserved</small>
        </a>
      </div>
      <ToggleLanguage />
    </footer>
  )
}
