import { NavLink } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import Icon from '../ui/Icon.jsx'
import { accountMenu } from '../../data/navigation.js'

function AccountLayout({ title, subtitle, children }) {
  return (
    <MainLayout>
      <main className="home-container account-layout">
        <aside className="account-aside">
          <div className="account-heading">
            <h1 className="heading-6">{title}</h1>
            <p className="body-small-regular">{subtitle}</p>
          </div>
          <nav className="account-menu" aria-label="Menu akun">
            {accountMenu.map((item) => (
              <NavLink key={item.to} to={item.to} end className="account-menu-link">
                <Icon name={item.icon} />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <section className="account-content">{children}</section>
      </main>
    </MainLayout>
  )
}

export default AccountLayout
