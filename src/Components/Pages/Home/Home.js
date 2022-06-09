import React from 'react'
import FooterSection from '../../Shared/Footer'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Services from '../Services/Services'
import Banner from './Banner'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Contact></Contact>
        <FooterSection></FooterSection>
    </div>
  )
}

export default Home