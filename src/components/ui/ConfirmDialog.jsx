import Modal from './Modal.jsx'
import Button from './Button.jsx'

function ConfirmDialog({
  open,
  image,
  title,
  message,
  confirmLabel = 'Ya',
  cancelLabel = 'Batal',
  variant = 'primary-color-1',
  onConfirm,
  onCancel,
}) {
  return (
    <Modal open={open} onClose={onCancel} size="small" className="confirm-dialog">
      {image && <img className="confirm-image" src={image} alt="" />}
      <h2 className="body-large-bold confirm-title">{title}</h2>
      <p className="body-medium-regular confirm-message">{message}</p>
      <div className="modal-actions">
        <Button variant="primary-color-3" onClick={onCancel}>{cancelLabel}</Button>
        <Button variant={variant} onClick={onConfirm}>{confirmLabel}</Button>
      </div>
    </Modal>
  )
}

export default ConfirmDialog
