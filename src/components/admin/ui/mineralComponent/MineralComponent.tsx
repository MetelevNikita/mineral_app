'use client'

import { FC } from 'react'

// styles

import styles from './MineralComponent.module.css'

// 

interface MineralComponentProps {
  id: number | string
  title: string
  open: (id: any) => any
}

// 

const MineralComponent: FC<MineralComponentProps> = ({ id, title, open }) => {
  return (
    <div className={styles.mineral_components_container} onClick={() => {open(id)}}>
      <div className={styles.mineral_components_title}>{title}</div>
    </div>
  )
}

export default MineralComponent
