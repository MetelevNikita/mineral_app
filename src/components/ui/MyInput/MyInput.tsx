'use client'

import { CSSProperties, FC } from 'react'
import Image from 'next/image'

// css

import styles from '@/components/ui/MyInput/MyInput.module.css'

// 

interface MyInputProps {
    title: string
    name? : string
    type: string
    placeholder: string
    image?: string | null
    style: CSSProperties
    value?: string
    onChange?: (e: any) => any
    onClick?: (e: any) => any
    required?: boolean
    borderColor?: CSSProperties
    errorField?: {
      error: boolean,
      setError: (e: boolean) => void,
    }
}

const MyInput: FC<MyInputProps> = ({ title, name, type, placeholder, image, style, required, value, onChange, onClick, borderColor, errorField}) => {


  const {error, setError} = errorField || {error: false, setError: (e: boolean) => {}}


  return (
    <div className={styles.input_container} style={style}>

        <span className={(error) ? styles.input_span_error : styles.input_span}>{title}</span>

        <div className={styles.input_wrapper}>
          <input name={name} className={(error) ? styles.input_error : styles.input} type={type} placeholder={placeholder} required={required} value={value} onChange={onChange} style={borderColor} onFocus={() => {setError(false)}}/>
          {
            image && <Image className={styles.input_image} src={image} alt={title} onClick={onClick}/>
          }
        </div>
      
    </div>
  )
}

export default MyInput
