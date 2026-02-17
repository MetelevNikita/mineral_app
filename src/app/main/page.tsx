"use client"

import { FC } from 'react'

// css

import styles from './page.module.css'

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
      <Row className='d-flex flex-column mt-3 mb-5'>


      {(menuButtonArr && menuButtonArr.length > 0) && menuButtonArr.map((item, index) => {
        return (
          <Col className='d-flex justify-content-center align-items-center mb-3' key={item.id}>
            <MainMenuElement delay={index * 0.2} text={item.text} image={item.image} link={item.link} />
          </Col>
        )
      })}

      {/* <Col className='d-flex justify-content-center align-items-center mb-3'>

          <HorizontalBlock path={'/main/minerale'} imgSrc={imgBuild} imgWidth={139} imgHeight={116} text={'Пройти видеогид по минералам'} btnText={'Начать'} onClick={() => {}} />

      </Col>


        <Col md={12}  className='d-flex justify-content-center align-items-center mb-3'>


              <div className={styles.vertical_box}><VerticalBlock path={'/main/rules'} imgSrc={imgGromofon} imgWidth={132} imgHeight={100} text={'Правила музея'} onClick={() => {}} /></div>



              <div className={styles.vertical_box}><VerticalBlock path={'/main/review'} imgSrc={imgHand} imgWidth={139} imgHeight={96} text={'Оставить отзыв'} onClick={() => {}} /></div>


        </Col>


        <Col className='d-flex justify-content-center align-items-center mb-5'>

            <HorizontalBlock path='/main/welcome' imgSrc={imgMinerale} imgWidth={139} imgHeight={110} text={'Приветственное видео музея'} btnText={'Смотреть'} onClick={() => {}} />

        </Col> */}

      </Row>
    </Container>

  )
}

export default page
