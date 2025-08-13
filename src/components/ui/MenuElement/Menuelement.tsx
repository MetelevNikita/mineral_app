import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// style

import styles from './Menuelement.module.css'

// 

interface MenuelementProps {
    title: string,
    className: string,
    icon: string,
    path: string,
    onClick?: () => void
}

const Menuelement: FC<MenuelementProps> = ({ title, icon, path, onClick, className }) => {
  return (

    <Link className={className} style={{textDecoration: 'none'}} href={path}>
        <Image src={icon} width={25} height={25} alt='menu_icon'/>
        <div className={styles.menu_text}>{title}</div>
    </Link>

  )
}

export default Menuelement
