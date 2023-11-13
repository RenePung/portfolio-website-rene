import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
//-------------------imports-------------------------------------------------------------------------


// to change text/images go to [----data.ts file in a lib folder for text and public folder for images----]. Here we are importing data from that file!
// you have to import images from public folder to the data.ts file - make sure urls/names of pictures are the same !!!

export const Projects = () => {
  return (
    <section>
        <SectionHeading>My Recent Projects</SectionHeading>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                    <Project {...project} />
                    </React.Fragment>
                ))}
        </div>
    </section>
  );
}


type ProjectProps = (typeof projectsData)[number];
// new custom component
function Project({
    title,
    description,
    tags,
    imageUrl
}: ProjectProps) {
    return <section>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
            {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </ul>
    </section>
}