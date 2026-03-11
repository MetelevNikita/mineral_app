import { FC, useState, useEffect } from 'react'
import Image from 'next/image'

// styles

import styles from './Avatar.module.css'

// img

import emptyAvatar from '@/../public/account/emptyAvatar.svg'

interface AvatarProps {
  src: string | null
  previewSrc: string | null
  alt: string
}

const Avatar: FC<AvatarProps> = ({ src, previewSrc, alt }) => {

  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const imageUrl = previewSrc || src

    if (!imageUrl) return

    const img = new window.Image()
    img.src = imageUrl
    
  }, [src, previewSrc])


  const getImageStyle = () => {

      return {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const,
        transition: 'transform 0.3s ease'
      }
    }
  


  if (!src && !previewSrc) {
    return (
      <div className={styles.avatar_box}>
        <Image src={emptyAvatar} width={70} height={70} alt={alt} />
      </div>
    )
  }

  return (
    <div className={styles.avatar_box}>
      <Image
        src={previewSrc || src || emptyAvatar}
        alt={alt}
        width={70}
        height={70}
        style={getImageStyle()}
        className={styles.avatar}
      />
    </div>
  )
}

export default Avatar
