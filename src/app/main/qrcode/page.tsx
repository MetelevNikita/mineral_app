'use client'


import { FC, useEffect, useState, useRef } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/navigation';
import jsQR from "jsqr";



// css

import styles from './page.module.css'


const page: FC = () => {

  const router = useRouter()
  const cameraRef = useRef<HTMLVideoElement | null>(null)
  const [active, setActive] = useState<boolean>(false)


  useEffect(() => {

        const startScan = async () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('getUserMedia is not supported');
        }


        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
          }
        })
      

        if (cameraRef.current) {
            cameraRef.current.srcObject = stream
            cameraRef.current.play();
          };


          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          if (!ctx) return

          const scan = async () => {
              if (cameraRef.current && cameraRef.current.videoWidth > 0 && cameraRef.current.videoHeight > 0) {

                  canvas.width = cameraRef.current.videoWidth
                  canvas.height = cameraRef.current.videoHeight

                  ctx.drawImage(cameraRef.current, 0, 0, canvas.width, canvas.height)
                  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                  const qrcode = jsQR(imageData.data, imageData.width, imageData.height)
        

                  if (qrcode) {
                    if (qrcode.data) {
                      console.log(qrcode.data)
                      setActive(true)

                      setTimeout(() => {
                        router.push(qrcode.data)
                      }, 2000)
                    
                    } else {
                      requestAnimationFrame(scan)
                      return
                    }
                  }
              }

              requestAnimationFrame(scan)
          }

          scan()

        }

        startScan()

    }, [])


  return (

    <Container>

      <Row className='d-flex justify-content-center align-items-center mb-3'>
            <Col md={6}>
                <div className={styles.title}>Qr код</div>
            </Col>
        </Row>

      <Row>
        <Col className='d-flex justify-content-center align-items-center mb-3'>

          <div>

            <Col md={6} className='d-flex justify-content-center align-items-center mb-3'>

            <div className={styles.camera_info}>
              Для того чтобы перейти в карточку минерала, сканируйте QR-код
            </div>
            
            </Col>
            
            <div className={(active)? styles.camera_container_active : styles.camera_container}>
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





