'use client'

import {useContext} from 'react'


// 

import { Container, Col, Row } from "react-bootstrap";

// components

import Header from "@/components/element/Header/Header";
import Footer from "@/components/element/Footer/Footer";

export default function authLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <Container style={{padding: 0}}>
            <Header />
            <Row className='mt-5'>
                <Col className='mt-5'>
                    {children}
                </Col>
                       
            </Row>
            <Footer />
        </Container>
    )
}