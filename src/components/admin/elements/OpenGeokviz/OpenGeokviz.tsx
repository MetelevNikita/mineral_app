import { FC, useState, useEffect } from 'react'

// styles

import styles from './OpenGeokviz.module.css'

// 

import { Row, Col } from 'react-bootstrap'

// components

import MyInput from '@/components/ui/MyInput/MyInput'
import MyButton from '@/components/ui/MyButton/MyButton'



// fn

import { getSingleMineral } from '@/functions/minerale/getSingleMineral'
import { createQuestions } from '@/functions/minerale/createQuestions'


// 

interface OpenGeokvizProps {
  contextMenu: {
    menu: {id: number, label: string, value: string}[] | any,
    setMenu: any
  },

  contextMenuActive: {
    menuActive: {id: number, label: string, value: string} | any,
    setMenuActive: any
  },

  submitActive: any
  infoActive: any
}

const OpenGeokviz: FC<OpenGeokvizProps> = ({ contextMenu, contextMenuActive, submitActive, infoActive }) => {


  const [questionBlock, setQuestionBlock] = useState<any>()
  const [titleBtn, setTitleBtn] = useState<string>('')
  const {menuActive, setMenuActive} = contextMenuActive ?? {}

  // modal

  const { modalSubmitActive, setModalSubmitActive } = submitActive
  const { modalInfoActive, setModalInfoActive } = infoActive




  useEffect(() => {


    const emptyQuestion = [
        {
          question: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
          ]
        },

        {
          question: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
          ]
        },

        {
          question: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
          ]
        },

        {
          question: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
          ]
        }
    ]


    const getCurrentMienral = async () => {
      const data = await getSingleMineral(menuActive.id)
      console.log(data.question)


      if (data.question.length <= 1) {
        setQuestionBlock(emptyQuestion)
        setTitleBtn('Создать геоквиз')
      } else {
        setQuestionBlock(data.question)
        setTitleBtn('Изменить геоквиз')
      }

      
    }

    getCurrentMienral()

  }, [])



  const createGeokvizHandler = async (e: any) => {
    try {

      e.preventDefault()

      const formData = new FormData()
      formData.append('questions', JSON.stringify(questionBlock))

      const res = await createQuestions(formData, menuActive.id)
      if (res.data === 'success') {
        alert(res.message)
      } else {
        alert(res.message)
      }

      setMenuActive({
        id: menuActive.id,
        label: 'Минералы',
        value: 'minerals'
      })


    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        console.error(`Ошибка создания геоквиза ${error.message}`)
        throw new Error(
          `Ошибка создания геоквиза: ${error.message}`
        )
      }
      
    }
  }

  




  if (!questionBlock) {
    return (
      <div>Loading...</div>
    )
  }


  return (
    <Row>
      <Col>


      <form onSubmit={createGeokvizHandler}>
            <div className={styles.open_geokviz_container}>

              <div className={styles.open_geokviz_info_box}>
                  <div className={styles.open_geokviz_title}>Геоквиз</div>
                  <div className={styles.open_geokviz_subtitle}>На данной странице вам необходимо: итд,,,,</div>
              </div>

              <div className={styles.open_geokviz_wrapper}>

                <div className={styles.open_geokviz_question_block}>
                  {questionBlock.map((item: any, index: number) => {

                    return (

                      <div className={styles.question_block} key={index+1}>
      
                      <div className={styles.open__geokviz_question_wrapper} key={index+1}>
                          <span className={styles.open__geokviz_question_title}>Вопрос {index+1}</span>
                            <MyInput
                              value={questionBlock[index].title as any || item.title || ''}
                              onChange={
                                (e) => {
                                  const updateQuestion = [...questionBlock]
                                  
                                  updateQuestion[index] = {
                                    ...updateQuestion[index],
                                    title: e.target.value
                                  }

                                  setQuestionBlock(updateQuestion)
                                }
                              }
                              type={'text'}
                              placeholder={''}
                              style={{backgroundColor: '#9480A5', borderRadius: 10, color: 'white'}}
                            />
                      </div>


                      <div className={styles.answers_block}>

                            
                            {
                              item.answers.map((answer: any, answerIndex: number) => {
                                
                                return (

                                  <div className={styles.answer_wrapper} key={answerIndex+1}>
                                    <span className={styles.answers_title}>Ответ {answerIndex+1}</span>
                                    <MyInput
                                      
                                      value={answer.text || ''}
                                      onChange={(e) => {
                                        const updateQuestion = [...questionBlock]
                                        updateQuestion[index].answers[answerIndex] = {
                                          ...updateQuestion[index].answers[answerIndex],
                                          text: answer.title || e.target.value,
                                        }
                                        setQuestionBlock(updateQuestion)
                                      }}
                                      type={'text'}
                                      placeholder={''}
                                      style={{}}
                                      />


                                      <div className={styles.answers_checkbox_wrapper}>
                                        
                                        <span className={styles.answers_checkbox_title}>Правильный ответ</span>
                                        <input 
                                        className={styles.answers_checkbox}
                                        type='checkbox'
                                        checked={questionBlock[index].answers[answerIndex].correct}
                                        onChange={(e) => {
                                          const updateQuestion = [...questionBlock]
                                          updateQuestion[index].answers[answerIndex] = {
                                            ...updateQuestion[index].answers[answerIndex],
                                            correct: e.target.checked,
                                          }
                                          setQuestionBlock(updateQuestion)
                                        }}
                                      />

                                      </div>

                                
                                  </div>
                                )
                              })
                            }

                      </div>

                      </div>

                    )
                  })}
                </div>

              </div>

            </div>

            <div className={styles.geokviz_btn_container}>

              <MyButton
                text={titleBtn}
                btn={styles.btn}
                onClick={() => {
                 
                }} 
                type={'submit'}
                />

              <MyButton
                text={'Назад к миенарлу'}
                btn={styles.btn}
                onClick={() => {

                  setMenuActive({
                    id: 1,
                    label: 'Минералы',
                    value: 'minerals'
                  })
                }}
                type={'button'} />

            </div>
      </form>

      </Col>
    </Row>
  )
}

export default OpenGeokviz
