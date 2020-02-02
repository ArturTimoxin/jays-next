import React, { useState } from "react";
import Logo from "../../assets/img/jays-logo-black.png";
import Link from "next/link";
import MiniLogoBtn from "./MiniLogoBtn";
import MobileNavBar from "./MobileNavBar";
import { withRouter } from "next/router";

const linksInfo = [
  { link: "/locations", name: "Локації" },
  { link: "/rewards", name: "Rewards" },
  { link: "/contact", name: "Контакт" }
];

const Header = ({ router }) => {
  const [isShowMobileNavBar, setShowMobileNavBar] = useState(false);
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
          <MiniLogoBtn showMobileNavBar={() => setShowMobileNavBar(true)} />
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
            href="https://www.instagram.com/explore/locations/2102254823147526/jays-coffee-brewers/"
          >
            INST
          </a>
        </span>
      </header>
      <MobileNavBar 
        isShowMenu={isShowMobileNavBar}
        closeMenu={() => setShowMobileNavBar(false)}
        linksInfo={linksInfo}
      />
    </>
  );
};

export default withRouter(Header);
