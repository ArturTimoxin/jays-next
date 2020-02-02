import React from "react";
import MiniWhiteLogoBtnImg from "../../assets/img/mobile-white-menu-logo.png";
import MiniBlackLogoBtnImg from "../../assets/img/mobile-black-menu-logo.png";
import { withRouter } from "next/router";

const MiniLogoBtn = ({ showMobileNavBar, router }) => {
  return (
    <div className="mini-logo-btn" onClick={showMobileNavBar}>
      <img
        className="mini-logo"
        src={router.route === "/" ? MiniWhiteLogoBtnImg : MiniBlackLogoBtnImg}
        alt="logo"
      />
    </div>
  );
};

export default withRouter(MiniLogoBtn);
