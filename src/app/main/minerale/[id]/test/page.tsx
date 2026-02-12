'use client'

import { useState, useEffect, use } from 'react'
import { motion } from "motion/react"
import { useRouter } from 'next/navigation'

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
import ModalText from '@/components/modals/ModalText/ModalText'


// image modal

import IconWin from '@/../public/ModalResult/star.svg'
import IconNotWin from '@/../public/ModalResult/error.svg'
import IconClose from '@/../public/ModalResult/close.svg'
import statusStar from '@/../public/profile/start.svg'


// redux

import { useAppDispatch, useAppSelector } from '@/types/hooks'
import { fetchGetAsyncMineral } from '@/functions/reduxAsync/mineral/fetchGetAsyncMineral'

// redux user 

import { fetchUsersChangePassedMineral } from '@/functions/reduxAsync/users/fetchUsersChangePassedMineral'
import { fetchUsersChangeTotal } from '@/functions/reduxAsync/users/fetchUsersChangeTotal'
import { fetchUsersChangeStatus } from '@/functions/reduxAsync/users/fetchUsersChangeStatus'
import { fetchAddNewCollectionMinerale } from '@/functions/reduxAsync/users/fetchAddNewCollectionMinerale'
import { fetchChangeNewCollectionMineralReceived } from '@/functions/reduxAsync/users/fetchChangeNewCollectionMineralReceived'
import { getUsers } from '@/functions/reduxAsync/users/getUsers'

// redux collection

import { fetchGetCollectionMineral } from '@/functions/reduxAsync/collectionMineral/fetchGetCollectionMineral'

// functions

import { getStatus } from '@/functions/status/getStatus'

// types

import { CollectionMineralType } from '@/types/type'
import { UserType } from '@/types/type'




