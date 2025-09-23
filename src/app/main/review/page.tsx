'use client'

import { FC, ReactNode, useState } from 'react'
import Link from 'next/link'
import {motion, AnimatePresence} from 'motion/react'

// styles

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// img

import modalIcon from '@/../public/ModalResult/Done.svg'

// components


import MyButton from '@/components/ui/MyButton/MyButton'
import MyInput from '@/components/ui/MyInput/MyInput'
import MyTextArea from '@/components/ui/MyTextArea/MyTextArea'

// modal

import ModalResult from '@/components/modals/ModalResult/ModalResult'

// functions

import { sendReviewEmail } from '@/functions/sendReviewEmail'

// typs

import { needArrType } from '@/types/type'



const page: FC = () => {


    const [isAuth, setIsAuth] = useState<boolean>(false)

    const [messageEmail, setMessageEmail] = useState<{name: string, email: string, message: string}>({
        name: '',
        email: '',
        message: ''
    })


    const needArr: needArrType[] = [
        {
            id: 1,
            title: 'Идеи по улучшению работы музея'
        },
        {
            id: 2,
            title: 'Предложения по новым экспозициям'
        },
        {
            id: 3,
            title: 'Замечания по организации пространства'
        },
        {
            id: 4,
            title: 'Пожелания по проведению мероприятий'
        },
        {
            id: 5,
            title: 'Отзывы о работе сотрудников'
        },
    ]



  return (

    <Container>


        <Row className='d-flex justify-content-start align-items-center'>
            <Col className='d-flex justify-content-start align-items-center'>

            <AnimatePresence>

            {
              (isAuth) &&
                <ModalResult
                    imgTop={modalIcon}
                    onClickLink={() => {
                    setIsAuth(false)
                    }}
                    text={'Ваш отзыв отправлен'}
                    textBtn={'Закрыть'}
                    colorBackground={{background: 'linear-gradient(262deg, #7D22C9 3.49%, #FFBC41 121.77%)'}}
                    colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}}                  
                />
            }

            </AnimatePresence>


            </Col>
        </Row>



        <Row className='mb-3'>
            <Col className='d-flex justify-content-center align-items-center mb-4'>

                <div className={styles.title}>Отзыв</div>

            </Col>
        </Row>


        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-4'>

                <div className={styles.review_container}>

                    <div className={styles.review_container_title}>Дорогие посетители!</div>

                    <div className={styles.review_container_text}>Мы искренне ценим каждого гостянашего музея и стремимся сделать ваше посещение максимально комфортным и интересным. Ваше мнение — это ключ к нашему развитию и совершенствованию.</div>

                </div>

            </Col>
        </Row>


        <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center mb-4'>

            <div className={styles.review_block_container}>

                <div className={styles.review_block_title}>У вас есть:</div>

                {
                    needArr.map((item: needArrType, index: number): ReactNode => {
                        return (
                        <div key={index+1} className={styles.review_block}>
                            <div className={styles.review_block_dot}></div>
                            <div className={styles.review_block_text}>{item.title}</div>
                        </div>
                        )
                    })
                }


                <div className={styles.review_block_info}>Мы будем рады услышать каждое ваше мнение!</div>


                </div>
            
            </Col>
        </Row>


        <Row className='mb-5'>
            <Col className='d-flex flex-column justify-content-center align-items-center mb-5'>


                    <MyInput name={'name'} title={'ФИО*'} type={'text'} placeholder={'ваше имя'} style={{ marginBottom: '10px' }} required={true} value={messageEmail.name} onChange={(e) => {setMessageEmail({...messageEmail, name: e.target.value})}}/>
                    <MyInput name={'email'} title={'Почта*'} type={'email'} placeholder={'ваше имя'} style={{marginBottom: '10px'}} required={true} value={messageEmail.email} onChange={(e) => {setMessageEmail({...messageEmail, email: e.target.value})}}/>
                    <MyTextArea name={'message'} title={'Отзыв*'} placeholder={'Сообщение'} style={{marginBottom: '10px'}} rows={5} required={true} value={messageEmail.message} onChange={(e) => {setMessageEmail({...messageEmail, message: e.target.value})}}/>


                    <MyButton text={'Отправть'} btn={styles.btn} onClick={async () => {
                        const res = await sendReviewEmail(messageEmail)
                        if (res?.message === 'success') {
                            setIsAuth(true)
                        }
                    }} type={'button'} /> 
                    <Link href={'/main'} style={{textDecoration: 'none'}}><MyButton text={'Назад'} btn={styles.btn} onClick={() => {''}} type={'button'} /></Link>   
     
 
            </Col>
        </Row>
    </Container>

  )
}

export default page
