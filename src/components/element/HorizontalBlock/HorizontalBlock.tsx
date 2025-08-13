'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

// 

import { motion } from 'framer-motion'

// 

import styles from './HorizontalBlock.module.css'

// components

import MyButton from '@/components/ui/MyButton/MyButton'

// 

interface HorizontalBlockProps {
    imgSrc: string | StaticImageData,
    imgWidth: number,
    imgHeight: number,
    text: string,
    btnText: string,
    path: string | '',
    onClick: () => void

}

// 

const HorizontalBlock: FC<HorizontalBlockProps> = ({ imgSrc, imgWidth, imgHeight, text, btnText, onClick, path }) => {
  return (

    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} className={styles.block_container}>

        <div className={styles.left_block}>

            <Image src={imgSrc} width={imgWidth} height={imgHeight} alt='icon'/>

        </div>

        
        <div className={styles.right_block}>
            <div className={styles.right_block_text}>{text}</div>
            <Link href={path} style={{textDecoration: 'none'}}><MyButton text={btnText} btn={styles.right_block_btn} onClick={onClick} type={'button'} /></Link>
        </div>

    </motion.div>


  )
}

export default HorizontalBlock
