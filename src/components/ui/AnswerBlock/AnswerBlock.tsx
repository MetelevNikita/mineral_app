'use client'

import { FC, useState } from 'react'
import { motion } from "motion/react"

// style

import styles from './AnswerBlock.module.css'

interface AnswerBlockProps {
    num: string | number
    text: string
    onClick: (e: any) => any
    disabled: boolean

}

const AnswerBlock: FC<AnswerBlockProps> = ({ num, text, onClick, disabled }) => {

    const [hover, setHover] = useState<boolean>(false)


  return (

        <motion.button className={styles.answer_container} whileHover={{backgroundColor: '#7D22C9', color: '#fff'}} whileTap={{scale: 1.10}} onClick={onClick} disabled={disabled}>
            <div className={styles.answer_num}>{num}</div>
            <div className={styles.answer_text}>{text}</div>
        </motion.button>

  )
}

export default AnswerBlock
