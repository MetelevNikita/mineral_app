'use client'

import { FC, Suspense, useEffect, useState } from 'react'
import { motion, AnimatePresence } from "motion/react"


// styles

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MapSvg from '@/components/ui/MapSVG/MapSvg'
import MapInfoBlock from '@/components/element/mapInfoBlock/MapInfoBlock'

// redux

import { useAppDispatch, useAppSelector } from '@/types/hooks'
import { fetchGetMineralMap } from '@/functions/reduxAsync/map/fetchGetMineralMap'

// types

import type { mapBlockArrType } from '@/types/type' 

// img

import mapIcon from '@/../public/map/map_icon.svg'
import mapIconActive from '@/../public/map/map_icon_active.svg'
import Loading from '@/components/element/Loading/Loading'




const page: FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      fetchGetMineralMap()
    ).unwrap()
  }, [])


  const mineralMap = useAppSelector((state) => state.mapMinerals.map)

  const coordinateMineralApp = mineralMap.map((item: any) => {
    return {
      ...item,
    }
  })


  const mapBlockArr: mapBlockArrType[] = [
    {
      id: 1,
      section: 'A',
      img: mapIcon,
      coordinate: {
        top: 0,
        left: 35
      }
    },

    {
      id: 2,
      section: 'K',
      img: mapIcon,
      coordinate: {
        top: 0,
        left: 90
      }
    },

    {
      id: 3,
      section: 'B',
      img: mapIcon,
      coordinate: {
        top: 0,
        left: 145
      }
    },

    {
      id: 4,
      section: 'C',
      img: mapIcon,
      coordinate: {
        top: 0,
        left: 195
      }
    },


    {
      id: 5,
      section: 'E',
      img: mapIcon,
      coordinate: {
        top: 90,
        left: 10
      }
    },

    {
      id: 6,
      section: 'F',
      img: mapIcon,
      coordinate: {
        top: 90,
        left: 115
      }
    },

    {
      id: 7,
      section: 'G',
      img: mapIcon,
      coordinate: {
        top: 90,
        left: 235
      }
    },


    {
      id: 8,
      section: 'Q',
      img: mapIcon,
      coordinate: {
        top: 170,
        left: 55
      }
    },


    {
      id: 9,
      section: 'Y',
      img: mapIcon,
      coordinate: {
        top: 170,
        left: 110
      }
    },

    {
      id: 10,
      section: 'W',
      img: mapIcon,
      coordinate: {
        top: 170,
        left: 165
      }
    },
    {
      id: 11,
      section: 'P',
      img: mapIcon,
      coordinate: {
        top: 370,
        left: 165
      }
    },
    {
      id: 12,
      section: 'L',
      img: mapIcon,
      coordinate: {
        top: 370,
        left: 215
      }
    },

    {
      id: 13,
      section: 'M',
      img: mapIcon,
      coordinate: {
        top: 350,
        left: 265
      }
    },
  ]


  const [currentIcon, setCurrentIcon] = useState<mapBlockArrType | null>(null)


  const mapFilteredArr = mapBlockArr.map((item: any): any => {
    if (item.id == currentIcon?.id) {
      return {
        ...item,
        img: mapIconActive
      } 
    } else {
        return item
    }
  })

  return (
    <Suspense fallback={<Loading text={'Загрузка'} />}>
    <Container style={{height: '100vh'}}>
        <Row className='d-flex justify-content-center align-items-center mb-3'>
            <Col md={6}>
                <div className={styles.title}>Карта</div>
            </Col>
        </Row>

        <Row className='mb-5'>

          <Col className='d-flex flex-column justify-content-center align-items-center mb-4'>

            <div className={styles.map_container}>

                  <div className={styles.map_background}>

                        <div className={styles.map_image_container}>
                            <MapSvg current={{currentIcon, setCurrentIcon}} iconArr={mapFilteredArr}></MapSvg>
                        </div>

                  </div>
            </div>


            <AnimatePresence >

            {
              (currentIcon !== null) && (
                <motion.div initial={{opacity: 0, y: 0, x:0}} animate={{opacity: 1, y: -250, x: 0}} exit={{opacity: 0, y: -200, x: 0}}><MapInfoBlock id={currentIcon.id} close={{currentIcon, setCurrentIcon}} image={currentIcon.img} section={currentIcon.section} onClick={() => {setCurrentIcon(null)}}/></motion.div>
              )
            }

            </AnimatePresence>
          
          </Col>

        </Row>

    </Container>
    </Suspense>

  )
}

export default page
