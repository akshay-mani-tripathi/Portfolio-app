import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jpm,
  diabetes,
  threejs,
  infosys,
  Emusic,
  AlgorithmAnalyzer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Infosys Springboard Internship",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#E6DEDD",

    points: [
      "Completed Infosys Springboard Internship by developing E-Music, a Django-based AI music application.",
      "Implemented features like user authentication, voice-based song search, and AI-driven music recommendations.",
    ],
  },
  {
    title: "JPMorgan Chase and Co.",
    company_name: "Software Engineering Job Simulation",
    icon: jpm,
    iconBg: "#E6DEDD",

    points: [
      "Completed a comprehensive virtual job simulation focused on real-world software engineering tasks.",
      "Collaborated in a simulated team environment to debug, troubleshoot, and improve software solutions.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Diabetes Prediction System",
    description:
      "This web-based application uses machine learning (Logistic Regression) to predict whether a person is likely to have diabetes based on health parameters like glucose level, BMI, age, insulin, and more.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openCV",
        color: "green-text-gradient",
      },
      {
        name: "Logistic Regression",
        color: "pink-text-gradient",
      },
    ],
    image: diabetes,
    source_code_link:
      "https://diabetes-prediction-using-ml-mdenqi52ipxakmcpcelqt2.streamlit.app/",
    flag: "1",
  },
  {
    name: "E-music",
    description:
      "Emusic is an music platform designed to revolutionize the way users discover and interact with music. By integrating voice recognition, and Spotify functionality, Emusic offers a seamless and personalized music experience for users.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: Emusic,
    source_code_link: "https://e-music.onrender.com/",
    flag: "1",
  },
  {
    name: "Sort analyzer",
    description:
      "This MERN + Java-powered Algorithm Analyzer is modular, scalable, and a perfect blend of classic algorithm concepts with modern web technology.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "JAVA",
        color: "pink-text-gradient",
      },
    ],
    image: AlgorithmAnalyzer,
    source_code_link: "https://github.com/akshay-mani-tripathi",
    flag: "0",
  },
];

export { services, technologies, experiences, testimonials, projects };
