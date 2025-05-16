'use client'

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Maps from "./sectors/maps/Maps";
import Partners from "./sectors/partners/Partners";
import Form from "./sectors/form/Form";

const Contact = () => {
  return (<>
    <Header />
    <Maps/>
    <Partners/>
    <Form/>
    <Footer theme="dark"/>
  </>)
}

export default Contact;