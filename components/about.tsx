"use client"
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
//-----------------------------------imports--------------------------------------------

//-----------------------about me text--------------------------------------------------
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
    ref={ref} 
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" 
    initial={{ opacity: 0, y: 100 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ delay: 0.175 }} 
    id="about"
    >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
    After navigating through the uncertainties of life, I found my calling in the world of web development and programming, thanks to the guidance of my <a href="https://heidipun.com/" target="_blank" className="text-sky-600">sister</a>—an industry veteran. I embarked on a journey of learning, diving into courses, coding bootcamps and doing projects.
    I started with basics of web development spending time doing websites and debugging silly amateur mistakes. Later i got into Next.js, TypeScript, React, and the exciting world of full-stack development.
    <span className="italic"> Crafting the finished product, designing, and making things work seamlessly</span> are the facets of programming that fuel my passion. The satisfaction of completing a project is my favorite reward.
    My toolkit includes React, TypeScript, Next.js and backend technologies as MongoDB, Appwrite and more enabling me to bring ideas to reality.
    I am on a mission to become a <span className="font-medium">full-time full-stack web-developer</span>, driven by the desire to contribute my skills to projects and embrace the challenges of the tech world.
</p>
<p>
    <span className="italic">Beyond coding, my interests diversify into day trading, exploring new programming libraries, and delving into the realms of psychology.</span><br />
    <span className="underline font-bold">Thank you for visiting my website</span>
</p>

    </motion.section>
  )
}
