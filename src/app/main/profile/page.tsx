'use client'

import { FC, ReactNode, useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

// styles

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import Status from '@/components/element/Status/Status'
import ModalResult from '@/components/modals/ModalResult/ModalResult'

// img

import statusIcon from '@/../public/profile/minerale.svg'
import statusStar from '@/../public/profile/start.svg'

// types

import { collectionType } from '@/types/type'
import { CollectionMineralType } from '@/types/type'

// redux

import { useAppSelector } from '@/types/hooks'
import { useAppDispatch } from '@/types/hooks'
import { fetchGetStatus } from '@/functions/reduxAsync/status/fetchGetStatus'
import { getUsers } from '@/functions/reduxAsync/users/getUsers'

// 
import { fetchGetCollectionMineral } from '@/functions/reduxAsync/collectionMineral/fetchGetCollectionMineral'
import { fetchChangeReceivedCollectionMineeral } from '@/functions/reduxAsync/collectionMineral/fetchChangeReceivedCollectionMineeral'

// components

import Loading from '@/components/element/Loading/Loading'



const page: FC = () => {


  const [userId, setUserId] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const userID = sessionStorage.getItem('userID')

    if (userID !== null) {
      setUserId(userID)
    }

    dispatch(getUsers())
    dispatch(fetchGetStatus())
  }, [dispatch])


  useEffect(() => {
    dispatch(fetchGetCollectionMineral())
  }, [dispatch])


  const currentUser = useAppSelector((state) => state.user.user).filter((item) => item.id === parseInt(userId));
  const collectionMineral = useAppSelector((state) => state.collection.collection)


  const statuses = useAppSelector((state) => state.status.status).filter((item) => item.title == currentUser[0]?.status)

  const sentMineralIdsRef = useRef<Set<string>>(new Set());
  const playsAnimationRecevied = useRef<Set<string>>(new Set());


  useEffect(() => {


    if (currentUser.length < 1) {
      return
    }


      const newCollectionMineral = collectionMineral.filter((item: any) => {
        return currentUser[0].mineralPassed.some((item2: any) => item.title === item2.title)
      })

      const toSend = newCollectionMineral.filter((item: any) => {
        return !item.received && !sentMineralIdsRef.current.has(item.id)
      })


      if (toSend.length === 0) {
        return
      }

      for (const mineral of toSend) {
        const id = mineral.id.toString()

        sentMineralIdsRef.current.add(id)
        console.log('mark received', id, mineral.title)

        dispatch(fetchChangeReceivedCollectionMineeral({id: id, received: true})).unwrap()
        dispatch(fetchGetCollectionMineral()).unwrap()

      }



  }, [currentUser, collectionMineral])


  if (!currentUser || currentUser.length < 1 && !statuses || statuses.length < 1) {
    return <Loading text={'Загрузка...'} />
  }






  return (

    <Container>
        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-3'>

                <div className={styles.title}>Профиль</div>

            </Col>
        </Row>


        <Row className='mb-3'>

            <Col className='d-flex justify-content-center align-items-center mb-1'>

                <Status title={statuses[0].title} img={statuses[0].icon} onClick={() => {}} />

            </Col>

        </Row>



        <Row>

          <Col className='d-flex flex-row'>

              <Col className='d-flex justify-content-center align-items-center mb-3'>

                <div className={styles.total_container}>
                  <Image src={statusStar} width={45} height={44} alt={''}/>
                  <div className={styles.total_title}>{currentUser[0].total}</div>
                </div>

              </Col>

              {

                statuses[0].price !== '' && (

                  <Col className='d-flex justify-content-center align-items-center mb-3'>

                      <div className={styles.price_container}>
                          <div className={styles.price_title}>10%</div>
                          <div className={styles.price_subtitle}>Скидка</div>
                      </div>

                  </Col>

                )

              }


          

            </Col>

        </Row>


        <Row>

            <Col className='d-flex justify-content-center align-items-center mb-3'>

                <div className={styles.collection_container}>
                    <div className={styles.collection_title}>Ваша коллекция миниралов</div>
                    <div className={styles.collection_item_box}>


                        {
                          collectionMineral.map((item: CollectionMineralType, index: number): ReactNode => {

                            const id = item.id.toString()
                            const firstTime = item.received && !playsAnimationRecevied.current.has(id)

                            return (
                              <div key={index+1} className={styles.collection_item_container}>
                                  <div className={styles.collection_item_image_box}>
                                      <motion.div style={{filter: 'grayscale(100%)'}} animate={ firstTime ? {scale: [1, 1.2, 1], filter: ['grayscale(100%)', 'grayscale(0)']} : { filter: item.received ? 'grayscale(0)' : 'grayscale(100%)' }} transition={{duration: 2}} onAnimationComplete={() => {
                                        if (item.received) {
                                          playsAnimationRecevied.current.add(id)
                                        }
                                      }}>
                                        <Image src={item.image} width={65} height={45} alt={'collection_img'}/>
                                        </motion.div>
                                  </div>
                                </div>
                                )
                          })
                        }

                    </div>
                </div>

            </Col>
        </Row>


        <Row className='mb-5'>
            <Col className='d-flex justify-content-center align-items-center mb-5'>
                <Link href={'/main/profile/account'} style={{textDecoration: 'none'}}><MyButton text={'Личные данные'} btn={styles.btn} onClick={() => {''}} type={'button'} /></Link>    
            </Col>
        </Row>
    </Container>

  )
}

export default page
