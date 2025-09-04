"use client"

import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// css

import styles from './page.module.css'

import { Container, Row, Col } from 'react-bootstrap'

// components
import HorizontalBlock from '@/components/element/HorizontalBlock/HorizontalBlock'
import VerticalBlock from '@/components/element/VerticalBlcok/verticalBlock'

// img

import imgBuild from '@/../public/Image/pic1.svg'
import imgGromofon from '@/../public/Image/pic2.svg'
import imgHand from '@/../public/Image/pic3.svg'
import imgMinerale from '@/../public/Image/pic4.svg'

const page: FC = () => {


  return (

    <Container>
      <Row className='mt-3'>

      <Col className='d-flex justify-content-center align-items-center mb-3'>

          <HorizontalBlock path={'/main/minerale'} imgSrc={imgMinerale} imgWidth={129} imgHeight={116} text={'Пройти видеогид по минералам'} btnText={'Начать'} onClick={() => {}} />

      </Col>



        {/*  */}


        <Col md={12}  className='d-flex justify-content-center align-items-center mb-3'>


              <div className={styles.vertical_box}><VerticalBlock path={'/main/rules'} imgSrc={imgGromofon} imgWidth={102} imgHeight={100} text={'Правила музея'} onClick={() => {}} /></div>



              <div className={styles.vertical_box}><VerticalBlock path={'/main/review'} imgSrc={imgHand} imgWidth={109} imgHeight={96} text={'Оставить отзыв'} onClick={() => {}} /></div>


        </Col>

        {/*  */}

        <Col className='d-flex justify-content-center align-items-center mb-3'>

            <HorizontalBlock path='/main/welcome' imgSrc={imgBuild} imgWidth={138} imgHeight={110} text={'Приветственное видео музея'} btnText={'Смотреть'} onClick={() => {}} />

        </Col>

      </Row>
    </Container>

  )
}

export default page
