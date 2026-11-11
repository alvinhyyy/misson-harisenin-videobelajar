import { useState } from 'react'
import Modal from '../ui/Modal.jsx'
import Button from '../ui/Button.jsx'
import { avatarOptions, courseCategories, DEFAULT_DESCRIPTION, thumbnailOptions } from '../../data/courses.js'

const emptyValues = {
  title: '',
  description: DEFAULT_DESCRIPTION,
  category: courseCategories[0],
  instructorName: '',
  instructorRole: '',
  instructorCompany: '',
  price: '',
  originalPrice: '',
  rating: '4',
  durationHours: '4',
  thumbnail: 0,
}

function toFormValues(course) {
  if (!course) return emptyValues
  const thumbnail = thumbnailOptions.findIndex((option) => option.image === course.image)
  return {
    title: course.title,
    description: course.description,
    category: course.category,
    instructorName: course.instructor.name,
    instructorRole: course.instructor.role,
    instructorCompany: course.instructor.company ?? '',
    price: String(course.price),
    originalPrice: course.originalPrice ? String(course.originalPrice) : '',
    rating: String(course.rating),
    durationHours: String(course.durationHours ?? 4),
    thumbnail: Math.max(0, thumbnail),
  }
}

function validate(values) {
  const errors = {}
  if (values.title.trim().length < 5) errors.title = 'Judul minimal 5 karakter'
  if (!values.instructorName.trim()) errors.instructorName = 'Nama tutor wajib diisi'
  if (!values.instructorRole.trim()) errors.instructorRole = 'Jabatan wajib diisi'
  if (!(Number(values.price) >= 0) || values.price === '') errors.price = 'Harga wajib berupa angka'
  if (values.originalPrice && Number(values.originalPrice) <= Number(values.price)) {
    errors.originalPrice = 'Harga coret harus lebih besar dari harga jual'
  }
  return errors
}

function CourseFormModal({ open, course, onClose, onSubmit }) {
  const [values, setValues] = useState(() => toFormValues(course))
  const [errors, setErrors] = useState({})
  const isEdit = Boolean(course)

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

    const thumbnail = thumbnailOptions[values.thumbnail]
    onSubmit({
      title: values.title.trim(),
      description: values.description.trim() || DEFAULT_DESCRIPTION,
      category: values.category,
      image: thumbnail.image,
      imageAlt: thumbnail.imageAlt,
      instructor: {
        name: values.instructorName.trim(),
        role: values.instructorRole.trim(),
        company: values.instructorCompany.trim(),
        avatar: course?.instructor.avatar ?? avatarOptions[values.thumbnail],
      },
      price: Number(values.price),
      originalPrice: values.originalPrice ? Number(values.originalPrice) : null,
      rating: Number(values.rating),
      reviews: course?.reviews ?? 0,
      durationHours: Number(values.durationHours),
    })
  }

  const field = (name, label, props = {}) => (
    <div className="form-field">
      <label htmlFor={`course-${name}`}>{label}</label>
      <input
        id={`course-${name}`}
        value={values[name]}
        onChange={setField(name)}
        aria-invalid={Boolean(errors[name])}
        {...props}
      />
      {errors[name] && <small className="form-error">{errors[name]}</small>}
    </div>
  )

  return (
    <Modal open={open} onClose={onClose} title={isEdit ? 'Edit Kelas' : 'Tambah Kelas Baru'} size="large">
      <form className="course-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-span">{field('title', 'Judul Kelas', { placeholder: 'Contoh: Belajar UI/UX dari Nol' })}</div>

          <div className="form-field form-span">
            <label htmlFor="course-description">Deskripsi</label>
            <textarea id="course-description" rows={3} value={values.description} onChange={setField('description')} />
          </div>

          <div className="form-field">
            <label htmlFor="course-category">Kategori</label>
            <select id="course-category" value={values.category} onChange={setField('category')}>
              {courseCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {field('durationHours', 'Durasi (jam)', { type: 'number', min: 1, max: 100 })}
          {field('instructorName', 'Nama Tutor')}
          {field('instructorRole', 'Jabatan Tutor', { placeholder: 'Senior Accountant' })}
          {field('instructorCompany', 'Perusahaan', { placeholder: 'Gojek' })}

          <div className="form-field">
            <label htmlFor="course-rating">Rating</label>
            <select id="course-rating" value={values.rating} onChange={setField('rating')}>
              {['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'].map((rating) => (
                <option key={rating} value={rating}>{rating}</option>
              ))}
            </select>
          </div>

          {field('price', 'Harga (Rp)', { type: 'number', min: 0, step: 1000, placeholder: '300000' })}
          {field('originalPrice', 'Harga Coret (opsional)', { type: 'number', min: 0, step: 1000 })}

          <fieldset className="form-span thumbnail-picker">
            <legend>Thumbnail</legend>
            <div className="thumbnail-grid">
              {thumbnailOptions.map((option, index) => (
                <label key={option.image} className="thumbnail-option">
                  <input
                    type="radio"
                    name="thumbnail"
                    checked={values.thumbnail === index}
                    onChange={() => setValues((current) => ({ ...current, thumbnail: index }))}
                  />
                  <img src={option.image} alt={option.imageAlt} />
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="modal-actions">
          <Button variant="primary-color-3" onClick={onClose}>Batal</Button>
          <Button type="submit">{isEdit ? 'Simpan Perubahan' : 'Tambah Kelas'}</Button>
        </div>
      </form>
    </Modal>
  )
}

export default CourseFormModal
