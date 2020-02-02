import React from "react";
import Link from "next/link";
import logoMiniBlack from "../../assets/img/jays-logo-mini-black.png";

const MobileNavBar = ({ isShowMenu = false, closeMenu, linksInfo = [] }) => {
    console.log('isShowMenu', isShowMenu)
  return (
    <div className={`menuBar ${isShowMenu ? "open" : ""}`}>
      <div className="wrapperInfoMenuBar">
        <Link href="/">
          <img
            src={logoMiniBlack}
            id="logo-mini-black"
            alt="jays-logo-mini-black"
            onClick={closeMenu}
          />
        </Link>
        {linksInfo.map(elem => (
          <Link
            key={elem.name}
            passHref
            href={elem.link}
          >
            <a id="menu-item" onClick={closeMenu}>
                {elem.name}
            </a>
          </Link>
        ))}
      </div>
      <button id="closeMenuBar" onClick={closeMenu}>
        +
      </button>
    </div>
  );
};

export default MobileNavBar;