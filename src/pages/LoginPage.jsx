import { useNavigate } from 'react-router-dom'
import AuthLayout from '../components/layout/AuthLayout.jsx'
import AuthCard from '../components/auth/AuthCard.jsx'
import FormField from '../components/ui/FormField.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

function LoginPage() {
  const navigate = useNavigate()
  usePageTitle('Masuk ke Akun')

  return (
    <AuthLayout>
      <AuthCard
        title="Masuk ke Akun"
        description="Yuk, lanjutin belajarmu di videobelajar."
        submitLabel="Masuk"
        switchLabel="Daftar"
        switchTo="/register"
        googleLabel="Masuk dengan Google"
        onSubmit={() => navigate('/')}
      >
        <FormField id="email" label="E-Mail" type="email" autoComplete="email" />
        <FormField id="password" label="Kata Sandi" type="password" autoComplete="current-password" />
      </AuthCard>
    </AuthLayout>
  )
}

export default LoginPage
