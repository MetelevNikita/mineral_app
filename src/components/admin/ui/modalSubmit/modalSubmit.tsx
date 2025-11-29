import { FC } from 'react'


// styles

import styles from './modalSubmit.module.css'

// components

import MyButton from '@/components/ui/MyButton/MyButton';

// 

interface ModalSubmitProps {
  text: string
  icon: React.ReactNode | any
  active: any
  onClick: () => void
}

const ModalSubmit: FC<ModalSubmitProps> = ({ text, icon, active, onClick }) => {



  const {modalSubmitActive, setModalSubmitActive} = active


  return (
    <div className={styles.modal_submit_bg}>


      <div className={styles.modal_submit_container}>
        <div className={styles.modal_submit_wrapper}>

          <div className={styles.modal_submit_icon_wrapper}>
            {icon}
          </div>

          <div className={styles.modal_submit_text_wrapper}>
            <div className={styles.modal_submit_text}>{text}</div>
          </div>


          <div className={styles.modal_submit_btn_container}>
            <MyButton text={'Продолжить'} btn={styles.modal_submit_btn} onClick={onClick} type={'button'} />

          </div>


        </div>
      </div>
      
    </div>
  )
}

export default ModalSubmit
