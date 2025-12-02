'use client'

import { FC, useState } from 'react'

// styles

import styles from './NewMineral.module.css'

// bootstrap

import { Col, Row } from 'react-bootstrap'

// ui

import MyInput from '@/components/ui/MyInput/MyInput'
import MyButton from '@/components/ui/MyButton/MyButton'
import MyTextArea from '@/components/ui/MyTextArea/MyTextArea'
import MyFile from '@/components/ui/MyFile/MyFile'


// functions

import { postMineral } from '@/functions/minerale/postMineral'

// 

interface NewMineralProps {
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

const NewMineral: FC<NewMineralProps> = ({ contextMenu, contextMenuActive, submitActive, infoActive }) => {

  // modals

  const {modalSubmitActive, setModalSubmitActive} = submitActive
  const {modalInfoActive, setModalInfoActive} = infoActive

  // files

  const [newForm, setNewForm] = useState<any>({
    title: '',
    image: '',
    video: '',
    description: ''
  })


  const [mineral, setMineral] = useState<any>(null)
  const {menuActive, setMenuActive} = contextMenuActive;
  

  console.log(menuActive)


  const newMineral = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    if (!newForm.title || !newForm.description) {
      alert('Заполните все поля')
      return
    }


    const formData = new FormData()
    formData.append('title',  newForm.title),
    formData.append('image',  newForm.image[0]),
    formData.append('video', newForm.video[0]),
    formData.append('description', newForm.description)



    const res = await postMineral(formData)


    if (res.data === 'sucees') {
      alert(res.message)
      setMenuActive({
        id: 1,
        label: 'Минералы',
        value: 'minerals'
      })
    } else {
      alert(res.message),
      setMenuActive({
        id: 1,
        label: 'Минералы',
        value: 'minerals'
      })
    }

  }



  return (

    <Row>
      <Col>
      

      <div className={styles.opne_mineral_container}>
        
        <div className={styles.mineral_title}>Создать новый минерал</div>

        <div className={styles.opne_mineral_wrapper}>

        <form onSubmit={newMineral}>


            <MyInput title={'Название минерала'} name={'title'} type={'text'} placeholder={''} style={{}} value={newForm.title} onChange={(e) => {setNewForm({...newForm, title: e.target.value})}}/>


            {/* photo and video */}

            <MyFile title='Фото минерала' placeholder={'Фото не выбрано'} name={'image'} onChange={(e) => {setNewForm({...newForm, image: e.target.files})}} value={newForm.image}/>
            <MyFile title='Видео' placeholder={'Видео не выбрано'} name={'video'} onChange={(e) => {setNewForm({...newForm, video: e.target.files})}} value={newForm.video}/>

            {/*  */}


            <MyTextArea name={'description'} title={'Описание минерала'} placeholder={''} value={newForm.description} onChange={(e) => {setNewForm({...newForm, description: e.target.value})}} rows={13} style={{}}/>

            <div className={styles.btn_container}>
              <MyButton text={'Назад'} btn={styles.btn} onClick={() => {
                setMenuActive({
                  id: 1,
                  label: 'Минералы',
                  value: 'minerals'
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

export default NewMineral
