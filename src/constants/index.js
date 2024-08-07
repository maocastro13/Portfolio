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
    threejs,
    atlassian,
    SolidPrinciples,
   

    unServer,
    sixGuys,
    colapsum,
    pp,
    bmp,
    immersiveLevel,
    teriunGames,
    pik2,
    generation,

    theLastCrusade,
    astroBear,
    skywaySavior,
    dontStopKiddo,
    
    
    nico,
    rodri,
    chris,
    linkedin,
} from "../assets";
  
export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "feedbacks",
      title: "Feedbacks",
    },
    
];
  
const services = [
    {
      title: "Game Programmer",
      icon: web,
    },
    {
      title: "Unity Developer",
      icon: mobile,
    },
    {
      title: "VR & AR Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
];
  
const technologies = [
    {
      name: "c",
      icon: c,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "bash",
      icon: bash,
    },
    {
      name: "vsc",
      icon: vsc,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "unity",
      icon: unity,
    },
    {
      name: "SolidPrinciples",
      icon: SolidPrinciples,
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
      name: "atlassian",
      icon: atlassian,
    },
    {
      name: "pm",
      icon: pm,
    },
];
  
const experiences = [
    {
      title: "Game Developer",
      company_name: "Teriun Games",
      icon: teriunGames,
      iconBg: "#000000",
      date: "January 2024 - Present",
      points: [
        { type: "section", text: "Key Achievements:" },
        "Led full-cycle development of hyper-casual game 'Monster Runner' from prototype to final version.",
        "Implemented Photon Fusion for real-time multiplayer in 'Dragoids Arena' and 'Dashmellow 3D'.",
        "Optimized projects for Android, significantly improving performance across diverse mobile devices.",
        "Integrated and optimized monetization strategies using Unity Ads and AdMob.",
        "Developed innovative game mechanics and systems across multiple projects.",
        { type: "section", text: "Specialized Skills:" },
        "Mobile game optimization.",
        "Multiplayer integration (Photon Fusion 1 & 2).",
        "Monetization and analytics integration (Unity Ads, AdMob, Unity Analytics).",
        "Hyper-casual game development.",
        "Cross-functional team collaboration.", 
        { type: "section", text: "Technical Highlights:" },
        "Advanced Unity development with focus on mobile optimization.",
        "Complex animation systems and realistic physics implementation.",
        "Custom input systems for enhanced mobile user experience.",
        "Procedural level generation and dynamic camera systems.",
        "Performance optimization for smooth gameplay on various devices.",
        { type: "section", text: "Project Management & Collaboration:" },
        "Led QA processes, implementing 10+ major improvements based on user feedback and data analysis.",
        "Participated in project conceptualization, requirements gathering, and proposal development.",
        "Collaborated in creating educational content and establishing strategic partnerships.",
        "Provided cross-project technical support and problem-solving."  
      ],
    },
    {
      title: "Unity Bootcamp Mentor (Volunteer)",
      company_name: "Generation Colombia",
      icon: generation,
      iconBg: "#000000",
      date: "August 2023 - Present",
      points: [
        { type: "section", text: "Key Achievements:" },
        "Provided mentorship and guidance to new students in the Unity Jr. Developer Bootcamp.",
        "Accumulated over 200 hours of volunteer work, significantly impacting student success.",
        { type: "section", text: "Mentorship Highlights:"},
        "Led Game Jam mentoring sessions for Cohort 5, totaling 58 hours of hands-on guidance.",
        "Conducted technical interview workshops in both Spanish and English.",
        "Offered personalized technical employability advice, achieving a 90% success rate in job placement processes.",
        { type: "section", text: "Industry Engagement:"},
        "Served as a panelist in multiple talks, discussing various aspects of the video game development industry in Colombia and globally.", 
        "Shared insights and experiences to inspire and guide aspiring game developers.",
        { type: "section", text: "Certifications and Recognition:"},
        "Received certification for 45 hours of mentorship and support during Game Jams 2 and 3 for Cohort 5.",
        "Acknowledged for 13 hours of intensive mentoring during the March 7-8 Game Jam for Cohort 5.",
        { type: "section", text: "Impact and Skills Developed:"},
        "Enhanced leadership and communication skills through diverse mentoring activities.",
        "Deepened understanding of industry trends and employability factors in game development.",
        "Strengthened ability to explain complex technical concepts to varying skill levels.",
        "Developed a strong network within the Colombian game development community."
      ],
    },
    {
      title: "Project Leade & Game Programmer",
      company_name: "Immersive Level",
      icon: immersiveLevel,
      iconBg: "#000000",
      date: "July 2023 - December 2023",
      points: [
        "As a game programmer, optimize the mechanics and motion system of the main character.",
        "Implement a Freeform 2D directional locomotion mix tree with 9 different motion states to improve character control.",
        "Achieve realistic adaptation of foot and leg movements on uneven terrain using a reverse kinematics module (IK).",
        "Perform a correct integration of Wwise to obtain a performance of music and sound design of first class.",
        "As project leader, guide the efforts of a team of 15 members for 5 months for the project 'The Last Crusade' which was presented at SOFA 2023 Beta Test Fest. ",
        "We achieved a completion rate of 95% of the defined goals, resulting in a fully operational demo with the game’s main mechanics. And it was presented to more than 900 video game lovers during the 5 days of the fair and received an outstanding approval rating of more than 85%.",
      ],
    },
    {
      title: "Unity Game Programmer",
      company_name: "BMP-Infotech Group",
      icon: bmp,
      iconBg: "#000000",
      date: "August 2023 - October 2023",
      points: [
        "Performed the development of the main character of a shooter game for Android, elaborating the design of the character's mechanics and later developing them.",
        "I designed and implemented a finite state machine (FSM) to manage the character's actions, encompassing reloading, weapon transitions, aiming, fluid movement (walking, running, crouching, jumping) and shooting capabilities.",
        "Create a weapon management system, including specialized modules for weapon type control, bullet mechanics, firing dynamics, recoil management, and handling of weapon-related visual effects (VFX).",
        "Create a dynamic life and damage system.",
        "I leveraged Unity's inverse kinematics (IK) modules to elevate character interactions when aiming and firing, creating greater realism and user engagement.",
        "I seamlessly merged the character with Android UI controllers, expertly integrating buttons and joysticks for an intuitive and immersive user experience.",
        "Performed fine-tuning of the Android project compilation process, extending performance and efficiency to deliver a smooth gameplay experience.",
      ],
    },
    {
      title: "Unity Developer",
      company_name: "Piknamic",
      icon: pik2,
      iconBg: "#000000",
      date: "July 2023 - October 2023",
      points: [
        "I managed to improve the screenshot system by applying a texture scaling technique, in which I used bilinear interpolation to generate screenshots in three different aspect ratios and resolutions.",
        "The previous system only generated screenshots of 1218x696 pixels (7:4), with my improvement it now generates the following resolutions: 1920x1080 pixels (16:9), 1000x1500 pixels (2:3) and 1000x1000 pixels (1:1).",
        "Possibility to scale this solution to the desired aspect ratio and up to 8K resolution without loss of quality.",
        "Implement an easy-to-use user interface with a drop-down menu for real-time resolution selection.",
        "Provide users with a real-time preview of the screen capture area.",
        "Perform workspace shadow enhancement based on customer requirements. For this enhancement use the projector component, custom textures, code shaders and various scripts to handle the different functionalities.",
        "Customizable shadow parameters including size, quality, sampling, blur level and mip level.",
        "Efficient rendering thanks to code-based optimization.",
        "Applicable to any 3D entity with a mesh renderer.",
        "Develop a shadow type management system, which allows users to choose between hard shadows and cast shadows from the user interface.",
      ],
    },
    {
      title: "Project Manager & Game Developer",
      company_name: "Six Guys Productions",
      icon: sixGuys,
      iconBg: "#000000",
      date: "May 2023 - June 2023",
      points: [
        "Led and managed multidisciplinary team for Generation Colombia Bootcamp's 'Unity Developer' final project.",
        "Implemented Agile methodology and Scrum framework for effective team collaboration.",
        "Developed software architecture using Solid Principles and pure object-oriented programming for main characters.",
        "Programmed the character 'Garok The Destroyer' with clean and efficient code.",
        "Provided technical assistance to resolve bugs and errors during game development.",
        "Led Unity implementation of the game scenario and managed project integration.",
        "Recruited talented professionals to enhance UI, UX, and sound quality.",
        "Managed team goals and objectives considering time availability for smooth progress.",
        "Managed team goals and optimized workflow using Git Bash and GitHub.",
        "Developed 'Sir Percival' character and worked on visual effects for 'Lyra, the Huntress'.",
        "Implemented new music and sound effects using Unity's audio sources and mixer, creating an 'AudioManager' for sound management.",
        "Improved game experience with dynamic sound environment and playback system.",
        "Implemented new graphical assets for the UI in Unity based on existing prototypes.",
        "Responsible for game compilation and export for Windows platform.",
      ],
    },
    {
      title: "Project Manager & Programmer Lead",
      company_name: "Pixel Pioneers",
      icon: pp,
      iconBg: "#E6DEDD",
      date: "June 03 2023 - June 05 2023",
      points: [
        "Won second place out of 20 teams in the 'Game Jam UniSabana 2023' competition judged by Teravision Games.",
        "Successfully managed project objectives and met deadlines as Project Manager.",
        "Recruited and assembled a skilled team including a UI designer, sound designer, and programmer.",
        "Developed realistic black hole attraction and absorption mechanics.",
        "Created a simulation of gravitational fields and their impact on gameplay.",
        "Implemented a fully functional and integrated user interface (UI) in Unity.",
        "Implement the main character animations with their respective custom controller and their corresponding use in the player's movement and interaction mechanics.",
        "Implemented all audio assets for the game.",
        "Oversaw project integrations, merges, and final compilation for the WebGL platform.",
      ],
    },
    {
      title: "Project Manager & Game Developer",
      company_name: "Colapsum Studio",
      icon: colapsum,
      iconBg: "#1A0C0D",
      date: "April 2023 - May 2023",
      points: [
        "Successfully led and managed two game development projects: 'Don't Stop Kiddo' and 'Skyway Savior'.",
        "Devised a robust contingency plan for the 'Skyway Savior' project, guaranteeing timely completion of critical procedural obstacle generation.",
        "Implemented efficient object pooling technique to optimize resources and enhance game performance in obstacle generation.",
        "Assumed the role of lead programmer in 'Don't Stop Kiddo' spearheading the development of the main character and achieving seamless integration across different areas.",
        "Programmed the Aero slider, designed procedural obstacle generation, and dynamically implemented them on the track in ‘Skyway Savior’.",
        "Ensured seamless integration and flawless functionality of both projects during the final phase.",
        "Compiled projects for WebGL, expanding accessibility and availability on web platforms.",
      ],
    },
    {
      title: "Spigot Plugin Developer",
      company_name: "Rol Play server of the Universidad Nacional de Colombia in the video game Minecraft.",
      icon: unServer,
      iconBg: "#383E56",
      date: "September 2022 - March 2023",
      points: [
        "I developed plugins using Java, Spigot, Bukkit and YML, optimizing the gameplay mechanics of the server.",
        "One of my outstanding achievements was the creation of an item on the server that replicates the functionalities of conventional smartphones.",
        "Through this implementation, I managed to provide an intuitive graphical interface for players to easily access the mechanics and interactions needed to enhance their gaming experience.",
      ],
    },
];
  
const testimonials = [
    {
      testimonial:
        "During the time we have worked together, I have come to know Mauricio as someone who has the ability to connect with others and convey ideas with charisma, which makes him a great communicator. His determination and action-oriented approach is inspiring. I consider Mauricio to be a talented person who has contributed significantly to our projects.",
      name: "Nicolas Rodriguez",
      designation: "Lead UI/UX Developer",
      company: "Six Guys Productions",
      image: nico,
      hoverImage: linkedin,
      link: "https://www.linkedin.com/in/nicolas-rodriguez-hilarion-765b321b3/",
    },
    {
      testimonial:
        "Mauricio is an amazing team leader and a talented software developer. During our video game development project, he proved to be reliable, decisive and met deadlines. His ability to explain technical concepts in an understandable way was impressive. In addition, he is a friendly and welcoming person, with innovative ideas and a willingness to listen to others. I highly recommend Mauricio as a committed, hard-working and reliable person. He would certainly be a great asset in any development team.",
      name: "Rodrigo Cantor",
      designation: "Technical Leader",
      company: "Six Guys Productions",
      image: rodri,
      hoverImage: linkedin,
      link: "https://www.linkedin.com/in/rodrigo-cantor-vasquez-575770276/",
    },
    {
      testimonial:
        "He proved to be an exceptional leader with effective communication skills and an outstanding strategic vision. His ability to motivate the team and foster a collaborative environment was critical to the success of our projects, as was his commitment and dedication to moving each objective forward; he is an inspirational and valuable leader for any team.",
      name: "Christian Ramirez",
      designation: "Tech Lead",
      company: "Immersive Level",
      image: chris,
      hoverImage: linkedin,
      link: "https://www.linkedin.com/in/christian-ramirez-ab9828135/",
    },
];
  
const projects = [
    {
      name: "The Last Crusade",
      description:
        "'The Last Crusade' is a thrilling third-person action game set in a kingdom consumed by darkness. Join forces with three brave warriors - Garok the Destroyer, Sir Percival the Unbreakable, and Lyra the Huntress - to liberate the land from the malevolent Kenacro. Engage in immersive battles against hordes of enemies across three challenging levels, utilizing unique abilities and strategies. Experience refined gameplay, stunning visuals, and an original soundtrack. Help restore hope and peace to Nigravia as you embark on this epic adventure.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C Sharp",
          color: "green-text-gradient",
        },
        {
          name: "Videogame Character Development",
          color: "pink-text-gradient",
        },
      ],
      image: theLastCrusade,
      source_code_linkgh: "https://github.com/Six-Guys-Productions-COL",
      source_code_linkitch: "https://six-guys-productions.itch.io/the-last-crusade",
    },
    {
      name: "Astro Bear: Ameba's Interstellar Adventure",
      description:
        "In 'Astro Bear Ameba's Interstellar Adventure', play as Bear, a deity on a mission to save Earth's species. Traverse the intergalactic universe, commanding space amebas containing vital components for generating life on new planets. Speed is crucial to prevent the amebas from perishing as you conquer each planet.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C Sharp",
          color: "green-text-gradient",
        },
        {
          name: "GameJam UniSabana",
          color: "pink-text-gradient",
        },
      ],
      image: astroBear,
      source_code_linkgh: "https://github.com/GirotzuDev/GameJamUniSabana/tree/develop",
      source_code_linkitch: "https://pixel-pioneers-col.itch.io/astro-bear",
    },
    {
      name: "Skyway Savior",
      description:
        "Prepare for a heart-pounding journey in the futuristic space racing game, 'Skyway Savior' Pilot your spaceship through a thrilling track filled with obstacles in a visually captivating setting. Test your skills and reflexes as you navigate the challenges that await.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C Sharp",
          color: "green-text-gradient",
        },
        {
          name: "Generation",
          color: "pink-text-gradient",
        },
      ],
      image: skywaySavior,
      source_code_linkgh: "https://github.com/Grupo4JamGEN/Unity_Aerodeslizador/tree/main",
      source_code_linkitch: "https://marlon-p.itch.io/skyway-savior",
    },
    {
      name: "Don´t Stop Kiddo!",
      description:
        "Escape the encroaching darkness in 'Don't Stop Kiddo' Race down a linear corridor, dodging furniture, and accumulating points. Keep your stuffed animal close to maintain your score. Beat your own record to reach your room, evading the looming darkness that seeks to trap you.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C Sharp",
          color: "green-text-gradient",
        },
        {
          name: "Generation",
          color: "pink-text-gradient",
        },
      ],
      image: dontStopKiddo,
      source_code_linkgh: "https://github.com/maocastro13/GameJam1/tree/Dont-Stop-Kiddo-V0.0.1",
      source_code_linkitch: "https://marlon-p.itch.io/dont-stop-kiddo-gamejamversion",
    },
];
  
export { services, technologies, experiences, testimonials, projects };