'use client'

import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header";
import Home from "./sectors/home/Home";
import Quote from "./sectors/quote/Quote";
import OurTeam from "./sectors/ourTeam/OurTeam";
import useTypeScreen from "@/utils/hooks/useTypeScreen";

const ClientAbout = () => {
  const type = useTypeScreen();
  return (
    <>
      <Header/>
      <Home type={type} />
      <Quote/>
      <OurTeam/>
      <Footer theme='dark' />
    </>
  )
}

export default ClientAbout;