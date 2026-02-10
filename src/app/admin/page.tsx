'use client'

import { FC, useState } from 'react'
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



    const [authAdminData, setAuthAdminData] = useState<any>({
        email: '',
        password: ''
    })


    console.log(authAdminData)


    const authAdminHandler = async (data: {email: string, password: string}) => {
    try {

      const result = await authAdmin(data)
      console.log(result)

      if (result.data === 'success') {
        confirm('Админ усепно авторизован! Пройти в панель?') && (
          window.location.href = '/admin/dashboard'
        )
      } else {
        alert(
          'Пользовтель не может войти'
        )
        return
      }
      
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        console.error(
          `Ошибка авторизации: ${error.message}`,
        )
      }
      console.error(
        `Ошибка авторизации: ${error}`,
      )
    }
  }




  return (





        <Row className='h-100 d-flex flex-column justify-content-center align-items-center'>

        
        
          <div className={styles.title_admin_container}>
            <div className={styles.title_admin}>Geoмузей в кармане V1.0</div>
          </div>






              <Col md={4} className='d-flex flex-column justify-content-center align-items-center'>
                  <div className={styles.auth_admin_container}>

                      <div className={styles.logo_container}>
                        <div className={styles.title}>Вход</div>
                      </div>


                      
                      <MyInput name={'email'} style={{marginBottom: '20px', width: '100%'}}  title={'email'} type={'text'} placeholder={'ваша почта'} value={authAdminData.email} onChange={(e: any) => {setAuthAdminData({...authAdminData, email: e.target.value})}}/>
                      <MyInput name={'password'} style={{marginBottom: '20px', width: '100%'}} title={'password'} type={'password'} placeholder={'ваш пароль'} value={authAdminData.password} onChange={(e: any) => {setAuthAdminData({...authAdminData, password: e.target.value})}}/>



                      <div className={styles.auth_admin_btn_container}>

                          <MyButton text={'Войти'} btn={styles.auth_admin_btn} onClick={() => {authAdminHandler(authAdminData)}} type={'button'} />
                          <MyButton text={'Назад'} btn={styles.auth_admin_btn} onClick={() => {}} type={'button'} />

                      </div>

                  </div>
              </Col>

  

        </Row>


  )
}

export default page
