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
            <Row className='mt-3'>

                    {children}
     
            </Row>
            <Footer />
        </Container>
    )
}