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

// img

import map from '@/../public/contacts/map.png'

// types

import { contactsArrType } from '@/types/type'


const page: FC = () => {


    const contactsArr: contactsArrType[] = [
        {
            id: 1,
            title: 'Адрес',
            content: '125009, г. Москва, Моховая ул., д. 11, стр. 11 (станция метро «Охотный ряд»)',
            img: ''
        },

        {
            id: 1,
            title: 'Проведение мероприятий',
            content: 'Тел.: +7 (495) 692–09–43(будни с 11:00 до 17:00, выходные с 12:00 до 18:00) E-mail: info@sgm.ru',
            img: ''
        },

        {
            id: 1,
            title: 'Лаборатория',
            content: 'Тел.: 8 (985) 025-19-71Приём по предварительной записи по телефону. 3 этаж в каб. 338.',
            img: ''
        },

        {
            id: 1,
            title: 'СМИ',
            content: 'Лопатина ИринаТел.: +7 (495) 692-09-43E-mail: pr@sgm.ru',
            img: ''
        },

        {
            id: 1,
            title: 'Как добраться',
            content: 'Общественным транспортом, ближайшая станция метро Охотный ряд. Выход №1 к ТЦ «Охотный ряд», из стеклянных дверей направо. По Моховой улице пройти 200м, далее у шлагбаума свернуть направо.Внимание! Для автобусов, микроавтобусов, личного транспорта парковка возле музея не предусмотрена.Вы можете воспользоваться парковками "Московского паркинга", расположенных по-близости от музея.Для посетителей с ограниченными возможностями здоровья парковка возможна по предварительному согласованию, тел. +7 (495) 692-09-43',
            img: ''
        },


        {
            id: 1,
            title: 'СХЕМА РАСПОЛОЖЕНИЯ МУЗЕЯ',
            content: '',
            img: map
        },

        
    ]


  return (

    <Container>
        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-4'>

                <div className={styles.title}>Контакты</div>

            </Col>
        </Row>




        <Row>

            <Col className='d-flex flex-column justify-content-center align-items-center mb-4'>
                
                {

                    (contactsArr.length < 1 || !contactsArr) ? <div>Нет данных</div> : contactsArr.map((item: contactsArrType, index: number): ReactNode => {
                        return (
                            <Col key={index+1} className='mb-3'><MyAcardeon key={index+1} title={item.title} content={item.content} image={item.img}/></Col>
                        )
                    })
                    
                }

            </Col>

        </Row>


        <Row className='mb-5'>
            <Col className='d-flex justify-content-center align-items-center mb-5'>
                <Link href={'/main'} style={{textDecoration: 'none'}}><MyButton text={'Назад'} btn={styles.btn} onClick={() => {''}} type={'button'} /></Link>    
            </Col>
        </Row>
    </Container>

  )
}

export default page
