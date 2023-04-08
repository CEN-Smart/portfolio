"use client";
import { resume, skills } from "@/lib/resume";
import { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <main className=" text-md grid place-items-center bg-black/95 py-10 text-slate-100">
      <div data-aos='zoom-in-up' className=" mx-auto w-[90%] lg:w-[70%]">
        <p className="relative mx-auto w-fit border-b py-4 text-center text-4xl font-[700] text-emerald-300">
          {resume.name}
          <span className=" absolute -bottom-[0.14rem] left-[35%] h-[0.2rem] w-12 bg-blue-600"></span>
        </p>
        <p className="mt-4 pb-4 text-justify lg:mx-auto">{resume.detail}</p>
        {/* Start-Time-Line */}
        <div className="lg:6/12 relative mx-auto flex w-full flex-col md:flex-row md:gap-4 ">
          {/* First-Box */}
          <div data-aos='zoom-in-up' className="mt-10 flex-1 flex-shrink-0 border-l-2">
            <h1 className="ml-10 pb-4 text-2xl font-bold text-emerald-300">
              {resume.prof}
            </h1>
            <div className="cards">
              <div className="dot"></div>
              <div className="h-line"></div>
              <div className="items">
                <h1 className=" font-semibold text-blue-600">{resume.duty}</h1>
                <p>
                  <strong>{resume.duration}</strong>
                </p>
                <p className="ml-4">{resume.company}</p>
                <p>
                  <strong>Technologies: </strong>
                  {skills}
                </p>
                <p>
                  <strong>Role: </strong>
                  {resume.role}
                </p>
              </div>
            </div>
          </div>
          {/* Mapped-Box */}
          <div data-aos='zoom-in-up' className="mt-10 flex-1 border-l-2">
            <h1 className="ml-10 pb-4 text-2xl font-bold text-emerald-300">
              {resume.background}
            </h1>
            {resume.school.map((item, i) => {
              return (
                <div key={i} className="cards">
                  <div className="dot"></div>
                  <div className="h-line"></div>
                  <div className=" flex flex-col gap-2">
                    <h1 className="font-semibold text-blue-600">{item.type}</h1>
                    <p className=" ml-4 font-bold">{item.year}</p>
                    <p className=" italic">{item.schoolName}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* End-Time-Line */}
      </div>
    </main>
  );
}
