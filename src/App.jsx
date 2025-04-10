import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cards from './Components/Cards'
import Popular from './Components/Popular'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Cards />
    <Popular />
    <Footer />
    <ScrollToTop />
   
    </>
  )
}

export default App