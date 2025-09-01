"use client"

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'

// 

import { Container, Row, Col } from 'react-bootstrap'

// style

import styles from './page.module.css'

// components

import MyAcardeon from '@/components/ui/MyAcardeon/MyAcardeon'
import MyButton from '@/components/ui/MyButton/MyButton'
import Loading from '@/components/element/Loading/Loading'
import VideoBlock from '@/components/element/VideoBlock/VideoBlock'

// functions

import { getSingleMineral } from '@/functions/minerale/getSingleMineral'
import { div, style } from 'motion/react-client'


interface PageProps {
  params: { id: string };
}

const page = ({ params }: { params: { id: string } }) => {

const [id, setId] = useState<string | null>(null);
const [currentMinerale, setCurrentMinerale] = useState<any>([])



  useEffect(() => {
    const fetchId = async () => {
      const result = await params;
      setId(result.id);
    };
    fetchId();
  }, [params]);



  useEffect(() => {

    if (id !== null) {

    const getCurrentMineral = async () => {
        const data = await getSingleMineral(id)
        setCurrentMinerale(data)
    }

    getCurrentMineral()

    }

  }, [id])


  if (!currentMinerale.video) {
    return (

      <Loading text={'Loading...'} />

    )
  }



const parseDescription = currentMinerale.description.split('\n').map((line: string, lineIndex: number) => {
    // Разбиваем строку на фрагменты, чтобы обработать ## и ==
    const parts = line.split(/(##.*?##|==.*?==)/g);

    return (
      <div key={lineIndex}>
      <div >
        {parts.map((part, i) => {
          if (part.startsWith('##') && part.endsWith('##')) {
            return <strong key={i}>{part.replace(/^##\s*|\s*##$/g, '')}</strong>;
          }
          if (part.startsWith('==') && part.endsWith('==')) {
            return <strong style={{color: '#7D22C9'}} key={i}>{part.replace(/^==\s*|\s*==$/g, '')}</strong>;
          }
          return part; // обычный текст без изменений
        })}
      </div><br/></div>
    );
  });
  


  

  const urlNew = currentMinerale.video


  return (
    <Container>
            <Row>
                <Col className='d-flex justify-content-center align-items-center mb-3'>

                  <VideoBlock videoSrc={urlNew} />
                  
                </Col>
            </Row>

            <Row>
                <Col className='d-flex justify-content-center align-items-center mb-3'>
                  <MyAcardeon title={currentMinerale.title} content={parseDescription} image={''} />
                </Col>
            </Row>


            <Row>
              <Col className='d-flex justify-content-center align-items-center mb-2'>

                <Link href={`${id}/test/`}><MyButton text={'Пройти тест'} btn={styles.btn} onClick={() => {}} type={'button'} /></Link>
              
              </Col>
            </Row>
    </Container>
  )
}

export default page
