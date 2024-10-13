import { Link } from 'react-router-dom'
import image from '../assets/tiendanimal_logo.png'

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/tiendanimal/tasks">
        <img src={image} alt="Tiendanimal" />
      </Link>
    </div>
  )
}
