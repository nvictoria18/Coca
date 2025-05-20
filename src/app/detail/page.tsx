'use client'

import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Title from "./sectors/title/Title"
import Body from "./sectors/body/Body"
import useTypeScreen from "@/utils/hooks/useTypeScreen"

const Detail = () => {
  const type = useTypeScreen();

  return (<>
    <Header />
    <Title />
    <Body type={type} />
    <Footer theme="dark"/>
    </>)
}

export default Detail;