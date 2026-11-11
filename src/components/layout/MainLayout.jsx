import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ProfileMenu from './ProfileMenu.jsx'
import { footerColumns, footerInfo, socials } from '../../data/footer.js'

function MainLayout({ children, className = '' }) {
  return (
    <div className={`home-page ${className}`.trim()}>
      <Navbar>
        <div className="home-nav-right">
          <Link to="/kelas" className="home-nav-category">Kategori</Link>
          <ProfileMenu />
        </div>
      </Navbar>

      {children}

      <Footer {...footerInfo} columns={footerColumns} socials={socials} />
    </div>
  )
}

export default MainLayout
