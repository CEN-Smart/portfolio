import { IconType } from "react-icons";
import { FaEnvelope } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";
type Contacts = {
  contact: string;
  contactdetails: { icon: IconType; detail: string; description: string }[];
  name: string;
  email: string;
  subject: string;
  message: string;
  text1: string;
  text2: string;
  button: string;
};
export const contacts: Contacts = {
  contact: "Contact Me",
  contactdetails: [
    {
      icon: IoLocationSharp,
      detail: "Location:",
      description: "Nwaorieubi Mbaitoli, Imo State, Nigeria.",
    },
    {
      icon: FaEnvelope,
      detail: "Email:",
      description: "nnanna.echi018@uniport.edu.ng",
    },
    { icon: ImPhone, detail: "Call:", description: "+234 803 925 2566" },
  ],
  name: "Your Name",
  email: "Your Email",
  subject:"Subject",
  message: "Your Message",
  text1:"Your details are safe with us",
  text2:"We'll never share your email.",
  button: "Send Message",
};
