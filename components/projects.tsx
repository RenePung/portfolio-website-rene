"use client";
import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
//---------------------------------imports---------------------------------------------------------


// change data by going to the data.ts file in lib folder and change images by going to the public folder.
// to change colors / styling go to projects.tsx file in the same folder as you are in.


// scroll-mt-28 is for a spacing between navbar and h3 when you navigate trought navbar links!
export default function Projects() {
  const {ref, inView} = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);



  return (
    <section id="projects" className="scroll-mt-28" ref={ref}> 
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

