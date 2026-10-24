import { useEffect } from 'react'

function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} | videobelajar`
  }, [title])
}

export default usePageTitle
