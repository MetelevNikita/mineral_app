'use client'

import { useState, useEffect } from 'react'
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


  // const STATUS_THRESHOLDS = [
  //   { min: 2600, status: 'Министр природных ресурсов' },
  //   { min: 2000, status: 'Начальник геолого-съемочной партии' },
  //   { min: 1400, status: 'Главный геолог' },
  //   { min: 1000, status: 'Старший геолог' },
  //   { min: 600,  status: 'Геолог-съёмщик' },
  //   { min: 200,  status: 'Инженер-геолог' },
  //   { min: 100,  status: 'Стажер-геолог' },
  // ] as const;



  const [userId, setUserId] = useState<string>('')
  const [mineralId, setMineralId] = useState<string>('');
  const [answers, setAnswers] = useState<any>([])
  const [questionId, setQuestioId]= useState<number>(0)
  const [buttonText, setButtonText] = useState<string>('Тест начался')
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  const [newStatusText, setNewStatusText] = useState<string>('')
  const [getMineral, setGetMineral] = useState<boolean>(false)
  const [statuses, setStatuses] = useState<any>([])



  // 

  const [answerDisabled, setAnswerDisabled] = useState<boolean>(false)
  const [resultDisabled, setResultDisabled] = useState<boolean>(true)

  // redux
  

  const [winKviz, setWinKviz] = useState<boolean>(false)
  const [notWinKviz, setNotWinKviz] = useState<boolean>(false)
  const [kvizDone, setKvizDone] = useState<boolean>(false)

  // 

  const [newStatusFixer, setNewStatusFixer] = useState<boolean>(false)


  // 



  useEffect(() => {
    (async () => {
      const res = await getStatus()
      
      setStatuses(res.map((item: {title: string, total: number | string}) => {
        return {
          min: item.total,
          status: item.title
        }
      }))
    })()
  }, [])

  // redux

  const currentUser = useAppSelector((state) => state.user.user).filter((item) => item.id == parseInt(userId))[0];
  const currentMineral = useAppSelector((state) => state.minerals.minerals).filter((item) => item.id === parseInt(mineralId))[0];
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


  //  get Id User

  useEffect(() => {

      const userId = sessionStorage.getItem('userID')

      if (userId !== null) {
          setUserId(userId)
        } else {
          console.error(`User ID не определен!`)
        }
    }, [dispatch])

    // get USER

  useEffect(() => {
      if (userId || mineralId) {
          dispatch(getUsers());
          dispatch(fetchGetAsyncMineral())
          dispatch(fetchGetCollectionMineral())
      }
  }, [userId, dispatch]);


  useEffect(() => {

      if (currentUser && currentMineral) {
          const kvizIsDone = currentUser.mineralPassed.filter((item: any) => {
        if (item.title === currentMineral.title) {
          return item
        }
      })

      
      if (kvizIsDone.length > 0) {
          setKvizDone(true)
      }

    }

  }, [currentUser, currentMineral])  




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

      if (currentMineral.question === null) {
        console.error('Вопросы не найдены')
        return
      }


      const questionData =  currentMineral.question[questionId] as any
      const currentAnswer = questionData.answers.find((answer: any) => {
        return answer.correct === true
      })

      console.log(currentAnswer)

    


      setAnswers([...answers, {question: question, correctAnswer: currentAnswer,  ...item}]);    // добавляем ответ в массив
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
    const correctAnswer = answers.filter((item: any) => {
      return item.correct === true;
    });

    const passed = correctAnswer.length === mineral.question.length;

    if (questionId + 1 >= mineral.question.length) {
      const isPassed = currentUser?.mineralPassed.filter((item: any) => 
        item.title === mineral.title
      ).length > 0;

      if (passed) {
        const pointsToAdd = isPassed ? 10 : 100;
        setPrice(pointsToAdd); // Отображаем сколько баллов получим
        setWinKviz(true);
      } else {
        setPrice(0);
        setNotWinKviz(true);
      }
    } else {
      alert('Вы не закончили отвечать на вопросы');
    }
  };

  //


  const getNewStatusIfThresholdCrossed = (previousTotal: number, newTotal: number): string | null => {
    // Проходим по всем порогам от низшего к высшему
    for (const threshold of statuses) {
      // Если newTotal достиг или превысил порог, И previousTotal был меньше этого порога
      if (newTotal >= threshold.min && previousTotal < threshold.min) {
        return threshold.status;
      }
    }
    return null;
  };



  const newStatusUser = async (newTotal: number) => {
    try {
      const previousTotal = currentUser.total || 0;
      const newStatus = getNewStatusIfThresholdCrossed(previousTotal as number, newTotal);
      
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



  
  const closeModal = async (minerale: any, user: any) => {
    try {
      const previousTotal = user.total || 0;
      
      // проверяем правильность ответов
      const correctAnswer = answers.filter((item: any) => item.correct === true);
      const passedAllCorrect = correctAnswer.length === minerale.question.length;

      // проверяем проходили ли мы квиз
      const alreadyPassed = user.mineralPassed.some((i: any) => i.title === minerale.title);

      // Считаем очки
      let pointsToAdd = 0;
      if (passedAllCorrect) {
        pointsToAdd = alreadyPassed ? 10 : 100;

        const newTotal = previousTotal + pointsToAdd;
        console.log(`Баллы: ${previousTotal} + ${pointsToAdd} = ${newTotal}`);

        // Если это первое прохождение и всё верно — фиксируем «пройдено»
        if (passedAllCorrect && !alreadyPassed) {
          await dispatch(fetchUsersChangePassedMineral({
            userId,
            passed: { title: minerale.title, isPassed: false }
          })).unwrap();
        }

        // Если есть очки — фиксируем новый total
        if (pointsToAdd > 0) {
          await dispatch(fetchUsersChangeTotal({ userId, total: newTotal })).unwrap();
        }

        // Обновляем пользователя
        await dispatch(getUsers()).unwrap();

        // Проверяем, достигнут ли новый порог статуса
        const newStatus = await newStatusUser(newTotal);

        if (passedAllCorrect) {
          setWinKviz(false);
          
          // Проверяем, есть ли новый минерал в коллекции
          const newCollectionMineralData = await updateCollectionMineral();
          
          // Если достигнут новый статус
          if (newStatus) {
            setNewStatusText(newStatus);
            
            if (newCollectionMineralData.length >= 1) {
              setGetMineral(true);
            } else {
              //

              setNewStatusFixer(true)

              // 
              router.push(`/main/status/${newStatus}`);
            }
          } else {
            if (newCollectionMineralData.length >= 1) {
              setGetMineral(true);
            } else {
              router.push('/main/minerale');
            }
          }
        }

      } else if (!passedAllCorrect) {
        setNotWinKviz(false);
        sessionStorage.setItem('answers', encodeURIComponent(JSON.stringify(answers)));
        router.push(`/main/minerale/${mineralId}/test/result`);
      }
    } catch (error) {
      console.error('Ошибка в closeModal:', error);
    }
  };



  const updateCollectionMineral = async (): Promise<CollectionMineralType[] | []> => {
    try {

      let newCollcetionMineral: CollectionMineralType[] | [] = collectionMineral.filter((item: any) => {
        return item.title === currentMineral.title
      }) ?? []


      if (newCollcetionMineral.length < 1) {
        console.log('минерал в коллекцию не найден')
        return []
      }

      await dispatch(fetchAddNewCollectionMinerale(
        {id: currentUser.id,
          mineral: newCollcetionMineral[0]
        })).unwrap()
      return newCollcetionMineral

    } catch (error: Error | unknown) {

      if (error instanceof Error) {
        console.error(`Ошибка добавления в коллекцию ${error.message ?? error}`);
        throw new Error(`Ошибка добавления в коллекции ${error.message ?? error}`);
      }

      throw new Error(
        `Ошибка добавления в коллекцию ${error}`
      )

    }
  }


const getChangeCollectionRecevied = async (user: UserType, mineral: CollectionMineralType[]) => {
  try {
    for (const item of mineral) {
      await dispatch(fetchChangeNewCollectionMineralReceived({ 
        idUser: user.id, 
        idMineral: item.id 
      })).unwrap();
      await dispatch(getUsers());
    }
    
    // после обновления коллекции проверяем статус
    const updatedUser = await dispatch(getUsers()).unwrap();
    const currentUser = updatedUser.filter((item: UserType) => item.id == parseInt(userId))[0];
    
    setGetMineral(false);
    
    // проверяем, есть ли новый статус
    if (newStatusText) {
      console.log('Переход на новый статус:', newStatusText);
      router.push(`/main/status/${newStatusText}`);
    } else {
      console.log('Переход к минералам');
      router.push('/main/minerale');
    }
    
  } catch (error) {
    console.log(`Ошибка получения коллекционного минерала`, error);
  }
};
  




  if (currentMineral === null || currentUser === null) {
    return <Loading text={'Loading...'} />
  }

  
  return (

    

  <>
      {
        (kvizDone) && (
          <Row>
            <Col>
                <ModalText title={`Квиз ${currentMineral.title} пройден`} text={'Данный квиз вами пройден. за повторное прохождение квиза будет начисленно только 10 баллов'} btnText={'продолжить'} onClickClose={() => {setKvizDone(false)}} onClickBtn={() => {setKvizDone(false)}} />
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
                    onClickLink={() => {
                      closeModal(currentMineral, currentUser)
                    }}
                    imgClose={IconClose}
                    onClickClose={() => {window.location.href = `/main/minerale/`}}
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
        (getMineral) && (
          <Row>
            <Col>

              <ModalResult imgTop={statusStar} onClickLink={async () => {
                await updateCollectionMineral()
                await getChangeCollectionRecevied(currentUser, collectionMineral)
              }} text={'Открыт новый минерал'} textBtn={'Получить'} colorBackground={{background: 'linear-gradient(125deg, #7D22C9 0.49%, #FFBF00 73.51%, #FFBC41 99.11%)'}} colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}}/>
          
            
            </Col>
          </Row>

        )
      }
    
  
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


        <Row className='mb-5'>
          <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>

            <motion.div animate={answerDisabled ? {scale: [1,1.2,1]} : {scale: [1]}} transition={{duration: 0.4}}><MyButton style={answerDisabled ? {background: '#FFBC41', color: 'white', border: 'none'} : {}} text={buttonText} btn={styles.btn} onClick={() => {handleFinalSubmit(currentMineral)}} type={'button'} disabled={resultDisabled}/></motion.div>
          
          </Col>
        </Row>
    </Container>


  </>

  )
}

export default page
