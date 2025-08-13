'use client'

import { FC } from 'react'
import Image from 'next/image'

// 

import styles from './page.module.css'
 
// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MyInput from '@/components/ui/MyInput/MyInput'
import MyButton from '@/components/ui/MyButton/MyButton'

// img

import logoIcon from '@/../public/logo/logo.svg'

// fn

import { authAdmin } from '@/functions/authAdmin'




const page = () => {
  return (

    <Container fluid className='vh-100'>



        <Row className='h-100 d-flex flex-column justify-content-center align-items-center'>


              
            <form action={authAdmin}>

              <Col className='d-flex flex-column justify-content-center align-items-center'>


                  <div className={styles.logo_container}>

                    <Image src={logoIcon} width={50} height={50} alt={'Logo'}/>
                    <div className={styles.title}>Добро пожаловать</div>

                  </div>

              
                  <MyInput name={'email'} style={{marginBottom: '20px'}}  title={'email'} type={'text'} placeholder={'ваша почта'} />
                  <MyInput name={'password'} style={{marginBottom: '20px'}} title={'password'} type={'password'} placeholder={'ваш пароль'} />

                <MyButton text={'Войти'} btn={styles.btn} onClick={() => {}} type={'submit'} />
                
              </Col>

            </form>



        </Row>





    </Container>

  )
}

export default page
