'use client'

import { FC, useEffect, useState } from 'react'

// 

import styles from './RightSide.module.css'

// bootstrap

import { Container, Row, Col } from 'react-bootstrap'

// components

import EditUser from '../EditUsers/EditUser'
import EditMineral from '../EditMinerals/EditMinerals'
import OpenMineral from '../OpenMineral/OpenMineral'
import NewMineral from '../NewMineral/NewMineral'
import OpenGeokviz from '../OpenGeokviz/OpenGeokviz'
import Collection from '../Collection/Collection'
import Status from '../Status/Status'
import EditStatus from '../EditStatus/EditStatus'

// functions

import { getSingleMineral } from '@/functions/minerale/getSingleMineral'
import Contacts from '../Contacts/Contacts'

// 

interface RightSideProps {
  contextMenu: {
    menu: {id: number, label: string, value: string}[],
    setMenu: any
  },
  contextMenuActive: {
    menuActive: {id: number, label: string, value: string},
    setMenuActive: any
  },
  submitActive: any
  infoActive: any

}

const RightSide: FC<RightSideProps> = ({ contextMenu, contextMenuActive, submitActive, infoActive }) => {


  const { menu, setMenu } = contextMenu
  const { menuActive, setMenuActive } = contextMenuActive
  const [ mineral, setMineral ] = useState<any>(null)



  useEffect(() => {
    const getCurrentMineral = async () => {
      const currentMineral = await getSingleMineral(menuActive.id)
      if (currentMineral) {
        setMineral(currentMineral)
      }
    }

    getCurrentMineral()
  }, [menuActive])


  const getCurrentContent = () => {
    switch (menuActive.value) {
      case 'minerals':
        return <EditMineral contextMenu={contextMenu} contextMenuActive={contextMenuActive}/>
      case 'change_mineral':
        return <OpenMineral contextMenu={contextMenu} contextMenuActive={contextMenuActive} submitActive={submitActive} infoActive={infoActive}/>
      case 'change_geokviz':
        return <OpenGeokviz contextMenu={contextMenu} contextMenuActive={contextMenuActive} submitActive={submitActive} infoActive={infoActive}/>
      case 'new_mineral':
        return <NewMineral contextMenu={contextMenu} contextMenuActive={contextMenuActive} submitActive={submitActive} infoActive={infoActive}/>
      case 'users':
        return <EditUser />
      case 'contacts':
        return <Contacts />
      case 'collection':
        return <Collection />
      case 'status':
        return <Status contextMenu={contextMenu} contextMenuActive={contextMenuActive}/>
              case 'edit_status':
        return <EditStatus contextMenu={contextMenu} contextMenuActive={contextMenuActive}/>
      default:
        return <div>Default Content</div>
    }
  }





  return (

    <Row>
      <Col>
        <div className={styles.content_container}>

          <div className={styles.content_title}>{(menuActive.label === 'Минерал') ? `${menuActive.label} / ${mineral.title}` : `${menuActive.label}`}</div>

          <div className={styles.content_wrapper}>
            {getCurrentContent()}
          </div>

        </div>
      </Col>
    </Row>
  )
}

export default RightSide
