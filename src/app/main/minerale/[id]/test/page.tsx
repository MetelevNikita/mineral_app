'use client'

import { FC, useState, useEffect } from 'react'

// style

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import AnswerBlock from '@/components/ui/AnswerBlock/AnswerBlock'
import Loading from '@/components/element/Loading/Loading'

// modal

import ModalResult from '@/components/modals/ModalResult/ModalResult'


// image modal

import IconWin from '@/../public/ModalResult/star.svg'
import IconClose from '@/../public/ModalResult/close.svg'


// redux

import { useAppDispatch, useAppSelector } from '@/types/hooks'
import { fetchGetAsyncMineral } from '@/functions/reduxAsync/mineral/fetchGetAsyncMineral'

// 
import { fetchUsersChangePassedMineral } from '@/functions/reduxAsync/users/fetchUsersChangePassedMineral'
import { fetchUsersChangeTotal } from '@/functions/reduxAsync/users/fetchUsersChangeTotal'
import { fetchUsersChangeStatus } from '@/functions/reduxAsync/users/fetchUsersChangeStatus'
import { getUsers } from '@/functions/reduxAsync/users/getUsers'

// img

import newIcon from '@/../public/uploads/status/newbie_icon.svg'


// database status

import { statusList } from '@/database/status'
import { redirect } from 'next/navigation'




