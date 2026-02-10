import { CSSProperties, FC, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from "motion/react"

// styles

import styles from './ResultAnswers.module.css'

// 

interface ResultAnswersProps {

  imageQuestion: string | StaticImageData
  answersTitle: string
  imageErrorArrow?: string | StaticImageData
  content: string
  colorBG: string
  style: CSSProperties
  correct?: boolean
  answer?: string
  userAnswer?: string
}



const ResultAnswers: FC<ResultAnswersProps> = ({ imageQuestion, imageErrorArrow, answersTitle, content, colorBG, style, correct, answer, userAnswer }) => {

  const [show, setShow] = useState(false)



  return (
    <div className={styles.answer_block_container} style={{...style}}>

      <div className={styles.answer_block_top} style={{backgroundColor: colorBG}}>

          <div className={styles.answer_block_left_wrapper}>
            <Image width={26} height={26} alt='img' src={imageQuestion}/>
            <div className={styles.answer_block_title}>{answersTitle}</div>
            
          </div>


          <div className={styles.answer_block_right_wrapper}>

              {
                (imageErrorArrow) && (
                  <motion.div initial={{rotate: 0}} animate={{rotate: show ? 90 : 0}} transition={{duration: 0.5}}><Image className={styles.answer_block_arrow} width={36} height={36} alt='img' src={imageErrorArrow} onClick={() => {setShow(prev => !prev)}}/></motion.div>
                )
              }

          </div>



      </div>

      {
        show && (
          <div className={styles.answer_block_bottom}>
            <div>
              {content} 
            </div>

            <div className={styles.answer_block_user_answer}>Ваш ответ: {userAnswer}</div>
            <hr />

            {
              (correct === false) && (
                <div className={styles.answer_block_correct_answer}>
                  Правильный ответ: {answer}
                </div>
              )
            }
          </div>
        )
      }

      
    </div>
  )
}

export default ResultAnswers
