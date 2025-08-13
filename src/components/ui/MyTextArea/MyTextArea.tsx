'use client'

import { CSSProperties, FC } from 'react'

// css

import styles from '@/components/ui/MyTextArea/MyTextArea.module.css'

// 

interface MyTextAreaProps {
    title: string
    name? : string
    placeholder: string
    style: CSSProperties
    rows?: number
    cols?: number
    required?: boolean
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const MyTextArea: FC<MyTextAreaProps> = ({ title, name, placeholder, style, rows, cols, required, value, onChange }) => {
  return (
    <div className={styles.textarea_container} style={style}>

        <span className={styles.textarea_span}>{title}</span>
        <textarea className={styles.textarea} name={name} placeholder={placeholder} rows={rows} cols={cols} required={required} value={value} onChange={onChange}></textarea>
      
    </div>
  )
}

export default MyTextArea
