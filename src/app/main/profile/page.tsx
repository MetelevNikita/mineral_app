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
import { UserType } from '@/types/type'
import { CollectionMineralType } from '@/types/type'

// redux

import { useAppSelector } from '@/types/hooks'
import { useAppDispatch } from '@/types/hooks'
import { fetchGetStatus } from '@/functions/reduxAsync/status/fetchGetStatus'
import { getUsers } from '@/functions/reduxAsync/users/getUsers'

//

import { fetchGetCollectionMineral } from '@/functions/reduxAsync/collectionMineral/fetchGetCollectionMineral'
import { fetchChangeNewCollectionMineralReceived } from '@/functions/reduxAsync/users/fetchChangeNewCollectionMineralReceived'


// components

import Loading from '@/components/element/Loading/Loading'
import ShareButtonVk from '@/components/ui/ShareButtonVk/ShareButtonVk'


const page: FC = () => {


  const [userId, setUserId] = useState<string>('');
  const [getMineral, setGetMineral] = useState<boolean>(false)
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


  const currentUser: UserType | null = useAppSelector((state) => state.user.user).find((item: UserType) => item.id === parseInt(userId)) ?? null;
  const collectionMineral: CollectionMineralType[] = useAppSelector((state) => state.collection.collection) ?? []
  const statuses = useAppSelector((state) => state.status.status).find((item) => item.title == currentUser?.status)

  console.log(currentUser)
  console.log(statuses)
  console.log(collectionMineral)



  if (!currentUser || !statuses || statuses.length < 1) {
    return <Loading text={'Загрузка...'} />
  }


  const currentUserCollection = collectionMineral.map((item) => {
    const userMineral = currentUser?.collection as any[]

    if (!userMineral) {
      console.error(
        'Не удалось получить коллекционный минерал пользователя',
        currentUser
      )
      return item
    }

    const foundMineral = userMineral.find(mineral => mineral.title === item.title);
    return foundMineral || item;
    
  }) || []




  return (

    <Container>

        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-3'>

                <div className={styles.title}>Профиль</div>

            </Col>
        </Row>


        <Row className='mb-3'>

            <Col className='d-flex justify-content-center align-items-center mb-1'>

                <Status title={statuses.title} img={statuses.icon} onClick={() => {}} />

            </Col>

        </Row>



        <Row className='d-flex flex-row justify-content-center mb-3'>


                <div className={styles.total_container} style={(statuses.price !== '') ? {width: '170px'} : {width: '354px'}}>
                  <Image src={statusStar} width={45} height={44} alt={''}/>
                  <div className={styles.total_title}>{currentUser?.total}</div>
                </div>



              {

                statuses.price !== '' && (

                      <div className={styles.price_container} style={{width: '170px'}}>
                          <div className={styles.price_title}>10%</div>
                          <div className={styles.price_subtitle}>Скидка</div>
                      </div>

                )
                
              }


 

        </Row>


        <Row>

            <Col className='d-flex justify-content-center align-items-center mb-3'>

                <div className={styles.collection_container}>
                    <div className={styles.collection_title}>Ваша коллекция</div>
                    <div className={styles.collection_item_box}>


                        {
                          currentUserCollection.map((item: CollectionMineralType, index: number): ReactNode => {

                            return (
                              <div key={index+1} className={styles.collection_item_container}>
                                      <motion.div className={styles.collection_item_image_box} style={{filter: 'grayscale(100%)'}} animate={ item?.received ? {scale: [1, 1.2, 1], filter: ['grayscale(100%)', 'grayscale(0)']} : { filter: item?.received ? 'grayscale(0)' : 'grayscale(100%)' }} transition={{duration: 2}}>
                                        <Image src={item?.image} width={60} height={45} alt={'collection_img'}/>
                                        <span className={styles.collection_item_title}>{item.title}</span>
                                        </motion.div>
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
