'use client'

import Header from "@/components/Header/Header"
import Main from "./sectors/main/Main"
import Overview from "./sectors/overview/Overview"
import Feature from "./sectors/features/Feature"
import Strength from "./sectors/strength/Strength"
import Partners from "./sectors/partners/Partners"
import Services from "./sectors/services/Services"
import Insight from "./sectors/insight/Insight"
import Testimonials from "./sectors/testimonials/Testimonials"
import Footer from "@/components/Footer/Footer"
import styled from "styled-components"

const StyledHome = styled.div`
`

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <Main />
      {/* <Overview />
      <Feature />
      <Strength />
      <Partners />
      <Services />
      <Insight />
      <Testimonials />
      <Footer theme="light" /> */}
    </StyledHome>
  )
}