import { IconType } from "react-icons";
import { BiChevronRight } from "react-icons/bi";
type Bio={
  about:string,
  
  who:string,
  description:string,
  detail:{
    icon:IconType,
    birth:string,
    level:string,
    phone:string,
    email:string,
    city:string,
    freelance:string,
  },
  skill:string,
}
export const bio:Bio={
  about:"ABOUT",

  who:"I am a Front-end developer (💻) with over 3 years experience. Worked with many teams on various projects, contributed to bigger projects on open source, Spent time and resources to develop my skills And will be expecting a job or a referral from you🤝.",
  description:"👋 Hi, I’m Chukwuemeka Nnanna Echi, A Front-end Dev. who've got eyes for details, someone you will love to be part of your development team.",
  detail:{
    icon:BiChevronRight,
    birth:"24th October",
    level:"Advanced",
    phone:"+234 803 925 2566",
    email:"nnanna.echi018@uniport.edu.ng",
    city:"Owerri Imo State, Nigeria", 
    freelance:"Available",  
  },
  skill:"I am a developer with deep skill of flexibility, which is the ability to learn unlearn and relearn. The main knowledge is problem-solving which involves finding a problem, knowing the problem, and solving the problem. I think that is what made me a developer not just knowing how to code. With my fast learning ability, I can attend to any problem, learn any needed technology (if needed) and solve the problem. I am also an Engineer and a Mathematician who chose to build a design skill through coding. Designing has been my passion and i have developed myself in problem-solving not just writing codes (that is my advantage). I grow up in my field as a designer and a problem solver, that is what made me a developer."
}