'use client'

import { createContext, useState, useContext } from 'react'

// 

import { Container, Row } from "react-bootstrap";

// components

import Header from "@/components/element/Header/Header";
import Footer from "@/components/element/Footer/Footer";


const menuContext = createContext({
    menuActive: '',
    setMenuActive: (path: string) => {}
})

const topMenuContext = createContext({
    topMenuOn: false,
    setTopMenuOn: (value: boolean) => {}
})


export const useMenuContext = () => {
    const context = useContext(menuContext)
    if (!context) {
        throw new Error('useMenuContext must be used within a MenuProvider')
    }
    return context
}

export const useTopMenuContext  = () => {
    const topContext = useContext(topMenuContext)
    if (!topContext) {
        throw new Error('useMenuContext must be used within a MenuProvider')
    }
    return topContext
}


export default function authLayout({children}: {children: React.ReactNode}) {


    const [menuActive, setMenuActive] = useState('')
    const [topMenuOn, setTopMenuOn] = useState(false)


    return (
        <menuContext.Provider value={{menuActive, setMenuActive}}>
            <topMenuContext.Provider value={{topMenuOn, setTopMenuOn}}>
                    <Container style={{padding: 0, minHeight: '100vh'}}>
                        <Header />

                                <main className="mt-3 flex-grow-1 pb-5">
                                    <Row className='g-0'>{children}</Row>
                                </main>
                        <Footer />
                    </Container>
            </topMenuContext.Provider>
        </menuContext.Provider>
    )
}