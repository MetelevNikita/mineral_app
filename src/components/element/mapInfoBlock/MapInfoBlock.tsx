import { FC, useState } from 'react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'


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


// type

import { mineralMapDataType } from '@/types/type'
import MapMineralCurrent from '../mapMineralCurrent/MapMineralCurrent'



// 


const mineralData: mineralMapDataType[] = [
      {
        id: 1,
        section: 'A',
        title: 'Кальцит',
        description: 'Кальцит – один из самых распространённых в природе минералов. Он составляет примерно 4% массы земнойкоры и встречается во всехтипах горных пород.',
        img: kalchit
      },

      {
        id: 2,
        section: 'A',
        title: 'Графит',
        description: 'Для того, чтобы получить из графита алмаз нужно создать специальные условия,аналогичные тем, что существуютв очень глубоко недрах Земли: высокое давление и температурувыше 1500 градусов.',
        img: grafit
      },

      {
        id: 3,
        section: 'B',
        title: 'Флюорит',
        description: 'Флюорит – минерал, которыйвас удивит! Он отец флюоресценции – явления, при котором объект начинает светиться от ультрафиолета – невидимогодля человеческого глаза света.',
        img: fliuorit
      },

      {
        id: 4,
        section: 'B',
        title: 'Галит',
        description: 'Это минерал, который вы используете чаще всего – безнего еда была бы невкусной. Догадались? Это поваренная соль или галит',
        img: galit
      },

      {
        id: 4,
        section: 'A',
        title: 'Киноварь',
        description: 'Красивая и опасная! Киноварь – минерал императоров, основа красок и источник ртути!',
        img: kinovar
      },

      {
        id: 4,
        title: 'Яшма',
        section: 'B',
        description: 'Яшма – пестрая и плотнаягорная порода, которая состоитиз кремнезема – кремния и кислорода. Но почему она такая разнообразная по оттенками и узорам? Из-за огромного количества примесей – иногдаэто почти 15%.',
        img: yashma
      }
]



interface MapInfoBlockProps {

    image: string | StaticImageData
    section: string
    onClick: () => void
    id: number
    close: any

}

const MapInfoBlock: FC<MapInfoBlockProps> = ({ image, section, onClick, id, close  }) => {


  const [currentMineral, setCurrentMineral] = useState<any | null>(null)
  const [currentReduxMneralId, setCurrentReduxMneralId] = useState<number | null>(null)
  const {currentIcon, setCurrentIcon} = close

  const currentSectionData = mineralData.filter((item) => {
      const numSection = section.split(' ')[1]
      if (item.section === numSection) {
          return item
      }
  })


  console.log(currentReduxMneralId)


  return (

    <div className={styles.map_block_container}>
      <div className={styles.bottom_container}>

          <div className={styles.top_container}>

              <div className={styles.content_container}>

      
                  <div className={styles.mineral_button_wrapper}>
                      {

                        (currentMineral) ?

                        (
                        <MapMineralCurrent id={{currentReduxMneralId, setCurrentReduxMneralId}} title={currentMineral.title} description={currentMineral.description} image={currentMineral.img} />
                        )
                        
                        :
                        
                        (
                          currentSectionData.map((item, index) => {
                            return <MapMineralBlock id={item.id} onClick={() => {setCurrentMineral(item)}} key={index+1} title={item.title} icon={item.img}/>
                          })
                        )
                        
                      }
                      
                  </div>


                  <div className={styles.bottom}>

                     <MyButton text={(currentMineral) ? 'Перейти' : 'Закрыть'} btn={styles.btn} type={'button'} onClick={() => {(currentMineral) ? window.location.href = `/main/minerale/${currentReduxMneralId}` : setCurrentIcon(null)}} />

                  </div>


              </div>

          </div>
        
      </div>
    </div>
  )
}

export default MapInfoBlock
