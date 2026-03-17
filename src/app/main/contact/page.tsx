'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
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

// fn

import { getContacts } from '@/functions/contacts/getContacts'



const page: FC = () => {




    const [contactsArr, setContactsArr] = useState<any[]>([])
    
    useEffect(() => {
        (async () => {
            const res = await getContacts()
            if (res) {

                const objRes = Object.entries(res[0])
                const newData = objRes.filter((item) => item[0] !== 'id' && item[0] !== 'createAt' && item[0] !== 'updateAt').map((item, index) => {
                    const value = ['Адрес', 'Проведение мероприятий', 'Лаборатория', 'СМИ', 'Как добраться', 'Схема расположения музея']

                        if (item[0] === 'way') {
                            return {
                                id: index+1,
                                title: value[index] || '',
                                content: item[1],
                                img: item[1]
                            }
                        } else {

                            return {
                                id: index+1,
                                title: value[index] || '',
                                content: item[1],
                                img: ''
                            
                                }

                        }

      
                        

                    

                })


                setContactsArr(newData)
            }
        })()
    }, [])


    console.log(contactsArr)


  return (

    <Container>
        <Row className='d-flex justify-content-center align-items-center mb-3'>
            <Col md={6}>
                <div className={styles.title}>Контакты</div>
            </Col>
        </Row>




        <Row>

            <Col className='d-flex flex-column justify-content-center align-items-center mb-4'>
                
                {

                    (!contactsArr || contactsArr.length < 1) ? <div>Нет данных</div> : contactsArr.map((item: contactsArrType, index: number): ReactNode => {
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
