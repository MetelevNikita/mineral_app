import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

// styles

import styles from './Collection.module.css'

// bootstrap

import { Row, Col } from 'react-bootstrap'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import MyInput from '@/components/ui/MyInput/MyInput'
import MyFile from '@/components/ui/MyFile/MyFile'

// fn

import { getCollection } from '@/functions/collection/getCollection'
import { postCollection } from '@/functions/collection/postCollection'
import { deleteCollection } from '@/functions/collection/deleteCollection'

// icon

import deleteIcon from '@/../public/admin/UI/delete_icon.svg'

const Collectin: FC = () => {



  const [collection, setCollection] = useState<any>([])
  const [newCollectionMineral, setNewCollectionMineral] = useState<{title: string, image: File | any}>({
    title: '',
    image: ''
  })

  const [update, setUpdate] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
        const collection = await getCollection()
        setCollection(collection)

    })()
  }, [update])

  // 


  const handleAddMineral = async (e: any) => {

    e.preventDefault()

    if (!newCollectionMineral.title || !newCollectionMineral.image) {
      alert('Заполните все поля')
      return
    }

    const newFormData = new FormData()

    newFormData.append('title', newCollectionMineral.title)
    newFormData.append('image', newCollectionMineral.image[0])

    const res = await postCollection(newFormData) as any
    console.log(res)

    if (res.data === 'sucess') {
      alert(res.message)
    } else {
      alert(res.message)
    }

    window.location.reload()

  }


  const handleDeleteMineral = async (id: string | number) => {

    const deleteMineral = await deleteCollection(id) as any

    if (deleteMineral.data === 'sucess') {
      alert(`Минерал успешно ${id} удален`)
    } else {
      alert(deleteMineral.message || 'Неизвестная ошибка')
    }

    setUpdate(prev => !prev)

  
  }










  return (
    <Row>
      <Col>
      

      <div className={styles.collection_container}>
        
        <div className={styles.collection_title}>Создать новый минерал</div>

        <div className={styles.collection_wrapper}>

          {
            (collection.length >= 1) && collection.map((item: any, index: number) => {
              return (
                <div key={index+1} className={styles.collection_item_box}>
                  <div className={styles.collection_item_image_wrapper}>
                      <Image width={50} height={50} className={''} src={item.image} alt={'collection_icon'}/>
                  </div>


                  <div className={styles.collection_item_title_wrapper}>
                    <div className={styles.collection_item_title}>{item.title}</div>
                    <Image src={deleteIcon} width={20} height={20} alt={'delete_icon'} onClick={() => {handleDeleteMineral(item.id)}}/>
                  </div>


                </div>
              )
            })
          }



        </div>


        <form onSubmit={handleAddMineral}>


              <div className={styles.collection_form_inputs}>

                <MyInput
                  name={'title'}
                  title={'Название'}
                  placeholder="текст"
                  type={'text'}
                  style={{}}
                  value={newCollectionMineral.title}
                  onChange={(e: any) => setNewCollectionMineral({...newCollectionMineral, title: e.target.value})}
                />
                <MyFile
                  title={'Фото'}
                  name={'image'}
                  placeholder={'фото не выбрано'}
                  value={newCollectionMineral.image}
                  onChange={(e: any) => setNewCollectionMineral({...newCollectionMineral, image: e.target.files})}
                />

              </div>

              <div className={styles.collection_form_btn_container}>

                <MyButton
                  text={'Cоздать'}
                  btn={styles.btn}
                  onClick={() => {
                  }} 
                  type={'submit'}
                  />

              </div>


          </form>
      </div>
      
      
      
      </Col>
    </Row>
  )
}

export default Collectin
