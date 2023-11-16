import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaFreeCodeCamp } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Learning Basics",
    location: "FreeCodeCamp, Udemy...",
    description:
      "I participated in different courses and bootcamps, where i was learning basics of web development and programming.",
    icon: React.createElement(FaFreeCodeCamp),
    date: "March-2023",
  },
  {
    title: "Learning Advanced Technologies",
    location: "React, TypeScript, Next.js and more",
    description:
      "I started learning more complicated technologies by doing different solo projects.",
    icon: React.createElement(FaReact),
    date: "September-2023",
  },
  {
    title: "Full-Stack Developing",
    location: "MongoDB, PHP, Appwrite and more",
    description:
      "Currently in a process of becoming a full stack developer, where i will be confident enought to build full stack projects on my own.",
    icon: React.createElement(SiMongodb),
    date: "November-2023 till now...",
  },
] as const;

export const projectsData = [
  {
    title: "Travel App",
    description:
      "Modern front-end travel website built with the latest technologies and responsive on all screen sizes.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind", "TypeScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Car ShowCase",
    description:
      "Car rental website with realistic images made by AI through external API integration and advanced filtering.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "API's"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website, made by resend API, custom navigation bar and React libraries.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Email",
  "Tailwind",
  "Appwrite",
  "MongoDB",
  "Shadcn",
  "Bootstrap",
  "vue.js",
  "Three.js",
  "App router",
  "Python",
  "Isotope",
  "Framer Motion",
] as const;