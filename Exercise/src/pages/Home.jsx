import React from 'react'
import Header from '../Components/Files/Header/Header'
import SpecialityMenu from '../Components/SpecialityMenu'
import Banner from '../Components/Banner'
import Footer from '../Components/Files/Footer/Footer'
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
