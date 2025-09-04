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
  const statuses = useAppSelector((state) => state.status.status).filter((item) => item.title == currentUser?.status)



  console.log(currentUser)
  console.log(collectionMineral)


  const checkMineral: CollectionMineralType[] | [] = currentUser?.collection?.filter((item) => {
    console.log(item)
    
    return item && !item.received !== undefined
  }) ?? []

  console.log(checkMineral.length > 0 ? checkMineral : "Массив пустой");



  //


  useEffect(() => {

      if (checkMineral?.length < 1) {
        return
      }

      setGetMineral(true)
      console.log(checkMineral)


  }, [currentUser])



  const getChangeCollectionRecevied = async (user: UserType , mineral: CollectionMineralType[]) => {
    try {

      for (const item of mineral) {
        console.log(mineral)
        await dispatch(fetchChangeNewCollectionMineralReceived({idUser: user.id, idMineral: item.id})).unwrap()
        await dispatch(getUsers())

        console.log(`Статус минерала обновлен ${item.id}`)
      }

      
      setGetMineral(false)
      setIsActive(true)

    
    } catch (error) {
      console.log(`Ошибка получения коллекционного минерала`, error)
    }
  }



  if (!currentUser || !statuses || statuses.length < 1) {
    return <Loading text={'Загрузка...'} />
  }


  const currentUserCollection = collectionMineral.map((item) => {
    const userMineral = currentUser?.collection as any[]

    for (const mineral of userMineral) {
      if (mineral.title === item.title) {
        return mineral
      } else {
        return item
      }
    }



    
  })


  console.log(currentUserCollection)


  return (

    <Container>

      {
        (getMineral) && (
          <Row>
            <Col>

              <ModalResult imgTop={statusStar} onClickLink={() => {getChangeCollectionRecevied(currentUser, checkMineral)}} text={'Открыт новый минерал'} textBtn={'Получить'} colorBackground={{background: 'linear-gradient(125deg, #7D22C9 0.49%, #FFBF00 73.51%, #FFBC41 99.11%)'}} colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}}/>
          
            
            </Col>
          </Row>

        )
      }




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
                  <div className={styles.total_title}>{currentUser?.total}</div>
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
                          currentUserCollection.map((item: CollectionMineralType, index: number): ReactNode => {

                            return (
                              <div key={index+1} className={styles.collection_item_container}>
                                  <div className={styles.collection_item_image_box}>
                                      <motion.div style={{filter: 'grayscale(100%)'}} animate={ item.received ? {scale: [1, 1.2, 1], filter: ['grayscale(100%)', 'grayscale(0)']} : { filter: item.received ? 'grayscale(0)' : 'grayscale(100%)' }} transition={{duration: 2}}>
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
