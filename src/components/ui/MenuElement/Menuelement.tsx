import { FC, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactSVG } from 'react-svg';

// context

import { useMenuContext } from '@/app/main/layout'
import { useTopMenuContext } from '@/app/main/layout'

// style

import styles from './Menuelement.module.css'

// 

interface MenuelementProps {
    title: string,
    className: string,
    icon: string | any,
    path: string,
    onClick?: () => void
}

const Menuelement: FC<MenuelementProps> = ({ title, icon, path, onClick, className }) => {


  const {menuActive, setMenuActive} = useMenuContext()
  const {topMenuOn, setTopMenuOn} = useTopMenuContext()
  const isActive = menuActive === path

  return (

    <Link onClick={() => {
      setMenuActive(path)
      setTopMenuOn(false)
      }}
      className={className}
      style={{textDecoration: 'none'}}
      href={path}>


        <ReactSVG src={icon.src} beforeInjection={(svg) => {
            // Меняем цвет всех элементов
            svg.querySelectorAll('path').forEach(path => {
              path.setAttribute('stroke', isActive ? '#FFBC41' : 'white');
            });

            svg.setAttribute('width', '25');
            svg.setAttribute('height', '25');
          }} />

        <div className={styles.menu_text} style={{color: isActive ? '#FFBC41' : 'white'}}>{title}</div>
    </Link>

  )
}

export default Menuelement
