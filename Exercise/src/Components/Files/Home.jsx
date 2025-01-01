import React from 'react'
import Banner from '../../Components/Files/Banner/Banner'
import TopTutors from '../../Components/Files/TopTutor/TopTutors'
import FotnessoHeader from './hero/FotnessoHeader'
import ServiceCards from './Values/ServiceCards'
import MissionStatement from './Mission/MissionStatement'
import TeamSection from './TeamCard/TeamCards'
const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <FotnessoHeader/>
      <TopTutors/>
      <Banner/>
      <ServiceCards/>
      <MissionStatement/>
      <TeamSection/>
    </div>
  )
}

export default Home
