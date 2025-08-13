import { FC } from "react"
import { motion } from "motion/react"

// css

import styles from './MyCheckBox.module.css'

// 


interface MyCheckBoxProps {
    title: string
    checked: any
    name: string
    onClick: (e: any) => any
}

const MyCheckBox: FC<MyCheckBoxProps> = ({ title, checked, name, onClick }) => {

  return (
    <div className={styles.checkbox_container}>


      <div className={styles.checkbox} onClick={onClick} style={(!checked) ? {justifyContent: 'flex-start'} : {justifyContent: 'flex-end'}}>

          <motion.div layout className={styles.checkbox_on} transition={{duration: 0.2}}></motion.div>
        
      </div>

        <div className={styles.checkbox_title_container}>

            <span className={styles.checkbox_title}>{title}</span>

        </div>

        <input type="hidden" name={name} value={checked ? "true" : "false"} />

    </div>
  )
}

export default MyCheckBox
