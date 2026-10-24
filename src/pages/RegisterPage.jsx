import { useNavigate } from 'react-router-dom'
import AuthLayout from '../components/layout/AuthLayout.jsx'
import AuthCard from '../components/auth/AuthCard.jsx'
import FormField from '../components/ui/FormField.jsx'
import PhoneInput from '../components/ui/PhoneInput.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

function RegisterPage() {
  const navigate = useNavigate()
  usePageTitle('Pendaftaran Akun')

  return (
    <AuthLayout variant="register">
      <AuthCard
        variant="register"
        title="Pendaftaran Akun"
        description="Yuk, daftarkan akunmu sekarang juga!"
        submitLabel="Daftar"
        switchLabel="Masuk"
        switchTo="/login"
        googleLabel="Daftar dengan Google"
        onSubmit={() => navigate('/login')}
      >
        <FormField id="full-name" label="Nama Lengkap" type="text" autoComplete="name" />
        <FormField id="register-email" name="email" label="E-Mail" type="email" autoComplete="email" />
        <FormField id="phone" label="No. HP">
          <PhoneInput id="phone" />
        </FormField>
        <FormField id="register-password" name="password" label="Kata Sandi" type="password" autoComplete="new-password" />
        <FormField id="confirm-password" label="Konfirmasi Kata Sandi" type="password" autoComplete="new-password" />
      </AuthCard>
    </AuthLayout>
  )
}

export default RegisterPage
