import { useEffect, useState } from 'react'

const PREFIX = 'videobelajar:v1:'

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(PREFIX + key)
    return saved ? JSON.parse(saved) : fallback
  } catch {
    return fallback
  }
}

function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => readStorage(key, initialValue))

  useEffect(() => {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value))
    } catch {
      // storage full or blocked: keep the in-memory state only
    }
  }, [key, value])

  return [value, setValue]
}

export function clearPersistentState() {
  try {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(PREFIX))
      .forEach((key) => localStorage.removeItem(key))
  } catch {
    // ignore
  }
}

export default usePersistentState
