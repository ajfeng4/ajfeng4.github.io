import React from "react";
import campwithusImg from "@/../public/images/camp-with-us.png";
import carcatalogImg from "@/../public/images/car-catalog.png";
import filedriveImg from "@/../public/images/file-drive.png";
import projectmanagementImg from "@/../public/images/project-management.png";
import reactfoodImg from "@/../public/images/react-food.png";
import surgeImg from "@/../public/images/surge.png";
import portfolioImg from "@/../public/images/portfolio.png";
import auditMasterImg from "@/../public/images/audit-master.png";
import hungie from "@/../public/images/hungie.png";
import dystopia from "@/../public/images/Dystopiaaaa.png";
import brighterspace from "@/../public/images/Brighter.png";
import support from "@/../public/images/AICustomerSupport.png";
import mechanic from "@/../public/images/Mechanic.png";
import drink from "@/../public/images/Drink.png";
import ibmz from "@/../public/images/ibmz.png";
import appdev from "@/../public/images/AppDev.png";
import lockdown from "@/../public/images/lockdown.png";
import head from "@/../public/images/head.png";
import buff from "@/../public/images/buff.png";
import dental from "@/../public/images/dental.png";
import engineer from "@/../public/images/engineer.png";
import site from "@/../public/images/site.png";
import hun from "@/../public/images/hun.png";
import sa from "@/../public/images/sa.png";
import {
    SiReact,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
    SiExpress,
    SiOpenai,
    SiMysql,
    SiMongodb,
    SiFramer,
    SiStripe,
    SiExpo,
    SiMui,
    SiApache,
    SiPhp,
    SiPhpstorm,
    SiPhpmyadmin,
    SiFirebase,
    SiSupabase,
    SiPostgresql,
    SiTrello,
    SiSpring,
    SiSwagger,
    SiFigma,
    SiGit,
    SiUnrealengine,
    SiHtml5,
    SiSendgrid,
    SiAngular,
    SiReactrouter,
    SiWebstorm,
    SiAmazonwebservices,
    SiPython,
    SiAndroid,
    SiAndroidstudio,
    SiVercel,
} from "react-icons/si";

export const links = [
    {
        name: "Home",
        id: "home",
    },
    {
        name: "About",
        id: "about",
    },
    {
        name: "Projects",
        id: "projects",
    },
    {
        name: "Experience",
        id: "experience",
    },
    {
        name: "Skills",
        id: "skills",
    },
    {
        name: "Contact",
        id: "contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Web Development Assistant",
        company: "University at Buffalo School of Dental Medicine",
        location: "Buffalo, New York",
        description: "Coming soon..",
        icon: dental,
        date: "Sep 2024 - Present",
        section: "experience",
    },
    {
        title: "Undergraduate Research Assistant",
        company: "University at Buffalo School of Engineering and Applied Sciences",
        location: "Buffalo, New York",
        description: "Coming soon..",
        icon: engineer,
        date: "Aug 2024 - Dec 2024",
        section: "experience",
    },
    {
        title: "Undergraduate Teaching Assistant",
        company: "University at Buffalo School of Engineering and Applied Sciences",
        location: "Buffalo, New York",
        description: "Coming soon",
        icon: engineer,
        date: "Aug 2024 - Dec 2024",
        section: "experience",
    },
    {
        title: "Software Engineer Intern",
        company: "Site Service Software Inc",
        location: "Jamison, Pennslyvania",
        description: "Coming soon",
        icon: site,
        date: "Aug 2024 - Dec 2024",
        section: "experience",
    },
    {
        title: "Software Engineer Intern",
        company: "Hungie",
        location: "New York City, New York",
        description: "Coming soon",
        icon: hun,
        date: "Sep 2022 - Present",
        section: "experience",
    },
    {
        title: "Director of Procurement",
        company: "Undergraduate Student Association - UB",
        location: "Buffalo, New York",
        description: "Coming soon",
        icon: sa,
        date: "May 2024 - Present",
        section: "experience",
    },
    {
        title: "Procurement Assistant",
        company: "Undergraduate Student Association - UB",
        location: "Buffalo, New York",
        description: "Coming soon",
        icon: sa,
        date: "Aug 2022 - May 2024",
        section: "experience",
    },
    {
        title: "Student Office Assistant",
        company: "University at Buffalo - Governor's Hall",
        location: "Buffalo, New York",
        description: "Coming soon",
        icon: buff,
        date: "Aug 2022 - May 2024",
        section: "experience",
    },
    {
        title: "BS, Computer Science",
        company: "University at Buffalo, State University of New York",
        location: "Buffalo, New York",
        description: "Data Structures, Applied HCI, Web Applications, Software Engineering Concepts",
        icon: buff,
        date: "Jan 2022 - Present",
        section: "education",
    },
    {
        title: "BBA, Management Information Systems",
        company: "University at Buffalo, State University of New York",
        location: "Buffalo, New York",
        description: "Database Management, Telecommunications Technology",
        icon: buff,
        date: "Jan 2022 - Present",
        section: "education",
    },
    {
        title: "Club President",
        company: "UB Mobile App Development Club",
        location: "Buffalo, New York",
        description: "Founded the Mobile App Development at my university, SUNY University at Buffalo. Worked with E-Board to teach students how to work with mobile development frameworks lke Swift,Kotlin and React Native,",
        icon: appdev,
        date: "Dec 2024 - Present",
        section: "extracurriculars",
    },
    {
        title: "Public Relations Coordinator",
        company: "UB IBM Z Club",
        location: "Buffalo, New York",
        description: "Worked with the founding e-board to manage IBM Z's social media presence and website,",
        icon: ibmz,
        date: "Dec 2024 - Present",
        section: "extracurriculars",
    },
    {
        title: "White Team Grader",
        company: "UB Lockdown",
        location: "Buffalo, New York",
        description: "Grader for University at Buffalo's bi-annual cybersecurity lockdown competitions. White-Teamed at UB's High School Lockdown and UB's Collegiate Lockdown,",
        icon: lockdown,
        date: "Mar 2024 - Present",
        section: "extracurriculars",
    },
    {
        title: "Software Engineer Fellow",
        company: "Headstarter",
        location: "New York City, New York",
        description: "Selected into the Headstarter AI Software Engineering Fellowship program with the unique opportunity of building 5 AI projects within 5 weeks,",
        icon: head,
        date: "Jul 2024 - Aug 2024",
        section: "extracurriculars",
    },
] as const;

