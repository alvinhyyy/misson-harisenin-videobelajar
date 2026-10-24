import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'

function Navbar({ children }) {
  return (
    <header className="navbar">
      <nav className="navbar-container" aria-label="Navigasi utama">
        <Link to="/" className="navbar-logo" aria-label="Beranda videobelajar">
          <img src={logo} alt="videobelajar" className="navbar-logo-image" />
        </Link>
        {children}
      </nav>
    </header>
  )
}

export default Navbar
