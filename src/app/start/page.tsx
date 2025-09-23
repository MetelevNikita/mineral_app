'use client'


import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// 

import { Container, Row, Col } from 'react-bootstrap'

// style

import styles from './page.module.css'

// img

import logo_icon from '@/../public/bg/start_minerale.png'
import logoOne from '@/../public/logo_open/logo 1.svg'
import logoTwo from '@/../public/logo_open/logo_dark_ru 1.svg'
import logoThree from '@/../public/logo_open/zjqm1geowap7jnxgsnh4mhoodtx38w4x 1.svg'


// components

import MyButton from '@/components/ui/MyButton/MyButton'
import SocialInfo from '@/components/element/SocialInfo/SocialInfo'

// types

import { partnersArrType } from '@/types/type'

// 



const partnersArr: partnersArrType[] = [
    {
        id: 1,
        title: 'logoOne',
        img: logoOne,
        url: ''
    },

    {
        id: 2,
        title: 'logoTwo',
        img: logoTwo,
        url: ''
    },

    {
        id: 3,
        title: 'logoThree',
        img: logoThree,
        url: ''
    }
]



const page: FC = () => {

  return (
    
    <Container>
      <Row>
        <Col className='d-flex flex-column justify-content-center align-items-center'>
      <div className={styles.container}>

        <div className={styles.image_background}>


                <Row className="mb-4 mt-4">
                  <Col className='d-flex justify-content-between' style={{width: '400px'}}>
                    {
                        partnersArr.map((item: partnersArrType, index: number): React.ReactNode => {
                            return <Col key={item.id} className="d-flex justify-content-center align-items-center"><Link href={item.url}><Image src={item.img} alt={item.title} /></Link></Col>
                        })
                    }
                    </Col>
                </Row>

                <div className={styles.glass_background}>

                  <Col className='d-flex flex-column justify-content-center align-items-center'>


                  <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 2}} className={styles.image_box}>
                  <Image src={logo_icon} width={100} height={100} alt={'logo_icon'}/>
                  </motion.div>

                  </Col>

                <Col className='d-flex flex-column justify-content-center align-items-center'>

                    <div className={styles.title}>Добро <br/> пожаловать!</div>
                    <div className={styles.subtitle}>в цифровой видеогид</div>

                    <div className={styles.info}>Вы зарегистрированы. Прослушайте приветственное обращение директора музея.  </div>
                  
                </Col>


                <Col className='d-flex flex-column mt-4'>

                      <Link style={{textDecoration: 'none'}} href={'/main'}><MyButton text={'Продолжить'} btn={styles.btn} onClick={() => {}} type={'button'} /></Link>

                </Col>


                <Col className='d-flex flex-column justify-content-center align-items-center'>

                  <SocialInfo colorText={'#7D22C9'} colorLine={'#7D22C9'} />
                
                </Col>
 


                </div>

        </div>

      </div>
      </Col>
      </Row>
    </Container>
  )
}

export default page