export const images = {
    campwithusImg,
    carcatalogImg,
    filedriveImg,
    projectmanagementImg,
    reactfoodImg,
};

export const projectsData = [
    {
        title: "Drink Intake Tracker",
        description: "iOS/Android application to track user's hydration levels. The app helps users meet their daily hydration goal and maintain a healthier lifestyle.",
        tags: ["React Native", "TypeScript", "Python", "PostgreSQL", "Supabase", "Expo", "Android Studio"],
        imageUrl: drink,
        link: "https://github.com/ajfeng4/DrinkIntakeResearch",
        category: "Mobile",
    },
    {
        title: "Find a Mechanic",
        description: "Mobile IOS/Andriod Application to connect customers to mechanics and workshops local to their area,",
        tags: ["React Native", "JavaScript", "Tailwind", "PHP", "MySQL", "AWS", "Expo", "Android Studio"],
        imageUrl: mechanic,
        link: "https://github.com/ajfeng4/DrinkIntakeResearch",
        category: "Mobile",
    },
    {
        title: "Dystopia",
        description: "Responsive social media application empowering users to shape their social media landscape. Built with JavaScript, React, CSS and HTML.",
        tags: ["React.js", "JavaScript", "CSS", "HTML", "Swagger", "Webstorm"],
        imageUrl: dystopia,
        link: "https://webdev.cse.buffalo.edu/hci/teams/zoomers",
        category: "Web",
    },
    {
        title: "Hungie(Food buddy)",
        description: "AI Powered Food Buddy to recommend and cater food based on the user's tastebuds and perferences,",
        tags: ["React Native", "TypeScript", "Tailwind", "Expo", "Firebase", "Sendgrid", "Webstorm", "Android Studio"],
        imageUrl: hungie,
        link: "https://www.hungieapp.com/",
        category: "Mobile",
    },
    {
        title: "Brighterspace",
        description: "Interactive educational platform bridging the gap between learning and teaching. Offering two innovative experiences for students and educators",
        tags: ["React.js", "JavaScript", "PHP", "PHPMyAdmin", "PHPStorm", "Webstorm"],
        imageUrl: brighterspace,
        link: "https://github.com/cse442-at-ub/s24semesterproject-brighterspace",
        category: "Web",
    },
    {
        title: "AI Customer Support",
        description: "A platform to find and book campsites, featuring a well-designed backend and seamless client-server communication.",
        tags: ["JavaScript", "MaterialUI", "Next.js", "Vercel", "OpenAI"],
        imageUrl: support,
        link: "https://github.com/ajfeng4/AICustomerSupport",
        category: "Web",
    },
];

