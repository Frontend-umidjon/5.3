import logo from "../../assets/logo.png";
import { NAVBUTTONS, NAVLINKS } from "../../static";
import hero from "../../assets/hero.png";

import React from 'react'

const Header = () => {
  return (
    <header className="relative py-5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-[1262px] mx-auto w-full p-4">
          <nav className="flex items-center justify-between">
            <a href="">
              <img src={logo} alt="CreateX" />
            </a>
            <ul className="flex gap-10 items-center">
              {NAVLINKS?.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url} className="text-base text-[#424551]">
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center">
              {NAVBUTTONS?.map((btn) => {
                return (
                  <button
                    key={btn.id}
                    className={`${btn.color} py-3 px-6 rounded-[4px] flex items-center gap-2 ${btn.bg}`}
                  >
                    <>
                      {btn.icon} {btn.text}
                    </>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </header>
  )
}

export default Header