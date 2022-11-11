import React from 'react';
import '../slideshow/Slideshow.css';
import Slider from "react-slick";
import banner1 from './img/banner1.jpg';
import banner2 from './img/banner2.jpg';
import banner3 from './img/banner3.jpg';
import banner4 from './img/banner4.jpg';
import banner5 from './img/banner5.jpg';

// Import css files from Carousel
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
              <img src={banner2}/>
            </div>
            <div>
              <img src={banner3}/>
            </div>
            <div>
             <img src={banner4}/>
            </div>
            <div>
              <img src={banner5}/>
            </div>
          </Slider>
      </div>
    );
}

export default Slideshow;