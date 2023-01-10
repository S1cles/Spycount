import React from 'react'
import Slider from './../../Components/Slider/Slider';
import Recomended from './../../Components/Recomended/Recomended';

const Home = () => {
  return (
    <div style={{  overflowX: 'hidden'}}>
      <Slider />
      <Recomended type='featured' />
      <Recomended type='trend'/>
    </div>
  )
}

export default Home