const page = ({ params }: { params: { id: string } }) => {


  const router = useRouter()



  const [userId, setUserId] = useState<string>('')
  const [mineralId, setMineralId] = useState<string>('');

  // 

  const [answers, setAnswers] = useState<any>([])

  // 

  const [statuses, setStatuses] = useState<any>([])
  const [newStatus, setNewStatus] = useState<string>('')

  // 

  const [questionId, setQuestioId]= useState<number>(0)
  const [questionNum, setQuestioNum] = useState<number>(1)

  // 


  const [buttonText, setButtonText] = useState<string>('Тест начался')
  const [price, setPrice] = useState<number | null>(null)





  // 

  const [answerDisabled, setAnswerDisabled] = useState<boolean>(false)
  const [resultDisabled, setResultDisabled] = useState<boolean>(true)

  // redux
  

  const [winKviz, setWinKviz] = useState<boolean>(false)
  const [notWinKviz, setNotWinKviz] = useState<boolean>(false)
  const [kvizDone, setKvizDone] = useState<boolean>(false)
  const [newMineral, setNewMineral] = useState<boolean>(false)


  // redux

  const currentUser = useAppSelector((state) => state.user.user).find((item) => item.id == parseInt(userId));
  const currentMineral = useAppSelector((state) => state.minerals.minerals).find((item) => item.id === parseInt(mineralId));
  const collectionMineral = useAppSelector((state) => state.collection.collection)
  const dispatch = useAppDispatch()

  // get Id Mineral

  useEffect(() => {
    const fetchId = async () => {
      const result = await params;
      setMineralId(result.id);
    };
    fetchId();
  }, [params]);

  // get user id

  useEffect(() => {
    const userId = sessionStorage.getItem('userID');
    if (userId) {
      setUserId(userId);
    }
  }, [])


  useEffect(() => {
    dispatch(fetchGetAsyncMineral())
    dispatch(fetchGetCollectionMineral())
    dispatch(getUsers())
  }, [dispatch])

  useEffect(() => {

    const fetchStatuses = async () => {
      const res = await getStatus()

      const data = res.map((item: any) => {
        return {
          status: item.title,
          min: item.total
        }
      })

      setStatuses(data)
    }


    fetchStatuses()
  }, [dispatch])


  
  // Проверям был ли пройден этот геоквиз ранее


  useEffect(() => {

    if (!currentUser || !currentMineral) return
    const kvizIsDone = currentUser.mineralPassed.find((mineral: {title: string}) => mineral.title === currentMineral.title)

    if (kvizIsDone) {
      setKvizDone(true)
    }



  }, [currentUser, currentMineral])


  // 


  if (!currentMineral?.question) return

  //

  async function checkMineralPassed (): Promise<number>  {


    try {
      
      if (!currentUser || !currentMineral) return 0
      const mineralPassed = currentUser.mineralPassed.find((item: {title: string}) => item.title === currentMineral.title)

      // проверяем был ли пройден геоквиз и сохранен ли минерал в массиве "mineralPassed"

      if (!mineralPassed) {
        console.log(`Геоквиз ${currentMineral.title} пройден вы получаете 100 баллов`)
        await dispatch(fetchUsersChangePassedMineral({userId, passed: {title: currentMineral.title, isPassed: true}})).unwrap()
        return 100
      } else {
        console.log(`Геоквиз ${currentMineral.title} уже пройден вы получаете 10 баллов`)
        return 10
      }

    } catch (error: Error | unknown) {

      if (error instanceof Error) {
        console.error(`Ошибка получения данных о пройденном геовизе ${error.message}`)
        return 0
      }

      console.error(`Ошибка получения данных о пройденном геовизе ${error}`)
      return 0
    }

  }


  async function checkMineralCollection (currentMineral: any, currentUser: any): Promise<any> {
    try {


      let newCollcetionMineral: CollectionMineralType | any = collectionMineral.find((item: any) => {
        return item.title === currentMineral.title
      }) ?? []

      console.log('COLLECTION MINERALE!!!! ', newCollcetionMineral)
      const mineralWithoutId = {...newCollcetionMineral}
      delete mineralWithoutId.id


      if (!mineralWithoutId) {
        console.info('минерал в коллекцию не найден')
        return {
          message: `Минерал для добавления в коллекцию не найден`,
          success: false
        }
      }

      // redux

      await dispatch(fetchAddNewCollectionMinerale(
        {
          id: currentUser.id,
          mineral: mineralWithoutId
        }
      )).unwrap()
      await dispatch(getUsers()).unwrap();

      //
      
      
      console.log('НОВЫЙ МИНЕРАЛ В КОЛЛЕКЦИЮ ДОБАВЛЕН!!!! ', mineralWithoutId)


      return {
        message: `Добавлен новый минера в коллекцию, ${mineralWithoutId.title}`,
        success: true
      }



      
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        console.error(`Ошибка получения данных о коллекции минералов у пользователя ${error.message}`)
        return 0
      }

      console.error(`Ошибка получения данных о коллекции минералов у пользователя ${error}`)
      return 0
    }
  }


  async function checkMineralColectionReceived (currentMineral: any, currentUser: any) {
    try {

      const mineralRecieved = currentUser?.collection.find((item: {title: string, received: boolean}) => item.title === currentMineral.title)
      console.log(mineralRecieved)

      if (mineralRecieved && mineralRecieved.received === true) {
        console.log('статус минерала уже обновлен')
        return {
          message: 'статус минерала уже обновлен',
          success: false
        }
      }


      // redux

      const recievedMineral = await dispatch(fetchChangeNewCollectionMineralReceived({idUser: currentUser.id, idMineral: currentMineral.id})).unwrap()
      await dispatch(getUsers()).unwrap();

      console.log('ОБНОВЛЯЕМ СТАТУС МИНЕРАЛА ', recievedMineral)

      // 

      return {
        message: 'статус минерала обновлен',
        success: true
      }

      
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        console.error(`Статус минерала не обновлен ${error}`)
        return {
          message: `Статус минерала не обновлен ${error.message}`,
          success: false
        }
      }

      console.error(`Статус минерала не обновлен ${error}`)
      return {
        message: `Статус минерала не обновлен ${error}`,
        success: false
      }
    }
  }


  async function checkNewStatusFromUser (currentUser: any) {
    try {
      const newTotal = currentUser.total + price

      const newStatus = await newStatusUser(parseInt(newTotal))
      console.log('НОВЫЙ СТАТУС ', newStatus)

      if (newStatus) {
        console.log(`Поздравляем! Вы достигли нового статуса: ${newStatus}`)
        router.push(`/main/status/${newStatus}`);
      } else {
        console.log('Новый статус не достигнут')
        router.push('/main/minerale')
      }
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        console.error(`Ошибка получения нового статуса пользователя ${error.message}`)
        return
      }
      
      console.error(`Ошибка получения нового статуса пользователя ${error}`)
      return
    }
  }



  // STATUS


  const getNewStatusIfThresholdCrossed = (previousTotal: number, newTotal: number, currentStatus: string): string | null => {
      // Находим индекс текущего статуса в массиве
      const currentStatusIndex = statuses.findIndex((s: any) => s.status === currentStatus);
      const currentThreshold = statuses[currentStatusIndex]?.min || 0;
      
      // Проходим по порогам, которые ВЫШЕ текущего
      for (let i = currentStatusIndex + 1; i < statuses.length; i++) {
        const threshold = statuses[i];
        // Если достигнут порог
        if (newTotal >= threshold.min) {
          return threshold.status;
        }
      }
      return null;
  };


  async function newStatusUser (newTotal: number) {
    try {

      if (!currentUser) return

      const previousTotal = currentUser.total || 0;
      const newStatus = getNewStatusIfThresholdCrossed(previousTotal as number, newTotal, currentUser.status);
      
      // Если достигнут новый порог
      if (newStatus && newStatus !== currentUser.status) {
        console.log(`Достигнут новый статус: ${newStatus} (${newTotal} баллов)`);
        await dispatch(fetchUsersChangeStatus({ userId, status: newStatus })).unwrap();
        await dispatch(getUsers()).unwrap();
        return newStatus;
      }
      
      return null; // Статус не изменился
    } catch (error: Error | unknown) {
      console.error('Ошибка обновления статуса:', error);
      return null;
    }
  };
  


  // 


  function NextQuestionHandler (questionTitle: string, item: any) {
    if (!currentMineral?.question) return


    const questionData =  currentMineral.question[questionId] as any
    const currentAnswer = questionData.answers.find((answer: any) => {
      return answer.correct === true
    })


    setAnswers([...answers, {question: questionTitle, correctAnswer: currentAnswer,  ...item}])

    if (questionId + 1 === currentMineral?.question.length) {
      setAnswerDisabled(true)
      setResultDisabled(false)
      setButtonText('Показать результат')
    } else {
      setQuestioId(questionId + 1)
      setQuestioNum(questionNum + 1)
    }

  }


  async function ResultHandler (currentMineral: any, currentUser: any, answers: any) {

    try {
      
        const correctAnswers = answers.filter((item: {correct: boolean}) => item.correct === true)

        if (correctAnswers.length === currentMineral.question.length) {

          // Получаем количество очков, которое нужно добавить пользователю

          const total = await checkMineralPassed()
          setPrice(total)
          const newTotal = currentUser ? currentUser.total + total : 0 as number
          console.log(newTotal)

          // Присваиваем баллы пользователю

          await dispatch(fetchUsersChangeTotal({userId: userId, total: newTotal})).unwrap()

          // Добавляем минерал в коллекцию

          await checkMineralCollection(currentMineral, currentUser)
          
          
          // 

          setWinKviz(true)

        } else {
          console.log('not win')
          setNotWinKviz(true)
        }


    } catch (error) {
      
    }

  }





  async function CloseWinModal (currentUser: any, price: any) {

    try {

      setWinKviz(false)

      // Изменяем статус минерала в коллекции на "получен"

      const newCollectionMineral = await checkMineralColectionReceived(currentMineral, currentUser)

      console.log('NEW MINERAL RECIEVED ', newCollectionMineral)

      if (newCollectionMineral.success) {
          setNewMineral(true)
          return
      }

      // Получаем новый статус пользователя, если он достигнут

      await checkNewStatusFromUser(currentUser)

      // 

      
    } catch (error: Error | unknown) {
      
      if (error instanceof Error) {
        console.error(`Ошибка закрытия ${error.message}`)
        return false
      }

        console.error(`Ошибка закрытия ${error}`)
        return false
    }
  }


  async function CloseNotWinModal (answers: any) {
    try {
      setNotWinKviz(false)
      sessionStorage.setItem('answers', encodeURIComponent(JSON.stringify(answers)));
      router.push(`/main/minerale/${mineralId}/test/result`)

    } catch (error: Error | unknown) {
        if (error instanceof Error) {
          console.error(`Ошибка закрытия модального окна проигрыша ${error.message}`)
          return error.message
        }

        console.error(`Ошибка закрытия модального окна проигрыша ${error}`)
        return error
      
    }
  }

  async function CloseNewMineralModal (currentUser: any) {
    try {

      await checkNewStatusFromUser(currentUser)
      setNewMineral(false)
      
    } catch (error: Error | unknown) {
      console.log(error)
    }
  }



    if (!currentMineral && !currentUser) {
      return <Loading text={'Загрузка'} />
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
  
  
  return (


  <>

  {/* MODALS */}

  {
    (kvizDone) && (
      <Row>
        <Col>

          <ModalText
            title={`Квиз ${currentMineral.title} пройден`}
            text={'За последующее прохождение вам будет начисленно 10 баллов'}
            btnText={'Продолжить'}
            onClickBtn={() => {setKvizDone(false)}}
            onClickClose={() => {setKvizDone(false)}}
          />
        </Col>
      </Row>
    )
  }

  {
    (winKviz) && (

        <Row>
          <Col className='d-flex align-items-center'>

            <ModalResult 
              imgTop={IconWin}
              onClickLink={async () => {

                await CloseWinModal(currentUser, price)

              }}
              imgClose={IconClose}
              onClickClose={() => {
                router.push('/main/profile')
              }}
              text={`Вы получаете ${price} баллов`}
              textBtn={'Подробнее'}
              colorBackground={{background: 'linear-gradient(125deg, #7D22C9 0.49%, #FFBF00 73.51%, #FFBC41 99.11%)'}}
              colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}} 
              />
          
          </Col>
      </Row>

    )
  }

  {
    (notWinKviz) && (
      <Row>
          <Col className='d-flex align-items-cente'>

            <ModalResult 
              imgTop={IconNotWin}
              onClickLink={async () => {
                await CloseNotWinModal(answers)
              }}
              imgClose={IconClose}
              onClickClose={() => {router.push(`/main/minerale/`)}}
              text={`Геоквиз не пройден`}
              textBtn={'Подробнее'}
              colorBackground={{background: 'linear-gradient(262deg, #C92225 3.49%, #FF8041 121.77%)'}}
              colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}} 
              />
          
          </Col>
      </Row>
    )
  }


  {
    (newMineral) && (
      <Row>
        <Col>

          <ModalResult
            imgTop={statusStar}
            onClickLink={async () => {
              await CloseNewMineralModal(currentUser)
            }}
            text={'Открыт новый минерал'}
            textBtn={'Получить'}
            colorBackground={{background: 'linear-gradient(125deg, #7D22C9 0.49%, #FFBF00 73.51%, #FFBC41 99.11%)'}}
            colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}}
          />
      
        
        </Col>
      </Row>

    )
    }



  {/*  */}
  
    <Container className='mb-5'>

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

                  <div className={styles.question_number}>Вопрос {questionNum}</div>
                  <progress className={styles.question_progress} value={questionNum} max={4}></progress>

                  <div className={styles.question_top_question}>{currentMineral.question[questionId].title}</div>

              </div>
            </div>
          
          
          </Col>
        </Row>

    



        <Row>
          <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
          
            {

                (currentMineral.question[questionId].answers) && currentMineral.question[questionId].answers.map((item: any, index: number) => {

                if (!currentMineral.question) return

                const questionTitle = currentMineral.question[questionId].title

                if (!currentMineral.question) {
                  return
                }

                return (
                  <AnswerBlock disabled={answerDisabled} onClick={(e) => {NextQuestionHandler(questionTitle, item)}} key={index} num={index + 1} text={item.text} />
                )

              })

            }
          
          </Col>
        </Row>


        <Row className='mb-5'>
          <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>

            
            <motion.div animate={answerDisabled ? {scale: [1,1.2,1]} : {scale: [1]}} transition={{duration: 0.4}}><MyButton style={answerDisabled ? {background: '#FFBC41', color: 'white', border: 'none'} : {}} text={buttonText} btn={styles.btn} onClick={() => {ResultHandler(currentMineral, currentUser, answers)}} type={'button'} disabled={resultDisabled}/></motion.div>
          
          </Col>
        </Row>
    </Container>


  </>

  )
}

export default page
