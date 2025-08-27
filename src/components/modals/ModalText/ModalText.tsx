import { FC } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

// css

import styles from './ModalText.module.css'

// img

import closeIcon from '@/../public/ModalResult/close.svg'

// components

import MyButton from '@/components/ui/MyButton/MyButton'

// 

interface ModalTextProps {
  title: string
  text: string
  btnText: string
  onClickClose: () => void
  onClickBtn: () => void
}

const ModalText:FC<ModalTextProps> = ({ title, text, btnText, onClickClose, onClickBtn }) => {
  return (
    <motion.div className={styles.modal_container} animate={{opacity: [0.5, 1]}}>

      <div className={styles.bottom_container}>
        <div className={styles.top_container}>

            <div className={styles.close_wrapper}>

              <Image src={closeIcon} width={20} height={20} alt='close_icon' onClick={onClickClose}/>

            </div>

            <div className={styles.content_wrapper}>

                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>

            </div>

            <div className={styles.btn_wrapper}>
                <MyButton text={btnText} btn={styles.btn} onClick={onClickBtn} type={'button'} />
            </div>



          
        </div>
      </div>
      
    </motion.div>
  )
}

export default ModalText
