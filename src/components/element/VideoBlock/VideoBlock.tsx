import { FC, useState } from 'react'
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


  return (

          <div className={styles.video_mute} onClick={() => onMuteVideo(prev => !prev)}>
            <video className={styles.bg_video} autoPlay loop muted={muteVideo}>
                <source src={videoSrc} type="video/mp4" />
            </video>

            <button className={styles.mute_btn} aria-label="mute/unmute">
                {muteVideo ? <Image src={audioOff} width={45} alt='image_audio'/> : <Image src={audioOn} width={45} alt='image_audio'/>}
            </button>
          </div>

  )
}

export default VideoBlock
