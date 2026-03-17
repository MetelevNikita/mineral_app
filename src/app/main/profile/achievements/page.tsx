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

    console.log('IDS', userId)

    return item.id.toString() == userId.toString()
  })
  const statuses = useAppSelector(state => state.status.status)


  console.log(user)
  console.log(statuses)

  if (!user) {
    return <Loading text={'Загрузка...'} />
  }


  return (

    <Container>
        <Row className='d-flex justify-content-center align-items-center mb-3'>
            <Col md={6} >
                <div className={styles.title}>Путь достижений</div>
            </Col>
        </Row>

        {/*  */}

        <Row className='d-flex flex-column justify-content-center align-items-center mb-3'>


        {
          (statuses.length < 1)
          ? 
          (
            <Loading text={'Нет данных статусов'} />
          )
          :
          (
            statuses.map((status, index) => {
              return (
              <Col md={6} key={status.id} className='mt-2 mb-2'>


                {
                  (user.status == status.title)
                  ?
                  (
                    <motion.div
                      initial={{filter: 'grayscale(100%)', scale: 0.9}}
                      animate={{filter: 'grayscale(0%)', scale: 1}}
                      transition={{duration: 0.4, scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 }}}><AchievementsBlock 
                        img={status.icon}
                        title={status.title}
                        num={index + 1}
                        activeAchievements={{filter: 'grayscale(0%)'}}
                    /></motion.div>
                  )
                  :
                  (

                    <AchievementsBlock 
                        img={status.icon}
                        title={status.title}
                        num={index + 1}
                        activeAchievements={{filter: 'grayscale(100%)'}}
                    />

                  )
                }

                <motion.div></motion.div>

                
            
              </Col>
              )
            })
          )
        }


        </Row>


        {/*  */}

        <Row className='d-flex justify-content-center align-items-center mb-3'>
          <Col md={6} className='d-flex justify-content-center align-items-center'>
            <MyButton text={'Назад'} btn={styles.btn} onClick={() => {router.push('/main/profile')}} type={'button'} />
          </Col>
        </Row>



    </Container>

  )
}

export default page
