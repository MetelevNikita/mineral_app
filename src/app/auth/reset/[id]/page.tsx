'use client'

import { FC, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {useSearchParams , useRouter} from 'next/navigation';

// styles

import styles from './page.module.css'

// bootstrap

import { Row, Col } from 'react-bootstrap';

// components

import MyInput from '@/components/ui/MyInput/MyInput';
import MyButton from '@/components/ui/MyButton/MyButton';


// img

import backIcon from '@/../public/ResponceCode/Back.svg'


// 

const page: FC = () => {

  const router = useRouter()

  const [isAuth, setIsAuth] = useState<Boolean>(false)
  const [error, setError] = useState<Boolean>(false)
  const [errorText, setErrorText] = useState<String>('')

  // 


  const searchParams = useSearchParams();
  const email = searchParams.get('email')

  // 

  const [newPassword, setNewPassword] = useState<{email: string | null, password: string, repeatPassword: string}>({
    email: email,
    password: '',
    repeatPassword: ''
  })



  const changePasswordHandler = async () => {
    try {

      const responce = await fetch('/api/reset', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPassword)
      })

      if (!responce.ok) {
        setError(true),
        setErrorText('Ошибка смены пароля'),
        setTimeout(() => {
          setError(false)
        }, 3000)
      }


      const data = await responce.json()

      if (data.message === 'Пароль успешно изменен') {
        
        console.log('Пароль успешно изменен')
        setIsAuth(true)

        setTimeout(() => {
          router.push('/auth/login')
        }, 3000)


      } else if (data.message === 'Пароли не совпадают') {
        setError(true),
        setErrorText(data.message)
      } else if (data.message === 'Пользователь с такой почтой не найден') {
        setError(true),
        setErrorText(data.message)
      } else if (data.message === 'Ошибка обновления пароля') {
        setError(true),
        setErrorText(data.message)
      }
      
    } catch (error) {
      return {
          message: 'Ошибка смены пароля'
      }
    }
  }



  return (
    <>

        <Row className='d-flex flex-column mb-5'>

            <Col md={12} className='d-flex justify-content-center align-items-center mb-5'>

                <div className={styles.button_container}>

                    <Link href={'/auth/login'}><Image src={backIcon} alt='back_icon' width={39} height={39}/></Link>

                </div>

            </Col>

            <Col md={12} className='d-flex flex-column justify-content-center align-items-center'>

              <div className={styles.title}>Вход</div>
              <div className={styles.subtitle}>Введите новый пароль</div>


              <MyInput title={''} type={'password'} placeholder={'Придумайте пароль'} style={{marginBottom: '10px'}} value={newPassword.password} onChange={(e: any) => {setNewPassword({...newPassword, password: e.target.value})}} borderColor={(error) ? {borderColor: 'red'} : {borderColor: '#D8DADC'}} pass={true}/>

              <MyInput title={''} type={'password'} placeholder={'Повторите пароль'} style={{marginBottom: '10px'}} value={newPassword.repeatPassword} onChange={(e: any) => {setNewPassword({...newPassword, repeatPassword: e.target.value})}} borderColor={(error) ? {borderColor: 'red'} : {borderColor: '#D8DADC'}} pass={true}/>

              <MyButton text={'Сохранить'} btn={styles.btn} onClick={() => {changePasswordHandler()}} type={'button'} />

            </Col>


        </Row>


        {
            (error) && (
                <Row className='mb-5'>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <div className={styles.error_message}>{errorText}</div>
                    </Col>
                </Row>
            )
        }


        {
          (isAuth) && (
                <Row className='mb-5'>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <div className={styles.correct_message}>Пароль успешно сброшен, вы будете перенаправлены на главную страницу</div>
                    </Col>
                </Row>
          )
        }
    </>
  )
}

export default page
