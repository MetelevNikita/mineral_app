import { FC } from 'react'
import { motion } from "motion/react"

// styles

import styles from './MapMineralBlock.module.css'

// 

import Image, { StaticImageData } from 'next/image'

// 

interface MapMineralBlockProps {
  id: number
  title: string
  icon: StaticImageData | string
  onClick?: () => void
}

const MapMineralBlock: FC<MapMineralBlockProps> = ({id, title, icon, onClick }) => {


  return (

    <motion.div whileHover={{scale: 1.05, backgroundColor: '#ffbc41', border: 0}} className={styles.mapMineralBlock_container} onClick={onClick}>

      <div className={styles.mapMineralBlock_image_contianer}>
            <Image src={icon} width={37} height={37} alt='icon_mineral'/>
        </div>

        <span className={styles.mapMineralBlock_title}>{title}</span>
  
    </motion.div>
  )
}

export default MapMineralBlock
