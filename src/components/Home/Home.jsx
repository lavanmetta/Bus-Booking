import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
import OfferCard from '../OfferCard/OfferCard';
import SearchCard from '../SearchCard/SearchCard';
import TopOperators from './TopOperators';
import './Home.css'
const Home = () => {
  return (
    <>
      <Navbar/>
      <OfferCard/>
      <SearchCard/>
      <TopOperators/>
      <Footer/>
    </>
  )
}

export default Home
