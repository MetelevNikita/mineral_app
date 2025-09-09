'use client'


import { FC, useEffect, useState, useRef } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import jsQR from "jsqr";

// components

import ModalText from '@/components/modals/ModalText/ModalText';




// css

import styles from './page.module.css'


const page: FC = () => {


  const [modal, setModal] = useState(false)
  const [qrCode, setQrCode] = useState<string | null>(null)
  const cameraRef = useRef<HTMLVideoElement | null>(null)


  useEffect(() => {
    console.log('open camera')

    const startScan = async () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('getUserMedia is not supported');
        }


        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
          }
        })
      
        console.log(stream)

        if (cameraRef.current) {
            cameraRef.current.srcObject = stream
            cameraRef.current.play();
          };


          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          if (!ctx) return
          console.log(ctx)

          const scan = async () => {
              if (cameraRef.current && cameraRef.current.videoWidth > 0 && cameraRef.current.videoHeight > 0) {

                  canvas.width = cameraRef.current.videoWidth
                  canvas.height = cameraRef.current.videoHeight

                  ctx.drawImage(cameraRef.current, 0, 0, canvas.width, canvas.height)
                  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                  const qrcode = jsQR(imageData.data, imageData.width, imageData.height)
        

                  if (qrcode) {
                    if (qrcode.data) {
                      setQrCode(qrcode.data)
                      setModal(true)
                    } else {
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


    console.log(modal)





  return (

    <Container>


      {
        modal && (
          <ModalText title={'Перейти на страницу'} text={'Квиза'} btnText={'Перейти'}
          onClickClose={() => {
            setModal(false)
          }} onClickBtn={() => {
            console.log('ок')
          }} />
        )
      }



        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-3'>

                <div className={styles.title}>QR code</div>

            </Col>
        </Row>

      <Row>
        <Col className='d-flex justify-content-center align-items-center mb-3'>

          <div>

            <Col className='d-flex justify-content-center align-items-center mb-3'>

            <div className={styles.camera_info}>
              Для того что бы перейти на страницу с квизомом, сканируйте QR код.
            </div>
            
            </Col>
            
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





