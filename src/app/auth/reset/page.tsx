'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// styles

import styles from './page.module.css'

// bootstrap

import { Container, Row, Col } from 'react-bootstrap'
import { div, image } from 'motion/react-client'

// components

import MyInput from '@/components/ui/MyInput/MyInput'
import MyButton from '@/components/ui/MyButton/MyButton'

// img

import backIcon from '@/../public/ResponceCode/Back.svg'

interface Props {

}




const page: FC<Props> = () => {


  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')

  console.log(email)

  //
  
  
  const resetPasswordHandler = async () => {

    try {

    const responce = await fetch('/api/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      })
      
    })

    if (!responce.ok) {
       throw new Error(`Ошибка отправки письма на почту ${responce.status} - ${responce.statusText}`)
    }

    const data = await responce.json()
    console.log(data)

    if (data.message === 'Пользователь с такой почтой не найден') {
      setError(true),
      setErrorText(data.message)
    } else if (data.message === 'Ошибка отправки письма') {
      setError(true),
      setErrorText(data.message)
    } else if (data.message === 'Ошибка сброса пароля: Connection timeout') {
      setError(true),
      setErrorText(data.message)
    } else if (data.message === 'Письмо отправлено') {
      setTimeout(() => {
        setIsAuth(true)
      }, 1000)
    }

    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        console.error({
          message: `Ошибка отправки письма`,
          status: 500
        })
        
        return {
          message: `Ошибка отправки письма`,
          status: 500
        }
      }
    }

    

  }


  return (
    <Container>

      <Row className='mb-5'>
            <Col className='d-flex justify-content-center align-items-center'>

                <div className={styles.button_container}>

                    <Link href={'/auth/login'}><Image src={backIcon} alt='back_icon' width={39} height={39}/></Link>

                </div>

            </Col>
        </Row>


      <Row>
        <Col className='d-flex flex-column justify-content-center align-items-center'>




          <div className={styles.title}>Вход</div>
          <div className={styles.subtitle}>Введите почту которая была зарегистрирована.На нее будет отправлен ссылка для сброса пароля.</div>

          <MyInput title={'Ваш пароль'} type={'email'} placeholder={''} style={{marginBottom: '20px'}} value={email} onChange={(e: any) => {setEmail(e.target.value)}} borderColor={(error) ? {borderColor: 'red'} : {borderColor: '#D8DADC'}}/>



          {
            error && (
              <Col className='d-flex justify-content-start align-items-center mb-3'>
              
                <div className={styles.error_message}>{errorText} *</div>
              
              </Col>
            )
          }


          {
            isAuth && (
              <Col className='d-flex justify-content-start align-items-center mb-3'>
              
                <div className={styles.auth_message}>Сообщение отправлено на ваш адрес электронной почты</div>
              
              </Col>
            )
          }
          

          <MyButton text={'Отправить'} btn={styles.reset_btn} onClick={() => {resetPasswordHandler()}} type={'button'} />

        </Col>
      </Row>
    </Container>
  )
}

export default page
