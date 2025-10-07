'use client'


import { FC, useEffect, useRef, useState } from 'react'
import * as VKID from '@vkid/sdk';

// utils

import { generateCodeVerifier, generateCodeChallenge, generateState } from '@/lib/pce-utils'


interface ShareButtomVkProps {
  title: string
  icon: string
}

const ShareButtonVk: FC<ShareButtomVkProps> = ({ title, icon }) => {

  const [codeVerifier, setCodeVerifier] = useState<string | null>(null);
  const [codeChallenge, setCodeChallenge] = useState<string | null>(null);
  const [vkCode, setVkCode] = useState<string | null>(null);
  const [vkDevice, setVkDevice] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const messageStatus = `Вы достигли уровня ${title} на сайте geokviz.ru`
  const VK_APP_ID = process.env.NEXT_PUBLIC_VK_APP_ID as string
  const REDIRECT_URL = process.env.NEXT_PUBLIC_VK_REDIRECT_URI as string



  useEffect(() => {
      const url = new URL(window.location.href)
      const code = url.searchParams.get('code')
      const deviceId = url.searchParams.get('device_id')
      const state = url.searchParams.get('state')

      if (code) {
        console.log('Received authorization code:', code);
        setVkCode(code);
        setVkDevice(deviceId);
        
        // Автоматически обрабатываем код, если он есть в URL
        handleAuthorizationCode(code, deviceId);
      }
  }, [])



  const handleAuthorizationCode = async (code: string, deviceId: string | null) => {
    try {
      setIsProcessing(true);
      
      // Получаем code_verifier из sessionStorage
      const storedVerifier = sessionStorage.getItem('vk_code_verifier');
      const storedState = sessionStorage.getItem('vk_state');

      if (!storedVerifier) {
        throw new Error('Code verifier not found in storage');
      }

      console.log('Processing authorization with code:', code);
      console.log('Using verifier:', storedVerifier);

      const response = await fetch(`/api/vk`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          deviceId: deviceId,
          state: storedState,
          codeVerifier: storedVerifier,
          title: title,
          message: messageStatus,
        })
      })

      if (!response.ok) {
        throw new Error(
          `Ошибка создания поста на стене VK ${response.status} ${response.statusText}`
        )
      }

      const data = await response.json()
      console.log('VK API response:', data)
      
      if (data.error) {
        if (data.error.error_code === 5) {
          console.error('Ошибка авторизации: токен привязан к другому IP');
          alert('Ошибка авторизации. Попробуйте войти заново.');
        }
        throw new Error(`VK API Error: ${data.error.error_msg}`);
      }


      window.history.replaceState({}, document.title, window.location.pathname);
      sessionStorage.removeItem('vk_code_verifier');
      sessionStorage.removeItem('vk_state');


      // логигка для модельного окна


      // 

    } catch (error) {
      console.error(`ОШИБКА: ${error}`)
      alert('Ошибка при публикации в VK');
    } finally {
      setIsProcessing(false);
    }
  }

  const startAuthorization = async () => {
    try {
      const verifier = generateCodeVerifier();
      const challenge = await generateCodeChallenge(verifier);
      const stateParam = generateState();

      console.log('Generated verifier:', verifier);
      console.log('Generated challenge:', challenge);

      // Сохраняем в sessionStorage для использования после редиректа
      sessionStorage.setItem('vk_code_verifier', verifier);
      sessionStorage.setItem('vk_state', stateParam);

      // Формируем URL для авторизации
      const authUrl = new URL('https://id.vk.ru/authorize');
      authUrl.searchParams.append('response_type', 'code');
      authUrl.searchParams.append('client_id', VK_APP_ID.toString());
      authUrl.searchParams.append('scope', 'wall,photos');
      authUrl.searchParams.append('redirect_uri', REDIRECT_URL);
      authUrl.searchParams.append('state', stateParam);
      authUrl.searchParams.append('code_challenge', challenge);
      authUrl.searchParams.append('code_challenge_method', 'S256');

      console.log('Redirecting to:', authUrl.toString());
      
      // Редирект на авторизацию VK
      window.location.href = authUrl.toString();

    } catch (error) {
      console.error('Ошибка при запуске авторизации VK:', error);
      alert('Ошибка при запуске авторизации VK');
    }
  }

  return (
    <button  onClick={startAuthorization} disabled={isProcessing}>
      {isProcessing ? 'Обработка...' : 'Поделиться в VK'}
    </button>
  )
}

export default ShareButtonVk


