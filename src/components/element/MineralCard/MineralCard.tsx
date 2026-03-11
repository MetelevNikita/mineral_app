import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from "motion/react"

// style

import styles from './MineralCard.module.css'




interface MineralCardProps {
    image: string | StaticImageData
    title: string
    id: string | number


}

const MineralCard: FC<MineralCardProps> = ({id, image, title }) => {
  return (
    <motion.div className={styles.card_container} whileHover={{scale: 0.95}} whileTap={{scale: 1.05}} onClick={() => {window.location.href = `minerale/${title}`}}>

        <div className={styles.card_image_wrapper}>
            <Image className={styles.card_image} src={image} alt={title} width={130} height={150}/>
        </div>


        <div className={styles.card_title_wrapper}>
            <div className={styles.card_title}>{title}</div>
        </div>


    </motion.div>
  )
}

export default MineralCard
