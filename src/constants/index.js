import {
    mobile,
    backend,
    creator,
    web,
    Python,
    c,
    agile,
    unity,
    vsc,
    trello,
    java,
    Githubdesktop,
    pm,
    git,
    bash,
    atlassian,
    SolidPrinciples,
    pp,
    unServer,
    sixGuys,
    colapsum,
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
      title: "Game Developer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Promt Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
];
  
const technologies = [
    {
      name: "c",
      icon: c,
    },
    {
      name: "agile",
      icon: agile,
    },
    {
      name: "python",
      icon: Python,
    },
    {
      name: "unity",
      icon: unity,
    },
    {
      name: "vsc",
      icon: vsc,
    },
    {
      name: "trello",
      icon: trello,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "Githubdesktop",
      icon: Githubdesktop,
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
      name: "bash",
      icon: bash,
    },
    {
      name: "atlassian",
      icon: atlassian,
    },
    {
      name: "SolidPrinciples",
      icon: SolidPrinciples,
    },
    {
      name: "pm",
      icon: pm,
    },
];
  
const experiences = [
    {
      title: "Spigot Plugin Developer",
      company_name: "Rol Play server of the Universidad Nacional de Colombia in the video game Minecraft.",
      icon: unServer,
      iconBg: "#383E56",
      date: "September 2022 - March 2023",
      points: [
        "I developed plugins using Java, Spigot, Bukkit and YML, optimizing the gameplay mechanics of the server. One of my outstanding achievements was the creation of an item on the server that replicates the functionalities of conventional smartphones. Through this implementation, I managed to provide an intuitive graphical interface for players to easily access the mechanics and interactions needed to enhance their gaming experience.",
      ],
    },
    {
      title: "Game Programmer and Product Manager",
      company_name: "Colapsum Studio",
      icon: colapsum,
      iconBg: "#1A0C0D",
      date: "April 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Product Manager and Game Developer",
      company_name: "Six Guys Productions",
      icon: sixGuys,
      iconBg: "#000000",
      date: "May 2023 - Actuality",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Product Manager and Programmer Lead",
      company_name: "Pixel Pioneers",
      icon: pp,
      iconBg: "#E6DEDD",
      date: "June 03 2023 - June 05 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
];
  
const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];
  
const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Githubdesktop",
          color: "green-text-gradient",
        },
        {
          name: "trello",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
];
  
export { services, technologies, experiences, testimonials, projects };