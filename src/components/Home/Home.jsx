import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
import OfferCard from '../OfferCard/OfferCard';
import SearchCard from '../SearchCard/SearchCard';
import TopOperators from './TopOperators';
import './Home.css'
import OurServices from './OurServices';
import PopularBusRoutes from './PopularBusRoutes';
const Home = () => {
  return (
    <>
      <Navbar/>
      <OfferCard/>
      <SearchCard/>
      <PopularBusRoutes/>
      <OurServices/>
      <TopOperators/>
      <Footer/>
    </>
  )
}

export default Home
