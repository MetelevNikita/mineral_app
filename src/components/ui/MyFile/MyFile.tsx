import { FC, useState } from 'react'
import Image from 'next/image'

// styles

import styles from './MyFile.module.css'

// img

import downloadIcon from '@/../public/admin/UI/file attachment.svg'

// 

interface MyFileProps {
  title: string,
  name: string,
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const MyFile: FC<MyFileProps> = ({ title, name, placeholder, value, onChange }) => {

  
  const file = value && value[0] as File | any
  const previwImage = file ? URL.createObjectURL(file as any) : ''

  console.log(previwImage)

  console.log(placeholder)





  return (
    <div className={styles.input_file_container}>

      <span className={styles.input_file_span}>{title}</span>

      <label className={styles.input_file_label} htmlFor={title}>
        <div>{(!file) ? placeholder : file.name}</div>
        <Image className={styles.input_file_icon} src={downloadIcon} width={24} alt='download_icon'/>
        <input
          name={name}
          className={styles.input_file}
          id={title}
          type="file"
          onChange={onChange}/>
      </label>


      {
        (previwImage) && (
          <div className={styles.file_container}>
            <Image className={styles.file_image} src={previwImage} alt='preview image' width={70} height={0}/>
          </div>
        )
      }


      

 
   
    </div>
  )
}

export default MyFile
