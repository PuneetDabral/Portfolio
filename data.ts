import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {SiAzuredevops} from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import {Service,Skill } from "./types";





export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Node API</b> & Test in <b>Postman</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>Code Studio</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: SiAzuredevops,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "C/C++",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "DSA",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Node",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "50",
  },
];



export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "git/github",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Postman",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
];



