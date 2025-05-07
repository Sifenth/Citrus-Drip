import React from 'react'
import Hero from '../components/Welcoming/welcome';
import Ourproducts from '../components/OurProducts/Ourproducts';
import NewArrivals from '../components/NewArrivals/NewArrivals';

 const Home = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <Ourproducts />
      
    </div>
  )
}

export default Home;