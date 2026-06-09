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
        top: 135,
        left: 245
      }
    },

    {
      id: 8,
      section: 'D',
      img: mapIcon,
      coordinate: {
        top: 90,
        left: 235
      }
    },

    {
      id: 9,
      section: 'H',
      img: mapIcon,
      coordinate: {
        top: 190,
        left: 5
      }
    },

    {
      id: 10,
      section: 'Q',
      img: mapIcon,
      coordinate: {
        top: 170,
        left: 55
      }
    },

    {
      id: 11,
      section: 'Y',
      img: mapIcon,
      coordinate: {
        top: 170,
        left: 110
      }
    },

    {
      id: 12,
      section: 'W',
      img: mapIcon,
      coordinate: {
        top: 170,
        left: 165
      }
    },
    {
      id: 13,
      section: 'I',
      img: mapIcon,
      coordinate: {
        top: 280,
        left: 165
      }
    },

    {
      id: 14,
      section: 'P',
      img: mapIcon,
      coordinate: {
        top: 350,
        left: 165
      }
    },
    {
      id: 15,
      section: 'J',
      img: mapIcon,
      coordinate: {
        top: 400,
        left: 165
      }
    },




    // 



    {
      id: 16,
      section: 'N',
      img: mapIcon,
      coordinate: {
        top: 270,
        left: 230
      }
    },

    {
      id: 17,
      section: 'X',
      img: mapIcon,
      coordinate: {
        top: 370,
        left: 230
      }
    },

    {
      id: 18,
      section: 'Z',
      img: mapIcon,
      coordinate: {
        top: 470,
        left: 240
      }
    },

    {
      id: 19,
      section: 'Q',
      img: mapIcon,
      coordinate: {
        top: 430,
        left: 273
      }
    },
    {
      id: 20,
      section: 'R',
      img: mapIcon,
      coordinate: {
        top: 60,
        left: 55
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
                            <motion.div
                              whileHover={{scale: 1.05}}
                            >
                                  <MapSvg
                                    current={{currentIcon, setCurrentIcon}}
                                    iconArr={mapFilteredArr}>
                                  </MapSvg>
                            </motion.div>
                        </div>

                  </div>
            </div>


            <AnimatePresence >

            {
              (currentIcon !== null) && (
                <motion.div
                  initial={{opacity: 0, y: 0, x:0}}
                  animate={{opacity: 1, y: -250, x: 0}}
                  exit={{opacity: 0, y: -250, x: 0}}
                >
                  <MapInfoBlock
                      id={currentIcon.id}
                      close={{currentIcon, setCurrentIcon}}
                      image={currentIcon.img}
                      section={currentIcon.section}
                      onClick={
                        () => {
                          setCurrentIcon(null)
                        }
                      }
                  />
                  
                </motion.div>
              )
            }

            </AnimatePresence>
          
          </Col>

        </Row>

    </Container>

  )
}

export default page
