import React from "react";
import { Carousel } from "react-bootstrap";
import Styles from './main-page-styles';

const slides = [
  {
    img: '/img/main-page/2_1920.jpg',
  },
  {
    img: '/img/main-page/3_1920.jpg',
  },
  {
    img: '/img/main-page/4_1920.jpg',
  },
  {
    img: '/img/main-page/1_1920.jpg',
  },
]

const HomePage = () => {
  return (
    <div className='wrap-carousel'>
      <Carousel
        controls={false}
        indicators={false}
        interval={3000}
        pauseOnHover={false}
      >
        {slides.map(slide => {
          return (
            <Carousel.Item>
              <div
                style={{
                  backgroundImage: `url(${slide.img})`
                }}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
      <Styles />
    </div>
  );
};

export default HomePage;