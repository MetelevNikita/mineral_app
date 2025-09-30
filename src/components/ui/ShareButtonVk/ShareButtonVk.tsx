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
  const REDIRECT_URL = 'https://www.geokviz.ru//main/profile'


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
      oneTap.render({ container: oneTapContainer.current, contentId: 2}).on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, (payload: any) => {
        const code = payload.code;
        const deviceId = payload.device_id;

        VKID.Auth.exchangeCode(code, deviceId)
          .then(vkidOnSuccess)
          .catch(vkidOnError);
      });

    }

    return () => {
      if (oneTapContainer.current) {
        oneTapContainer.current.innerHTML = '';
      }
    };

  }, [])




  const vkidOnSuccess = (data: any) => {
    console.log('Token data: ', data)

    setAccessToken(data.access_token);
    setUserId(data.user_id);

    if (data.access_token) {
      console.log(data)
      console.log(data.access_token)
      createWallPost(data.access_token, messageStatus, title)
    }
  }

  const vkidOnError = (error: any) => {
      console.log(error)
  }


  return (

    <div ref={oneTapContainer} />


  )
}

export default ShareButtonVk


