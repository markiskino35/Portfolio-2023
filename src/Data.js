import {
  FaWhatsapp,
  FaHtml5,
  FaUser,
  FaNodeJs,
  FaReact,
  FaSass,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaCss3Alt,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  {
    id: 1,
    icon: <FaLinkedin />,
    link: `https://www.linkedin.com/in/alief-mukhlis-0135471bb`,
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: `https://github.com/markiskino35`,
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    link: `https://wa.me/60137822397`,
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: `https://www.instagram.com/md.alief_/`,
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Alief Mukhlis",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+60137822397",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "markiskino35@gmail.com",
  },
];

export const icons = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <DiJavascript />,
  <FaNodeJs />,
  <FaReact />,
  <SiNextdotjs />,
  <FaSass />,
  <SiTailwindcss />,
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Front-End Developer",
    company: "Artanis Cloud Sdn Bhd",
  },
  {
    di: 2,
    year: "2021",
    position: "Internship for Degree",
    company: "Pejabat Setiausaha Kerajaan Kelantan",
  },
  {
    id: 3,
    year: "2018",
    position: "Internship for Diploma",
    company: "Pejabat Setiausaha Kerajaan Kelantan",
  },
];
export const finishes = [
  {
    id: 1,
    number: "3+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "6",
    itemName: "Projects Done",
  },
  {
    id: 3,
    number: "12",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "10",
    itemName: "Feedback",
  },
];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "app",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Bachok, Kelantan",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "markiskino35@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+6013-7822 397",
  },
];
