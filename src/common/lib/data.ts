import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Web Development Assistant',
    company: 'University at Buffalo School of Dental Medicine',
    location: 'Buffalo, New York',
    description: `Coming soon..`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Sep 2024 - Present',
    section: 'experience',
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'University at Buffalo School of Engineering and Applied Sciences',
    location: 'Buffalo, New York',
    description: `Coming soon..`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2024 - Dec 2024',
    section: 'experience',
  },
  {
    title: 'Undergraduate Teaching Assistant',
    company: 'University at Buffalo School of Engineering and Applied Sciences',
    location: 'Buffalo, New York',
    description: `Coming soon`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2024 - Dec 2024',
    section: 'experience',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Site Service Software Inc',
    location: 'Jamison, Pennslyvania',
    description: `Coming soon`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2024 - Dec 2024',
    section: 'experience',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Hungie',
    location: 'New York City, New York',
    description: `Coming soon`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Sep 2022 - Present',
    section: 'experience',
  },
  {
    title: 'Director of Procurement',
    company: 'Undergraduate Student Association - UB',
    location: 'Buffalo, New York',
    description: `Coming soon`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'May 2024 - Present',
    section: 'experience',
  },
  {
    title: 'Procurement Assistant',
    company: 'Undergraduate Student Association - UB',
    location: 'Buffalo, New York',
    description: `Coming soon`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2022 - May 2024',
    section: 'experience',
  },
  {
    title: 'Student Office Assistant',
    company: "University at Buffalo - Governor's Hall",
    location: 'Buffalo, New York',
    description: `Coming soon`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2022 - May 2024',
    section: 'experience',
  },
  {
    title: 'BS, Computer Science',
    company: 'University at Buffalo, State University of New York',
    location: 'Buffalo, New York',
    description: `Data Structures, Applied HCI, Web Applications, Software Engineering Concepts`,
    icon: React.createElement(BookIcon),
    date: 'Jan 2022 - Present',
    section: 'education',
  },
  {
    title: 'BBA, Management Information Systems',
    company: 'University at Buffalo, State University of New York',
    location: 'Buffalo, New York',
    description: `Database Management, Telecommunications Technology`,
    icon: React.createElement(BookIcon),
    date: 'Jan 2022 - Present',
    section: 'education',
  },
  {
    title: 'Club President',
    company: 'UB Mobile App Development Club',
    location: 'Buffalo, New York',
    description: `Founded the Mobile App Development at my university, SUNY University at Buffalo. Worked with E-Board to teach students how to work with mobile development frameworks lke Swift,Kotlin and React Native`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Dec 2024 - Present',
    section: 'extracurriculars',
  },
  {
    title: 'Public Relations Coordinator',
    company: 'UB IBM Z Club',
    location: 'Buffalo, New York',
    description: `Worked with the founding e-board to manage IBM Z's social media presence and website`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Dec 2024 - Present',
    section: 'extracurriculars',
  },
  {
    title: 'White Team Grader',
    company: 'UB Lockdown',
    location: 'Buffalo, New York',
    description: `Grader for University at Buffalo's bi-annual cybersecurity lockdown competitions. White-Teamed at UB's High School Lockdown and UB's Collegiate Lockdown`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Mar 2024 - Present',
    section: 'extracurriculars',
  },
  {
    title: 'Software Engineer Fellow',
    company: 'Headstarter',
    location: 'New York City, New York',
    description: `Selected into the Headstarter AI Software Engineering Fellowship program with the unique opportunity of building 5 AI projects within 5 weeks`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Jul 2024 - Aug 2024',
    section: 'extracurriculars',
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
    title: 'Drink Intake Tracker',
    description:
        "iOS/Android application to track user's hydration levels. The app helps users meet their daily hydration goal and maintain a healthier lifestyle.",
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Convex',
      'Clerk',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: filedriveImg,
    link: 'https://github.com/bbyc4kes/file-drive',
    category: 'Mobile',
  },
  {
    title: 'Find a Mechanic',
    description: `Mobile IOS/Andriod Application to connect customers to mechanics and workshops local to their area`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/bbyc4kes/portfolio',
    category: 'Mobile',
  },
  {
    title: 'Hungie(Food buddy)',
    description: `AI Powered Food Buddy to recommend and cater food based on the user's tastebuds and perferences`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind',
      'OpenAI',
      'SCRUM Methodology',
      'End-to-End Development',
    ],
    imageUrl: auditMasterImg,
    link: 'https://auditmaster.ai/',
    category: 'Web',
  },
  {
    title: 'Dystopia',
    description:
        'Responsive social media application empowering users to shape their social media landscape. Built with JavaScript, React, CSS and HTML.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'MySQL',
      'Clerk',
      'Stripe Connect',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/bbyc4kes/surge',
    category: 'Web',
  },
  {
    title: 'Brighterspace',
    description:
        'Interactive educational platform bridging the gap between learning and teaching. Offering two innovative experiences for students and educators',
    tags: ['JavaScript', 'Express.js', 'MongoDB', 'Cloudinary', 'EJS'],
    imageUrl: campwithusImg,
    link: 'https://github.com/bbyc4kes/campwithus',
    category: 'Web',
  },
  {
    title: 'AI Customer Support',
    description:
        'A platform to find and book campsites, featuring a well-designed backend and seamless client-server communication.',
    tags: ['JavaScript', 'Express.js', 'MongoDB', 'Cloudinary', 'EJS'],
    imageUrl: campwithusImg,
    link: 'https://github.com/bbyc4kes/campwithus',
    category: 'Web',
  },
];


export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;

