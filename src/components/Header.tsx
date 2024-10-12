import { Link } from 'react-router-dom'
import Logo from '../assets/tiendanimal_logo.png'
import styles from './Header.module.css'
import { CartIcon } from './icons/Cart.icon'
import { MenuIcon } from './icons/Menu.icon'
import { SearchIcon } from './icons/Search.icon'
import { UserIcon } from './icons/User.icon'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <>
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
          <Link to="/tiendanimal/tasks">
            <img src={Logo} alt="Tiendanimal" />
          </Link>
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
      <NavBar />
    </>
  )
}
