import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {IconType} from 'react-icons';
type Social = {
  socialDetail:string,
  whoIAm:string,
  socialLink:{
    name:string,
    link:string,
    icon:IconType
  }[]
};

export const social:Social={
  socialDetail:'Chukwuemeka Nnanna Echi',
  whoIAm: "I'm a",
  socialLink:[
    {name:'Twitter', link:"https://twitter.com/echinnanna", icon:FaTwitter},
    {name:'Facebook', link:"https://web.facebook.com/echinnannachukwuemeka", icon:FaFacebookF},
    {name:'Instagram', link:"https://www.instagram.com/certified_smart/?hl=en", icon:FaInstagram},
    {name:'Github', link:"https://github.com/CEN-Smart", icon:FaGithub},
    {name:'Linkedin', link:"https://www.linkedin.com/in/nnanna-echi-445b6249", icon:FaLinkedinIn},
  ]
}

