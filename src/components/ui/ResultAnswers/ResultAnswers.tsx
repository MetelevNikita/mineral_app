import { CSSProperties, FC, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

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
}



const ResultAnswers: FC<ResultAnswersProps> = ({ imageQuestion, imageErrorArrow, answersTitle, content, colorBG, style }) => {

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
                  <Image width={36} height={36} alt='img' src={imageErrorArrow} onClick={() => {setShow(prev => !prev)}}/>
                )
              }

          </div>



      </div>

      {
        show && (
          <div className={styles.answer_block_bottom}>{content}</div>
        )
      }

      
    </div>
  )
}

export default ResultAnswers
