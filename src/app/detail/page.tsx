'use client'

import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Title from "./sectors/title/Title"
import Body from "./sectors/body/Body"

const Detail = () => {
  return (<>
    <Header />
    <Title></Title>
    <Body />
    <Footer theme="dark"/>
    </>)
}

export default Detail;