
import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import TopTutors from '../Components/Files/TopTutor/TopTutors'

const Home = () => {
  return (
    <div>
      <Header/>
      <TopTutors/>
      <SpecialityMenu/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home
