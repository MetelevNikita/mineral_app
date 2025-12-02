import { FC, useState, useEffect } from 'react'
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
  value?: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const MyFile: FC<MyFileProps> = ({ title, name, placeholder, value, onChange }) => {

  const [fileName, setFileName] = useState<string>('')
  const [previewImage, setPreviewImage] = useState<string>('')





  useEffect(() => {
    if (value instanceof FileList) {
      setFileName(value[0].name)
      setPreviewImage(URL.createObjectURL(value[0]))
    } else {
      setPreviewImage(value)
      setFileName(value)
    }
  }, [value])



  return (
    <div className={styles.input_file_container}>

      {(title) && <span className={styles.input_file_span}>{title}</span>}

      <label className={styles.input_file_label} htmlFor={title}>
        <div>{(value instanceof FileList) ? value[0].name : placeholder}</div>
        <Image className={styles.input_file_icon} src={downloadIcon} width={24} alt='download_icon'/>
        <input
          name={name}
          className={styles.input_file}
          id={title}
          type="file"
          onChange={onChange}/>
      </label>


      {
        (previewImage) && (
          <div className={styles.file_container}>
            <Image className={styles.file_image} src={previewImage} alt='preview image' width={70} height={0}/>
          </div>
        )
      }


      

 
   
    </div>
  )
}

export default MyFile
