'use client'

import React from 'react'
import { useSectionInView } from '@/lib/hooks'
import { projectsData } from '@/lib/data'
import Project from './project'
import SectionHeading from '../../shared/section-heading'

export default function Projects() {
  const { ref } = useSectionInView('projects', 0.15)

  return (
    <section
      className="flex flex-col justify-center items-center w-full min-h-screen scroll-mt-36 dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Work</SectionHeading>
      <div className="my-24">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}