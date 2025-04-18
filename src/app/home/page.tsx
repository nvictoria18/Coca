'use client'

import Header from "@/components/header/Header"
import Main from "./sectors/main/Main"
import Overview from "./sectors/overview/Overview"
import Feature from "./sectors/features/Feature"
import Strength from "./sectors/strength/Strength"
import Services from "./services/Services"

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Overview />
      <Feature />
      <Strength />
      <Services />
    </>
  )
}