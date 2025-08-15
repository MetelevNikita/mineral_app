'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// styles

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import Status from '@/components/element/Status/Status'

// img

import statusIcon from '@/../public/profile/minerale.svg'
import statusStar from '@/../public/profile/start.svg'

// types

import { collectionType } from '@/types/type'

// redux

import { useAppSelector } from '@/types/hooks'
import { useAppDispatch } from '@/types/hooks'
import { getUsers } from '@/functions/reduxAsync/users/getUsers'



const page: FC = () => {


  const [userId, setUserId] = useState<string>('');

  const dispatch = useAppDispatch()

  useEffect(() => {
    const userID = sessionStorage.getItem('userID')

    if (userID !== null) {
      setUserId(userID)
    }

    dispatch(getUsers())
  }, [dispatch])


  const currentUser = useAppSelector((state) => state.user.user).filter((item) => item.id === parseInt(userId));

  const collection: collectionType[] = [
    {
      title: 'минерал 1',
      img: statusIcon,
      active: false
    },

    {
      title: 'минерал 2',
      img: statusIcon,
      active: false
    },

    {
      title: 'минерал 3',
      img: statusIcon,
      active: false
    },

    {
      title: 'минерал 4',
      img: statusIcon,
      active: false
    },

    {
      title: 'минерал 5',
      img: statusIcon,
      active: false
    },

    {
      title: 'минерал 6',
      img: statusIcon,
      active: false
    },

    {
      title: 'минерал 7',
      img: statusIcon,
      active: false
    },

    {
      title: 'минерал 8',
      img: statusIcon,
      active: false
    }
  ]


  if (!currentUser || currentUser.length < 1) {
    return (
      <Container>
        <Row className='h-100 d-flex flex-column justify-content-center align-items-center'>
          <Col className='d-flex flex-column justify-content-center align-items-center'>
            <div className={styles.title}>Загрузка...</div>
          </Col>
        </Row>
      </Container>
    );
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

                <Status title={currentUser[0].status} img={statusIcon} onClick={() => {}} />

            </Col>

        </Row>



        <Row>

            <Col className='d-flex justify-content-center align-items-center mb-3'>

              <div className={styles.total_container}>
                <Image src={statusStar} width={45} height={44} alt={''}/>
                <div className={styles.total_title}>{currentUser[0].total}</div>
              </div>

            </Col>

        </Row>


        <Row>

            <Col className='d-flex justify-content-center align-items-center mb-3'>



                <div className={styles.collection_container}>


                    <div className={styles.collection_title}>Ваша коллекция миниралов</div>

                    <div className={styles.collection_item_box}>
                        
                        {
                          (!currentUser[0].collection) ? <div>Нет данных</div> : collection.map((item: collectionType, index: number): ReactNode => {
                            return (
                              <div key={index+1} className={styles.collection_item_container}>
                                <div className={styles.collection_item_image_box}>
                                    <Image src={statusIcon} width={42} height={45} alt={'collection_img'}/>
                                </div>

                                <div className={styles.collection_item_title}>{item.title}</div>

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
