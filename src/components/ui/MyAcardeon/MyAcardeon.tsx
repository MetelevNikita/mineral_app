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
    layoutId: string

}

const MyAcardeon: FC<MyAcardeonProps> = ({ title, content, image, layoutId }) => {

const [isOn, setIsOn] = useState(false)

console.log(isOn)


  return (
    <div className={styles.acarderon_container}>

        <div className={styles.acarderon_top}>
            <div className={styles.acarderon_top_text}>{title}</div>
            
            <motion.div layoutId={layoutId} className={(!isOn) ? styles.acarderon_top_icon : styles.acarderon_top_anim_icon} >
                <Image onClick={() => {setIsOn(prev => !prev)}} src={arrIcon} width={48} height={48} alt='arrow_icon'/>
            </motion.div>
        </div>

        <AnimatePresence>

        {
                isOn ? 
                    <motion.div
                        layoutId='active'
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
