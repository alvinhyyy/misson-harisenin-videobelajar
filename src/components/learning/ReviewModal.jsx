import { useState } from 'react'
import Modal from '../ui/Modal.jsx'
import Button from '../ui/Button.jsx'
import RatingInput from '../ui/RatingInput.jsx'

function ReviewModal({ open, onClose, onSubmit }) {
  const [rating, setRating] = useState(0)
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!rating) return setError('Pilih rating terlebih dahulu')
    if (text.trim().length < 10) return setError('Review minimal 10 karakter')
    onSubmit({ rating, text: text.trim() })
    setRating(0)
    setText('')
    setError('')
  }

  return (
    <Modal open={open} onClose={onClose} size="medium" className="review-modal">
      <form onSubmit={handleSubmit}>
        <h2 className="body-large-bold confirm-title">Tulis Review Terbaikmu!</h2>
        <p className="body-medium-regular confirm-message">Ceritakan pengalaman belajarmu di kelas ini</p>
        <RatingInput value={rating} onChange={setRating} />
        <label className="visually-hidden" htmlFor="review-text">Review</label>
        <textarea
          id="review-text"
          className="review-textarea"
          rows={4}
          placeholder="Masukkan Review"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        {error && <small className="form-error">{error}</small>}
        <div className="modal-actions">
          <Button variant="primary-color-3" onClick={onClose}>Batal</Button>
          <Button type="submit">Selesai</Button>
        </div>
      </form>
    </Modal>
  )
}

export default ReviewModal
