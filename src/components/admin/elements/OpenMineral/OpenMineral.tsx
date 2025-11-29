'use client'

import { FC, useEffect, useState } from 'react'

// styles

import styles from './OpenMineral.module.css'

// bootstrap

import { Col, Row } from 'react-bootstrap'

// functions

import { getSingleMineral } from '@/functions/minerale/getSingleMineral'

// components

import Loading from '@/components/element/Loading/Loading'

// ui

import MyInput from '@/components/ui/MyInput/MyInput'
import MyButton from '@/components/ui/MyButton/MyButton'
import MyTextArea from '@/components/ui/MyTextArea/MyTextArea'
import MyFile from '@/components/ui/MyFile/MyFile'


// fn

import { pathcMineral } from '@/functions/minerale/patchMineral'
import { deleteMineral } from '@/functions/minerale/deleteMineral'

// 

interface OpenMineralProps {
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

const OpenMineral: FC<OpenMineralProps> = ({ contextMenu, contextMenuActive, submitActive, infoActive }) => {

  // 

  const {modalSubmitActive, setModalSubmitActive} = submitActive
  const {modalInfoActive, setModalInfoActive} = infoActive

  // files

  const [newForm, setNewForm] = useState<any>({
    title: null,
    image: null,
    video: null,
    description: null
  })


  const [mineral, setMineral] = useState<any>(null)
  const {menuActive, setMenuActive} = contextMenuActive;

  console.log(menuActive)


  useEffect(() => {
    const getCurrentMienral = async () => {
      const data = await getSingleMineral(menuActive.id)
      setMineral(data)
    }

    getCurrentMienral()
  }, [])


  const changeMineralHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
    
        const formData = new FormData()

        if (newForm.title !== null) {
          formData.append('title',  newForm.title)
        }

        if (newForm.image !== null) {
          formData.append('image',  newForm.image[0])
        }

        if (newForm.video !== null) {
            formData.append('video', newForm.video[0])
        }

        if (newForm.description !== null) {
          formData.append('description', newForm.description)
        }


        console.log(...formData)
        const result = await pathcMineral(formData, menuActive.id)
        console.log(result)

        if (result.message === 'Минерал успешно обновлен') {
          setModalSubmitActive({
            type: 'change',
            status: true
          })
        } else {
          setModalSubmitActive({
            type: 'error',
            status: true
          })
        }

     } catch (error: Error | unknown) {
        if (error instanceof Error) {
          console.error(
            `Ошибка измененеия минерала: ${error.message}`,
          )
          setModalSubmitActive({
            type: 'error',
            status: true
          })
        }


        console.error(
          `Ошибка измененеия минерала: ${error}`,
        )
        setModalSubmitActive({
          type: 'error',
          status: true
        })
        
     }

  }


  const deleteMineralHandler = async (id: any) => {
    try {


      const result = await deleteMineral(id)
      if (result.message === 'Минерал успешно удален') {
        setModalSubmitActive({
          type: 'delete',
          status: true
        })
      } else {
        setModalSubmitActive({
          type: 'error',
          status: true
        })
      }

      
    } catch (error) {
      if (error) {
        console.log(error)
      }
    }
  }





  if (!mineral) {

      return (
        <Row>
          <Col>

          <Loading text={'Загрузка'} />
          
          </Col>
        </Row>

      )

  }

  console.log(menuActive)



  return (

    <Row>
      <Col>
      

      <div className={styles.opne_mineral_container}>



        <div className={styles.mineral_info_box}>

          <div className={styles.mineral_title}>{mineral.title}</div>
          <MyButton
            text={'Удалить'}
            btn={styles.mineral_delete_btn}
            onClick={() => {
              deleteMineralHandler(menuActive.id)
            }}
            type={'button'}
            />

        </div>
        


        <div className={styles.opne_mineral_wrapper}>

        <form onSubmit={changeMineralHandler}>


            <MyInput title={'Название минерала'} name={'title'} type={'text'} placeholder={''} style={{}} value={newForm.title || mineral.title} onChange={(e) => {setNewForm({...newForm, title: e.target.value})}}/>


            {/* photo and video */}

            <MyFile title='Фото минерала' placeholder={mineral.image} name={'image'} onChange={(e) => {setNewForm({...newForm, image: e.target.files})}} value={newForm.image}/>
            <MyFile title='Видео' placeholder={mineral.video} name={'video'} onChange={(e) => {setNewForm({...newForm, video: e.target.files ? e.target.files[0] : null})}} value={newForm.video}/>

            {/*  */}


            <MyTextArea name={'description'} title={'Описание минерала'} placeholder={'Введите описание'} value={newForm.description || mineral.description} onChange={(e) => {setNewForm({...newForm, description: e.target.value})}} rows={13} style={{}}/>


            <div className={styles.btn_container}>
              <MyButton text={'Редактировать Геоквиз'} btn={styles.btn} onClick={() => {
                confirm('Вы уверены в переходе если вы не сохранили изменения по миенралу они не будут применены') && 
                setMenuActive({
                  id: menuActive.id,
                  label: 'Изменить геоквиз',
                  value: 'change_geokviz'
                })
              }} type={'button'} />
              <MyButton text={'Сохранить'} btn={styles.btn} onClick={() => {}} type={'submit'} />
            </div>

        </form>


        </div>
      </div>
      
      
      
      </Col>
    </Row>

  )
}

export default OpenMineral
