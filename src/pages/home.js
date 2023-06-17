import React from 'react';
import HeroSection from '../components/herosection';
import FeaturedProducts from '../components/featuredproduct';
import Categories from '../components/categories';
import Footer from '../components/footer';


const Home = () => {
  return (
    <div>
        <HeroSection />
        <Categories />
        <FeaturedProducts />
        <Footer />
    </div>
  )
}

export default Home