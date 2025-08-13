'use client'

import { CSSProperties, FC } from 'react'
import Image, { StaticImageData } from 'next/image'

// style

import styles from './ModalResult.module.css'

// components

import MyButton from '@/components/ui/MyButton/MyButton'

// img

import starIcon from '@/../public/ModalResult/star.svg'
import { div } from 'motion/react-client'

interface ModalResultProps {
    imgTop: string | StaticImageData
    onClickLink: () => any
    imgClose?: string | StaticImageData
    onClickClose?: () => any
    text: string
    textBtn: string
    colorBackground: CSSProperties
    colorTop: CSSProperties


}

const ModalResult: FC<ModalResultProps> = ({ imgTop, imgClose, onClickLink, onClickClose, text, textBtn, colorBackground, colorTop}) => {



  return (

        <div className={styles.modal_container}>

                <div className={styles.bottom_container} style={colorBackground}>

                    <div className={styles.top_container} style={colorTop}>


                   

                        <div className={styles.close_wrapper}>

                            {
                                imgClose && (
                                    <Image src={imgClose} width={20} height={20} alt='close_icon' onClick={onClickClose}/>
                                )
                                
                            }

                        </div>

                        <div className={styles.image_container}>

                            <Image className={styles.image} src={imgTop} alt='star_icon'/>

                        </div>


                        <div className={styles.image_text_container}>
                            <div className={styles.text}>{text}</div>
                        </div>


                        <div className={styles.image_btn_container}>

                            <MyButton text={textBtn} btn={styles.btn} onClick={onClickLink} type={'button'} />

                        </div>

                

                    </div>
                
                </div>


        </div>

  )
}

export default ModalResult
