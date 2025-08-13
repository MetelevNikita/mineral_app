'use client'


import { FC, useEffect, useState, useRef } from 'react'

// css

import styles from './page.module.css'

const page: FC = () => {




    const [hasCameraAcceess, setHasCameraAccess] = useState(false)
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {

        const getCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true })
                if (videoRef.current) {
                    videoRef.current.srcObject = stream
                }
                setHasCameraAccess(true)
            } catch (error) {
                console.error('Ошибка доступа к камере', error);
                setHasCameraAccess(false);
            }
        }


        if (typeof window !== 'undefined') {
        getCamera();
        }
        
    }, [])


  return (
    <div className={styles.qrcode}>

        {
            hasCameraAcceess ? (
                <video ref={videoRef} autoPlay width={'100%'} height={'1080px'}/>
            ): (<>NO CAMRA</>)
        }

    
      
    </div>
  )
}

export default page
