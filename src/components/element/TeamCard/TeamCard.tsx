import { FC } from 'react'
import Image from 'next/image'

// style

import styles from './TeamCard.module.css'

// 

import { Container, Row, Col } from 'react-bootstrap'

// 

interface TeamCardInfo {
  image: string,
  name: string,
  link: string | null
  info: string
}

const TeamCard: FC<TeamCardInfo> = ({ image, name, info, link }) => {
  return (


              <div className={styles.team_card_container}>

                  <div className={styles.team_card_wrapper}>

                        <Image className={styles.team_card_image} width={136} height={136} src={image} alt={name}/>
                        <div className={styles.team_card_name}>{name}</div>
                        <span className={styles.team_card_info}>{info} {(link) && (
                            <a target='_blank' className={styles.team_card_link} href={link}>{link}</a>
                          )}</span>
                  

                  </div>

              </div>
            
          
  )
}

export default TeamCard