import React from 'react'
import Slider from './../../Components/Slider/Slider';
import Recomended from './../../Components/Recomended/Recomended';
import Categories from './../../Components/Categories/Categories';
import Contact from './../../Components/Contact/Contact';

const Home = () => {
  return (
    <div style={{  overflowX: 'hidden'}}>
      <Slider />
      <Recomended type='featured'/>
      <Categories />
      <Recomended type='trend'/>
      <Contact />
    </div>
  )
}

export default Home