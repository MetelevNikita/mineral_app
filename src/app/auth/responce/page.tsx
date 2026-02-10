'use client'

import { FC, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import Countdown from 'react-countdown';

// funtions

import { repeatEmailCode } from '@/functions/repeatEmailCode'

import Image from 'next/image'
import Link from 'next/link'

// style

import styles from './page.module.css'

// bootstrap

import { Container, Row, Col } from 'react-bootstrap'

// components

import MyButton from '@/components/ui/MyButton/MyButton'

// image

import backIcon from '@/../public/ResponceCode/Back.svg'


const page = () => {


    const router = useRouter()

    const [error, setError] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>('')
    const [errorFiled, setErrorFiled] = useState<boolean>(false)
    const [correctField, setCorrectField] = useState<boolean>(false)
    const [repeatValidCode, setRepeatValidCode] = useState<boolean>(false)

    // 

    const inputsRef = useRef<any>([])


    async function userWasCreated (name: string, email: string, password: string) {
        try {

            const responce = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })

            if (!responce.ok) {
                throw new Error(`Ошибка создания пользователя ${responce.status} ${responce.statusText}`)
            }

            const data = await responce.json()
            console.log(data)
            
        } catch (error: Error | unknown) {
            if (error instanceof Error) {
                console.error(error.message)
                return error.message
            }

            console.error(error)
            return error
        }
    }




    const length = 6
    const arr = [1,2,3,4,5,6]

    const [code, setCode] = useState<string[]>([])
    const [repeatCode, setRepeatCode] = useState<any>()
    const [timeOut, setTimeOut] = useState<boolean>(false)

    // 

    let newCode: number | string = ''
    const user = Cookies.get('userData')


    if (!user) {
        return alert('Ошибка получения данных')
    }

    const userParse = JSON.parse(user)




    const handlerPasteInput = (e: any) => {


        let newArrVal = [] as any


        e.preventDefault()
        const pastedText = e.clipboardData.getData('text')
            .split('')
            .filter((item: string | number, index: number) => index <= 5);



        pastedText.forEach((val: string | number, index: number) => {
            inputsRef.current[index].value = val
            newArrVal.push(val)
        })


        console.log(newArrVal)
        setCode(newArrVal)
    }


    const handleInput = (value: string, index: number) => {


        const updateCode = [...code]
        updateCode[index] = value
        setCode(updateCode)


        if (value && index < length - 1) {
            inputsRef.current[index+1]?.focus()
        } else if (!value && index > 0) {
            inputsRef.current[index-1]?.focus()
        } 

    
    }

    const handleDelete = (e: any, index: number) => {
        if (e.key === 'Backspace' && !e.target?.value) {
            e.preventDefault()

            if (index >= 0) {
                const prevIndex = index - 1;
                inputsRef.current[prevIndex].value = ''
                inputsRef.current[prevIndex]?.focus()
                handleInput('', prevIndex)

            }
        }
    }

    // 

    const generateRandomCode = () => {
        return Math.floor(100000 + Math.random() * 900000); // Генерация 6-значного числа
    }


    const sendVarCode = () => {

        const user = Cookies.get('userData')
        if (!user) return 
        
        const {name, email, password} = userParse
        console.log(email, name, password)

        console.log('отправляю')

        const cookieCode = Cookies.get('code')

        if (code.length < 6) {
            setErrorText('Необходимо ввести 6 цифр')
            setError(true)
            setErrorFiled(true)
            return
        }


        if (timeOut) {

            if (code.join('') !== repeatCode.toString()) {
                setErrorText('Неверный код')
                setError(true)
                setErrorFiled(true)
                return
            } else {
                if (code.join('') === repeatCode.toString()) {
                    setCorrectField(true)

                    setTimeout(async () => {
                        console.log('Код введен верно')
                        await userWasCreated(name, email, password)
                        Cookies.remove('code')
                        Cookies.remove('userData')
                        router.push('/auth/login')
                    }, 2000)


                }
            }

        }


        if (code.join('') === cookieCode) {
            setCorrectField(true)
            setTimeout(async () => {
                console.log('Код введен верно')
                await userWasCreated(name, email, password)
                Cookies.remove('code')
                Cookies.remove('userData')
                router.push('/auth/login')
            }, 2000)
        } else {
            setErrorText('Неверный код')
            setError(true)
            setErrorFiled(true)
            return
        }
    }


    const repeatCodeHandler = async () => {
        try {


            console.log(inputsRef.current)

            inputsRef.current.forEach((item: any) => {
                return item.value = ''
            })
            

            newCode = generateRandomCode() as number
            setRepeatCode(newCode)
            const sendRepeat = await repeatEmailCode(userParse.email as string, newCode.toString())

            if (sendRepeat.message === 'Сообщение не отправлено - проверьте настройки VPN или отключите его') {
                setErrorText('Сообщение не отправлено - проверьте настройки VPN или отключите его')
                setError(true)
            } else {
                console.log('sendRepeat', sendRepeat)
                setRepeatValidCode(true)
                setError(false)
            }

        } catch (error) {
            console.error(error)
        }
    }


    console.log(code)



  return (

    <Container>

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
                <div className={styles.subtitle}>Для завершения регистрации необходимо вести код который бьыл выслан на почту которую вы указалали при регистрации, введите его</div>

            </Col>
        </Row>


        <Row className='mb-5'>
            <Col className='d-flex flex-row justify-content-center align-items-center'>

                {

                    arr.map((item: number, index: number) => {
                        return (
                            <input
                                className={(error) ? styles.input_error : (correctField) ? styles.input_correct : styles.input} key={index} 
                                type="text"
                                min={0}
                                max={9}
                                step={1}
                                maxLength={1}
                                inputMode='numeric' onFocus={() => {
                                setError(false)
                                }}
                                ref={(el) => {
                                    inputsRef.current[index] = el
                                }}
                                onPaste={(e) => {
                                    handlerPasteInput(e)
                                }}
                                onChange={(e) => {
                                    handleInput(e.target.value, index)
                                }}

                                onKeyDown={(e: any) => {
                                    handleDelete(e, index)
                                }}
                                

                            />
                        )
                    })
                    
                }

            </Col>
        </Row>

        <Row>
            {
                error && (
                    <Col className='d-flex justify-content-center align-items-center mb-3'>
                    
                        <div className={styles.error_message}>Неверный код, пожалуйста, повторите попытку</div>
                    
                    </Col>
                )
            }
        </Row>


        <Row className='mb-5'>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
                    
                {(code.length >= 6) && <MyButton text={'Отправить'} btn={styles.btn} onClick={() => {sendVarCode()}} type={'button'} />}
            
            </Col>
        </Row>


        <Row className='mb-5'>
            <Col className='d-flex flex-column justify-content-start align-items-center'>

                <Countdown zeroPadTime={2} date={Date.now() + 59000} renderer={({ formatted: {minutes, seconds}, completed}) => {
                    if (timeOut) {
                        console.log(completed)
                        return <div className={styles.repeat}>Время вышло</div>;
                    }
                    return <div className={styles.repeat}>Оставшееся время: {minutes}:{seconds}</div>;
                }} onComplete={() => {
                    setTimeOut(true)
                }}/>
            
            </Col>
        </Row>


        <Row className='mb-5'>
            <Col className='d-flex flex-column justify-content-start align-items-center'>

            {(timeOut) && <MyButton text={'отправить повторно'} btn={styles.btn} onClick={async () => {
                await repeatCodeHandler()
            }} type={'button'} />}


            {
                (repeatValidCode) && 
                <Col className='d-flex flex-column justify-content-start align-items-center'>
                    <div className={styles.repeat_text}>Новый код отправлен на почту</div>
                </Col>
            }

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
    </Container>
 
  )
}

export default page
