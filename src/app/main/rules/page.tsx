'use client'

import { FC, ReactNode } from 'react'
import Link from 'next/link'

// styles

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MyAcardeon from '@/components/ui/MyAcardeon/MyAcardeon'
import MyButton from '@/components/ui/MyButton/MyButton'


const page: FC = () => {


const rulesArr = [
    {
        id: 1,
        text: 'Вход в музей осуществляется через главный вход по билету',
    },

    {
        id: 2,
        text: 'Экскурсионное обслуживание проводится только аккредитованными гидами'
    },

    {
        id: 3,
        text: 'Фотосъемка разрешена только любительская, без вспышки и штативов'
    },

    {
        id: 4,
        text: 'Время посещения определяется графиком работы музея'
    }
]


  return (

    <Container>
        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-4'>

                <div className={styles.title}>Правила музея</div>

            </Col>
        </Row>


        <Row className='mb-3'>

            <Col className='d-flex justify-content-center align-items-center mb-4'>

                <div className={styles.subtitle}>Музей минералов это специализированное учреждение для демонстрации образцов горных пород, минералов и других природных объектов. Соблюдение правил необходимо для сохранности коллекции и комфортного посещения.</div>

            </Col>

        </Row>



        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-4'>

                <div className={styles.rules_container}>

                    <div className={styles.rules_container_title}>Основные правила посещения</div>

                    {
                        rulesArr.map((item, index: number): ReactNode => {
                            return (

                            <div key={index+1} className={styles.rules_block}>
                                <div className={styles.rules_block_dot}></div>
                                <div className={styles.rules_block_text}>{item.text}</div>
                            </div>

                            )
                        })
                    }



                </div>

            </Col>
        </Row>


        <Row>

            <Col className='d-flex justify-content-center align-items-center mb-4'>

                <MyAcardeon title={'Адрес'} content={'125009, г. Москва, Моховая ул., д. 11, стр. 11 (станция метро «Охотный ряд»)'} />

            </Col>

        </Row>


        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-4'>
                <Link href={'/main'} style={{textDecoration: 'none'}}><MyButton text={'Спасибо'} btn={styles.btn} onClick={() => {''}} type={'button'} /></Link>    
            </Col>
        </Row>
    </Container>

  )
}

export default page
