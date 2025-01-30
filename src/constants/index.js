import {
  mobile,
  backend,
  creator,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Intelligence Artificielle",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Web Developer Full Stack",
    icon: web,
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
    title: "Developer IA",
    company_name: "AKATA GOAVANA",
    icon: tesla,
    iconBg: "#383E56",
    date: "Juin 2024 - Actuel",
    points: [
        "Training models for test automation, leveraging generative AI to enhance the efficiency and accuracy of software quality assurance..",
        "Extracting valuable data from web applications for testing and analysis using advanced scraping techniques.",
        "Building responsive and efficient client-side applications to support automated testing processes",
        "Data Pipeline Development for ETL Processes : extracting data from various social media platforms to gather insights relevant to the company's network, cleansing, structuring, and transforming raw data into actionable formats for analysis and reporting, loading processed data into data warehouses, dashboards, or analytics tools for seamless access and visualization.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
    ],
  },
  {
    title: "Data WareHousing",
    company_name: "CHU ANDRAINJATO",
    icon: tesla,
    iconBg: "#383E56",
    date: "April 2023 - August 2023",
    points: [
      "Collectes des données de plusieurs sources",
      "Développement d’un pipeline ETL",
      "Développement de tableau de bord",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Zomatel Fianarantsoa",
    icon: tesla,
    iconBg: "#383E56",
    date: "September 2022 - Febroary 2023",
    points: [
      "Maintenance and development of an online hotel management and reservation system, integrating a role-based access control (RBAC) system for secure and personalized user management.",
      "Role-Based Access Control and Secure Access",
      "Optimized User Experience, Scalable and Maintainable Architecture",
      "Secure Online Payments, Performance Optimization for Fast Navigation"
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Commune Andina",
    icon: tesla,
    iconBg: "#383E56",
    date: "April 2021 - August 2021",
    points: [
      "Design and development of a civil status and management website, equipped with a filtering system based on user rights and roles to ensure secure and tailored access for each collaborator.",
      "Role-Based Access Control and Secure Access",
      "Tailored User Experience, efficient Management of Civil Status Records",
      "User-Friendly Interface, Scalability and Maintenance"
    ],
  },
  {
    title: "STAGE",
    company_name: "DISTRICT FANDRIANA",
    icon: tesla,
    iconBg: "#383E56",
    date: "febroary 2019 - may 2019",
    points: [
      "Conception et réalisation d'une application de digitalisation pour synchroniser les données de toutes les communes vers un serveurs dans le district",
      "Data Synchronization Across Communes",
      "Centralized Server for District-Level Operations",
      "Automation of Manual Data Management",
      "Secure and Reliable Data Transfer"
    ],
  },
  
];

const testimonials = [
];

const projects = [
  {
    name: "QAInspecor",
    description:
      "Intelligence system platform that allows developer testing a functionality,",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "FasAPI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://qainspector.goavana.com/sign-in",
  },
  {
    name: "E-Civil Manager",
    description:"Web application that civil status and management user rights and roles to ensure secure .",
    tags: [
      {
        name: "Postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "EpressJS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dokoterako",
    description:
      "An innovative technology solution that provides real-time visualization of clients, prescribed medications, and responsible doctors for efficient and responsive medical management",
    tags: [
      {
        name: "Python/Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Power BI ",
        color: "green-text-gradient",
      },
      {
        name: "Postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
