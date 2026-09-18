import { useCallback, useEffect, useState } from 'react'

/**
 * State that survives a refresh. Everything the studio knows lives in this
 * browser — there is no server, so a cleared site storage is a cleared pipeline.
 * Export from Settings to keep a copy.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => read(key, initialValue))

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Private mode or a full quota — the session keeps working in memory.
    }
  }, [key, value])

  const reset = useCallback(() => setValue(initialValue), [initialValue])

  return [value, setValue, reset] as const
}

export function read<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key)
    if (raw === null) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export const STORAGE_KEYS = {
  leads: 'pindrop.leads.v1',
  settings: 'pindrop.settings.v1',
  drafts: 'pindrop.drafts.v1',
  seeded: 'pindrop.seeded.v1',
} as const
