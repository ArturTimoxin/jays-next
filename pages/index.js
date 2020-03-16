import React from "react";
import { Carousel } from "react-bootstrap";
import { setShowMobileNavBar } from '../actions/app';
import { connect } from "react-redux";
import LogoMobile from '../assets/img/jays-logo-white.png'

const slides = [
  {
    img: `${process.env.API_URL}main-page/web1.jpg`,
  },
  {
    img: `${process.env.API_URL}main-page/web2.jpg`,
  },
  {
    img: `${process.env.API_URL}main-page/web3.jpg`,
  },
  {
    img: `${process.env.API_URL}main-page/web4.jpg`,
  },
]

const mobileSlides = [
  {
    img: `${process.env.API_URL}main-page/webmobile1.jpg`,
  },
  {
    img: `${process.env.API_URL}main-page/webmobile2.jpg`,
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
        className='desctop-slider'
      >
        {slides.map(slide => {
          return (
            <Carousel.Item
              key={slide.img}
            >
              <div
                className='slide-img'
                style={{
                  backgroundImage: `url(${slide.img})`
                }}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
      <Carousel
        controls={false}
        indicators={false}
        interval={3000}
        pauseOnHover={false}
        className='mobile-slider'
      >
        {mobileSlides.map(slide => {
          return (
            <Carousel.Item
              key={slide.img}
            >
              <div
                className='slide-img'
                style={{
                  backgroundImage: `url(${slide.img})`
                }}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
      <img
        className="logo-mobile"
        src={LogoMobile}
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
