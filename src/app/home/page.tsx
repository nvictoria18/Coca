'use client'

import Header from "@/components/header/Header"
import Main from "./sectors/main/Main"
import Overview from "./sectors/overview/Overview"

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Overview />
    </>
  )
}