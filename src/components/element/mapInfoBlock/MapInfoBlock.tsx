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

  console.log(minerals)


  const sectionByMineralTitle: Record<string, string[]> = {
    'Мусковит': ['A', 'F', 'G'],
    'Лабрадор': ['A', 'P'],
    'Лазурит': ['A'],

    'Редкоземельные минералы': ['K', 'B', 'D', 'X'],

    'Гипс': ['C', 'Q'],
    'Флюорит': ['C', 'G', 'Y'],

    'Касситерит': ['E', 'D', 'W'],
    'О минералах': ['E', 'J'],

    'Апатит': ['G', 'Q', 'W'],
    'Галит': ['G', 'Q', 'R'],
    'Алмаз': ['G', 'H', 'W'],
    'Горные породы': ['G'],
    'Уголь': ['G'],
    'Нефть': ['G'],

    'Псиломелан': ['D', 'Q'],
    'Платина': ['D'],
    'Боксит': ['D', 'Y'],

    'Киноварь': ['H', 'Y'],
    'Графит': ['Q'],

    'Кальцит': ['P', 'W'],
    'Хромит': ['W'],

    'Твердость': ['I'],
    'Цвет': ['P'],
    'Псевдоморфозы': ['J'],
    'Яшма': ['N'],

    'Горная порода': ['Q'],
  }

  const mineralFromSection = minerals.map((item: any) => ({
    ...item,
    sections: sectionByMineralTitle[item.title] || [],
  }))

  const currentSectionData = mineralFromSection.filter((item: any) =>
    item.sections.includes(section)
  )

  const router = useRouter()

  // 

  const [currentMineral, setCurrentMineral] = useState<any | null>(null)
  const {currentIcon, setCurrentIcon} = close




  console.log(currentSectionData)




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
