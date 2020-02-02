import React from 'react'
import MiniLogoBtnImg from '../../assets/img/mobile-white-menu-logo.png'

const MiniLogoBtn = ({ showMobileNavBar }) => {
    return (
        <div className='mini-logo-btn' onClick={showMobileNavBar}>
            <img
                className="mini-logo"
                src={MiniLogoBtnImg}
                alt="logo"
            />
        </div>
    )
}

export default MiniLogoBtn;
