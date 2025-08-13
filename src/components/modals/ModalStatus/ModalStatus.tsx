import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// css

import styles from './ModalStatus.module.css'

// 

import MyButton from '@/components/ui/MyButton/MyButton'
import { div, style } from 'motion/react-client'

// 

interface ModalStatusProps {
  statusText: string,
  statusImg: string,
  onClick: () => void

  // 

  bgButtonColor: string,
  bgButtonTop: string
}

const ModalStatus: FC<ModalStatusProps> = ({ statusText, statusImg, onClick }) => {
  return (
    <div className={styles.modal_container}>
      <div className={styles.bottom_container}>

            <div className={styles.top_container}>

                <div className={styles.status_icon_wrapper}>
                  <Image src={statusImg} width={125} height={203} alt='status_icon'/>
                </div>

                <div className={styles.status_text}>Поздравляем! Вы достигли уровня</div>
                <div className={styles.status_title}>{statusText}</div>

                  <div className={styles.status_btn_container}>

                      <MyButton text={'Смотреть профиль'} btn={styles.status_btn} onClick={() => {}} type={'button'} />
                      <MyButton text={'Поделиться в ВК'} btn={styles.status_btn} onClick={() => {}} type={'button'} />

                  </div>
            
            </div>

      </div>
    </div>
  )
}

export default ModalStatus
