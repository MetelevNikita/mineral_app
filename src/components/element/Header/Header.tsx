'use client'

import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'

//

import { Container, Row, Col } from 'react-bootstrap'

// 

import menuOpen from '@/../public/Header/menuOpen.svg'
import menuClose from '@/../public/Header/menuClose.svg'
import emtyAvatar from '@/../public/Header/emptyAvatar.svg'
import headerStar from '@/../public/Header/VectorStar.svg'

// css

import styles from './Header.module.css'

// redux

import { useAppDispatch } from '@/types/hooks'
import { useAppSelector } from '@/types/hooks'
import { getUsers } from '@/functions/reduxAsync/users/getUsers'
import { UserType } from '@/types/type'


const Header: FC = () => {

const [id, setId] = useState<string>('')
const [isOn, setIsOn] = useState<boolean>(false)


const dispatch = useAppDispatch()

useEffect(() => {
    const userId = sessionStorage.getItem('userID')

    if (userId !== null) {
        setId(userId)
    }

    dispatch(getUsers())
}, [])


const currentUser = useAppSelector(state => state.user.user).filter((user: UserType) => user.id == parseInt(id))[0]



const menuArr = [
    {
        id: 1,
        title: 'Главная',
        link: '/main'
    },

    {
        id: 2,
        title: 'Минералы',
        link: '/main/minerale'
    },

    {
        id: 3,
        title: 'Карта',
        link: '/main/map'
    },

    {
        id: 4,
        title: 'О проекте',
        link: '/main/review'
    },

    {
        id: 5,
        title: 'Профиль',
        link: '/main/profile'
    },

    {
        id: 6,
        title: 'Личные данные',
        link: '/main/profile/account'
    },

    {
        id: 7,
        title: 'Контакты',
        link: '/main/contact'
    },



]



if (!currentUser) {
    return (
        <Container className='mt-3 mb-4'>

                <Row className='d-flex flex-row justify-content-center align-items-center'>

                    <Col className='d-flex justify-content-start align-items-center'>

                        <Image src={(isOn) ? menuClose : menuOpen} width={30} height={30} onClick={() => setIsOn(!isOn)} alt='menu_icon'/>

                    </Col>


                    <Col className='d-flex justify-content-center align-items-center'>

                        <Link href={'/main/profile'} style={{textDecoration: 'none', color: '#7D22C9'}}>

                            <div className={styles.middle_container}>
                                <div className={styles.middle_image_container}>

                                    <Image src={emtyAvatar} width={36} height={38} alt='avatar'/>

                                </div>

                                <div className={styles.middle_text}></div>
                            </div>

                        </Link>
                    
                    </Col>

                    

                    <Col className='d-flex justify-content-end align-items-center'>

                        <div className={styles.right_container}>
                            <Image src={headerStar} width={17} height={16} alt='avatar'/>
                            <div className={styles.right_text}>0</div>
                        </div>

                    </Col>

                </Row>



                <Row className='mb-4'>
                    <Col className='d-flex justify-content-start align-items-center'>
                    <AnimatePresence>

                    {
                        isOn && (
                            <motion.div initial={{opacity: 1, y: -1000}} animate={{opacity: 1, y: 60}} exit={{opacity: 1, y: -1000}} transition={{duration: 1}} className={styles.menu_container}>
                                {
                                    menuArr.map((item) => (
                                        <div key={item.id} className={styles.menu_item_container}>
                                        <Link key={item.id} href={item.link} style={{textDecoration: 'none'}}>
                                            <div  className={styles.menu_item}>{item.title}</div>
                                        </Link>

                                        <div className={styles.menu_line}></div>
                                        </div>
                                    ))
                                }
                            </motion.div>
                        )
                    }
                    </AnimatePresence>
                    </Col>

                </Row>

        </Container>
    )
}


  return (
    
    <Container className='mt-3 mb-4'>

        <Row className='d-flex flex-row justify-content-center align-items-center'>

            <Col className='d-flex justify-content-start align-items-center' xs={2}>

                <Image src={(isOn) ? menuClose : menuOpen} width={30} height={30} onClick={() => setIsOn(!isOn)} alt='menu_icon'/>

            </Col>


            <Col className='d-flex justify-content-start align-items-center'>

                <Link href={'/main/profile'} style={{textDecoration: 'none', color: '#7D22C9'}}>

                    <div className={styles.middle_container}>
                        <div className={styles.middle_image_container}>

                            <div className={styles.middle_image_container}><Image className={styles.image_avatar} src={(!currentUser.profile || currentUser.profile.avatar === '') ? emtyAvatar : currentUser.profile.avatar} width={36} height={48} alt='avatar'/></div>

                        </div>

                        <div className={styles.middle_text_wrapper}>

                            <div className={styles.middle_title}>Звание:</div>

                            <div className={styles.middle_text}>{currentUser.status}</div>


                        </div>

  
                    </div>

                </Link>
            
            </Col>

            

            <Col className='d-flex justify-content-end align-items-center'>

                <div className={styles.right_container}>
                    <Image src={headerStar} width={17} height={16} alt='avatar'/>
                    <div className={styles.right_text}>{currentUser.total}</div>
                </div>

            </Col>

        </Row>



        <Row className='mb-4'>
            <Col className='d-flex justify-content-start align-items-center'>
            <AnimatePresence>

            {
                isOn && (
                    <motion.div initial={{opacity: 1, y: -1000}} animate={{opacity: 1, y: 60}} exit={{opacity: 1, y: -1000}} transition={{duration: 1, delayChildren: 1}} className={styles.menu_container}>
                        {
                            menuArr.map((item) => (
                                <div key={item.id} className={styles.menu_item_container}>
                                <Link key={item.id} href={item.link} style={{textDecoration: 'none'}} onClick={() => {setIsOn(false)}}>
                                    <div  className={styles.menu_item}>{item.title}</div>
                                </Link>

                                <div className={styles.menu_line}></div>
                                </div>
                            ))
                        }
                    </motion.div>
                )
            }
            </AnimatePresence>
            </Col>

        </Row>

    </Container>

  )
}

export default Header
