import {
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiC,
  SiKotlin,
  SiCanva,
  SiLinux,
} from "react-icons/si";

import { FaMicrosoft } from "react-icons/fa";

import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// SVG Icons
import HtmlSvg from "@/public/icons/html.svg";
import CssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";
import ReactSvg from "@/public/icons/reactjs.svg";
import NodeSvg from "@/public/icons/nodejs.svg";
import VsCodeSvg from "@/public/icons/vscode.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: JavascriptSvg },
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CssSvg },
      { name: "Python", icon: PythonSvg },
      { name: "Kotlin (Intermediate)", icon: SiKotlin },
    ],
  },
  {
    sectionName: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: ReactSvg },
      { name: "Node.js", icon: NodeSvg },
      { name: "Express.js", icon: SiExpress },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "Multer", icon: NodeSvg },
      { name: "JWT", icon: NodeSvg },
    ],
  },
  {
    sectionName: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "VS Code", icon: VsCodeSvg },
      { name: "Canva", icon: SiCanva },
      { name: "Microsoft Excel", icon: FaMicrosoft },
    ],
  },
  {
    sectionName: "Environments",
    skills: [
      { name: "Unix/Linux", icon: SiLinux },
      { name: "TCP/IP", icon: NodeSvg },
    ],
  },
 
];
