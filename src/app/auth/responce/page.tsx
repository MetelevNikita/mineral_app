'use client'

import { FC, useEffect, useState, useRef } from 'react'
import Cookies from 'js-cookie'

// funtions

import { sendRandomCode } from '@/functions/emailRandomCode'
import { repeatEmailCode } from '@/functions/repeatEmailCode'

import Image from 'next/image'
import Link from 'next/link'

// img

import modalIcon from '@/../public/ModalResult/Done.svg'
import modalIconError from '@/../public/ModalResult/error.svg'

// style

import styles from './page.module.css'

// bootstrap

import { Container, Row, Col } from 'react-bootstrap'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import ModalResult from '@/components/modals/ModalResult/ModalResult'

// image

import backIcon from '@/../public/ResponceCode/Back.svg'

const page: FC = () => {

    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>('')
    const [errorFiled, setErrorFiled] = useState<boolean>(false)
    const inputsRef = useRef<any>([])


    useEffect(() => {
            
        const intervalId = setInterval(() => {

            if (time > 0) {
            setTime((prevCounter: any) => {

                    if (prevCounter === 0) {
                        clearInterval(intervalId)
                        return 0
                    }
                    return prevCounter - 1
            
                })
            } 

    }, 1000)

    }, [])

    const length = 6
    const arr = [1,2,3,4,5,6]

    const [time, setTime] = useState(60)
    const [code, setCode] = useState<string[]>([])
    const [repeatCode, setRepeatCode] = useState<any>()
    

    let newCode: number | string = ''
    const email = Cookies.get('email')
 



    const handleInput = (value: string, index: number) => {
  
        if (value.length  >  1) {
            value = value.slice(0, 1)
        }

        const updateCode = [...code]
        updateCode[index] = value
        setCode(updateCode)
        console.log(inputsRef.current[index + 1])

        if (value && index < length - 1) {
            inputsRef.current[index + 1]?.focus()
            console.log(inputsRef.current[index + 1])
        }

    }

    // 

    const generateRandomCode = () => {
        return Math.floor(100000 + Math.random() * 900000); // Генерация 6-значного числа
    }


    const sendVarCode = () => {

        const cookieCode = Cookies.get('code')

        if (code.length < 6) {
            setErrorText('Необходимо ввести 6 цифр')
            setError(true)
            setErrorFiled(true)
            return
        }


        if (time === 0) {

            if (code.join('') !== repeatCode.toString()) {
                setErrorText('Неверный код')
                setError(true)
                setErrorFiled(true)
                return
            } else {
                if (code.join('') === repeatCode.toString()) {
                    setIsAuth(true)
                    Cookies.remove('code')
                    Cookies.remove('email')
                }
            }

        }


        if (code.join('') === cookieCode) {
            setIsAuth(true)
            Cookies.remove('code')
            Cookies.remove('email')
        } else {
            setErrorText('Неверный код')
            setError(true)
            setErrorFiled(true)
            return
        }
    }



  return (

    <Container>


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
                text={'Вы успешно зарегестрировались'}
                textBtn={'Перейти'}
                colorBackground={{background: 'linear-gradient(262deg, #7D22C9 3.49%, #FFBC41 121.77%)'}}
                colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}}                  
              />
            }


            {
              (error) &&
                <ModalResult
                    imgTop={modalIconError}
                    onClickLink={() => {
                    setError(false)
                    }}
                    text={errorText}
                    textBtn={'Назад'}
                    colorBackground={{background: 'linear-gradient(262deg, #C92225 3.49%, #FF8041 121.77%)'}}
                    colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}}                  
                />
            }


          </Col>
        </Row>



        <Row className='mb-5'>
            <Col className='d-flex justify-content-center align-items-center'>

                <div className={styles.button_container}>

                    <Link href={'/registration'}><Image src={backIcon} alt='back_icon' width={39} height={39}/></Link>

                </div>

            </Col>
        </Row>


        <Row className='mb-5'>
            <Col className='d-flex flex-column justify-content-center align-items-center'>

                <div className={styles.title}>Введите код</div>
                <div className={styles.subtitle}>Для завершения регистрации на вашу почту пришел кд, введите его</div>

            </Col>
        </Row>


        <Row className='mb-5'>
            <Col className='d-flex flex-row justify-content-center align-items-center'>



                        {

                            arr.map((item: number, index: number) => {
                               return (
                                <input style={(errorFiled) ? {borderColor: 'red'} : {borderColor: ''}} key={index} className={styles.num} type="text" min={0} max={9} step={1} maxLength={1} inputMode='numeric' onFocus={() => {
                                    setErrorFiled(false)
                                }}
                                    ref={(el) => {
                                        inputsRef.current[index] = el
                                    }}
                                    onChange={(e) => {
                                        handleInput(e.target.value, index)
                                    }}
                                />
                               )
                            })
                            
                        }




            </Col>
        </Row>


        <Row className='mb-5'>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
                    
                {(code.length >= 6) && <MyButton text={'Отправить'} btn={styles.btn} onClick={() => {sendVarCode()}} type={'button'} />}
            
            </Col>
        </Row>




        <Row className='mb-5'>
            <Col className='d-flex flex-column justify-content-start align-items-center'>
                <div className={styles.repeat}>Повторная отправка 00:{time}</div>
            </Col>
        </Row>


        <Row className='mb-5'>
            <Col className='d-flex flex-column justify-content-start align-items-center'>

            {(time === 0) && <MyButton text={'отправить повторно'} btn={styles.btn} onClick={() => {
                newCode = generateRandomCode() as number
                setRepeatCode(newCode)
                repeatEmailCode(email as string, newCode.toString())
                }} type={'button'} />}

            </Col>
        </Row>
    </Container>
 
  )
}

export default page
