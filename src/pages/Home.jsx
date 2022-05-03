import React from 'react'
import Banner from '../components/Banner/Banner'
import Featured from '../components/Featured/Featured'
import Subscription from '../components/Subscription/Subscription'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Featured/>
      <Subscription/>
    </div>
  )
}

export default Home