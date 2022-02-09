import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {SiAzuredevops} from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import {IProject, Service,Skill } from "./types";





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
  // {
  //   Icon: BsCircleFill,
  //   name: "Python",
  //   level: "45",
  // },
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
  {
    Icon: BsCircleFill,
    name: "Linux",
    level: "55",

  }
];


export const projects: IProject[] = [
  { 
    id: 1,
    name: "Real-Time-Doc",
    description:
      "This is a real time document where data can be saved in real time",
    image_path: "/images/realtime.png",
    deployed_url: "!#",
    github_url: "https://github.com/PuneetDabral/real-time-doc",
    category: ["react","mongo"],
    key_techs: ["React", "Node", "Material UI","Socket.io","Mongodb","Restful api"],
  },
  {
    id:2,
    name: "Ishorts Clone",
    image_path: "/images/inshot.png",
    deployed_url: "!#",
    github_url: "https://github.com/PuneetDabral/Ishorts-clone",
    category: ["react","mongo","node"],
    description:
      "a clone of ishorts where you can read articales (data is fatched through data base)",
    key_techs: ["React", "Mongodb", "Material-Ui","Component-Library","Restful Api"],
  },

  {
    id:3,
    name: "Mi Store",
    image_path: "/images/mi.png",
    deployed_url: "mi-india.netlify.app",
    github_url: "https://github.com/PuneetDabral/MiStore",
    category: [ "react"],
    description:
      "front end for mi store india ",
    key_techs: [
      "React",
      "Mongo",
      "Node",
    ],
  },

  {
    id:4,
    name: "converter",
    image_path: "/images/converter.png",
    deployed_url: "puneetdabral.github.io/converter/",
    github_url: "https://github.com/PuneetDabral/converter",
    category: ["node", "react"],
    description:
      "About A translator to convert normal text to upper case and lower case also remove extra space with a dark mode option with the help of react",
    key_techs: ["React", "Java Script", "Bootstrap"],
  },

  {
    id:5,
    name: "Vogue-Frontend",
    image_path: "/images/shoipping.png",
    deployed_url: "!#",
    github_url: "https://github.com/PuneetDabral/vogue-frontend",
    category: ["django", "react"],
    description:
      "a intractive e-commerce front end",
    key_techs: ["React", "styled-components"],
  },

  {
    id:6,
    name: "PortfolioApp",
    image_path: "/images/portfolio.png",
    deployed_url: "!#",
    github_url: "https://github.com/PuneetDabral/PortfolioApp",
    category: ["express"],
    description:
      "Developer Portfolio made with Next JS Framer Motion and TypeScript",
    key_techs: ["Next.js" , "Tailwind CSS" , "TypeScript" ,"Framer Motion"],
  },
  {
    id:7,
    name: "layer",
    image_path: "/images/layer.png",
    deployed_url: "https://layer5.io/",
    github_url: "https://github.com/PuneetDabral/layer5",
    category: ["opensource"],
    description:
      'create and remove bugs like (profile not visible or updated rudraksh position to maintainer)',
    key_techs: [
      "React"
    ],
  },
  {
    id:8,
    name: "askbuddie-bot-docs",
    image_path: "/images/ask.png",
    deployed_url: "https://askbuddie-bot.netlify.app/",
    github_url: "https://github.com/PuneetDabral/askbuddie-bot-docs",
    category: ["opensource"],
    description:
      "work on a one component and make its responsive and fix some landing issue",
    key_techs: ["React"],
  },
];
