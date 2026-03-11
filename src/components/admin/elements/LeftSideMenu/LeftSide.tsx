import { FC } from 'react'

// styles

import styles from './LeftSide.module.css'

// bootstrap

import { Container, Row, Col } from 'react-bootstrap'

// 

interface LeftSideProps {
  contextMenu: {
    menu: {id: number, label: string, value: string}[],
    setMenu: any
  },
  contextMenuActive?: {
    menuActive: {title: string, label: string, value: string} | null,
    setMenuActive: any
  } 
}


const LeftSide: FC<LeftSideProps> = ({ contextMenu, contextMenuActive }) => {

  const { menu, setMenu } = contextMenu
  const { menuActive, setMenuActive } = contextMenuActive ?? {}

  if (!menuActive) return


  return (

    <Row>
      <Col>


      
        <div className={styles.menu_container}>

            <div className={styles.menu_title}>Меню</div>

            <div className={styles.menu_wrapper}>

              {
                (menu) && menu.map((item: {id: number, label: string, value: string}, index: number) => {
                  return (
                    <div key={index+1} className={styles.menu_item_wrapper} onClick={() => {setMenuActive(item)}}>
                      <div className={(menuActive.value === item.value) ? styles.menu_item_icon_active : styles.menu_item_icon}></div>
                      <div className={styles.menu_item_title}>{item.label}</div>
                    </div>
                  )
                }) 
              }

            </div>

        </div>
      
      </Col>
    </Row>
  )
}

export default LeftSide
