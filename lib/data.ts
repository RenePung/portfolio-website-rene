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
      "Modern Front-End Travel Website Built with the Latest Technologies and Responsive on All Screen Sizes.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind", "TypeScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Car ShowCase",
    description:
      "Car Rental Website with Realistic Images Made by AI through External API Integration and Advanced Filtering.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "API's"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
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
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;