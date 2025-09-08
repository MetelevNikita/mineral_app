'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'




// css

import styles from './Footer.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'


// image

import qrCode from '@/../public/Footer/qrCode.svg'
import minerals from '@/../public/Footer/mirale.svg'
import home from '@/../public/Footer/home.svg'
import map from '@/../public/Footer/map.svg'
import profile from '@/../public/Footer/profile.svg'


// component

import Menuelement from '@/components/ui/MenuElement/Menuelement'


// 


const Footer = () => {

      const footerArrMenu = [
        {
            id: 1,
            title: 'qr-code',
            link: '/main/qrcode',
            img: qrCode

        },

        {
            id: 2,
            title: 'минералы',
            link: '/main/minerale',
            img: minerals

        },

        {
            id: 3,
            title: 'главная',
            link: '/main',
            img: home

        },

        {
            id: 4,
            title: 'карта',
            link: '/main/map',
            img: map

        },

        {
            id: 5,
            title: 'профиль',
            link: '/main/profile',
            img: profile

        },


    ]


    const [isOnMenu, setIsOnMenu] = useState<string>(footerArrMenu[0].title)


  
  return (

    <Container className='fixed-bottom'>
        <Row className='d-flex justify-content-center align-items-center'>


                <div className={styles.menu_container}>
                    {footerArrMenu.map((item, index): React.ReactNode => {
                        return (
                            

                            <Col key={index+1} className='d-flex mb-2'>
                            <Menuelement title={item.title} icon={item.img} path={item.link} className={styles.menu_btn}/>
                            </Col>
       
                        )
                    })}
                </div>
            


        </Row>
    </Container>

  )
}

export default Footer
