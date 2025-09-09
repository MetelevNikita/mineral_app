'use client'

import { FC, useState } from 'react'
import { motion, AnimatePresence } from "motion/react"


// styles

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MapSvg from '@/components/ui/MapSVG/MapSvg'
import MapInfoBlock from '@/components/element/mapInfoBlock/MapInfoBlock'

// types

import type { mapBlockArrType } from '@/types/type' 

// img

import img1 from '@/../public/map/Group 36779.svg'
import img2 from '@/../public/map/Group 36780.svg'
import img3 from '@/../public/map/Group 36781.svg'
import img4 from '@/../public/map/Group 36782.svg'





const page: FC = () => {

  const mapBlockArr: mapBlockArrType[] = [
    {
      id: 1,
      title: 'минерал 1',
      content: 'текст 1 текст 1 текст 1 текст 1 текст 1 текст 1 текст 1 текст 1',
      img: img1,
      coordinate: {
        top: 1,
        left: 215
      }
    },


    {
      id: 2,
      title: 'минерал 2',
      content: 'текст 2 текст 2 текст 2 текст 2 текст 2 текст 2 текст 2 текст 2',
      img: img2,
      coordinate: {
        top: 135,
        left: 145
      }
    },

    {
      id: 3,
      title: 'минерал 3',
      content: 'текст 3 текст 3 текст 2 текст 2 текст 2 текст 2 текст 2 текст 2',
      img: img3,
      coordinate: {
        top: 155,
        left: 0
      }
    },


    {
      id: 4,
      title: 'минерал 4',
      content: 'текст 4 текст 4 текст 4 текст 4 текст 2 текст 2 текст 2 текст 2',
      img: img4,
      coordinate: {
        top: 135,
        left: 370
      }
    }
  ]

  const [currentIcon, setCurrentIcon] = useState<mapBlockArrType | null>(null)


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
                            <MapSvg current={{currentIcon, setCurrentIcon}} iconArr={mapBlockArr}></MapSvg>
                        </div>

                  </div>
            </div>


            <AnimatePresence >

            {
              (currentIcon !== null) && (
                <motion.div initial={{opacity: 0, y: 0, x:-175}} animate={{opacity: 1, y: -180, x: -175}} exit={{opacity: 0, y: 0, x: -175}}><MapInfoBlock image={currentIcon.img} title={currentIcon.title} content={currentIcon.content} onClick={() => {setCurrentIcon(null)}} link={''} /></motion.div>
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
