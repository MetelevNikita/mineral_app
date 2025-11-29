import { FC } from 'react'
import { BsExclamationCircle } from "react-icons/bs";

// styles

import styles from './modalInfo.module.css'

// 

interface ModalInfoProps {
  text: string
  icon: React.ReactNode | any
}

const ModalInfo: FC<ModalInfoProps> = ({ text, icon }) => {
  return (
    <div className={styles.modal_info_bg}>


      <div className={styles.modal_info_container}>
        <div className={styles.modal_info_wrapper}>

          <div className={styles.modal_info_icon_wrapper}>
            {icon}
          </div>

          <div className={styles.modal_info_text_wrapper}>
            <div className={styles.modal_info_text}>{text}</div>
          </div>


        </div>
      </div>
      
    </div>
  )
}

export default ModalInfo
