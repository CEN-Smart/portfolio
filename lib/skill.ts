import { ImHtmlFive2 } from "react-icons/im";
import { TiCss3 } from "react-icons/ti";
import {
  SiChakraui,
  SiGraphql,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { IconType } from "react-icons";
type Skills={
  skill: string;
  detail: string;
  names: {
    icon: IconType,
    name: string;
    level: string;
  }[];
}
export const skills:Skills = {
  skill: "SKILLS",
  detail:
    "These are the sets of skills i have acquired over the years and still counting. Learning and advancing on my skills is what i have engaged over time.",
  names: [
    { icon: ImHtmlFive2, name: "HTML", level: '90' },
    { icon: TiCss3, name: "CSS", level: '90' },
    { icon: SiTailwindcss, name: "TAILWINDCSS", level: '85' },
    { icon: SiChakraui, name: "CHAKRA-UI", level: '85' },
    { icon: SiJavascript, name: "JAVASCRIPT", level: '70' },
    { icon: SiTypescript, name: "TYPESCRIPT", level: '70' },
    { icon: SiGraphql, name: "GRAPHQL", level: '70' },
    { icon: SiReact, name: "REACT", level: '70' },
    { icon: TbBrandNextjs, name: "NEXT JS", level: '75' },
    { icon: BsGit, name: "GIT AND GITHUB", level: '80' },
  ],
};
