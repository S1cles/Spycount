import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './Slider.scss'
import { useState } from "react";
const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];


const [currentSlide , setCurrentSlide] = useState(0)

const previosSlide = () =>{
setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1 )
}
const nextSlide = () =>{
  setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev +1 )
}

  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`, transition: '2s all ease'}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="navigation">
        <div className="icon" onClick={previosSlide}>
          <ArrowBackIosNewIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
