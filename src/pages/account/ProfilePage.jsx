import { useRef, useState } from 'react'
import AccountLayout from '../../components/layout/AccountLayout.jsx'
import Button from '../../components/ui/Button.jsx'
import Toast from '../../components/ui/Toast.jsx'
import { useAppStore } from '../../store/useAppStore.js'
import usePageTitle from '../../hooks/usePageTitle.js'
import useToast from '../../hooks/useToast.js'

const MAX_PHOTO_SIZE = 1024 * 1024

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 3) errors.name = 'Nama minimal 3 karakter'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Format email tidak valid'
  if (!/^\d{8,13}$/.test(values.phone)) errors.phone = 'No. HP harus 8-13 digit angka'
  return errors
}

function ProfilePage() {
  usePageTitle('Profil Saya')
  const { profile, updateProfile } = useAppStore()
  const [values, setValues] = useState(profile)
  const [errors, setErrors] = useState({})
  const fileInput = useRef(null)
  const toast = useToast()

  const isDirty = ['name', 'email', 'countryCode', 'phone'].some((key) => values[key] !== profile[key])

  const setField = (name) => (event) => {
    setValues((current) => ({ ...current, [name]: event.target.value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }
    updateProfile({
      name: values.name.trim(),
      email: values.email.trim(),
      countryCode: values.countryCode,
      phone: values.phone,
    })
    toast.show('Profil berhasil diperbarui')
  }

  const handlePhoto = (event) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (file.size > MAX_PHOTO_SIZE) {
      toast.show('Ukuran foto maksimal 1 MB')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      updateProfile({ avatar: reader.result })
      setValues((current) => ({ ...current, avatar: reader.result }))
      toast.show('Foto profil berhasil diganti')
    }
    reader.readAsDataURL(file)
  }

  const field = (name, label, props = {}) => (
    <div className={`outlined-field ${errors[name] ? 'outlined-field-error' : ''}`}>
      <label htmlFor={`profile-${name}`}>{label}</label>
      <input id={`profile-${name}`} value={values[name]} onChange={setField(name)} {...props} />
      {errors[name] && <small className="form-error">{errors[name]}</small>}
    </div>
  )

  return (
    <AccountLayout title="Ubah Profil" subtitle="Ubah data diri Anda">
      <div className="card profile-card">
        <div className="profile-header">
          <img className="profile-photo" src={profile.avatar} alt={`Foto ${profile.name}`} />
          <div>
            <h2 className="heading-6">{profile.name}</h2>
            <p className="body-medium-regular">{profile.email}</p>
            <button type="button" className="text-button" onClick={() => fileInput.current?.click()}>
              Ganti Foto Profil
            </button>
            <input ref={fileInput} type="file" accept="image/*" hidden onChange={handlePhoto} />
          </div>
        </div>

        <form className="profile-form" onSubmit={handleSubmit} noValidate>
          {field('name', 'Nama Lengkap', { autoComplete: 'name' })}
          {field('email', 'E-Mail', { type: 'email', autoComplete: 'email' })}
          <div className="outlined-field profile-country">
            <label htmlFor="profile-country">Kode</label>
            <select id="profile-country" value={values.countryCode} onChange={setField('countryCode')}>
              {['+62', '+60', '+65', '+66'].map((code) => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
          </div>
          {field('phone', 'No. Hp', { type: 'tel', inputMode: 'numeric', autoComplete: 'tel-national' })}

          <div className="profile-actions">
            <Button type="submit" disabled={!isDirty}>Simpan</Button>
          </div>
        </form>
      </div>
      <Toast message={toast.message} onClose={toast.clear} />
    </AccountLayout>
  )
}

export default ProfilePage
