import { FC } from 'react'
import Image from 'next/image'

// style

import styles from './Status.module.css'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import ShareButtonVk from '@/components/ui/ShareButtonVk/ShareButtonVk'

// type

import { UserType } from '@/types/type'


interface StatusProps {
    title: string,
    img: string,

    onClick: () => void
}

const Status: FC<StatusProps> = ({ title, img, onClick }) => {
  return (
    <div className={styles.bottom_container}>

        <div className={styles.top_container}>

            <div className={styles.top_content}>
                <Image src={img} width={74} height={79} alt={'status_icon'} />
                <div className={styles.top_title}>{title}</div>
            </div>

            <div className={styles.top_btn_container}>
                <ShareButtonVk icon={img} title={title}/>
                {/* <MyButton text={'Поделиться в ВК'} btn={styles.btn} onClick={onClick} type={'button'} /> */}
            </div>


        </div>
      
    </div>
  )
}

export default Status
