"use client"

import { FC } from 'react'

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MainMenuElement from '@/components/element/MainMenuElement/MainMenuElement'

// img


import mineralImage from '@/../public/main/mineral_menu_big.svg'
import mapImage from '@/../public/main/map_menu_big.svg'
import qrImage from '@/../public/main/qr_menu_big.svg'


const page: FC = () => {

  const menuButtonArr = [

    {
      id: 1,
      text: 'Минералы',
      image: mineralImage,
      link: '/main/minerale'
    },
    {
      id: 2,
      text: 'Карта зала',
      image: mapImage,
      link: '/main/map'
    },
    {
      id: 3,
      text: 'Сканировать QR код',
      image: qrImage,
      link: '/main/qrcode'
    }
    
  ]


  return (

    <Container>
      <Row className='d-flex flex-column justify-content-center align-items-center mt-3 mb-5'>

          {(menuButtonArr && menuButtonArr.length > 0) && menuButtonArr.map((item, index) => {
            return (
              <Col md={6} className='mb-3' key={item.id}>
                <MainMenuElement delay={index * 0.2} text={item.text} image={item.image} link={item.link} />
              </Col>
            )
          })}

      </Row>
    </Container>

  )
}

export default page
