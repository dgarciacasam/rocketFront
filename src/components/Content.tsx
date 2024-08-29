import styles from './Content/content.module.css'

import { TopContent } from './Content/TopContent'

import { username } from '../common/data'
import { ContentProps, Project, views } from '../common/types'
import { ProjectMenu } from './Content/ProjectMenu'
import { useState } from 'react'

const imageUrl = `https://github.com/${username}.png`
export const Content = ({
  projects,
  setProjects,
  selectedProjectId,
  isShown,
}: ContentProps) => {
  const selectedProject = projects.find(
    (project: Project) => project.id === selectedProjectId
  )
  const [projectView, setProjectView] = useState<views>(views.board)

  return (
    <section
      className={
        'bg-[#2a2b2f] px-6  ' +
        styles.contentTransition +
        (isShown ? ' ml-[23rem]' : ' ml-24')
      }
    >
      <TopContent username={username} imageUrl={imageUrl} />
      <section className=' flex flex-col pt-4 pb-20 md:pb-0'>
        <ProjectMenu
          projects={projects}
          setProjects={setProjects}
          selectedProject={selectedProject}
          projectView={projectView}
          setProjectView={setProjectView}
        />
      </section>
    </section>
  )
}
