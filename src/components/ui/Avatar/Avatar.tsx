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

    img.onload = () => {
      const width = img.naturalWidth
      const height = img.naturalHeight


      console.log(width)
      console.log(height)
      
      // Определяем ориентацию по соотношению сторон
      const isVertical = width < height
      console.log(isVertical)
      
      // Для вертикальных фото поворачиваем на 90 градусов
      if (isVertical) {
        setRotation(0)
      } else {
        setRotation(0)
      }
    }

    img.src = imageUrl
  }, [src, previewSrc])


  const getImageStyle = () => {

      return {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const,
        transform: `rotate(${rotation}deg)`,
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
