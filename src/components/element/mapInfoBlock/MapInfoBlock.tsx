import { FC, useEffect, useState } from 'react'
import { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'


// style

import styles from './MapInfoBlock.module.css'

// components


import MapMineralBlock from '../mapMineralBlock/mapMineralBlock'
import MyButton from '@/components/ui/MyButton/MyButton'

// img mineral

import kalchit from '@/../public/mineral_icon/Kalchit.svg'
import grafit from '@/../public/mineral_icon/Graphite.svg'
import fliuorit from '@/../public/mineral_icon/Fluorit.svg'
import galit from '@/../public/mineral_icon/Galit.svg'
import kinovar from '@/../public/mineral_icon/kinovar.svg'
import yashma from '@/../public/mineral_icon/Yashma.svg'

// redux 

import { useAppDispatch, useAppSelector } from '@/types/hooks'
import { fetchGetAsyncMineral } from '@/functions/reduxAsync/mineral/fetchGetAsyncMineral'


// type

import { mineralMapDataType } from '@/types/type'

// 










interface MapInfoBlockProps {

    image: string | StaticImageData
    section: string
    onClick: () => void
    id: number
    close: any

}

const MapInfoBlock: FC<MapInfoBlockProps> = ({ image, section, onClick, id, close  }) => {



  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchGetAsyncMineral())
  }, [])


  const minerals = useAppSelector(state => state.minerals.minerals)
  const mineralFromSection = minerals.map((item: any) => {
    if (item.title == "Мусковит" || "Лабрадор") {
      return {
        ...item,
        section: 'A'
      }
    } else if (item.title == "Гадолинит" || "Cидерит") {
      return {
        ...item,
        section: 'K'
      }
    } else if (item.title == "Бастнезит") {
      return {
        ...item,
        section: 'B'
      }
    } else if (item.title == "Гипс" || "Флюрит") {
      return {
        ...item,
        section: 'C'
      }
    } else if (item.title == "Мусковит") {
      return {
        ...item,
        section: 'F'
      }
    } else if (item.title == "Киноварь" || "Гематит" || "Касситерит" || "О минералах") {
      return {
        ...item,
        section: 'E'
      }
    } else if (item.title == "Нефть" || "Уголь" || "Горные породы" || "Флюрит" || "Боксит" || "Псиломелан" || "Платина") {
      return {
        ...item,
        section: 'G'
      }
    } else if (item.title == "Апатит" || "Гипс" || "Галит" || "Кальцит" || "Графит" || "Псиломелан") {
      return {
        ...item,
        section: 'Q'
      }
    } else if (item.title == "Апатит" || "Кальцит" || "Касситерит" || "Алмаз" || "Лопарит") {
      return {
        ...item,
        section: 'W'
      }
    } else if (item.title == "О Минералах" || "Псевдоморфозы" || "Кварц" || "Кальцит" || "Цвет" || "Твердость") {
      return {
        ...item,
        section: 'P'
      }
    } else if (item.title == "Лопарит" || "Малахит" || "Яшма" || "Мусковит" || "Горные породы") {
      return {
        ...item,
        section: 'L'
      }
    } else {
      return item
    }
  })


  const router = useRouter()

  // 

  const [currentMineral, setCurrentMineral] = useState<any | null>(null)
  const {currentIcon, setCurrentIcon} = close

  const currentSectionData = mineralFromSection.filter((item) => {


      if (item.section === section) {
          return item
      }
  })







  return (

    <div className={styles.map_block_container}>
      <div className={styles.bottom_container}>

          <div className={styles.top_container}>

              <div className={styles.content_container}>

      
                  <div className={styles.mineral_button_wrapper}>
                      {

                      
                          currentSectionData.map((item, index) => {
                            return <MapMineralBlock
                              id={item.id}
                              onClick={() => {
                                router.push(`/main/minerale/${item.title}`)
                              }}
                              key={index+1}
                              title={item.title}
                              icon={item.image}
                            />
                          })
                        
                        
                      }
                      
                  </div>


                  <div className={styles.bottom}>

                     <MyButton text={(currentMineral) ? 'Перейти' : 'Закрыть'} btn={styles.btn} type={'button'} onClick={() => {(currentMineral) ? window.location.href = `/main/minerale/${currentMineral.title}` : setCurrentIcon(null)}} />

                  </div>


              </div>

          </div>
        
      </div>
    </div>
  )
}

export default MapInfoBlock
