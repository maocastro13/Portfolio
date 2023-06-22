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
    
    nico,
    rodri,
    linkedin,
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
      title: "Product Manager and Game Developer",
      company_name: "Six Guys Productions",
      icon: sixGuys,
      iconBg: "#000000",
      date: "May 2023 - Actuality",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu nisi diam. Fusce mattis sapien a libero feugiat, ac iaculis enim gravida. Aenean quis nulla massa.",
        "Nulla tincidunt feugiat tortor, id auctor ligula. Vivamus ut nunc non lacus efficitur bibendum in ut risus.",
        "Sed rutrum, lorem a aliquam ultricies, dolor arcu viverra massa, at consectetur ipsum neque in justo.",
        "Mauris vestibulum arcu non fermentum venenatis. Nam pharetra purus id felis porta, vitae laoreet est cursus.",
      ],
    },
    {
      title: "Product Manager and Programmer Lead",
      company_name: "Pixel Pioneers",
      icon: pp,
      iconBg: "#E6DEDD",
      date: "June 03 2023 - June 05 2023",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu nisi diam. Fusce mattis sapien a libero feugiat, ac iaculis enim gravida. Aenean quis nulla massa.",
        "Nulla tincidunt feugiat tortor, id auctor ligula. Vivamus ut nunc non lacus efficitur bibendum in ut risus.",
        "Sed rutrum, lorem a aliquam ultricies, dolor arcu viverra massa, at consectetur ipsum neque in justo.",
        "Mauris vestibulum arcu non fermentum venenatis. Nam pharetra purus id felis porta, vitae laoreet est cursus.",
      ],
    },
    {
      title: "Game Programmer and Product Manager",
      company_name: "Colapsum Studio",
      icon: colapsum,
      iconBg: "#1A0C0D",
      date: "April 2023 - May 2023",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu nisi diam. Fusce mattis sapien a libero feugiat, ac iaculis enim gravida. Aenean quis nulla massa.",
        "Nulla tincidunt feugiat tortor, id auctor ligula. Vivamus ut nunc non lacus efficitur bibendum in ut risus.",
        "Sed rutrum, lorem a aliquam ultricies, dolor arcu viverra massa, at consectetur ipsum neque in justo.",
        "Mauris vestibulum arcu non fermentum venenatis. Nam pharetra purus id felis porta, vitae laoreet est cursus.",
      ],
    },
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
];
  
const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Nicolas Rodriguez",
      designation: "Lead UI/UX Developer",
      company: "Six Guys Productions",
      image: nico,
      hoverImage: linkedin,
      link: "https://www.linkedin.com/in/nicolas-rodriguez-hilarion-765b321b3/",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Rodrigo Cantor",
      designation: "Technical Leader",
      company: "Six Guys Productions",
      image: rodri,
      hoverImage: linkedin,
      link: "https://www.linkedin.com/in/rodrigo-cantor-vasquez-575770276/",
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