import { FC, useEffect, useState } from 'react'

// styles

import styles from './EditUser.module.css'

// bootstrap

import { Row, Col } from 'react-bootstrap'

// functions

import { getUsers } from '@/functions/getUsers'

// componenents

import UserComponent from '../../ui/userComponent/UserComponent'

// functions

import { deleteUser } from '@/functions/deleteUser'
import { updateUser } from '@/functions/updateUser'

// 



interface EditUserProps {

}

// 

const EditUser: FC<EditUserProps> = () => {

  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    const users = async () => {
      const data = await getUsers()
      console.log(data);
      setUsers(data)
    }


    users()
  }, [])




  return (
    <Row>
      <Col>

        <div className={styles.user_container}>

          <div className={styles.user_title}>Пользователи</div>

            <div className={styles.user_wrapper}>
              {
                (users) && users.map((user: any, index: number) => {
                  return (
                    <UserComponent key={index+1} id={user.id} name={user.name} num={index+1} blocked={user.blocked} delete={deleteUser} update={updateUser}/>
                  )
                })
              }
            </div>

        </div>
      
      </Col>
    </Row>
  )
}

export default EditUser
