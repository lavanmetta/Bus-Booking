import React from 'react'
import Footer from '../Footer/Footer';

import OfferCard from '../OfferCard/OfferCard';
import SearchCard from '../SearchCard/SearchCard';
import TopOperators from './TopOperators';
import './Home.css'
import OurServices from './OurServices';
import PopularBusRoutes from './PopularBusRoutes';
import TrendingPackages from './TrendingPackages';
import NavImg from '../Navbar/NavImg';
const Home = () => {
  return (
    <div style={{maxWidth: '1400px', margin: 'auto'}}>
      <NavImg/>
      <OfferCard/>
      <SearchCard/>
      <TrendingPackages/>
      <PopularBusRoutes/>
      <OurServices/>
      <TopOperators/>
      <Footer/>
    </div>
  )
}

export default Home
