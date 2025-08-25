'use client'

import { FC, useState, useEffect } from 'react'
import { motion } from "motion/react"

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
import IconNotWin from '@/../public/ModalResult/error.svg'
import IconClose from '@/../public/ModalResult/close.svg'


// redux

import { useAppDispatch, useAppSelector } from '@/types/hooks'
import { fetchGetAsyncMineral } from '@/functions/reduxAsync/mineral/fetchGetAsyncMineral'

// 
import { fetchUsersChangePassedMineral } from '@/functions/reduxAsync/users/fetchUsersChangePassedMineral'
import { fetchUsersChangeTotal } from '@/functions/reduxAsync/users/fetchUsersChangeTotal'
import { fetchUsersChangeStatus } from '@/functions/reduxAsync/users/fetchUsersChangeStatus'
import { getUsers } from '@/functions/reduxAsync/users/getUsers'


// database status

import { redirect } from 'next/navigation'




const page = ({ params }: { params: { id: string } }) => {


const STATUS_THRESHOLDS = [
  { min: 2600, status: 'Министр природных ресурсов 2 600 15% скидка' },
  { min: 2000, status: 'Начальник геолого-съемочной партии' },
  { min: 1400, status: 'Главный геолог' },
  { min: 1000, status: 'Старший геолог' },
  { min: 600,  status: 'Геолог-съёмщик' },
  { min: 200,  status: 'Инженер-геолог' },
  { min: 100,  status: 'Стажер-геолог' },
] as const;



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
  

  const [winKviz, setWinKviz] = useState<boolean>(false)
  const [notWinKviz, setNotWinKviz] = useState<boolean>(false)

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




  const handleSubmit = (question: string, item: any, user: any) => {

      setAnswers([...answers, {question: question, ...item}]);    // добавляем ответ в массив
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
          setWinKviz(true)
        } else {
          setPrice(10);
          setWinKviz(true)
        }

      } else {
        setPrice(0);
        setNotWinKviz(true)
      }


    } else {
      alert('Вы не закончили отвечать на вопросы')
    }

  }

  //


  const calcStatusByTotal = (total: number): string => {
    const found = STATUS_THRESHOLDS.find(t => total >= t.min);
    return found ? found.status : '';
  };



  const applyStatusIfUpgraded = async (total: number, currentStatus: string) => {
    const nextStatus = calcStatusByTotal(total);

    // если порог не достигнут — ничего не делаем
    if (!nextStatus) return '';

    // если статус не изменился — не дергаем API повторно
    if (nextStatus === currentStatus) return nextStatus;

    // апгрейд статуса
    await dispatch(fetchUsersChangeStatus({ userId, status: nextStatus })).unwrap();
    await dispatch(getUsers()).unwrap();
    return nextStatus;
  };



  const newStatusUser = async (total: number, currentStatus: string) => {
    try {
      return await applyStatusIfUpgraded(total, currentStatus);
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        console.log(`Ошибка получения статуса ${error.message ?? error}`);
        throw new Error(`Ошибка получения статуса ${error.message ?? error}`);
      }
      throw new Error(`Ошибка получения статуса ${error}`)
    }
  };



  const closeModal = async (minerale: any, user: any) => {
    try {

      let total = user.total;

      // проверили правильность ответов

      const correctAnswer = answers.filter((item: any) => item.correct === true);
      const passedAllCorrect = correctAnswer.length === minerale.question.length;

      // проверили проходили ли мы квиз

      const alreadyPassed = user.mineralPassed.some((i: any) => i.title === minerale.title);

      // Считаем очки

      let pointsToAdd = 0;
      if (passedAllCorrect) {
          pointsToAdd = alreadyPassed ? 10 : 100;

          const newTotal = total + pointsToAdd;

          // Если это первое прохождение и всё верно — фиксируем «пройдено»
          if (passedAllCorrect && !alreadyPassed) {
            await dispatch(fetchUsersChangePassedMineral({
              userId,
              passed: { title: minerale.title, isPassed: true }
            })).unwrap();
          }

          // Если есть очки — фиксируем новый total (даже при повторном прохождении)
          if (pointsToAdd > 0) {
            await dispatch(fetchUsersChangeTotal({ userId, total: newTotal })).unwrap();
          }

          // Обновляем пользователя после записи total/пасса
          await dispatch(getUsers()).unwrap();

          // Пробуем апгрейдить статус (один раз до следующего порога)
          const newStatus = await newStatusUser(newTotal, currentUser.status);

          setWinKviz(false);
          setNewStatusText(newStatus);

          if (newStatus && newStatus !== currentUser.status) {
            window.location.href = `/main/status/${newStatus}`;
          } else {
            window.location.href = '/main/minerale';
          }

      } else if (!passedAllCorrect) {
          setNotWinKviz(false)
          sessionStorage.setItem('answers', encodeURIComponent(JSON.stringify(answers)))
          window.location.href = `/main/minerale/${mineralId}/test/result`
      }
    } catch (error) {
      console.log(error);
    }
  }




  if (currentMineral === null || currentUser === null) {
    return <Loading text={'Loading...'} />
  }

  
  return (

  <>


      {
        (winKviz) && (

            <Row>
                <Col className='d-flex align-items-cente'>

                  <ModalResult 
                    imgTop={IconWin}
                    onClickLink={() => {closeModal(currentMineral, currentUser)}}
                    imgClose={IconClose}
                    onClickClose={() => {window.location.href = '/main/profile'}}
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
                    onClickLink={() => {closeModal(currentMineral, currentUser)}}
                    imgClose={IconClose}
                    onClickClose={() => {window.location.href = `/main/minerale/${mineralId}/test/result`}}
                    text={`Геоквиз не пройден`}
                    textBtn={'Подробнее'}
                    colorBackground={{background: 'linear-gradient(262deg, #C92225 3.49%, #FF8041 121.77%)'}}
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

                if (!currentMineral.question) {
                  return
                }

                const questionTitle = currentMineral.question[questionId].title as string

                return (
                  <AnswerBlock disabled={answerDisabled} onClick={() => {handleSubmit(questionTitle, item, currentMineral)}} key={index+1} num={index + 1} text={item.text} />
                )

              })

            }
          
          </Col>
        </Row>


        <Row>
          <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>

            <motion.div animate={answerDisabled ? {scale: [1,1.2,1]} : {scale: [1]}} transition={{duration: 0.4}}><MyButton style={answerDisabled ? {background: '#FFBC41', color: 'white', border: 'none'} : {}} text={buttonText} btn={styles.btn} onClick={() => {handleFinalSubmit(currentMineral)}} type={'button'} disabled={resultDisabled}/></motion.div>
          
          </Col>
        </Row>
    </Container>


  </>

  )
}

export default page
