import React from 'react'
import Header from './Layout/Header'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Newsletter from './Layout/Newsletter'
import HeroSection from './Pages/HeroSection'
import Services from './Pages/Services'
import AboutUs from './Pages/AboutUs'
import Destination from './Pages/Destination'
import ExploreTour from './Pages/ExploreTour'
import Packages from './Pages/Packages'

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <Destination/>
      <ExploreTour/>
      <Packages/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
