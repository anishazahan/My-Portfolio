import React from 'react'
import FooterSection from '../../Shared/Footer'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'
import Banner from './Banner'
import MySkills from './MySkills'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
       
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
        {/* <FooterSection></FooterSection> */}
    </div>
  )
}

export default Home