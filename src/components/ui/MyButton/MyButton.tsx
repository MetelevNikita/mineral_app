import { CSSProperties, FC } from 'react'

// css

import styles from '@/components/ui/MyButton/MyButtom.module.css'

// 

interface MyButtonProps {
    style?: CSSProperties
    text: string
    btn: string
    onClick: () => void
    type: 'button' | 'submit' | 'reset'
    disabled?: boolean
}

const MyButton: FC<MyButtonProps> = ({ style, text, btn, onClick, type, disabled }) => {
  return (
    <button style={style} type={type} className={[styles.btn_osnova, btn].join(' ')} onClick={onClick} disabled={disabled}>{text}</button>
  )
}

export default MyButton
