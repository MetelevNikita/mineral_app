// components/InstallPrompt.tsx
'use client'
import { useEffect, useState } from 'react'

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream)
    const isStandaloneDisplayMode =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true // iOS Safari
    setIsStandalone(isStandaloneDisplayMode)
  }, [])

  if (isStandalone) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 50,
        padding: 12,
        borderRadius: 12,
        background: '#111',
        color: '#fff',
        boxShadow: '0 8px 30px rgba(0,0,0,.25)',
        maxWidth: 520,
        margin: '0 auto',
      }}
    >
      <strong>Установить приложение</strong>
      {isIOS ? (
        <p style={{ marginTop: 8 }}>
          На iOS: нажми кнопку «Поделиться» ⎋, затем «На экран &quot;Домой&quot;» ➕
        </p>
      ) : (
        <p style={{ marginTop: 8 }}>
          В Chrome/Edge: открой меню браузера и выбери «Установить приложение».
        </p>
      )}
    </div>
  )
}