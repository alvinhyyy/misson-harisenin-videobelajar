import { useCallback, useState } from 'react'

function useToast() {
  const [message, setMessage] = useState('')
  const show = useCallback((text) => setMessage(text), [])
  const clear = useCallback(() => setMessage(''), [])
  return { message, show, clear }
}

export default useToast
