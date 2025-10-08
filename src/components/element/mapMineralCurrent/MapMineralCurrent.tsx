import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

// styles

import styles from './MapMineralCurrent.module.css'

// img

import IconClose from '@/../public/map/icon_close.svg'


interface MapMineralCurrentProps {
  title: string,
  description: string,
  image: string | StaticImageData
}


const MapMineralCurrent: FC<MapMineralCurrentProps> = ({ title, description, image }) => {
  return (
    <div className={styles.MapMineralCurrent_container}>

          {/*  */}

          <div className={styles.MapMineralCurrent_top_container}>

              <div className={styles.MapMineralCurrent_image_container}>
                <div className={styles.MapMineralCurrent_image_wrapper}>

                  <Image src={image} width={160} height={160} alt='mineral image'/>
                  
                </div>
              </div>

              <div className={styles.MapMineralCurrent_title}>
                {title}
              </div>
  

          </div>

          <div className={styles.MapMineralCurrent_bottom_container}>
            {description}
          </div>
      
    </div>
  )
}

export default MapMineralCurrent