export const skillsData = [
    ["JavaScript", "/svgs/javascript-js.svg"],
    ["TypeScript", "/svgs/typescript-icon.svg"],
    ["HTML", "/svgs/file-type-html.svg"],
    ["CSS", "/svgs/file-type-css.svg"],
    ["Sass", "/svgs/Sass.svg"],
    ["React.js", "/svgs/react.svg"],
    ["React Native", "/svgs/react.svg"],
    ["Next.js", "/svgs/nextjs.svg"],
    ["Node.js", "/svgs/node-js.svg"],
    ["Express", "/svgs/express-original.svg"],
    ["Tailwind", "/svgs/tailwind-css.svg"],
    ["MongoDB", "/svgs/mongodb-original.svg"],
    ["PostgreSQL", "/svgs/postgresql.svg"],
    ["MySQL", "/svgs/MySQL.svg"],
    ["Docker", "/svgs/Docker.svg"],
    ["Git", "/svgs/git.svg"],
    ["GitHub", "/svgs/github.svg"],
    ["", "/svgs/etc.svg"],
] as const;

export const languageData: Record<string, { color: string; icon: JSX.Element }> = {
    "React.js": { color: "#61DAFB", icon: React.createElement(SiReact) },
    "React Native": { color: "#61DAFB", icon: React.createElement(SiReact) },
    TypeScript: { color: "#3178C6", icon: React.createElement(SiTypescript) },
    "Next.js": { color: "#000000", icon: React.createElement(SiNextdotjs) },
    Tailwind: { color: "#06B6D4", icon: React.createElement(SiTailwindcss) },
    JavaScript: { color: "#F7DF1E", icon: React.createElement(SiJavascript) },
    "Express.js": { color: "#000000", icon: React.createElement(SiExpress) },
    Expo: { color: "#000020", icon: React.createElement(SiExpo) },
    OpenAI: { color: "#000000", icon: React.createElement(SiOpenai) },
    MySQL: { color: "#00758F", icon: React.createElement(SiMysql) },
    MongoDB: { color: "#47A248", icon: React.createElement(SiMongodb) },
    "Framer Motion": { color: "#0055FF", icon: React.createElement(SiFramer) },
    "Stripe Connect": { color: "#635BFF", icon: React.createElement(SiStripe) },
    Shadcn: { color: "#000", icon: React.createElement(SiReact) },
    Trello: { color: "#0052CC", icon: React.createElement(SiTrello) },
    "SCRUM Methodology": { color: "#231F20", icon: React.createElement(SiReact) },
    PHP: { color: "#777BB4", icon: React.createElement(SiPhp) },
    PHPStorm: { color: "#000000", icon: React.createElement(SiPhpstorm) },
    PHPMyAdmin: { color: "#6C78AF", icon: React.createElement(SiPhpmyadmin) },
    Node: { color: "#339933", icon: React.createElement(SiReact) },
    SQL: { color: "#4479A1", icon: React.createElement(SiMysql) },
    PostgreSQL: { color: "#4169E1", icon: React.createElement(SiPostgresql) },
    Firebase: { color: "#DD2C00", icon: React.createElement(SiFirebase) },
    Supabase: { color: "#3FCF8E", icon: React.createElement(SiSupabase) },
    Python: { color: "#3776AB", icon: React.createElement(SiPython) },
    Java: { color: "#007396", icon: React.createElement(SiReact) },
    "Spring Boot": { color: "#6DB33F", icon: React.createElement(SiSpring) },
    MaterialUI: { color: "#007FFF", icon: React.createElement(SiMui) },
    "Android Studio": { color: "#3DDC84", icon: React.createElement(SiAndroidstudio) },
    Swift: { color: "#FA7343", icon: React.createElement(SiReact) },
    Kotlin: { color: "#7F52FF", icon: React.createElement(SiReact) },
    Flutter: { color: "#02569B", icon: React.createElement(SiReact) },
    HTML: { color: "#E34F26", icon: React.createElement(SiHtml5) },
    CSS: { color: "#1572B6", icon: React.createElement(SiReact) },
    Flask: { color: "#000000", icon: React.createElement(SiReact) },
    Git: { color: "#F05032", icon: React.createElement(SiGit) },
    Swagger: { color: "#85EA2D", icon: React.createElement(SiSwagger) },
    Apache: { color: "#D22128", icon: React.createElement(SiApache) },
    Cpp: { color: "#00599C", icon: React.createElement(SiReact) },
    C: { color: "#A8B9CC", icon: React.createElement(SiReact) },
    Figma: { color: "#F24E1E", icon: React.createElement(SiFigma) },
    Unreal: { color: "#0E1128", icon: React.createElement(SiUnrealengine) },
    Sendgrid: { color: "#51A9E3", icon: React.createElement(SiSendgrid) },
    Angular: { color: "#D22128", icon: React.createElement(SiAngular) },
    "React Router": { color: "#CA4245", icon: React.createElement(SiReactrouter) },
    Webstorm: { color: "#000000", icon: React.createElement(SiWebstorm) },
    Vercel: { color: "#000000", icon: React.createElement(SiVercel) },
    AWS: { color: "#232F3E", icon: React.createElement(SiAmazonwebservices) },
};