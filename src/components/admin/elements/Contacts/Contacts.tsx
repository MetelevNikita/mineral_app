import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

// styles

import styles from './Contacts.module.css'

// bootstrap

import { Row, Col } from 'react-bootstrap'

// components

import MyButton from '@/components/ui/MyButton/MyButton'
import MyInput from '@/components/ui/MyInput/MyInput'
import MyFile from '@/components/ui/MyFile/MyFile'

// fn


import { getContacts } from '@/functions/contacts/getContacts'
import { postContacts } from '@/functions/contacts/postContacts'


// 

const Contacts: FC = () => {

  const [contacts, setContacts] = useState<any>({
    adress: '',
    events: '',
    laboratory: '',
    news: '',
    path: '',
    way: '',
  })

  const [newContact, setNewContact] = useState<any>({})


  useEffect(() => {

    (async () => {
      const data = await getContacts()
      if (data[0]) {
        setContacts({
          adress: data[0].adress || '',
          events: data[0].events || '',
          laboratory: data[0].laboratory || '',
          news: data[0].news || '',
          path: data[0].path || '',
          way:  data[0].way || '',
        })
      }
    })()

  }, [])



  console.log(newContact)









  //


  const handlerAddContacts = async (e: any) => {

    e.preventDefault()

    const formData = new FormData()

    //

    formData.append('adress', newContact.adress || ''),
    formData.append('events', newContact.events || ''),
    formData.append('laboratory', newContact.laboratory || ''),
    formData.append('news', newContact.news || ''),
    formData.append('path', newContact.path || ''),
    formData.append('way', (newContact.way instanceof FileList) ? newContact.way[0] : newContact.way)

    // 


    const res = await postContacts(formData) as {message: string, data: string, status: number}
    
    if (res.data === 'sucees') {
      alert(res.message)
    } else {
      alert(res.message)
    }
    

  }



  // 


  if (!contacts) {
    return (
      <div>Loading...</div>
    )
  }



  return (
    <Row>
      <Col>
      

      <div className={styles.contacts_container}>
        
        <div className={styles.contacts_title}>Страница контактов</div>

            <div className={styles.contacts_wrapper}>

              <form onSubmit={handlerAddContacts}>


                <MyInput
                  title={'Адресс'}
                  type={'text'}
                  placeholder={'текст'}
                  style={{}}
                  value={newContact.adress || contacts?.adress}
                  onChange={(e: any) => setNewContact({...newContact, adress: e.target.value})}
                />


                <MyInput
                  title={'Проведение мероприятий'}
                  type={'text'}
                  placeholder={'текст'}
                  style={{}}
                  value={newContact.events || contacts?.events}
                  onChange={(e: any) => setNewContact({...newContact, events: e.target.value})}
                />

                <MyInput
                  title={'Лаборатория'}
                  type={'text'}
                  placeholder={'текст'}
                  style={{}}
                  value={newContact.laboratory || contacts?.laboratory}
                  onChange={(e: any) => setNewContact({...newContact, laboratory: e.target.value})}
                />


                <MyInput
                  title={'Новости'}
                  type={'text'}
                  placeholder={'текст'}
                  style={{}}
                  value={newContact.news || contacts?.news}
                  onChange={(e: any) => setNewContact({...newContact, news: e.target.value})}
                />


                <MyInput
                  title={'Как добраться'}
                  type={'text'}
                  placeholder={'текст'}
                  style={{}}
                  value={newContact.path || contacts.path}
                  onChange={(e: any) => setNewContact({...newContact, path: e.target.value})}
                />

                <MyFile
                  title={'Загрузите иконку'}
                  name={''}
                  placeholder={contacts.way}
                  value={newContact.way}
                  onChange={(e: any) => setNewContact({...newContact, way: e.target.files})}
                />



                  <div className={styles.contacts_form_btn_container}>

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

        </div>
      
      
      
      </Col>
    </Row>
  )
}

export default Contacts
