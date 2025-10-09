import { FC, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'

// styles

import styles from './MapMineralCurrent.module.css'

// img

import IconClose from '@/../public/map/icon_close.svg'

// redux

import { useAppDispatch } from '@/types/hooks'
import { useAppSelector } from '@/types/hooks'

// async

import { fetchGetAsyncMineral } from '@/functions/reduxAsync/mineral/fetchGetAsyncMineral'

// 


interface MapMineralCurrentProps {
  id: any,
  title: string,
  description: string,
  image: string | StaticImageData
}


const MapMineralCurrent: FC<MapMineralCurrentProps> = ({ id, title, description, image }) => {



  const {currentReduxMneralId, setCurrentReduxMneralId} = id

  console.log(title)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      fetchGetAsyncMineral()
    )
  }, [])


  const minerals = useAppSelector(state => state.minerals.minerals)
  console.log(minerals)

  const currentMineral = minerals.find((mineral) => mineral.title === title)

  if  (currentMineral) {
      setCurrentReduxMneralId(currentMineral.id)
  }


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
