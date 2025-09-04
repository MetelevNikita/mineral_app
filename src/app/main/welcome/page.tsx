'use client'

import { FC, useEffect, useState } from 'react'

// styles

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import VideoBlock from '@/components/element/VideoBlock/VideoBlock'
import MyButton from '@/components/ui/MyButton/MyButton'
import Link from 'next/link'

// video


const page = () => {


const videoSrc = "http://localhost:3000/video/test.mp4"
const [muteVideo, onMuteVideo] = useState<boolean>(true)


  return (
    
    <Container>
        <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>

                <VideoBlock videoSrc={"/video/test.mp4"} />

            </Col>
        </Row>

        <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>

                <Link href={'/main'}><MyButton text={'Начать'} btn={styles.btn} onClick={() => {}} type={'button'} /></Link>

            </Col>
        </Row>


    </Container>

  )
}

export default page
