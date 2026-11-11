import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import { accountMenu } from '../../data/navigation.js'
import { useAppStore } from '../../store/useAppStore.js'

function ProfileMenu() {
  const { profile } = useAppStore()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!open) return undefined

    const close = (event) => {
      if (!ref.current?.contains(event.target)) setOpen(false)
    }
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)

    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  return (
    <div className="profile-menu" ref={ref}>
      <button
        type="button"
        className="profile-menu-trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Menu profil"
        onClick={() => setOpen((value) => !value)}
      >
        <img className="home-avatar" src={profile.avatar} alt="" />
      </button>

      {open && (
        <ul className="profile-menu-list" role="menu">
          <li className="profile-menu-category" role="none">
            <Link to="/kelas" role="menuitem" onClick={() => setOpen(false)}>Kategori</Link>
          </li>
          {accountMenu.map((item) => (
            <li key={item.to} role="none">
              <Link to={item.to} role="menuitem" onClick={() => setOpen(false)}>{item.label}</Link>
            </li>
          ))}
          <li role="none">
            <button type="button" role="menuitem" className="profile-menu-logout" onClick={() => navigate('/login')}>
              Keluar <Icon name="logout" size={18} />
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default ProfileMenu
