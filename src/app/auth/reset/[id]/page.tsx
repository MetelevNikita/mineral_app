'use client'

import { FC, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';

// styles

import styles from './page.module.css'

// bootstrap

import { Container, Row, Col } from 'react-bootstrap';

// components

import MyInput from '@/components/ui/MyInput/MyInput';
import MyButton from '@/components/ui/MyButton/MyButton';

// modal

import ModalResult from '@/components/modals/ModalResult/ModalResult';

// img

import backIcon from '@/../public/ResponceCode/Back.svg'
import modalIcon from '@/../public/ModalResult/Done.svg'


// 

const page = () => {

  const [isAuth, setIsAuth] = useState<Boolean>(false)
  const [error, setError] = useState<Boolean>(false)
  const [errorText, setErrorText] = useState<String>('')

  // 


  const searchParams = useSearchParams();
  const email = searchParams.get('email')
  console.log(email)



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
      console.log(data)

      if (data.message === 'Пароль успешно изменен') {
        setIsAuth(true)
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

        <Row>
          <Col>
        
            {
              (isAuth) &&
              <ModalResult
                imgTop={modalIcon}
                onClickLink={() => {
                  setIsAuth(false)
                  window.location.href = '/auth/login'
                }}
                text={'Пароль успешно изменен'}
                textBtn={'На главную'}
                colorBackground={{background: 'linear-gradient(262deg, #7D22C9 3.49%, #FFBC41 121.77%)'}}
                colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}}                  
              />
            }

          </Col>
        </Row>



        <Row className='mb-5'>

            <Col className='d-flex justify-content-center align-items-center mb-5'>

                <div className={styles.button_container}>

                    <Link href={'/auth/login'}><Image src={backIcon} alt='back_icon' width={39} height={39}/></Link>

                </div>

            </Col>

            <Col className='d-flex flex-column justify-content-center align-items-center'>

              <div className={styles.title}>Вход</div>
              <div className={styles.subtitle}>Введите новый пароль</div>


              <MyInput title={''} type={'password'} placeholder={'Придумайте пароль'} style={{marginBottom: '10px'}} value={newPassword.password} onChange={(e: any) => {setNewPassword({...newPassword, password: e.target.value})}} borderColor={(error) ? {borderColor: 'red'} : {borderColor: '#D8DADC'}}/>

              <MyInput title={''} type={'password'} placeholder={'Повторите пароль'} style={{marginBottom: '10px'}} value={newPassword.repeatPassword} onChange={(e: any) => {setNewPassword({...newPassword, repeatPassword: e.target.value})}} borderColor={(error) ? {borderColor: 'red'} : {borderColor: '#D8DADC'}}/>

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
    </>
  )
}

export default page
