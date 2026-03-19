'use client'

import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, animate } from "motion/react"


//

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// redux

import { useAppDispatch, useAppSelector } from '@/types/hooks'
import { getUsers } from '@/functions/reduxAsync/users/getUsers'
import { fetchGetStatus } from '@/functions/reduxAsync/status/fetchGetStatus'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import AchievementsBlock from '@/components/element/achievementsBlock/AchievementsBlock'
import Loading from '@/components/element/Loading/Loading'
import { stat } from 'fs'

const page: FC = () => {

  const router = useRouter()

  const dispatch = useAppDispatch()
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    if (!userId) {
      const id = localStorage.getItem('userID')
      setUserId(id)
    }

    async function getReduxData() {
      await dispatch(getUsers())
      await dispatch(fetchGetStatus())
    } 

    getReduxData()

  }, [dispatch])



  const user = useAppSelector(state => state.user.user).find((item) => {
    if (!userId) return
    return item.id.toString() == userId.toString()
  })
  const statuses = useAppSelector(state => state.status.status)



  if (!user) {
    return <Loading text={'Загрузка...'} />
  }


  const currentStatus = statuses.filter((item) => {
    return item.title == user?.status 
  })

  const prevStatus = statuses.filter((item, index) => {
    return item.id < currentStatus[0].id
  })

  const nextStatus = statuses.filter((item, index) => {
    return item.id > currentStatus[0].id
  })


  return (

    <Container className='mb-5'>
        <Row className='d-flex justify-content-center align-items-center mb-3'>
            <Col md={6} >
                <div className={styles.title}>Путь достижений</div>
            </Col>
        </Row>

        {/*  */}

        <Row className='d-flex flex-column justify-content-center align-items-center mb-3'>


        {
          (statuses.length < 1)
          && 
          (
            <Loading text={'Нет данных статусов'} />
          )
        }
   

        {
          prevStatus.map((status, index) => {
            return (
                    <Col md={6} key={status.id} className='mt-2 mb-2'>
                              <AchievementsBlock 
                                img={status.icon}
                                title={status.title}
                                num={index + 1}
                                activeAchievements={{background: 'linear-gradient(111deg, #95B38D 10.06%, #90E899 114.82%, #F2E3A2 85.61%)', color: 'white'}}
                              />
                      </Col>
            )
          })
        }

        {
          currentStatus.map((status, index) => {
            return (
                    <Col md={6} key={status.id} className='mt-2 mb-2'>
                            <motion.div
                              initial={{ scale: 1, filter: 'grayscale(100%)', rotate: 0}}
                              animate={{scale: [1, 1.1, 1], filter: 'grayscale(0%)', rotate: [0, -4, 4, -1, 1, 0]}}
                              transition={{
                                  duration: 0.8,
                                  scale: {visualDuration: 0.6, bounce: 0.2, delay: 0.1 },
                                  filter: { duration: 0.8, delay: 0.1 },
                                  rotate: { 
                                    duration: 0.6, 
                                    delay: 0.1, // Тряска начинается после появления
                                    ease: "easeInOut"
                                  }
                                }}
                            >
                              <AchievementsBlock 
                                img={status.icon}
                                title={status.title}
                                num={index + 1}
                                activeAchievements={{filter: 'grayscale(0%)',   background: 'linear-gradient(111deg, #F2E3A2 10.06%, #D6B573 54.88%, #F2E3A2 85.61%, #C89E5C 114.82%)'}}
                              />
                            </motion.div>
                        </Col>
            )
          })
        }

        {
          nextStatus.map((status, index) => {
            return (
                    <Col md={6} key={status.id} className='mt-2 mb-2'>
                              <AchievementsBlock 
                                img={status.icon}
                                title={status.title}
                                num={index + 1}
                                activeAchievements={{filter: 'grayscale(100%)',   background: 'linear-gradient(111deg, #F2E3A2 10.06%, #D6B573 54.88%, #F2E3A2 85.61%, #C89E5C 114.82%)'}}
                              />
                      </Col>
            )
          })
        }





            
          
      
        </Row>


        {/*  */}

        <Row className='d-flex justify-content-center align-items-center mb-5'>
          <Col md={6} className='d-flex justify-content-center align-items-center'>
            <MyButton text={'Назад'} btn={styles.btn} onClick={() => {router.push('/main/profile')}} type={'button'} />
          </Col>
        </Row>



    </Container>

  )
}

export default page
