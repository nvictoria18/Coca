'use client'

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "./sectors/header/Main";
import Articles from "./sectors/articles/Articles";
import ArticlesSection from "./sectors/articlesSection/ArticlesSection";

const ClientBlog = () => {
  return (<>
    <Header/>
    <Main />
    <Articles/>
    <ArticlesSection />
    <Footer theme="light"/>
  </>)
}

export default ClientBlog;