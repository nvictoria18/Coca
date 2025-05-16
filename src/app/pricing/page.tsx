'use client'

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "./sectors/main/Main";
import Frequently from "./sectors/frequently/Frequently";

const Pricing = () => {
  return (<>
    <Header />
    <Main />
    <Frequently />
    <Footer theme="dark"/>
  </>)
}

export default Pricing;