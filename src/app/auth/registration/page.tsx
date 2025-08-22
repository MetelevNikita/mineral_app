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
import MyCheckBox from '@/components/ui/MyCheckBox/MyCheckBox'

// modal

import ModalResult from '@/components/modals/ModalResult/ModalResult'

// img

import ModalIcon from '@/../public/ModalResult/Done.svg'

// function

import { createUser } from '@/functions/createUser'

const Registration: FC = () => {

  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [modalMessage, setModalMessage] = useState<string>('')


  const [check, setCheck] = useState<boolean>(false)
  const [user, setUser] = useState<any>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    politic: check
  })


    const handleCheckChange = () => {
    setCheck(prevCheck => !prevCheck);
    setUser((prevState: any) => ({
      ...prevState,
      politic: !check // Обновляем политик с учетом нового состояния
    }));
  }



  const registrationUser = async (user: any) => {
    const registration = await createUser(user)
    console.log(registration)

    if (registration?.message === 'empty field') {
      setError(true)
      setModalMessage('Заполните все поля')
    } else if (registration?.message === 'password repeat') {
      setError(true)
      setModalMessage('Пароли не совпадают')
    } else if (registration?.message === 'politic') {
      setError(true)
      setModalMessage('Необходимо согласиться с политикой')
    } else if (registration?.success === true) {
      setIsAuth(true)
      setModalMessage('Успешная регистрация')
    }

  }
  


  return (

    <Container>


      {
        <Row>
              <Col>

              {
                isAuth &&
                  <ModalResult
                    imgTop={ModalIcon}
                    onClickLink={() => {
                      setIsAuth(false)
                      window.location.href = '/auth/responce'
                    }}
                    text={modalMessage}
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
                      return
                    }}
                    text={modalMessage}
                    textBtn={'Назад'}
                    colorBackground={{background: 'linear-gradient(262deg, #C92225 3.49%, #FF8041 121.77%)'}}
                    colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}}                  
                />
              }
              
              
              </Col>
          </Row>
      }



      <Row className='h-100 d-flex flex-column justify-content-center align-items-center'>

          <Col className='d-flex flex-column justify-content-center align-items-center'>

              <div className={styles.title}>Добро пожаловать</div>

      

                <MyInput value={user.name} onChange={(e) => {setUser({...user, name: e.target.value})}} name={'name'}  title={'Имя*'} type={'text'} placeholder={'Имя'} style={{marginBottom: '15px'}} />
                <MyInput value={user.email} onChange={(e) => {setUser({...user, email: e.target.value})}} name={'email'} title={'Почта*'} type={'email'} placeholder={'email'} style={{marginBottom: '15px'}} />
                <MyInput value={user.password} onChange={(e) => {setUser({...user, password: e.target.value})}} name={'password'} title={'Пароль*'} type={'password'} placeholder={'password'} style={{marginBottom: '15px'}} />
                <MyInput value={user.confirmPassword} onChange={(e) => {setUser({...user, confirmPassword: e.target.value})}} name={'confirmPassword'} title={'Повтор пароля*'} type={'password'} placeholder={'confirmPassword'} style={{marginBottom: '15px'}} />

                {/*  */}

                <Col className='d-flex justify-content-start align-items-center mb-4'>

                  <MyCheckBox name={'politic'} title={'Я соглашаюсь на обработку персональных данных'} onClick={handleCheckChange} checked={check} />

                </Col>

                  
                {/*  */}


                <MyButton style={{marginBottom: '20px'}} text={'Регистрация'} btn={styles.btn} onClick={() => {registrationUser(user)}} type={'button'} />
                <Link style={{textDecoration: 'none'}} href={'/auth'}><MyButton style={{marginBottom: '20px'}} text={'Назад'} btn={styles.btn} onClick={() => {createUser(user)}} type={'button'} /></Link>

 
              



              
          </Col>



        </Row>

    </Container>

  )
}

export default Registration
