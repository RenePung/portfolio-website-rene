"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
//---------------------------------imports---------------------------------------------------------


// change data by going to the data.ts file in lib folder and change images by going to the public folder.
// to change colors / styling go to projects.tsx file in the same folder as you are in.


// scroll-mt-28 is for a spacing between navbar and h3 when you navigate trought navbar links!
export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}> 
      <SectionHeading>My Recent Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index} >
            <Project {...project} />
            </React.Fragment>
          ))}
      </div>
    </section>
  )
}

