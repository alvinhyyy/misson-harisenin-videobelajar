import { useEffect } from 'react'

function Toast({ message, onClose, duration = 2600 }) {
  useEffect(() => {
    if (!message) return undefined
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [message, onClose, duration])

  if (!message) return null

  return (
    <div className="toast" role="status">
      {message}
    </div>
  )
}

export default Toast
