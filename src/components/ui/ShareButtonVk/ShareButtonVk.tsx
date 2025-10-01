'use client'


import { FC, useEffect, useRef, useState } from 'react'
import * as VKID from '@vkid/sdk';

// types

import { UserType } from '@/types/type';


interface ShareButtomVkProps {
  title: string
  icon: string
}

const ShareButtonVk: FC<ShareButtomVkProps> = ({ title, icon }) => {

 const messageStatus = `Вы достигли уровня ${title} на сайте geokviz.ru`

  const VK_APP_ID = 54083822
  const REDIRECT_URL = 'https://www.geokviz.ru/main/profile'


  const oneTapContainer = useRef<HTMLDivElement>(null);
  const [accessToken, setAccessToken] = useState<string>('');
  const [authCode, setAuthCode] = useState<string>('');
  const [userId, setUserId] = useState<number | null>(null);


  const initialized = useRef(false);








  const createWallPost = async (accessToken: string, message: string, title: string) => {
    try {

      const responce = await fetch(`/api/vk`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken,
          message,
          title
          
        })
      })

      if (!responce.ok) {
        throw new Error(
          `Ошибка создания поста на стене VK ${responce.status} ${responce.statusText}`
        )
      }

      if (responce.ok) {
        try {
          const data = await responce.json()
          console.log(data)
        } catch (error) {
          console.error(error)
        }
      }




      
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {

    if (initialized.current) return;
      initialized.current = true;

      VKID.Config.init({
        app: VK_APP_ID,
        redirectUrl: REDIRECT_URL,
        responseMode: VKID.ConfigResponseMode.Callback,
        scope: 'wall photos'
      })

      if (oneTapContainer.current) {
      const oneTap = new VKID.OneTap();
      oneTap.render({ container: oneTapContainer.current, contentId: 2}).on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, async (payload: any) => {
        const code = payload.code;
        const deviceId = payload.device_id;


        try {

          const data = await VKID.Auth.exchangeCode(code, deviceId)
          const updateToken = await VKID.Auth.refreshToken(data.refresh_token, deviceId)

          createWallPost(updateToken.access_token, messageStatus, title)
          
        } catch (error) {
          console.log(`Ошибка при получении токена ${error}`)
        }

      });

    }

    return () => {
      if (oneTapContainer.current) {
        oneTapContainer.current.innerHTML = '';
      }
    };

  }, [])


  return (

    <div ref={oneTapContainer} />


  )
}

export default ShareButtonVk


