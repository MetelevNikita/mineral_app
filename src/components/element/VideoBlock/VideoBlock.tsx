import { FC, useRef, useState } from 'react'
import Image from 'next/image'

// styles

import styles from './VideoBlock.module.css'

// img

import audioOn from '@/../public/video_element/soundOn.svg'
import audioOff from '@/../public/video_element/soundOff.svg'

interface VideoBlockProps {
  videoSrc: string
}

const VideoBlock:FC<VideoBlockProps> = ({ videoSrc }) => {



  const [muteVideo, onMuteVideo] = useState<boolean>(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)


  const startVideo = () => {
    const video = videoRef.current
    if (!video) return

    video.defaultMuted = true
    video.play().catch(() => {})
  }


  const handleVideoClick = () => {
    startVideo()
    onMuteVideo(prev => !prev)
  }


  return (

          <div className={styles.video_mute} onClick={handleVideoClick}>
            <video ref={videoRef} src={videoSrc} className={styles.bg_video} autoPlay loop playsInline muted={muteVideo} preload='auto' onCanPlay={startVideo} />

            <button className={styles.mute_btn} aria-label="mute/unmute">
                {muteVideo ? <Image src={audioOff} width={45} alt='image_audio'/> : <Image src={audioOn} width={45} alt='image_audio'/>}
            </button>
          </div>

  )
}

export default VideoBlock
