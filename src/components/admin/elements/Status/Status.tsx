import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

// styles

import styles from './Status.module.css'

// bootstrap

import { Row, Col } from 'react-bootstrap'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import MyInput from '@/components/ui/MyInput/MyInput'
import MyFile from '@/components/ui/MyFile/MyFile'

// fn

import { getStatus } from '@/functions/status/getStatus'
import { postStatus } from '@/functions/status/postStatus'

//


interface StatusProps {
  contextMenu: {
    menu: {id: number, label: string, value: string}[] | any,
    setMenu: any
  }
  contextMenuActive: {
    menuActive: {id: number, label: string, value: string} | any,
    setMenuActive: any
  }
}

const Status: FC<StatusProps> = ({ contextMenu, contextMenuActive }) => {

  const { menu, setMenu } = contextMenu
  const { menuActive, setMenuActive } = contextMenuActive

  // 

  const [status, setStatus] = useState<any>([])
  const [newStatus, setNewStatus] = useState<{title: string, icon: File | any, price: string}>({
    title: '',
    icon: '',
    price: ''
  })


  useEffect(() => {
    (async () => {
      const data = await getStatus()
      if (data) {
        setStatus(data)
      }
    })()
  }, [])


  console.log(status)


  
  const handleNewStatus = async (e: any) => {

    e.preventDefault()

    if (!newStatus.title || !newStatus.icon) {
      alert('Заполните все поля')
      return
    }

    const formData = new FormData()
    formData.append('title', newStatus.title)
    formData.append('icon', newStatus.icon[0])
    formData.append('price', newStatus.price)

    //

    const res = await postStatus(formData)
    console.log(res)

    if (!res) {
      alert('Неизвестная ошибка')
      return 
    }

    confirm('Новый статус создан') &&
    setNewStatus({
      title: '',
      icon: '',
      price: ''
    })


  }


  // 


  return (
    <Row>
      <Col>
      

      <div className={styles.status_container}>
        
        <div className={styles.status_title}>Создать новый статус</div>

        <div className={styles.status_wrapper}>


          {
            (status || []).map((item: any, index: number) => {
              return (
                <div key={index+1} className={styles.status_item_box}>
                  <div className={styles.status_item_image_wrapper}>
                      <Image width={40} height={40} src={item.icon} alt={'icon'} />
                  </div>

                  <div className={styles.status_item_image_title}>{item.title}</div>
                  <MyButton
                    text={'Изменить'}
                    btn={styles.status_item_btn}
                    onClick={() => {
                      setMenuActive({
                        id: item.id,
                        label: 'Изменить статус',
                        value: 'edit_status'
                      })
                    }}
                    type={'button'} />
                </div>
              )
            })
          }


        </div>


        <form onSubmit={handleNewStatus}>


              <div className={styles.status_form_inputs}>


                <MyInput
                  title={'* Введите название'}
                  type={'text'}
                  placeholder={'текст'}
                  style={{}}
                  value={newStatus.title || ''}
                  onChange={(e: any) => setNewStatus({...newStatus, title: e.target.value})}
                />
                <MyFile
                  title={'* Загрузите иконку'}
                  name={''}
                  placeholder={'иконка не выбрана'}
                  value={newStatus.icon}
                  onChange={(e: any) => setNewStatus({...newStatus, icon: e.target.files})}
                />
                <MyInput
                  title={'Введите скидку'}
                  type={'text'}
                  placeholder={'текст'}
                  style={{}}
                  value={newStatus.price}
                  onChange={(e: any) => setNewStatus({...newStatus, price: e.target.value})}
                />


              </div>

              <div className={styles.status_form_btn_container}>

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

export default Status
