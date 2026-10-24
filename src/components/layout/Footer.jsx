import logo from '../../assets/Logo.png'

function Footer({ tagline, address, phone, columns, socials }) {
  return (
    <footer className="site-footer">
      <div className="home-container footer-content">
        <div className="footer-brand">
          <img src={logo} alt="videobelajar" className="footer-logo" />
          <strong>{tagline}</strong>
          <p>{address}</p>
          <p>{phone}</p>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="footer-column">
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <p key={link}>{link}</p>
            ))}
          </div>
        ))}
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
