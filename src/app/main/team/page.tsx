'use client'

import React, { FC } from 'react'
import { motion } from "motion/react"

// 

import { Container, Row, Col } from 'react-bootstrap'

// styles

import styles from './page.module.css'

// 

import { teamBase } from '@/database/teamBase'

// components

import TeamCard from '@/components/element/TeamCard/TeamCard'


const page: FC = () => {
  return (
    <Container className='mb-5'>

        <Row className='d-flex justify-content-center align-items-center mb-3'>
            <Col md={6}>
                <div className={styles.title}>Отзыв</div>
            </Col>
        </Row>




      <Row className='mb-5'>

        {
          (teamBase.length > 1) && (
            teamBase.map((item: {image: string, name: string, info: string}, index: number): React.ReactNode => {
              return (
                <Col xs={6} md={2} key={index} className='d-flex justify-content-center mt-2 mb-2'>

                      <motion.div
                        whileHover={{scale: 1.10}}
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: index*0.5, duration: 0.5}}
                      >
                        <TeamCard image={item.image} name={item.name} info={item.info} />
                      </motion.div>

                </Col>
              )
            })
          )
        }


      </Row>
    </Container>
  )
}

export default page