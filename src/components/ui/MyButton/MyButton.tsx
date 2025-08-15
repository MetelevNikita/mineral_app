

import { CSSProperties, FC} from 'react'

// css

import styles from '@/components/ui/MyButton/MyButtom.module.css'

// img

import arrowIcon from '@/../public/button/arrowIcon.svg'
import { div } from 'motion/react-client'


// 

interface MyButtonProps {
    style?: CSSProperties
    text: string
    btn: string
    onClick: () => void
    type: 'button' | 'submit' | 'reset'
    disabled?: boolean
    imgActive?: any
}

const MyButton: FC<MyButtonProps> = ({ style, text, btn, onClick, type, disabled, imgActive }) => {

  imgActive = imgActive || false

  return (


    <button style={style} type={type} className={[styles.btn_osnova, btn].join(' ')} onClick={onClick} disabled={disabled}>
      <div>{text}</div>

      {

        imgActive && (

          <div className={[styles.btn_img_wrapper, styles.btn_arrow].join(' ')}>&gt;</div>
   
        )

      }


    </button>
  )
}

export default MyButton
