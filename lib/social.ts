import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { BsWhatsapp } from "react-icons/bs";
type Social = {
  socialDetail: string;
  whoIAm: string;
  socialLink: {
    name: string;
    link: string;
    icon: IconType;
  }[];
};

export const social: Social = {
  socialDetail: "Chukwuemeka Nnanna Echi",
  whoIAm: "I'm a",
  socialLink: [
    {
      name: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=2348039252566&text=Hi%20Smart!%20%F0%9F%91%8B%F0%9F%91%8B%20i%27m%20reaching%20out%20to%20you%20for%20something%20very%20important%2C%20hope%20to%20get%20your%20response%20soon.",
      icon: BsWhatsapp,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/echinnanna",
      icon: FaTwitter,
    },
    {
      name: "Facebook",
      link: "https://web.facebook.com/echinnannachukwuemeka",
      icon: FaFacebookF,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/certified_smart/?hl=en",
      icon: FaInstagram,
    },
    { name: "Github", link: "https://github.com/CEN-Smart", icon: FaGithub },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/nnanna-echi-445b6249",
      icon: FaLinkedinIn,
    },
  ],
};
