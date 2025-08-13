'use client'

import { FC, useEffect, useState } from 'react'

// styles

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import Link from 'next/link'

// video



const page = () => {

const [muteVideo, onMuteVideo] = useState<boolean>(true)


  return (
    
    <Container>
        <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>

        
                <div className={styles.video_mute} onClick={() => onMuteVideo(prev => !prev)}>
                <video className={styles.bg_video} autoPlay loop muted={muteVideo}>
                    <source src="http://localhost:3000/video/test.mp4" type="video/mp4" />
                </video>

                <button className={styles.mute_btn} aria-label="mute/unmute">
                    {muteVideo ? '🔇' : '🔊'}
                </button>
                </div>

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
