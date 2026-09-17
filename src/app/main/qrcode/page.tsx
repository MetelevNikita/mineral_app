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
  const [error, setError] = useState<string>('')


  useEffect(() => {
        let animationFrameId: number | null = null
        let stream: MediaStream | null = null
        let qrFound = false

        const startScan = async () => {
        try {
          if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setError('Камера не поддерживается в этом браузере')
            return
          }

          stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: { ideal: 'environment' },
              width: { ideal: 1920 },
              height: { ideal: 1080 },
            }
          })
      

          if (cameraRef.current) {
            cameraRef.current.srcObject = stream
            cameraRef.current.setAttribute('playsinline', 'true')
            cameraRef.current.muted = true
            await cameraRef.current.play()
          }


          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d', { willReadFrequently: true })
          if (!ctx) return

          const scan = async () => {
              if (qrFound) return

              if (cameraRef.current && cameraRef.current.videoWidth > 0 && cameraRef.current.videoHeight > 0) {

                  const scanSize = Math.floor(Math.min(cameraRef.current.videoWidth, cameraRef.current.videoHeight) * 0.75)
                  const scanX = Math.floor((cameraRef.current.videoWidth - scanSize) / 2)
                  const scanY = Math.floor((cameraRef.current.videoHeight - scanSize) / 2)

                  if (canvas.width !== scanSize || canvas.height !== scanSize) {
                    canvas.width = scanSize
                    canvas.height = scanSize
                  }

                  ctx.drawImage(cameraRef.current, scanX, scanY, scanSize, scanSize, 0, 0, canvas.width, canvas.height)
                  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                  const qrcode = jsQR(imageData.data, imageData.width, imageData.height)
        

                  if (qrcode) {
                    if (qrcode.data) {
                      qrFound = true
                      setActive(true)

                      setTimeout(() => {
                        router.push(qrcode.data)
                      }, 1000)

                      return
                    
                    } else {
                      requestAnimationFrame(scan)
                      return
                    }
                  }
              }

              animationFrameId = requestAnimationFrame(scan)
          }

          animationFrameId = requestAnimationFrame(scan)
        } catch (error) {
          console.error(error)
          setError('Не удалось открыть камеру. Проверьте разрешение камеры и HTTPS.')
        }

        }

        startScan()

        return () => {
          qrFound = true

          if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId)
          }

          stream?.getTracks().forEach((track) => track.stop())
        }

    }, [router])


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
              {error || 'Для того чтобы перейти в карточку минерала, сканируйте QR-код'}
            </div>
            
            </Col>
            
            <div className={`${styles.camera_container} ${(active) ? styles.camera_container_active : ''}`}>
              <video ref={cameraRef} autoPlay playsInline muted className={styles.camera}>
                
              </video>
              {
                active && <div className={styles.camera_success} role='status'>QR-код распознан</div>
              }
            </div>
          
        </div>

        </Col>
      </Row>





    </Container>





  )
}

export default page


