import React from 'react'
import heroImage from '../../assets/hero.png'
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative py-5 h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-[1262px] mx-auto w-full p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-col">
              <div>
                <div className="flex items-center gap-4">
                  <div className="relative w-[52px] h-[52px]">
                    <span className="absolute inset-0 rounded-full bg-[#FF3F3A] animate-ping"></span>
                    <span className="relative w-[52px] h-[52px] rounded-full bg-[#FF3F3A] flex items-center justify-center text-white">
                      <FaPlay />
                    </span>
                  </div>
                  <p className="text-[#1E212C] text-[14px] leading-[21px] font-[700]">
                    Play showreel
                  </p>
                </div>
                <h1 className="text-[64px] leading-[83.2px] font-[900] text-[#1E212C] tracking-[1px] max-w-[496px] mt-[24px]">Enjoy studying with Createx Online Courses</h1>
                <div className="mt-[60px] flex items-center gap-6">
                    <button className="px-[40px] py-[16px] rounded-[4px] bg-transparent text-[#FF3F3A] border border-[#FF3F3A]">About us</button>
                    <button className="px-[40px] py-[16px] rounded-[4px] bg-[#FF3F3A] text-white">Explore courses</button>
                </div>
              </div>
            </div>
            <div>
              <img src={heroImage} alt="" />
            </div>
          </div>
          <div className="mt-[150px] flex items-center gap-[66px]">
              <div className="flex items-center gap-3">
                <h2 className="text-[46px] leading-[59.8px] font-[900] text-[#1E212C]">1200</h2>
                <p className="text-[16px] leading-[25.6px] font-[400] text-[#1E212C]">Students graduated</p>
              </div>
              <span className="w-[8px]  h-[8px] rounded-full bg-[#FF3F3A]"></span>
              <div className="flex items-center gap-3">
                <h2 className="text-[46px] leading-[59.8px] font-[900] text-[#1E212C]">84</h2>
                <p className="text-[16px] leading-[25.6px] font-[400] text-[#1E212C]">Completed courses</p>
              </div>
              <span className="w-[8px]  h-[8px] rounded-full bg-[#FF3F3A]"></span>
              <div className="flex items-center gap-3">
                <h2 className="text-[46px] leading-[59.8px] font-[900] text-[#1E212C]">16</h2>
                <p className="text-[16px] leading-[25.6px] font-[400] text-[#1E212C]">Qualified tutors</p>
              </div>
              <span className="w-[8px]  h-[8px] rounded-full bg-[#FF3F3A]"></span>
              <div className="flex items-center gap-3">
                <h2 className="text-[46px] leading-[59.8px] font-[900] text-[#1E212C]">5</h2>
                <p className="text-[16px] leading-[25.6px] font-[400] text-[#1E212C]">Years of experience</p>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Hero