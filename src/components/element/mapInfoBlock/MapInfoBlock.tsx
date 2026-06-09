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
    if (item.title == "Мусковит" || item.title == "Лабрадор" || item.title == "Лазурит") {
      return {
        ...item,
        section: 'A'
      }
    } else if (item.title == "Редкоземельные металлы") {
      return {
        ...item,
        section: 'K'
      }
    } else if (item.title == "Редкоземельные металлы") {
      return {
        ...item,
        section: 'B'
      }
    } else if (item.title == "Гипс" || item.title == "Флюорит") {
      return {
        ...item,
        section: 'C'
      }
    } else if (item.title == "Мусковит") {
      return {
        ...item,
        section: 'F'
      }
    } else if (item.title == "Касситерит" || item.title == "О минералах") {
      return {
        ...item,
        section: 'E'
      }
    } else if (item.title == "Апатит" || item.title == "Флюорит" || item.title == "Галит" || item.title == "Алмаз" || item.title == "Мусковит" || item.title == "Горные породы" || item.title == "Уголь" || item.title == "Нефть") {
      return {
        ...item,
        section: 'G'
      }

    } else if (item.title == "Редкоземельные металлы" || item.title == "Псиломелан" || item.title == "Платина" || item.title == "Касситерит" || item.title == "Боксит") {
    return {
        ...item,
        section: 'D'
      }

    } else if (item.title == "Редкоземельные металлы" || item.title == "Псиломелан" || item.title == "Платина" || item.title == "Касситерит" || item.title == "Боксит") {
    return {
        ...item,
        section: 'H'
      }
    } else if (item.title == "Графит" || item.title == "Апатит" || item.title == "Псиломелан" || item.title == "Галит" || item.title == "Гипс") {
      return {
        ...item,
        section: 'Q'
      }
    } else if (item.title == "Боксит" || item.title == "Флюорит" || item.title == "Киноварь") {
      return {
        ...item,
        section: 'Y'
      }
    } else if (item.title == "Касситерит" || item.title == "Апатит" || item.title == "Кальцит" || item.title == "Хромит" || item.title == "Алмаз") {
      return {
        ...item,
        section: 'W'
      }
    } else if (item.title == "Твердость") {
      return {
        ...item,
        section: 'I'
      }
    } else if (item.title == "Лабрадор" || item.title == "Цвет" || item.title == "Кальцит") {
      return {
        ...item,
        section: 'P'
      }
    } else if (item.title == "Псевдоморфозы" || item.title == "О минералах") {
      return {
        ...item,
        section: 'J'
      }
    } else if (item.title == "Яшма") {
      return {
        ...item,
        section: 'N'
      }
    } else if (item.title == "Редкоземельные металлы") {
      return {
        ...item,
        section: 'X'
      }
    } else if (item.title == "Горная порода") {
      return {
        ...item,
        section: 'Q'
      }
    } else if (item.title == "Галит") {
      return {
        ...item,
        section: 'R'
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
