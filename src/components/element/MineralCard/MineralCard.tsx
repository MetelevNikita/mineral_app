import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from "motion/react"

// style

import styles from './MineralCard.module.css'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import Menuelement from '@/components/ui/MenuElement/Menuelement'

//  img

import arrowIcon from '@/../public/button/arrowIcon.svg'

interface MineralCardProps {
    image: string | StaticImageData
    title: string
    id: string | number


}

const MineralCard: FC<MineralCardProps> = ({id, image, title }) => {
  return (
    <motion.div className={styles.card_container} whileHover={{scale: 0.95}}>

        <div className={styles.card_image_wrapper}>
            <Image className={styles.card_image} src={image} alt={title} width={40} height={40}/>
        </div>


        <div className={styles.card_title_wrapper}>
            <div className={styles.card_title}>{title}</div>
        </div>


        <div className={styles.card_btn_wrapper}>
            <Link href={`minerale/${id}`}><MyButton text={'Посмотреть'} btn={styles.card_btn} onClick={() => {}} type={'button'} /></Link>
        </div>

      
    </motion.div>
  )
}

export default MineralCard
