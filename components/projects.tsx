import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image';
//---------------------------------imports---------------------------------------------------------


// change data by going to the data.ts file in lib folder and change images by going to the public folder

export default function Projects() {
  return (
    <section>
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


// new custom component
type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return <section>

    <h3>{title}</h3>

    <p>{description}</p>

    <ul>
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>

    <Image src={imageUrl} alt="Most Recent Project I Worked On" quality={95} />
  </section>
}
