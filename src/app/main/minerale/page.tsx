"use client"

// 

import { FC, useEffect, useState } from 'react'

// 

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MineralCard from '@/components/element/MineralCard/MineralCard'
import ModalText from '@/components/modals/ModalText/ModalText'



// redux

import { useAppDispatch } from '@/types/hooks'
import { useAppSelector } from '@/types/hooks'

// 

import { getUsers } from '@/functions/reduxAsync/users/getUsers'
import { fetchGetAsyncMineral } from '@/functions/reduxAsync/mineral/fetchGetAsyncMineral'
import { fetchUsersChangeFirstVisible } from '@/functions/reduxAsync/users/fetchUsersChangeFirstVisible'



// 

const page: FC = () => {



  const [userId, setUserId] = useState<string | null>(null)
  const [modalVisible, setModalVisible] = useState<boolean>(false)


  const dispatch = useAppDispatch()
  const minerals = useAppSelector((state) => state.minerals.minerals)
  const users = useAppSelector((state) => state.user.user)


  useEffect(() => {


    const userId = localStorage.getItem('userID')
    if (userId !== null) {
      setUserId(userId)
    }


    dispatch(getUsers())
    dispatch(fetchGetAsyncMineral())

  }, [dispatch])

    const currentUsers = users.filter((item: any) => {
    if (item.id == userId) {
      return item
    }
  })[0]


  useEffect(() => {

    if (!userId) return

    setModalVisible(currentUsers?.firstVisit)
    dispatch(getUsers())

  }, [])





  if (!minerals || !currentUsers) {
    return (
        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-3'>

                <div className={styles.title}>...Загрузка</div>

            </Col>
        </Row>
    )
  }




  return (

    <Container>


        <Row>
          <Col>
          
            {
              (!currentUsers.firstVisit) && (
                <ModalText
                  title={'Дорогой участник!'}
                  text={'Для получения почётного звания в области минералогии вам предстоит пройти серьёзное испытание — комплексное тестирование по знанию минералов. Ваш ориентир — достижение впечатляющего результата в 10 000 баллов.'}
                  btnText={'Начать'}
                  onClickClose={async () => {

                      if (!userId) return
                      
                      await dispatch(fetchUsersChangeFirstVisible({userId, visible: true}))
                      await dispatch(getUsers())

                      console.log('CLOSE')
                  }}
                  onClickBtn={async () => {
                    
                    if (!userId) return

                    await dispatch(fetchUsersChangeFirstVisible({userId, visible: true}))
                    await dispatch(getUsers())
                    console.log('CLOSE')

                  }} />
              )
            }
          
          
          </Col>
        </Row>


        <Row className='d-flex justify-content-center align-items-center mb-3'>
            <Col md={6}>
                <div className={styles.title}>Минералы</div>
            </Col>
        </Row>

        <Row className='d-flex justify-content-md-start justify-content-around mb-5'>



          {minerals.map((item: any, index: number): React.ReactNode => {
            return <Col md={2} xs={5} key={index+1} className='d-flex justify-content-center justify-content-xs-between'><MineralCard image={item.image} title={item.title} id={item.id} /></Col>
          })}

        </Row>
    </Container>

  )
}

export default page
