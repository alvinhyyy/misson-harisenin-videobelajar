import { useState } from 'react'
import logo from '../../assets/Logo.png'
import Icon from '../ui/Icon.jsx'

function Footer({ tagline, address, phone, columns, socials }) {
  const [openColumn, setOpenColumn] = useState(null)

  return (
    <footer className="site-footer">
      <div className="home-container footer-content">
        <div className="footer-brand">
          <img src={logo} alt="videobelajar" className="footer-logo" />
          <strong>{tagline}</strong>
          <p>{address}</p>
          <p>{phone}</p>
        </div>

        {columns.map((column) => {
          const isOpen = openColumn === column.title
          return (
            <div key={column.title} className={isOpen ? 'footer-column footer-column-open' : 'footer-column'}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenColumn(isOpen ? null : column.title)}
                >
                  {column.title}
                  <Icon name="chevron-right" className="footer-chevron" />
                </button>
              </h3>
              <div className="footer-links">
                {column.links.map((link) => (
                  <p key={link}>{link}</p>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="home-container footer-bottom">
        <small>©2023 videobelajar. All Rights Reserved.</small>
        <div className="social-icons" aria-label="Media sosial">
          {socials.map((social) => (
            <span key={social.name} aria-label={social.name}>{social.icon}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
