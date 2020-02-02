import React from 'react'
import Link from "next/link";

const NavBar = () => {
    return (
        <>
            <aside>
                <nav>
                    <Link passHref href='/locations'><a className='nav-link link-first'>Локації</a></Link>
                    <Link passHref href='/rewards'><a className='nav-link'>Rewards</a></Link>
                    <Link passHref href='/contact'><a className='nav-link'>Контакт</a></Link>
                </nav>
                <div>@ 2020 All rights reserved</div>
            </aside>
        </>
    )
}

export default NavBar;