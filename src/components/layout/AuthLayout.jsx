import Navbar from './Navbar.jsx'

function AuthLayout({ variant = 'login', children }) {
  const isRegister = variant === 'register'

  return (
    <div className={isRegister ? 'login-page register-page' : 'login-page'}>
      <Navbar />
      <main className={isRegister ? 'login-main register-main' : 'login-main'}>
        {children}
      </main>
    </div>
  )
}

export default AuthLayout
