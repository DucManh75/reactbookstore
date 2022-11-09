import React from 'react';
import banner1 from './img/banner1.jpg';
import '../slideshow/Slideshow.css';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slideshow() {
      let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

    };
    return (
      <div className='slide'>
          <Slider {...settings}>
            <div>
              <img src={banner1}/>
            </div>
            <div>
              <img src={banner1}/>
            </div>
            <div>
              <img src={banner1}/>
            </div>
            <div>
             <img src={banner1}/>
            </div>
            <div>
              <img src={banner1}/>
            </div>
            <div>
              <img src={banner1}/>
            </div>
          </Slider>
      </div>
    );
}

export default Slideshow;