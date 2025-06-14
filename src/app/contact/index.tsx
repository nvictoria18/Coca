'use client'

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Maps from "./sectors/maps/Maps";
import Partners from "./sectors/partners/Partners";
import Form from "./sectors/form/Form";
import useTypeScreen from "@/utils/hooks/useTypeScreen";

const ClientContact = () => {
  const type = useTypeScreen();

  return (<>
    <Header />
    <Maps type={type}/>
    <Partners type={type}/>
    <Form/>
    <Footer theme="dark"/>
  </>)
}

export default ClientContact;