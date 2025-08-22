'use client'

import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "motion/react"

// css

import styles from './page.module.css'

// 

import MyButton from '@/components/ui/MyButton/MyButton'

// status

import { statusColor } from '@/database/statusColor'

// redux

import { useAppDispatch } from '@/types/hooks'
import { useAppSelector } from '@/types/hooks'
import { fetchGetStatus } from '@/functions/reduxAsync/status/fetchGetStatus'

// 

interface ModalStatusProps {
  statusText: string,
  statusImg: string,
  onClick: () => void

  // 

  bgButtonColor: string,
  bgButtonTop: string
}




const page: FC<{ params: { title: string } }> =  ({ params }) => {

  const dispatch = useAppDispatch()

  const [currentStatus, setCurrentStatus] = useState<any>(null)
  const [decodedTitle, setDecodedTitle] = useState('')

  useEffect(() => {
      const fetchData = async () => {
        const resolvedParams = await params
        const title = decodeURIComponent(resolvedParams.title)
        setDecodedTitle(title)
      }

      fetchData()
    }, [params])


  useEffect(() =>{
      dispatch(fetchGetStatus())
  }, [dispatch])





    const status = useAppSelector((state) => state.status.status).filter((item: any) => {
        return item.title === decodedTitle
    })[0]

    console.log('Status:', status)

    const currentStatusColor = statusColor.filter((item: any) => {
      return item.title === decodedTitle
    })[0]

    if (!status) {
      return <div className={styles.modal_container}>Статус не найден</div>
    }





    return (
    <div className={styles.container}>

          <motion.div className={styles.bottom_container} animate={{scale: 1, opacity: 1, y: 0}} initial={{scale: 0.8, opacity: 0, y: -20}} transition={{duration: 0.4, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }}} style={{background: currentStatusColor?.colorBottom}}>

                <div className={styles.top_container}>

                    <div className={styles.status_icon_wrapper}>
                      <Image src={status.icon} width={175} height={203} alt='status_icon'/>
                    </div>

                    <div className={styles.status_text}>Поздравляем! <br/> Вы достигли уровня</div>
                    <div className={styles.status_title}>{status.title}</div>

                      <div className={styles.status_btn_container}>

                          <Link href={'/main/profile'}><MyButton text={'Смотреть профиль'} btn={styles.status_btn} onClick={() => {}} type={'button'} /></Link>

                      </div>
                
                </div>

        </motion.div>
        

        <div className={styles.btn_wrapper}>

          <Link href={'/main/minerale'}><MyButton text={'Продолжить'} btn={styles.btn} onClick={() => {
            console.log('Button clicked');
          }} type={'button'} /></Link>


        </div>

    </div>
  )

  
}

export default page


