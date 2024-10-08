import Logo from '../assets/tiendanimal_logo.png'
import styles from './Header.module.css'
import { CartIcon } from './icons/Cart.icon'
import { MenuIcon } from './icons/Menu.icon'
import { SearchIcon } from './icons/Search.icon'
import { UserIcon } from './icons/User.icon'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className="icon accent">
          <MenuIcon />
        </button>
        <button className="icon accent">
          <SearchIcon />
        </button>
      </div>
      <div className="logo">
        <img src={Logo} alt="Tiendanimal" />
      </div>
      <div className={styles.right}>
        <button className="icon accent">
          <UserIcon />
        </button>
        <button className="icon accent">
          <CartIcon items={2} />
        </button>
      </div>
    </header>
  )
}
