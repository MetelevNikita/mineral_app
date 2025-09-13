import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from "motion/react"

// style

import styles from './MapInfoBlock.module.css'

// components

import MyButton from '@/components/ui/MyButton/MyButton'

// img

import IconClose from '@/../public/map/icon_close.svg'
import { style } from 'motion/react-client'


interface MapInfoBlockProps {

    image: string | StaticImageData
    section: string
    onClick: () => void
    link: string

}

const MapInfoBlock: FC<MapInfoBlockProps> = ({ image, section, onClick, link,  }) => {
  return (
    <div className={styles.bottom_container}>

        <div className={styles.top_container}>

            <div className={styles.content_container}>


                <div className={styles.top}>


                    <div className={styles.icon_wrapper}>
                        <Image className={styles.icon} src={image} alt={'icon'}/>
                    </div>

                    <div className={styles.content_wrapper}>
                        <div className={styles.title}>{section}</div>
                        <div className={styles.content}>{''}</div>
                    </div>


                    <div className={styles.icon_close_container}>

                        <motion.div whileTap={{scale: 1.2}} onClick={onClick}><Image className={styles.icon_close} src={IconClose} alt={'icon_close'} /></motion.div>

                    </div>


                </div>


                <div className={styles.bottom}>

                    <Link href={link}><MyButton text={'Подробнее'} btn={styles.btn} type={'button'} onClick={() => {}} /></Link>

                </div>


            </div>

        </div>
      
    </div>
  )
}

export default MapInfoBlock
