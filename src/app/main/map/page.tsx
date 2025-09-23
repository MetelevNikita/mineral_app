'use client'

import { FC, useEffect, useState } from 'react'
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

import type { mapBlockArrType, MineralMapType } from '@/types/type' 

// img

import mapIcon from '@/../public/map/map_icon.svg'
import mapIconActive from '@/../public/map/map_icon_active.svg'
import { section } from 'motion/react-client'





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
      section: 'section A',
      img: mapIcon,
      coordinate: {
        top: 0,
        left: 35
      }
    },

    {
      id: 2,
      section: 'section K',
      img: mapIcon,
      coordinate: {
        top: 0,
        left: 90
      }
    },

    {
      id: 3,
      section: 'section B',
      img: mapIcon,
      coordinate: {
        top: 0,
        left: 145
      }
    },

    {
      id: 4,
      section: 'section C',
      img: mapIcon,
      coordinate: {
        top: 0,
        left: 195
      }
    },


    {
      id: 5,
      section: 'section E',
      img: mapIcon,
      coordinate: {
        top: 90,
        left: 10
      }
    },

    {
      id: 6,
      section: 'section F',
      img: mapIcon,
      coordinate: {
        top: 90,
        left: 115
      }
    },

    {
      id: 7,
      section: 'section G',
      img: mapIcon,
      coordinate: {
        top: 90,
        left: 235
      }
    },


    {
      id: 8,
      section: 'section Q',
      img: mapIcon,
      coordinate: {
        top: 170,
        left: 55
      }
    },


    {
      id: 9,
      section: 'section Y',
      img: mapIcon,
      coordinate: {
        top: 170,
        left: 110
      }
    },

    {
      id: 10,
      section: 'section W',
      img: mapIcon,
      coordinate: {
        top: 170,
        left: 165
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

    <Container style={{overflowY: 'hidden', overflowX: 'hidden'}}>
        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-4'>

                <div className={styles.title}>Карта</div>

            </Col>
        </Row>

        <Row>

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
                <motion.div initial={{opacity: 0, y: 0, x:-175}} animate={{opacity: 1, y: -180, x: -175}} exit={{opacity: 0, y: 0, x: -175}}><MapInfoBlock image={currentIcon.img} section={currentIcon.section} onClick={() => {setCurrentIcon(null)}} link={''} /></motion.div>
              )
            }

            </AnimatePresence>
          
          </Col>

        </Row>


        <Row className='mb-5'>
          <Col className='mb-5'>

 

          </Col>
        </Row>

    </Container>

  )
}

export default page
