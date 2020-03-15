import React from "react";
import MiniWhiteLogoBtnImg from "../../assets/img/burger-white.png";
import MiniBlackLogoBtnImg from "../../assets/img/burger-black.png";
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
