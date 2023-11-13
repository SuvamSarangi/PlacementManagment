import React from 'react'
import Header from '../Layout/Header'
import  Navbar from '../Layout/Navbar'
import Cards from './Cards'
import Footer from '../Layout/Footer'
export default function Home() {
  return (
    <>
     <Navbar />
      <Header />
      <Cards/>
      <Footer/>
    </>


  )
}
