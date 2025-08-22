'use client'

import { FC, useState } from 'react'
import Link from 'next/link'

// 

import { Container, Row, Col } from 'react-bootstrap'

// css

import styles from './page.module.css'

// components

import MyInput from '@/components/ui/MyInput/MyInput'
import MyButton from '@/components/ui/MyButton/MyButton'

// modal

import ModalResult from '@/components/modals/ModalResult/ModalResult'

// img

import ModalIcon from '@/../public/ModalResult/Done.svg'

// functions

import { authUser } from '@/functions/authUser'
import MyCheckBox from '@/components/ui/MyCheckBox/MyCheckBox'

const Login: FC = () => {

  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')
  const [errorField, setErrorField] = useState<boolean>(false)


  const [check, setCheck] = useState<boolean>(false)
  const [user, setUser] = useState<any>({
    email: '',
    password: '',
    rememberMe: check
  })


  const userIn = async () => {
        const data = await authUser(user)

        if (data?.message === 'Bad Request' || data?.message === 'Not Found' || data?.message === "Unauthorized") {
          setErrorText('Неверный логин или пароль')
          setError(true)
          setErrorField(true)
        } else if (data?.message === 'success') {
          setIsAuth(true)
        }



  }


  console.log(errorField)

  return (

    <Container>

      <Row className='h-100 d-flex flex-column justify-content-center align-items-center'>


          <Row>
              <Col>

              {
                isAuth &&
                  <ModalResult
                    imgTop={ModalIcon}
                    onClickLink={() => {
                      setIsAuth(false)
                      window.location.href = '/start'
                    }}
                    text={'Вы успешно вошли'}
                    textBtn={'Перейти'}
                    colorBackground={{background: 'linear-gradient(262deg, #7D22C9 3.49%, #FFBC41 121.77%)'}}
                    colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}}                  
                  />
              }

              {
                error &&
                  <ModalResult
                    imgTop={ModalIcon}
                    onClickLink={() => {
                      setError(false)
                      setErrorField(true)
                      return
                    }}
                    text={errorText}
                    textBtn={'Назад'}
                    colorBackground={{background: 'linear-gradient(262deg, #C92225 3.49%, #FF8041 121.77%)'}}
                    colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}}                  
                />
              }
              
              
              </Col>
          </Row>



          <Col className='d-flex flex-column justify-content-center align-items-center'>

              <div className={styles.title}>Добро пожаловать</div>

                <MyInput
                  value={user.email}
                  onChange={(e) => {setUser({...user, email: e.target.value})}}
                  name={'email'}
                  title={'Ваша почта'}
                  type={'text'}
                  placeholder={'email'} style={{marginBottom: '15px'}}
                  borderColor={(errorField) ? {borderColor: 'red !important'} : {}}
                  />
                  
                <MyInput
                  value={user.password}
                  onChange={(e) => {setUser({...user, password: e.target.value})}}
                  name={'password'}
                  title={'Ваш пароль'}
                  type={'password'}
                  placeholder={'password'}
                  style={{marginBottom: '15px'}}
                  borderColor={(error) ? {borderColor: 'red'} : {borderColor: '#D8DADC'}}
                  />
                  


                <div className={styles.info_auth}>
                  <MyCheckBox onClick={() => {
                    setCheck(prev => !prev)
                    setUser((prevState: any) => ({
                      ...prevState, rememberMe: !check
                    }))

                  }} title={'Запомнить меня'} checked={check} name={'remember'} />
                  <div className={styles.forget_pass_title}>Забыли пароль?</div>
                </div>

                <MyButton style={{marginBottom: '20px'}} text={'Войти'} btn={styles.btn} onClick={() => {
                  userIn()
                  }} type={'button'} />
                <Link style={{textDecoration: 'none'}} href={'/auth/registration'}><MyButton style={{marginBottom: '20px'}} text={'Регистрация'} btn={styles.btn} onClick={() => {}} type={'button'} /></Link>
                
          </Col>



        </Row>

    </Container>

  )
}

export default Login
