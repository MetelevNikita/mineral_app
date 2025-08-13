import { FC, ReactNode } from 'react'
import Image from 'next/image'

// style

import styles from './SocialInfo.module.css'

// img

import tgIcon from '@/../public/social_logo/tg_icon.svg'
import vkIcon from '@/../public/social_logo/vk_icon.svg'

// types

import {socialLogoType} from '@/types/type'

interface socialLogoProps {
  colorText: string
  colorLine: string
}





const SocialInfo: FC<socialLogoProps> = ({ colorLine, colorText }) => {


  const socialLogoArr: socialLogoType[] = [
    {
      id: 1,
      title: 'Телеграм',
      img: tgIcon,
      url: '#'
    },

    {
      id: 2,
      title: 'Вконтакте',
      img: vkIcon,
      url: '#'
    }
  ]


  return (
    <div>


      <div className={styles.top_container}>

        <div className={styles.top_line} style={{background: colorLine}}/>

          <div className={styles.top_title} style={{color: colorText}}>Мы в соцсетях</div>

        <div className={styles.top_line} style={{background: colorLine}}/>

      </div>


      <div className={styles.bottom_container}>
        {
          socialLogoArr.map((item: socialLogoType , index: number): ReactNode => {
            return (

              <a key={index+1} className={styles.bottom_link_container} href={item.url} target='_blanc'>

                <Image key={index + 1} src={item.img} width={30} height={30} alt={'social_logo'}/>
              
              </a>

  
            )
          })
            
        }
      </div>



      
    </div>
  )
}

export default SocialInfo
