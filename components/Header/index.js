import React from "react";
import Logo from '../../assets/img/jays-logo-black.png'
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo-wrap">
          <Link passHref href='/'>
            <a>
              <img
                className="logo"
                src={Logo}
                alt="logo"
              />
            </a>
          </Link>
          <span className="header-title">JAYS : COFFEE BREWERS</span>
        </div>
        <span className="header-links">
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
    </>
  );
};

export default Header;
