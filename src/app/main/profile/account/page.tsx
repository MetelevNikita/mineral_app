'use client'

import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

// styles

import styles from './page.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MyInput from '@/components/ui/MyInput/MyInput'
import MyButton from '@/components/ui/MyButton/MyButton'
import Avatar from '@/components/ui/Avatar/Avatar'

// modal


import ModalResult from '@/components/modals/ModalResult/ModalResult'

// image

import editAvatar from '@/../public/account/edit_avatar_icon.svg'
import deleteAccount from '@/../public/account/deleteAccount.svg'

// redux

import { useAppSelector } from '@/types/hooks'
import { useAppDispatch } from '@/types/hooks'
import { getUsers } from '@/functions/reduxAsync/users/getUsers'

// types

import { UserType } from '@/types/type'

// functions

import { updateProfile } from '@/functions/updateProfile'
import { deleteUser } from '@/functions/deleteUser'

// img

import modalIcon from '@/../public/ModalResult/Done.svg'

// 

const page: FC = () => {


    const router = useRouter()


    const [userId, setUserId] = useState<string>('');
    const [profile, setProfile] = useState<any>({
        avatar: null,
        age: '',
        profession: '',
        bio: '',
        phone: '',
        telegram: ''
    })

    const [previweAvatar, setPreviewAvatar] = useState<string | null>(null);
    const [isUpdate, setIsUpdate] = useState<boolean>(false)
    
    const dispatch = useAppDispatch()
    
    useEffect(() => {
    const userID = localStorage.getItem('userID')

    if (userID !== null) {
        setUserId(userID)
    }

    dispatch(getUsers())
    }, [dispatch])
    

    const currentUser = useAppSelector(state => state.user.user).filter((user: UserType) => user.id === parseInt(userId));

    useEffect(() => {
        if (!profile.avatar) return;
        const objectUrl = URL.createObjectURL(profile.avatar);

        setPreviewAvatar(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);

    }, [profile.avatar]);



    if (!currentUser || currentUser.length < 1) {
        return (
            <Container>
                <Row className='h-100 d-flex flex-column justify-content-center align-items-center'>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <div className={styles.title}>Загрузка...</div>
                    </Col>
                </Row>
            </Container>
        );
    }

    const userProfile = currentUser[0].profile || {}


  return (
    <Container>


        {

            isUpdate && (

            <ModalResult
                imgTop={modalIcon}
                onClickLink={() => {

                    setIsUpdate(false)
                    router.push('/main/profile')
                    router.refresh()
                    
                }}
                text={'Аккаунт обновлен'}
                textBtn={'Продолжить'}
                colorBackground={{background: 'linear-gradient(262deg, #7D22C9 3.49%, #FFBC41 121.77%)'}}
                colorTop={{background: 'linear-gradient(169deg, rgba(255, 255, 255, 0.28) -10.03%, rgba(255, 255, 255, 0.28) 96.66%)'}} />
            )

        }



        <Row>
            <Col className='d-flex justify-content-center align-items-center mb-4'>

                <div className={styles.title_container}>

                    <div className={styles.title}>Личные данные</div>

                </div>

            </Col>
        </Row>




        <Row className='mb-3'>
            <Col className='d-flex justify-content-center align-items-center mb-2'>

                <div className={styles.avatar_container}>
                    <Avatar src={currentUser[0].profile?.avatar || null} previewSrc={previweAvatar} alt={'avatar'} />
                </div>


                    <div className={styles.edit_avatar_container}>

                        <label htmlFor="file">
                            <input
                                name='avatar'
                                type="file"
                                id="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const files = e.target.files;
                                    if (files && files[0]) {
                                        setProfile({ ...profile, avatar: files[0] });
                                    }
                                }}
                                style={{ display: 'none' }}
                            />

                            <Image src={editAvatar} width={14} height={14} alt={'edit_avatar'}/>
                        </label>
                        
                    </div>

            </Col>
        </Row>

        <Row className='mb-2'>
            <Col className='d-flex flex-column justify-content-center align-items-center '>


                <MyInput value={profile.age} onChange={(e) => {setProfile({...profile, age: e.target.value})}} image={editAvatar} name={'age'} type={'text'} placeholder={(currentUser[0].profile) ? currentUser[0].profile.age : 'Возраст'} style={{marginBottom: '15px'}}/>


                {/* <MyInput value={profile.profession} onChange={(e) => {setProfile({...profile, profession: e.target.value})}} image={editAvatar} name={'profession'} title={'Студент или работаете'} type={'text'} placeholder={(currentUser[0].profile) ? currentUser[0].profile.profession : 'Текст'} style={{marginBottom: '15px'}} /> */}


                <MyInput value={profile.bio} onChange={(e) => {setProfile({...profile, bio: e.target.value})}} image={editAvatar} name={'bio'} type={'text'} placeholder={(currentUser[0].profile && currentUser[0].profile.bio.length > 1) ? currentUser[0].profile.bio : 'Учебное заведение или место работы'} style={{marginBottom: '15px'}} />


                <MyInput value={profile.phone} onChange={(e) => {setProfile({...profile, phone: e.target.value})}} image={editAvatar} name={'phone'} type={'tel'} placeholder={(currentUser[0].profile && currentUser[0].profile.phone.length > 1) ? currentUser[0].profile.phone : 'Номер телефона'} style={{marginBottom: '15px'}} />

                    
                <MyInput value={profile.telegram} onChange={(e) => {setProfile({...profile, telegram: e.target.value})}} image={editAvatar} name={'telegram'} type={'tel'} placeholder={(currentUser[0].profile && currentUser[0].profile.length > 1) ? currentUser[0].profile.telegram : 'Аккаунт соцсети'} style={{marginBottom: '15px'}} />

                 <Col className='d-flex justify-content-center align-items-center'>
                    <MyButton text={'Сохранить'} btn={styles.btn} onClick={async () => {
                    const update = await updateProfile(profile)
                    if (!update.success) {
                        alert(update.message)
                        return
                    }
                    setIsUpdate(true)
                    }} type={'button'} />
                    <Link href={'/main/profile'} style={{textDecoration: 'none'}}><MyButton text={'Назад'} btn={styles.btn} onClick={() => {''}} type={'button'}/></Link>
                </Col>

        
            </Col>
        </Row>


        <Row className='mt-4 mb-4'>

            <Col className='d-flex justify-content-center align-items-center'>

            <div className={styles.delete_account_container}>

                <div className={styles.line}></div>

                <div className={styles.delete_account_box}
                    onClick={() => {
                        deleteUser(userId || '')
                        confirm("Пользователь успешно удален. Вы будете перенаправлены на страницу входа.");
                        localStorage.removeItem('userID'); 
                        window.location.href = '/auth/login'; 
                    }}>
                    <Image src={deleteAccount} width={18} height={20} alt={'empty_avatar'}/>
                    <div className={styles.delete_account_title}>Удалить профиль</div>
                </div>

            </div>

 
            </Col>

        </Row>


    </Container>

  )
}

export default page
