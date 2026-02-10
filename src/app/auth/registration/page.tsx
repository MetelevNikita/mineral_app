'use client'

import { FC, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


// 

import { Container, Row, Col } from 'react-bootstrap'

// css

import styles from './page.module.css'

// components

import MyInput from '@/components/ui/MyInput/MyInput'
import MyButton from '@/components/ui/MyButton/MyButton'
import MyCheckBox from '@/components/ui/MyCheckBox/MyCheckBox'


// function

import { createUser } from '@/functions/createUser'

const Registration: FC = () => {


  const router = useRouter()

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

    if (registration?.message === 'Не заполнены поля') {
      setError(true)
      setModalMessage('Заполните все поля')
    } else if (registration?.message === 'Пароли не совпадают') {
      setError(true)
      setModalMessage('Пароли не совпадают')
    } else if (registration?.message === 'Не активировано соглашение') {
      setError(true)
      setModalMessage('Необходимо согласиться с политикой')
    } else if (registration?.message === 'Ошибка отправки кода на email') {
      setError(true)
      setModalMessage('Ошибка запроса на Email, попробуйте позже')
    } else if (registration?.message === 'Пользователь с такой почтой уже зарегестрирован') {
      setError(true)
      setModalMessage('Пользователь с такой почтой уже зарегестрирован')
    } else if (registration?.message === `Сообщение отправлено на почту ${user.email}`) {
      console.log('Регистрация прошла успешно, код отправлен на почту')
      router.push('/auth/responce')
    }
  }
  


  return (

    <Container>


      <Row className='h-100 d-flex flex-column justify-content-center align-items-center'>

          <Col className='d-flex flex-column justify-content-center align-items-center'>

              <div className={styles.title}>Регистрация</div>

                <MyInput value={user.name} onChange={(e) => {setUser({...user, name: e.target.value})}} name={'name'} type={'text'} placeholder={'Имя*'} style={{marginBottom: '15px'}} errorField={{error, setError}}/>
                <MyInput value={user.email} onChange={(e) => {setUser({...user, email: e.target.value})}} name={'email'} type={'email'} placeholder={'Почта*'} style={{marginBottom: '15px'}} errorField={{error, setError}}/>
                <MyInput value={user.password} onChange={(e) => {setUser({...user, password: e.target.value})}} name={'password'} type={'password'} placeholder={'Пароль*'} style={{marginBottom: '15px'}} errorField={{error, setError}} pass={true}/>
                <MyInput value={user.confirmPassword} onChange={(e) => {setUser({...user, confirmPassword: e.target.value})}} name={'confirmPassword'} type={'password'} placeholder={'Повторите пароль'} style={{marginBottom: '15px'}} errorField={{error, setError}} pass={true}/>

                {/*  */}

                <Col className='d-flex justify-content-start align-items-center mb-4'>

                  <div className={styles.politic_wrapper}>

                    <MyCheckBox name={'politic'} title={'Я соглашаюсь на обработку персональных данных'} onClick={handleCheckChange} checked={check} />

                  </div>

                </Col>


                {
                  error && (
                    <Col className='d-flex justify-content-start align-items-center mb-3'>
                    
                      <div className={styles.error_message}>{modalMessage} *</div>
                    
                    </Col>
                  )
                }

                  
                {/*  */}


                <MyButton style={{marginBottom: '15px'}} text={'Регистрация'} btn={styles.btn} onClick={() => {registrationUser(user)}} type={'button'} />
                <Link style={{textDecoration: 'none'}} href={'/auth'}><MyButton text={'Назад'} btn={styles.btn} onClick={() => {createUser(user)}} type={'button'} /></Link>
   
          </Col>
        </Row>

    </Container>

  )
}

export default Registration
