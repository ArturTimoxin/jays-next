import React from "react";
import { Carousel } from "react-bootstrap";
import { setShowMobileNavBar } from '../actions/app';
import { connect } from "react-redux";
import LogoAndTitleMobileImg from '../assets/img/logo-and-title-white-300.png'

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

const HomePage = ({ setShowMobileNavBarAction }) => {
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
      <img
        className="logo-and-title-mobile"
        src={LogoAndTitleMobileImg}
        alt="logo"
        onClick={() => setShowMobileNavBarAction(true)}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setShowMobileNavBarAction: (state) => dispatch(setShowMobileNavBar(state))
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
