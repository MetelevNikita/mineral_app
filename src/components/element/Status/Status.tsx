import { CSSProperties, FC, FunctionComponent } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

// style

import styles from './Status.module.css'

// components

import ShareButtonVk from '@/components/ui/ShareButtonVk/ShareButtonVk'

// 

import bg from '@/../public/ModalStatus/modal_status_bg.svg'
import { div } from 'motion/react-client'




interface StatusProps {
    title: string,
    img: string,
    button?: FunctionComponent| any
    onClick?: () => void
    bgColor: CSSProperties
    topColor: CSSProperties
}

const Status: FC<StatusProps> = ({ title, img, onClick, button, bgColor, topColor }) => {

  return (
    <motion.div whileTap={{scale: 1.1}} className={styles.bottom_container} style={bgColor} onClick={onClick}>

        <div className={styles.top_container} style={topColor}>
        

            <div className={styles.top_content}>
                <div className={styles.image_container}>
                    <Image src={img} width={74} height={79} alt={'status_icon'} />
                </div>
                <div className={styles.top_title}>{title}</div>
            </div>

            {
                (button) ? (
                                <div className={styles.top_btn_container}>
                                <ShareButtonVk icon={img} title={title}/>    </div>
                            )
                            :
                            (
                            <div className={styles.top_text_container}>

                                <div className={styles.top_text}>Посмотри какие звания ты можешь получить</div>

                            </div>

                            )

            }




        </div>

    </motion.div>
  )
}

export default Status
