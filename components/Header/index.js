import React, { useState } from "react";
import Logo from "../../assets/img/jays-logo-black.png";
import Link from "next/link";
import MiniLogoBtn from "./MiniLogoBtn";
import MobileNavBar from "./MobileNavBar";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { setShowMobileNavBar } from '../../actions/app';

const linksInfo = [
  { link: "/locations", name: "Локації" },
  { link: "/rewards", name: "Rewards" },
  { link: "/contact", name: "Контакт" }
];

const Header = ({ router, isShowMobileNavBar, setShowMobileNavBarAction }) => {
  const isMainPage = router.route === '/';
  
  return (
    <>
      <header className={isMainPage ? '' : 'white-bg'}>
        <div className="logo-wrap">
          <Link passHref href="/">
            <a>
              <img className="logo" src={Logo} alt="logo" />
            </a>
          </Link>
          <MiniLogoBtn showMobileNavBar={() => setShowMobileNavBarAction(true)} />
          <span className="header-title">JAYS : COFFEE BREWERS</span>
        </div>
        <span className={`header-links ${isMainPage ? '' : 'black-links'}`}>
          <a
            className="header-link"
            href="https://www.facebook.com/jayscoffeebrewers/"
          >
            FB
          </a>
          <a
            className="header-link"
            href="https://www.instagram.com/jayscoffeebrewers/"
          >
            INST
          </a>
          <a
            className="header-link"
            href="http://t.me/jayscoffeebrewers"
          >
            TLGRM
          </a>
        </span>
      </header>
      <MobileNavBar 
        isShowMenu={isShowMobileNavBar}
        closeMenu={() => setShowMobileNavBarAction(false)}
        linksInfo={linksInfo}
      />
    </>
  );
};

const mapStateToProps = store => ({
  isShowMobileNavBar: store.app.isShowMobileNavBar,
});

const mapDispatchToProps = dispatch => {
  return {
    setShowMobileNavBarAction: (state) => dispatch(setShowMobileNavBar(state))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
