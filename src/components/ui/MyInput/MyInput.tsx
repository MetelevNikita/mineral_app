'use client'

import { CSSProperties, FC, useState } from 'react'
import Image from 'next/image'

// css

import styles from '@/components/ui/MyInput/MyInput.module.css'

// img

import icon_eye from '@/../public/UI/IconEye.svg'

// 

interface MyInputProps {
    title?: string
    name? : string
    type: string
    placeholder: string
    image?: string | null
    style: CSSProperties
    value?: string
    pass?: boolean
    onChange?: (e: any) => any
    onClick?: (e: any) => any
    required?: boolean
    borderColor?: CSSProperties
    errorField?: {
      error: boolean,
      setError: (e: boolean) => void,
    }
}

const MyInput: FC<MyInputProps> = ({ title, name, type, placeholder, style, required, value, onChange, onClick, borderColor, errorField, pass}) => {


  const {error, setError} = errorField || {error: false, setError: (e: boolean) => {}}
  const [showPassword, setShowPassword] = useState(type)


  return (
    <div className={styles.input_container} style={style}>

        {(title) && <span className={(error) ? styles.input_span_error : styles.input_span}>{title}</span>}

        <div className={styles.input_wrapper}>
          <input name={name} className={(error) ? styles.input_error : styles.input} type={showPassword} placeholder={placeholder} required={required} value={value} onChange={onChange} style={borderColor} onFocus={() => {setError(false)}}/>


          {
            (pass) && (
                <Image
                  className={styles.input_image}
                  src={icon_eye} alt={'eye_icon'}
                  onMouseDown={() => {setShowPassword('text')}}
                  onMouseUp={() => {setShowPassword('password')}}

                  // mobile

                  onTouchStart={() => {setShowPassword('text')}}
                  onTouchEnd={() => {setShowPassword('password')}}/>
            )
          }

        </div>
      
    </div>
  )
}

export default MyInput
