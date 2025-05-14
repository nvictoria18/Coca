'use client'

import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header";
import Home from "./sectors/home/Home";
import Quote from "./sectors/quote/Quote";
import OurTeam from "./sectors/ourTeam/OurTeam";

const About = () => {
  return (
    <>
      <Header/>
      <Home />
      <Quote/>
      <OurTeam/>
      <Footer theme='dark' />
    </>
  )
}

export default About;