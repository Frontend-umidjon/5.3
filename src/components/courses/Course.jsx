import React from "react";
import { COURSES } from "../../static";

const Course = () => {
  return (
    <div>
      <div className="max-w-[1262px] mx-auto w-full">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[#1E212C] text-[16px] leading-[24px] font-[700] tracking-[1px]">
              Ready to learn?
            </h3>
            <h1 className="text-[#1E212C] text-[46px] leading-[59.8px] font-[900] mt-[8px]">
              Featured Courses
            </h1>
          </div>
          <div>
            <button className="px-[40px] py-[16px] rounded-[4px] bg-transparent border border-[#FF3F3A] text-[#FF3F3A]">
              View all courses
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[30px] mt-[60px] mb-[120px]">
          {COURSES?.map((course) => {
            return (
              <div key={course.id} className="flex items-center gap-[32px] border border-[#EAECF0] rounded-[4px] hover:shadow-[0px_4px_40px_rgba(14,_14,_14,_0.1)] transition-all duration-300">
                <img src={course.img.src} alt="" />
                <div>
                    <span className={`px-[8px] py-[4px] rounded-[4px] ${course.course.bg} text-white`}>{course.course.title}</span>
                  <h3 className="text-[#1E212C] text-[20px] leading-[30px] font-[700] mt-5 ">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-5" >
                    <p className="text-[#FF3F3A] text-[16px] leading-[25.6px] font-[400] ">
                      {course.price}
                    </p>
                    <p className="text-[#424551] text-[16px] leading-[25.6px] font-[400] ">
                      |
                    </p>
                    <p className="text-[#424551] text-[16px] leading-[25.6px] font-[400] ">
                      {course.tutor}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
