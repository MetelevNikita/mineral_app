'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    ym?: (...args: any[]) => void
  }
}

export function YandexMetrikaHit({ counterId }: { counterId: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!window.ym) return

    const query = searchParams.toString()
    const url = query ? `${pathname}?${query}` : pathname

    window.ym(counterId, 'hit', url)
  }, [counterId, pathname, searchParams])

  return null
}
