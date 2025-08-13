'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// 

import { motion } from 'framer-motion'

// 

import styles from './verticalBlock.module.css'

// components

import MyButton from '@/components/ui/MyButton/MyButton'

// 

interface VerticalBlockProps {
    imgSrc: string,
    imgWidth: number,
    imgHeight: number,
    text: string,
    onClick: () => void
    path: string

}

// 

const VerticalBlock: FC<VerticalBlockProps> = ({ imgSrc, imgWidth, imgHeight, text, onClick, path }) => {
  return (

    <Link style={{textDecoration: 'none', color: '#000000'}} href={path}>
    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} className={styles.block_container} onClick={onClick}>

        <div className={styles.top_block}>

            <Image src={imgSrc} width={imgWidth} height={imgHeight} alt='icon'/>

        </div>

        
        <div className={styles.bottom_block}>
            <div className={styles.bottom_bottom_text}>{text}</div>
        </div>

    </motion.div>
    </Link>


  )
}

export default VerticalBlock
