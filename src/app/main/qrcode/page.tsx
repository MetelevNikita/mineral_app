'use client'


import { FC, useEffect, useState, useRef } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import jsQR from "jsqr";
import { Html5QrcodeScanner } from "html5-qrcode";
import {Html5Qrcode} from "html5-qrcode"



// css

import styles from './page.module.css'


// const page: FC = () => {

//   const [error, setError] = useState<string | null>(null)
//   const [cameraId, setCameraId] = useState<string | null>(null)
//   const scannerRef = useRef<Html5QrcodeScanner | null>(null);


//   useEffect(() => {

//     const initializeCamera = async () => {
//       try {

//         const device = await Html5Qrcode.getCameras()

//         console.log('Доступные камеры: ', device)

//         if (device && device.length > 0) {
//           setCameraId(device[0].id)
//         }

//         if (scannerRef.current) {
//           scannerRef.current.clear().catch((error) => {
//             console.error(
//               'Error clearing the scanner: ',
//               error
//             )
//           })
//         }



//         scannerRef.current = new Html5QrcodeScanner("camera", {
//             fps: 10,
//             qrbox: {
//               width: 300,
//               height: 300,
//             },
//             showTorchButtonIfSupported: true,
//             showZoomSliderIfSupported: true,
//           }, false
//         )


//         scannerRef.current.render(
//           (decodedText) => {
//             console.log('Распознанный текст: ', decodedText)
//           },

//           (scanError: any) => {
//             const errorMessage = scanError.message || '';
            
//             // Игнорируем обычные ошибки сканирования
//             const ignorableErrors = [
//               'No barcode or QR code detected',
//               'NotFoundException: No MultiFormat Readers',
//               'No QR code found',
//               'QR code parse error'
//             ];

//             const shouldIgnore = ignorableErrors.some(ignorable => 
//               errorMessage.includes(ignorable)
//             );

//             if (!shouldIgnore) {
//               console.warn('Важная ошибка сканирования:', scanError);
//               setError(errorMessage);
//             }
//           }
//         )
        
//       } catch (error) {
//         console.error(error)
//       }
//     }

//     initializeCamera()


//   }, [])


//   return (
//     <div id="camera">
      
//     </div>
//   )
// }

// export default page




const page: FC = () => {

  const [isScanning, setIsScanning] = useState(false);
  const cameraRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    console.log('open camera')

    const getCamera = async () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('getUserMedia is not supported');
        }


        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
            width: {
              min: 640,
              ideal: 1280,
              max: 1920
            }
          }
        })
      
        console.log(stream)

        if (cameraRef.current) {
          cameraRef.current.srcObject = stream
          await cameraRef.current.play()
          setIsScanning(true)
          startQRScanning()
        }
    }

      if (typeof window !== 'undefined' && navigator.mediaDevices) {
          getCamera();
       }


   }, [])


   const scanQrCode = async () => {
    try {

      if (!cameraRef.current && !canvasRef.current) return

      const video = cameraRef.current
      const canvas = canvasRef.current
      const context = canvas?.getContext('2d')

      if (!context && !video) return null

      if (canvas && video) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;

          context?.drawImage(video, 0, 0, canvas.width, canvas.height)

          const imageData = context?.getImageData(0, 0, canvas.width, canvas.height)

          if (imageData) {
            const qrCode = jsQR(
              imageData.data,
              imageData.width,
              imageData.height,
              {
                inversionAttempts: 'dontInvert',

              }
            )


            return qrCode
          }
      }

    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      }
    }
   }


   const startQRScanning = async () => {
    try {

      const scan = () => {
        if (isScanning) {
          const qrCode = scanQrCode()
          console.log(qrCode)
        }
      }
      
    } catch (error) {
      
    }
   }










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





