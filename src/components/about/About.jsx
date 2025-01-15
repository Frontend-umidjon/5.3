import React from "react";
import { ABOUT } from "../../static";
import aboutImage from "../../assets/about-section.png";  
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const About = () => {
  return (
    <div className="py-[180px]">
      <div className="max-w-[1262px] mx-auto w-full flex items-center justify-between">
        <div className="max-w-[705px]">
          <img src={aboutImage} alt="" />
        </div>
        <div className="max-w-[390px]">
          <h2 className="text-[#1E212C] text-[16px] leading-[24px] font-[700] tracking-[1px]">
          Who we are
          </h2>
          <p className="text-[#1E212C] text-[46px] leading-[59.8px] font-[900] mt-[8px]">
          Why Createx?
          </p>
          <ul className="mt-[40px] flex flex-col gap-[12px]">
            {ABOUT?.map((item) => {
              return (
                <li key={item.id} className="text-[#424551] text-[16px] leading-[25.6px] font-[400]  flex items-center gap-[16px]">
                  <><span className="text-[#FF3F3A]"><IoMdCheckmarkCircleOutline /></span>{item.text}</>
                </li>
              );
            })}
          </ul>
          <div>
            <button className="px-[40px] py-[16px] rounded-[4px] bg-[#FF3F3A] text-white mt-[40px]">More about us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
