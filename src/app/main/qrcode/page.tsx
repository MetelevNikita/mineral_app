'use client'


import { FC, useEffect, useState, useRef } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

// css

import styles from './page.module.css'


const page: FC = () => {


  const cameraRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    console.log('open camera')

    const getCamera = async () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('getUserMedia is not supported');
        }


        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment'
          }
        })
      
        console.log(stream)

        if (cameraRef.current) {
          cameraRef.current.srcObject = stream
        }
    }

      if (typeof window !== 'undefined' && navigator.mediaDevices) {
          getCamera();
       }


   }, [])



   console.log()



  return (

    <Container>
        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-3'>

                <div className={styles.title}>QR code</div>

            </Col>
        </Row>

      <Row>
        <Col className='d-flex justify-content-center align-items-center mb-3'>

          <div>

            <div className={styles.camera_info}></div>
            
            <div className={styles.camera_container}>
              <video ref={cameraRef} autoPlay playsInline className={styles.camera}>
                
              </video>
            </div>
          
        </div>

        </Col>
      </Row>





    </Container>





  )
}

export default page





