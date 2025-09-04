'use client'


import { FC, useEffect, useState, useRef } from 'react'

// css

import styles from './page.module.css'

const page: FC = () => {




    const [hasCameraAccess, setHasCameraAccess] = useState(false)
    const [videoDeviceId, setVideoDeviceId] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {

        const getCamera = async () => {
            try {

                if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                    throw new Error('getUserMedia is not supported');
                }

                const devices = await navigator.mediaDevices.enumerateDevices();
   
                const stream = await navigator.mediaDevices.getUserMedia({video: { facingMode: 'environment' }});

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
            hasCameraAccess ? (
                <video ref={videoRef} autoPlay playsInline width={'100%'} height={'auto'}/>
            ): (<>NO CAMRA</>)
        }

    
      
    </div>
  )
}

export default page
