'use client'

import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// styles

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// redux

import { useAppSelector } from '@/types/hooks'
import { useAppDispatch } from '@/types/hooks'
import { fetchGetAsyncMineral } from '@/functions/reduxAsync/mineral/fetchGetAsyncMineral'

// compoenents

import Loading from '@/components/element/Loading/Loading'
import ResultAnswers from '@/components/ui/ResultAnswers/ResultAnswers'
import MyButton from '@/components/ui/MyButton/MyButton'

// image

import done from '@/../public/AnswersElement/done.svg'
import error from '@/../public/AnswersElement/error.svg'
import arrow from '@/../public/AnswersElement/open_answers.svg'


const page = (params: {params: {id: string}}) => {

  const [storageData ,setStorageData] = useState<any>(null)



  useEffect(() => {

    try {
      const raw = sessionStorage.getItem('answers') as string
      const answersObj = JSON.parse(decodeURIComponent(raw))
      setStorageData(answersObj)
    } catch (error) {
      console.log(error)
    }

  }, [params])

  const router = useRouter()

  const dispatch = useAppDispatch()
  const [mineralId, setMineralId] = useState<string>('')


  useEffect(() => {
    const fetchMineralId = async () => {
      const {id} = await params.params
      setMineralId(id)

      // getAllMinaral

      dispatch(fetchGetAsyncMineral())
    }
    fetchMineralId()
  }, [params])


  const currentMinaral = useAppSelector((state) => state.minerals.minerals).find((item) => item.id === parseInt(mineralId))


  if (!currentMinaral) {
    return (
      <Loading text={'Загрузка...'} />
    )
  }


  const correctAnswers = storageData.filter((item: any) => {
    if (item.correct === true) {
      return item
    }
  })


  console.log(storageData)
  console.log(correctAnswers)



  return (
    <Container>

        <Row>
            <Col className='d-flex justify-content-center mb-4'>

                <div className={styles.title}>Геоквиз</div>

            </Col>
        </Row>

        <Row>
            <Col className='d-flex justify-content-center mb-4'>
            
              <div className={styles.question_block_bottom}>
                <div className={styles.question_block_top}>

                  <div className={styles.question_content_wrapper}>

                      <div className={styles.question_content_image_wrapper}>

                        <Image className={styles.question_content_image} src={currentMinaral.image} alt='image' width={65} height={80}/>

                      </div>


                      <div className={styles.question_text_wrapper}>
                        <div className={styles.question_text_kviz}>Геоквиз</div>
                        <div className={styles.question_text_kviz_mineral}>{currentMinaral.title}</div>
                        <div className={styles.question_text_result}>Не пройден</div>
                      </div>


                  </div>


                </div>
              </div>
            
            </Col>

        </Row>


        <Row>
          <Col className='d-flex flex-column align-items-center justify-content-center mb-4'>

              {
                (storageData.length < 1 || !storageData) ? <Loading text={'Загрузка'} /> : storageData.map((item: any, index: number): React.ReactNode => {
                  if (item.correct === true) {
                    return <ResultAnswers key={index+1} imageQuestion={done} answersTitle={`Вопрос ${index + 1}`} content={''} colorBG={'#EDF8EE'} style={{color: '#0F891E !important'}} />
                  } else {
                    return <ResultAnswers key={index+1} imageQuestion={error} answersTitle={`Вопрос ${index + 1}`} content={item.question} colorBG={'#FEE'} style={{color: '#E64646', border: `1px solid #FFDEDE`, borderRadius: '30px'}} imageErrorArrow={arrow}/>
                  }
                })
              }

          </Col>
        </Row>


        <Row>
          <Col className='d-flex flex-column align-items-center justify-content-center mb-4'>


              <div className={styles.answer_result_block_bottom}>
                    <div className={styles.answer_result_block_top}>

                      <div className={styles.answer_result_content_wrapper}>


                        <div className={styles.answer_result_content_top_title}> {correctAnswers.length} из {storageData.length}</div>
                        <div className={styles.answer_result_content_bottom_title}>верных ответов</div>

    
                      </div>


                    </div>
                  </div>
              
              
          
          </Col>
        </Row>

        <Row>
          <Col className='d-flex flex-row align-items-center justify-content-center mb-4'>

              

            <MyButton text={'Начать с начала'} btn={styles.btn} onClick={() => {
              router.push(`/main/minerale/${mineralId}/test`)
            }} type={'button'} />

            <MyButton text={'Главная'} btn={styles.btn} onClick={() => {
              router.push('/main')
            }} type={'button'} />
            
          
          </Col>
        </Row>

    </Container>

  )
}

export default page
