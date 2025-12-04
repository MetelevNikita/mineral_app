import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

// styles

import styles from './EditStatus.module.css'

// bootstrap

import { Row, Col } from 'react-bootstrap'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import MyInput from '@/components/ui/MyInput/MyInput'
import MyFile from '@/components/ui/MyFile/MyFile'

// fn

import { getStatus } from '@/functions/status/getStatus'
import { patchStatus } from '@/functions/status/patchStatus'
import { deleteStatus } from '@/functions/status/deleteStatus'

//

interface EditStatusProps {
  contextMenu: {
    menu: {id: number, label: string, value: string}[] | any,
    setMenu: any
  }
  contextMenuActive: {
    menuActive: {id: number, label: string, value: string} | any,
    setMenuActive: any
  }
}




const EditStatus: FC<EditStatusProps> = ({ contextMenu, contextMenuActive }) => {

  const { menu, setMenu } = contextMenu
  const { menuActive, setMenuActive } = contextMenuActive

  // 

  const [status, setStatus] = useState<any>(null)
  const [newStatus, setNewStatus] = useState<{title: string, icon: File | any, total: number, price: string}>({
    title: '',
    icon: '',
    total: 0,
    price: ''
  })


  useEffect(() => {
    (async () => {
      const data = await getStatus()
      if (data) {
          const foundStatus = data.find((item: {id: string | number}) => item.id == menuActive.id)
          console.log(foundStatus)
          setStatus(foundStatus || null)
      }
    })()
  }, [menuActive.id])






  const handleEditStatus = async (e: any) => {

    e.preventDefault()

    const formData = new FormData()


    if (newStatus.title) {
      formData.append('title', newStatus.title)

    }

    if (newStatus.icon) {
      formData.append('icon', newStatus.icon[0])
    }

    if (newStatus.total) {
      formData.append('total', newStatus.total.toString())
    }

    if (newStatus.price) {
      formData.append('price', newStatus.price)
    }



    //

    const res = await patchStatus(formData, menuActive.id) as any
    console.log(res)

    if (res.data === 'sucess') {
      alert(res.message)
    } else {
      alert(res.message)
    }


    setMenuActive({
      id: menuActive.id,
      label: 'Статусы',
      value: 'status'
    })
  }


  const deleteEditHandler = async (id: string | number) => {

    const deleteCurrentStatus = await deleteStatus(id) as any
    console.log(deleteCurrentStatus)

    if (deleteCurrentStatus.data === 'success') {
      alert(deleteCurrentStatus.message)
    } else if (deleteCurrentStatus.data === 'error') {
      alert(deleteCurrentStatus.message)
    }

    setMenuActive({
      id: menuActive.id,
      label: 'Статусы',
      value: 'status'
    })
  }


  //


  if (!status) {
    return (
      <div>Загрузка...</div>
    )
  }


  return (
    <Row>
      <Col>
      

      <div className={styles.status_container}>

        <div className={styles.status_title_wrapper}>

          <div className={styles.status_title}>Изменить статус</div>
          <MyButton
            text={'Удалить'}
            btn={styles.status_title_btn}
            onClick={() => {
              confirm('Подтвредите уадления статуса') &&
              deleteEditHandler(menuActive.id)
            }}
            type={'button'} />

        </div>
        


        <form onSubmit={handleEditStatus}>

              <div className={styles.status_form_inputs}>

                <MyInput
                  title={'Введите название'}
                  type={'text'}
                  placeholder={'текст'}
                  style={{}}
                  value={newStatus.title || status.title}
                  onChange={(e: any) => setNewStatus({...newStatus, title: e.target.value})}
                />
                <MyFile
                  title={'Загрузите иконку'}
                  name={''}
                  placeholder={status.icon}
                  value={newStatus.icon}
                  onChange={(e: any) => setNewStatus({...newStatus, icon: e.target.files})}
                />
                <MyInput
                  title={'Введите скидку'}
                  type={'number'}
                  placeholder={'текст'}
                  style={{}}
                  value={newStatus.total || status.total}
                  onChange={(e: any) => setNewStatus({...newStatus, total: e.target.value})}
                />
                <MyInput
                  title={'Введите скидку'}
                  type={'text'}
                  placeholder={'текст'}
                  style={{}}
                  value={newStatus.price || status.price}
                  onChange={(e: any) => setNewStatus({...newStatus, price: e.target.value})}
                />


              </div>

              <div className={styles.status_form_btn_container}>

                <MyButton
                  text={'Изменить'}
                  btn={styles.btn}
                  onClick={() => {
                  }} 
                  type={'submit'}
                  />


                <MyButton
                  text={'Назад'}
                  btn={styles.btn}
                  onClick={() => {
                    setMenuActive({
                      id: menuActive.id,
                      label: 'Статусы',
                      value: 'status'
                    })
                  }} 
                  type={'button'}
                  />

              </div>


        </form>
      </div>
      
      
      
      </Col>
    </Row>
  )
}

export default EditStatus
