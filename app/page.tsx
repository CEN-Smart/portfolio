"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Fact from "@/components/Fact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/Move2top";
import Portfolio from "@/components/Portfolio";
import Profile from "@/components/Profile";
import Resume from "@/components/Resume";
import Service from "@/components/Service";
import SkillSet from "@/components/Skill";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 1000);
  }, []);
    if(loading) {return (
      <div className="relative grid min-h-screen min-w-full place-items-center text-center ">
        <div className=" beforeEl absolute grid lg:h-48 lg:w-48 h-24 w-24 place-items-center rounded-full before:animate-ring">
          <span className="absolute text-center animate-text lg:text-[20px] text-[8px] leading-[200px] tracking-wider">
            LOADING...
          </span>
        </div>
      </div>
    )} else {
      return (
        <main>
          <Profile />
          <About />
          <Service />
          <SkillSet />
          <Fact />
          <Portfolio />
          <Resume />
          <Contact id={"contact"} />
          <Footer />
          <ScrollToTopButton />
        </main>
      );
    }
}

