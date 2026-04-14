import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"

// img

import logoOne from '@/../public/logo_partners/logo 1.png'
import logoTwo from '@/../public/logo_partners/logo 2.png'
import logoThree from '@/../public/logo_partners/logo 3.png'

// type

import type { partnersArrType } from "@/types/type"

// components

import SocialInfo from "@/components/element/SocialInfo/SocialInfo"


const partnersArr: partnersArrType[] = [
    {
        id: 1,
        title: 'logoOne',
        img: logoOne,
        url: 'https://www.sgm.ru/'
    },

    {
        id: 2,
        title: 'logoTwo',
        img: logoTwo,
        url: 'https://fondpotanin.ru/'
    },

    {
        id: 3,
        title: 'logoThree',
        img: logoThree,
        url: 'https://polyus.com/ru/'
    }

]



export default function Layout({ children }: { children: React.ReactNode }) {
    return (

        <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <Row className="d-flex justify-content-center mb-3 mt-3">
                {
                    partnersArr.map((item: partnersArrType, index: number): React.ReactNode => {
                        return (
                                    <Col key={index+1}>

                                            <Link href={item.url} style={{width: '120px'}}>
                                                <Image width={120} height={91} src={item.img} alt={item.title} />
                                            </Link>

                                    </Col>
                                )
                    })
                }
            </Row>

            {children}

            <Row className="mt-4 mb-4">

                <Col style={{marginBottom: '60px'}}>
                    <SocialInfo colorText={"#000000"} colorLine={"#D8DADC"} />
                </Col>

            </Row>
            
        </Container>
    )
}