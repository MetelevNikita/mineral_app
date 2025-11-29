import { FC, useState } from 'react'
import Image from 'next/image'

// styles

import styles from './UserComponent.module.css'

// icon

import deleteIcon from '@/../public/admin/UI/delete_icon.svg'
import blockIcon from '@/../public/admin/UI/block_icon.svg'
import { deleteUser } from '@/functions/deleteUser'
import { updateUser } from '@/functions/updateUser'



interface UserComponentProps {
  id: number | string
  name: string
  num: number | string
  blocked: boolean
  delete: any
  update: any
}

const UserComponent: FC<UserComponentProps> = ({ id, name, num, blocked }) => {

  console.log(blocked)


  const [iconBlockActive, setIconBlockActive] = useState<boolean>(false)
  const [iconDeleteActive, setIconDeleteActive] = useState<boolean>(false)


  console.log(id)


  return (
    <div className={styles.user_component_container} style={(Number(num) % 2 !== 0) ? {backgroundColor: '#F8F6FB'} : {backgroundColor: '#FFFFFF'}}>

      <div className={styles.user_component_name_wrapper}>
        <div className={styles.user_component_name_num}>{num}</div>
        <div className={styles.user_component_name_title}>{name}</div>
      </div>


      {
        blocked &&
        <div className={styles.user_component_blocked}>
          <div className={styles.user_component_blocked_title}>Заблокирован</div>
        </div>
      }



      <div className={styles.user_component_icon_container}>


          <div className={styles.user_component_icon_wrapper}
            onClick={(!blocked) ? () => {
              if (confirm(`Подтвердите блокировку пользователя "${name}"`)) {
                updateUser(id.toString(), 'true')
                alert(`Пользователь "${name}" заблокирован`)
              }
            } : () => {
              if (confirm(`Подтвердите разблокировку пользователя "${name}"`)) {
                updateUser(id.toString(), 'false')
                alert(`Пользователь "${name}" разблокирован`)
              }
            }}>
            {(iconBlockActive) && <div style={{color: '#F4AB25'}} className={styles.user_component_icon_title}>{(blocked) ? 'Разблокировать' : 'Заблокировать'}</div>}
            <Image className={styles.user_component_icon} src={blockIcon} alt='block_icon' onMouseLeave={() => {setIconBlockActive(false)}} onMouseOver={() => {setIconBlockActive(true)}}/>
          </div>


          <div className={styles.user_component_icon_wrapper}
            onClick={() => {
              if (confirm(`Подтвердите удаление пользователя "${name}"`)) {
                deleteUser(id.toString())
                alert(`Пользователь "${name}" удален`)
                window.location.reload()
              }
              
            }}>
            {(iconDeleteActive) && <div style={{color: '#FF6464'}} className={styles.user_component_icon_title}>Удалить</div>}
            <Image className={styles.user_component_icon} src={deleteIcon} alt='delete_icon' onMouseLeave={() => {setIconDeleteActive(false)}} onMouseOver={() => {setIconDeleteActive(true)}}/>
          </div>


      </div>

    </div>
  )
}

export default UserComponent