const page = ({ params }: { params: { id: string } }) => {


  const [userId, setUserId] = useState<string>('')
  const [mineralId, setMineralId] = useState<string>('');
  const [answers, setAnswers] = useState<any>([])
  const [questionId, setQuestioId]= useState<number>(0)
  const [buttonText, setButtonText] = useState<string>('Тест начался')
  const [questionNumber, setQuestionNumber] = useState<number>(1)
  const [price, setPrice] = useState<number>(0)


  const [newStatusText, setNewStatusText] = useState<string>('')


  // 

  const [answerDisabled, setAnswerDisabled] = useState<boolean>(false)
  const [resultDisabled, setResultDisabled] = useState<boolean>(true)

  // redux
  

  const [modal, setModal] = useState<boolean>(false)

  // redux

  const currentUser = useAppSelector((state) => state.user.user).filter((item) => item.id == parseInt(userId))[0];
  const currentMineral = useAppSelector((state) => state.minerals.minerals).filter((item) => item.id === parseInt(mineralId))[0];
  const dispatch = useAppDispatch()



  // get Id Mineral


  useEffect(() => {
    const fetchId = async () => {
      const result = await params;
      setMineralId(result.id);
    };
    fetchId();
  }, [params]);


  //  get Id User

useEffect(() => {

    const userId = sessionStorage.getItem('userID')

    if (userId !== null) {
        setUserId(userId)
      } else {
        console.log(`User ID не определен!`)
      }
  }, [dispatch])


  // get USER

useEffect(() => {
    if (userId || mineralId) {
        dispatch(getUsers());
        dispatch(fetchGetAsyncMineral()) 
    }
}, [userId, dispatch]);


useEffect(() => {
      if (newStatusText !== '') {
      redirect(`/main/status/${newStatusText}`)
    } 
  }, [])



  if (!currentMineral || !currentUser) {
    return <Loading text={'Loading...'} />
  }


  if (currentMineral.question === null || currentMineral.question.length < 1) {
    return (
      <Row>
        <Col className='d-flex justify-content-center align-items-center mb-3'>

            <div className={styles.empty_title}>Вопросы не созданы</div>

        </Col>
      </Row>
      
    )
  }




  const handleSubmit = (item: any, user: any) => {

      setAnswers([...answers, item]);    // добавляем ответ в массив
      setQuestionNumber(questionNumber + 1)  // добавляем номер вопроса

      // проверяем ответы

    if (questionId + 1 < user.question.length) {
      setQuestioId(questionId + 1);
      setButtonText(`${questionId + 2} из ${user.question.length}`);
    } else {

      setButtonText('Показать результат');
      setAnswerDisabled(true)
      setResultDisabled(false)
    }
  }


  const handleFinalSubmit = (mineral: any) => {

    console.log('Answers:', answers)

    const correctAnswer = answers.filter((item: any) => {
            return item.correct === true
    })


    const passed = correctAnswer.length === mineral.question.length;


    if (questionId + 1 >= mineral.question.length) {
      console.log("Тест завершён");

      const isPassed = currentUser?.mineralPassed.filter((item: any) => item.title === mineral.title).length > 0;


      if (passed) {

        if (!isPassed) {
          setPrice(100);
        } else {
          setPrice(10);
        }

      } else {
        setPrice(0);
      }

      setModal(true)
    } else {
      alert('Вы не закончили отвечать на вопросы')
    }

  }


  // 



  const firstPlaythrough = async (answers: any, mineral: any, total: number, user: any, points: any): Promise<number | undefined> => {
    try {

      const passed = answers.length === mineral.question.length;
      const newTotal = user.total + (passed ? points : 0);

      if (passed) {
        await dispatch(fetchUsersChangeTotal({ userId: userId, total: newTotal })).unwrap();
        await dispatch(fetchUsersChangePassedMineral({
          userId: userId,
          passed: { title: mineral.title, isPassed: true }
        })).unwrap();
        await dispatch(getUsers()).unwrap();
      }
      return newTotal;
      
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            console.log(`Ошибка получения балов за квиз ${error.message}`)
            throw new Error(
              `Ошибка получения балов за квиз ${error.message}`
            )
        }
    }
  }


  const secondPlaythrough = async (answers: any, mineral: any, total: number, user: any, points: any): Promise<number | undefined> => {
    try {

      const passed = answers.length === mineral.question.length;
      const newTotal = user.total + (passed ? points : 0);

      if (passed) {
        await dispatch(fetchUsersChangeTotal({ userId: userId, total: newTotal })).unwrap();
        await dispatch(getUsers()).unwrap();
      }
      return newTotal;
      
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            console.log(`Ошибка получения балов за квиз ${error.message}`)
            throw new Error(
              `Ошибка получения балов за квиз ${error.message}`
            )
        }
    }
  }

  // 


  const newStatusUser = async (total: number) => {
    try {

      let status: string | null = null

      switch (total) {
        case 100:
          await dispatch(fetchUsersChangeStatus({userId, status: 'Стажер-геолог'})).unwrap()
          console.log('Стажер-геолог')
          status = 'Стажер-геолог'
          break;
        case 200:
          await dispatch(fetchUsersChangeStatus({userId, status: 'Инженер-геолог'})).unwrap()
          console.log('Инженер-геолог')
          status = 'Инженер-геолог'
          break;
        case 600:
          await dispatch(fetchUsersChangeStatus({userId, status: 'Геолог-съёмщик'})).unwrap()
          console.log('Геолог-съёмщик')
          status = 'Геолог-съёмщик'
          break; 
        case 1000:
          await dispatch(fetchUsersChangeStatus({userId, status: 'Старший геолог'})).unwrap()
          console.log('Старший геолог')
          status = 'Старший геолог'
          break;
        case 1400:
          await dispatch(fetchUsersChangeStatus({userId, status: 'Главный геолог'})).unwrap()
          console.log('Главный геолог')
          status = 'Главный геолог'
          break;
        case 2000:
          console.log()
          await dispatch(fetchUsersChangeStatus({userId, status: 'Начальник геолого-съемочной партии'})).unwrap()
          console.log('Начальник геолого-съемочной партии')
          status = 'Начальник геолого-съемочной партии'
          break;
        case 2600:
          await dispatch(fetchUsersChangeStatus({userId, status: 'Министр природных ресурсов 2 600 15% скидка'})).unwrap()
          console.log('Министр природных ресурсов 2 600 15% скидка')
          status = 'Министр природных ресурсов 2 600 15% скидка'
          break;
        default:
          console.log('не хватает баллов для получения статуса')
          status = ''
      }


      await dispatch(getUsers()).unwrap()
      return status

    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            console.log(`Ошибка получения статуса ${error.message}`)
            throw new Error(
              `Ошибка получения статуса ${error.message}`
            )
        }
    }
  }




  const closeModal = async (minerale: any, user: any) => {
    try {

          const correctAnswer = answers.filter((item: any) => {
            return item.correct === true
          })

          let total = user.total // получаем стратовый баланс
          const passed = user.mineralPassed.filter((item: any) => {
            return item.title === minerale.title
          })

          console.log('Passed:', passed)
          console.log('Correct Answers:', correctAnswer)
          console.log('Total:', total)


          if (passed.length >= 1) {
              console.log('Вы уже прошли этот квиз')
              const newTotal = await secondPlaythrough(correctAnswer, minerale, total, user, 10)
              const newStatus = await newStatusUser(newTotal as number)




              setModal(false)

              if (newStatus !== '') {
                window.location.href = `/main/status/${newStatus}`
              } else {
                window.location.href = '/main/minerale'
              }

              setNewStatusText(newStatus as string)


            } else {
              const newTotal = await firstPlaythrough(correctAnswer, minerale, total, user, 100)
              const newStatus = await newStatusUser(newTotal as number)

   
              setModal(false)

              if (newStatus !== '') {
                window.location.href = `/main/status/${newStatus}`
              } else {
                window.location.href = '/main/minerale'
              }
              
              setNewStatusText(newStatus as string)

          }


        

    } catch (error) {
      console.log(error)
    }
  }







  

  if (currentMineral === null || currentUser === null) {
    return <Loading text={'Loading...'} />
  }

  
  return (

  <>


      {
        (modal) && (

            <Row>
                <Col className='d-flex align-items-cente'>

                  <ModalResult 
                    imgTop={IconWin}
                    onClickLink={() => {closeModal(currentMineral, currentUser)}}
                    imgClose={IconClose}
                    onClickClose={() => {window.location.href = '/main/profile'}}
                    text={`Поздравляем вы получили ${price} баллов`}
                    textBtn={'Подробнее'}
                    colorBackground={{background: 'linear-gradient(125deg, #7D22C9 0.49%, #FFBF00 73.51%, #FFBC41 99.11%)'}}
                    colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}} 
                    />
                
                </Col>
            </Row>

        )
      }
    
  
    <Container>

        <Row>
            <Col className='d-flex justify-content-center mb-4'>

                <div className={styles.title}>Геоквиз</div>

            </Col>
        </Row>


        <Row>
          <Col className='d-flex justify-content-center align-items-center mb-3'>

            <div className={styles.question_bottom_container}>
              <div className={styles.question_top_container}>

                  <div className={styles.question_top_title}>{currentMineral.title}</div>

                  <div className={styles.question_number}>Вопрос {questionNumber}</div>
                  <progress className={styles.question_progress} value={questionNumber} max={currentMineral?.question.length}></progress>

                  <div className={styles.question_top_question}>{currentMineral.question[questionId].title}</div>

              </div>
            </div>
          
          
          </Col>
        </Row>




        <Row>
          <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
          
            {

              (currentMineral.question[questionId].answers) && currentMineral.question[questionId].answers.map((item: any, index: number) => {

                return (
                  <AnswerBlock disabled={answerDisabled} onClick={() => {handleSubmit(item, currentMineral)}} key={index+1} num={index + 1} text={item.text} />
                )

              })

            }
          
          </Col>
        </Row>


        <Row>
          <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>

            <MyButton text={buttonText} btn={styles.btn} onClick={() => {handleFinalSubmit(currentMineral)}} type={'button'} disabled={resultDisabled}/>
          
          </Col>
        </Row>
    </Container>


  </>

  )
}

export default page
