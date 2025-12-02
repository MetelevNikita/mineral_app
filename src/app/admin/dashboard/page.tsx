'use client'

import { FC, useState } from 'react'

// 

import { Container, Row, Col } from 'react-bootstrap'

// 

import RightSide from '@/components/admin/elements/RightSideMenu/RightSide'
import LeftSide from '@/components/admin/elements/LeftSideMenu/LeftSide'

// modals

import ModalInfo from '@/components/admin/ui/modalInfo/modalInfo'
import ModalSubmit from '@/components/admin/ui/modalSubmit/modalSubmit'

// modal icons

import { BsXCircle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";




const page: FC = () => {



  const [menu, setMenu] = useState<{id: number, label: string, value: string}[]>([
    {
      id: 1,
      label: 'Минералы',
      value: 'minerals'
    },

    {
      id: 2,
      label: 'Список пользователей',
      value: 'users'
    },

    {
      id: 3,
      label: 'Контакты',
      value: 'contacts'
    },

    {
      id: 4,
      label: 'Коллекция',
      value: 'collection'
    },

    {
      id: 5,
      label: 'Статусы',
      value: 'status'
    }
  ])
  const [menuActive, setMenuActive] = useState<{id: number, label: string, value: string}>({id: 1, label: 'Минералы', value: 'minerals'})

  // modals


  const [modalInfoActive, setModalInfoActive] = useState<Boolean>(false)  
  const [modalSubmitActive, setModalSubmitActive] = useState<{type: string, status: boolean}>({
    type: '',
    status: false
  })

  //
  
  




  return (

    <Container fluid className='vh-100' style={{marginTop: '20px', marginBottom: '20px'}}>


    {/*  */}

    <Row>

      <Col md={3}>
        <LeftSide
          contextMenu={{menu, setMenu}}
          contextMenuActive={{menuActive, setMenuActive}}
        />
      </Col>


      <Col md={9}>
        <RightSide
          contextMenu={{menu, setMenu}}
          contextMenuActive={{menuActive, setMenuActive}}
          submitActive={{modalSubmitActive, setModalSubmitActive}}
          infoActive={{modalInfoActive, setModalInfoActive}}
        />
      </Col>

    </Row>
    </Container>


  )
}

export default page
