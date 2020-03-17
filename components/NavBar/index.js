import React from "react";
import Link from "next/link";

export const linksInfo = [
  { link: "https://jayscoffeebrewers.postershop.me/", name: "Магазин" },
  { link: "/locations", name: "Локації" },
  { link: "/rewards", name: "Rewards" },
  { link: "/contact", name: "Контакт" },
];

const NavBar = () => {
  return (
    <>
      <aside>
        <nav>
          {linksInfo.map(linkInfo => {
            return (
              <Link passHref href={linkInfo.link}>
                <a className="nav-link link-first">{linkInfo.name}</a>
              </Link>
            );
          })}
        </nav>
        <div className="rights-text">@ 2020 All rights reserved</div>
      </aside>
    </>
  );
};

export default NavBar;
