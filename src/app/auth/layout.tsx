import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"

// img

import logoOne from '@/../public/logo_partners/logo_1.svg'
import logoTwo from '@/../public/logo_partners/logo_2.svg'
import logoThree from '@/../public/logo_partners/logo_3.svg'

// type

import type { partnersArrType } from "@/types/type"

// components

import SocialInfo from "@/components/element/SocialInfo/SocialInfo"


const partnersArr: partnersArrType[] = [
    {
        id: 1,
        title: 'logoOne',
        img: logoOne,
        url: ''
    },

    {
        id: 2,
        title: 'logoTwo',
        img: logoTwo,
        url: ''
    },

    {
        id: 3,
        title: 'logoThree',
        img: logoThree,
        url: ''
    }
]



export default function Layout({ children }: { children: React.ReactNode }) {
    return (

        <Container className="vh-100 d-flex flex-column justify-content-around align-items-center">
            <Row className="mt-4">
                {
                    partnersArr.map((item: partnersArrType, index: number): React.ReactNode => {
                        return <Col key={index+1} className="d-flex justify-content-center align-items-center"><Link href={item.url}><Image src={item.img} alt={item.title} /></Link></Col>
                    })
                }
            </Row>

            {children}

                <Col className="mt-4">
                    <SocialInfo colorText={"#000000"} colorLine={"#D8DADC"} />
                </Col>

        </Container>
    )
}