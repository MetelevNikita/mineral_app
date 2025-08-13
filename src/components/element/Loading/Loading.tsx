import { FC } from 'react'

// styles

import styles from './Loading.module.css'

// bootstrap

import { Container, Row, Col } from 'react-bootstrap'

interface LoadingProps {
    text: string
}

const Loading:FC<LoadingProps> = ({ text }) => {
  return (
    <Row>
        <Col className='d-flex justify-content-center align-items-center mb-3'>

            <div className={styles.loading}>{text}</div>
        
        </Col>
    </Row>
  )
}

export default Loading
