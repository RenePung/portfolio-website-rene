import React from 'react'
//--------------------imports----------------------------------------------------

type SectionHeadingProps = {
    children: React.ReactNode;
};

// created SectionHeadingProps for reusability of styles for our headings
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium mb-8">{children}</h2>
  )
}
