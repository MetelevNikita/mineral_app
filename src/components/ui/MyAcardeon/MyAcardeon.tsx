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

console.log(isOn)


  return (
    <div className={styles.acarderon_container}>

        <div className={styles.acarderon_top}>
            <div className={styles.acarderon_top_text}>{title}</div>
            
            <motion.div animate={isOn ? {rotate: 90} : {rotate: 0}}>
                <Image onClick={() => {setIsOn(prev => !prev)}} src={arrIcon} width={48} height={48} alt='arrow_icon'/>
            </motion.div>
        </div>

        <AnimatePresence>

        {
                isOn ? 
                    <motion.div
                        className={styles.acarderon_bottom_text}
                        initial={{ opacity: 0, border: 'none' }}   // Начальное состояние
                        animate={{ opacity: 1 }}  // Конечное состояние
                        transition={{ duration: 0.5 }}   // Время анимации
                    >
                        {(image) ? <div className={styles.image_container}><Image src={image} width={324} alt={'image'}/></div> : <div className={styles.content}>{content}</div>}
                    </motion.div> :
                    null
            }
        </AnimatePresence>
    
      
    </div>
  )
}

export default MyAcardeon
