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


interface PageProps {
  params: { title: string };
}

const page = ({ params }: { params: { title: string } }) => {

const [titleMineral, setTitleMineral] = useState<string | null>(null);
const [currentMinerale, setCurrentMinerale] = useState<any>([])




  useEffect(() => {
    const fetchId = async () => {
      const result = await params;
      setTitleMineral(result.title);
    };
    fetchId();
  }, [params]);



  useEffect(() => {

    if (titleMineral !== null) {

    const getCurrentMineral = async () => {
        const data = await getSingleMineral(titleMineral)
        setCurrentMinerale(data)
    }

    getCurrentMineral()

    }

  }, [titleMineral])


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
                <Col className='d-flex justify-content-center align-items-center mb-2'>

                  <VideoBlock videoSrc={urlNew} />
                  
                </Col>
            </Row>

            <Row className=''>
                <Col className='d-flex justify-content-center align-items-center mb-3'>
                  <MyAcardeon title={currentMinerale.title} content={parseDescription} image={''} />
                </Col>
            </Row>

            <Row className=''>
              <Col className='d-flex justify-content-center align-items-center mb-2'>

                <Link href={`${titleMineral}/test/`}><MyButton text={'Пройти геоквиз'} btn={styles.btn} onClick={() => {}} type={'button'} /></Link>
              
              </Col>
            </Row>
    </Container>
  )
}

export default page
