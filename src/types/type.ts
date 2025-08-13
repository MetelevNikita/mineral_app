import { number } from "motion"
import { StaticImageData } from "next/image"

export type partnersArrType = {
    id: number,
    title: string,
    img: string,
    url: string
}


export type needArrType = {
    id: number,
    title: string,
}

export type socialLogoType = {
    id: number,
    title: string,
    img: string,
    url: string
}


export type collectionType = {
    title: string,
    img: string,
    active: boolean
}


export type contactsArrType = {
    id: number,
    title: string,
    content: string,
    img: string | StaticImageData
}


export type mapBlockArrType = {
    id: number
    title: string
    content: string
    img: string | StaticImageData
    coordinate: {
        top: number
        left: number
    } | null
}



// user


export type UserType = {
    id: number,
    name: string,
    email: string,
    password: string,
    total: string,
    collection: any[] | null,
    status: string,
    createdAt: string | Date,
    updatedAr: string | Date
    isAdmin: boolean
    profile: any | null
    firstVisit: boolean
}



export type ProfileType = {
    age: string
    profession: string
    bio: string
    phone: string
    telegram: string
}


// mineral


export type MineralType = {
    id: number,
    title: string,
    description: string,
    video: string | null,
    image: string | StaticImageData,
    createAt: string | Date,
    updateAt: string | Date

    question: Question[] | [] | null

}



export type Question = {
    id: number,
    title: string,
    image: string | StaticImageData,
    mineralId: string
    createAt: string | Date,
    updateAt: string | Date
    answers: Answers[] | [] | null
}

// answers


export type Answers = {
    id: number,
    text: string,
    correct: boolean,
    questionId: number
    createAt: string | Date,
    updateAt: string | Date
}
