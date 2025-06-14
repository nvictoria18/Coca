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
import useTypeScreen from "@/utils/hooks/useTypeScreen"

const StyledHome = styled.div`
`

export default function ClientHome() {
  const type = useTypeScreen()
  return (
    <StyledHome>
      <Header />
      <Main type={type} />
      <Overview type={type} />
      <Feature />
      <Strength type={type} />
      <Partners type={type} />
      <Services type={type} />
      <Insight type={type} />
      <Testimonials type={type} />
      <Footer theme="light" />
    </StyledHome>
  )
}