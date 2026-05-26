'use client'

import { FC, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { AnimatePresence, motion } from 'motion/react'

// style

import styles from './MyAcardeon.module.css'

// img

import arrIcon from '@/../public/Acardeon/arr_icon.svg'

interface MyAcardeonProps {

    title: string,
    content: string
    image: string | StaticImageData

}

const MyAcardeon: FC<MyAcardeonProps> = ({ title, content, image }) => {

const [isOn, setIsOn] = useState(false)
const titleWord = title.slice(0,1).toLocaleUpperCase() + title.slice(1)


  return (
    <motion.div className={styles.acarderon_container} onClick={() => {setIsOn(prev => !prev)}} whileTap={{scale: 1.1}}>

        <div className={styles.acarderon_top}>
            <div className={styles.acarderon_top_text}>{titleWord}</div>
            
            <motion.div animate={isOn ? {rotate: 90} : {rotate: 0}}>
                <Image  src={arrIcon} width={48} height={48} alt='arrow_icon'/>
            </motion.div>
        </div>

        <AnimatePresence>

        {
                isOn ? 
                    <motion.div
                        className={styles.acarderon_bottom_text}>
                        {(image) ? <div className={styles.image_container}><Image src={image} width={324} height={400} alt={'image'}/></div> : <div className={styles.content}>{content}</div>}
                    </motion.div> :
                    null
            }
        </AnimatePresence>
    
      
    </motion.div>
  )
}

export default MyAcardeon
