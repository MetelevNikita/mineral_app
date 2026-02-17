import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from "motion/react"

// 

import { useMenuContext } from '@/app/main/layout'

// style

import style from './MainMenuElement.module.css'

// 


interface MainMenuElementProps {
  text: string
  image: StaticImageData | string
  link: string
  delay: number
}

const MainMenuElement: FC<MainMenuElementProps> = ({ text, image, link, delay }) => {



  const {menuActive, setMenuActive} = useMenuContext()



  return (
    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 1.1}}><Link onClick={() => {setMenuActive(link)}} href={link} className={style.main_menu_element_container}>



        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1,  y:0,  transition: { duration: 0.5, delay: delay } }} className={style.main_menu_element_text}>{text}</motion.div>

        <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: delay + 0.2 } }} className={style.main_menu_element_img_wrapper}>
          <Image className={style.main_menu_element_img} src={image} alt='img' />
        </motion.div>


      
    </Link></motion.div>
  )
}

export default MainMenuElement  
