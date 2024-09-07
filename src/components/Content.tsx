import styles from './Content/content.module.css'

import { TopContent } from './Content/TopContent'

import { username } from '../common/data'
import { ContentProps, Project, views } from '../common/types'
import { ProjectMenu } from './Content/ProjectMenu'
import { useState } from 'react'

import { ProjectContent } from './Content/ProjectContent'

const imageUrl = `https://github.com/${username}.png`
export const Content = ({
  projects,
  setProjects,
  selectedProjectId,
  isShown,
}: ContentProps) => {
  const selectedProject =
    projects.find((project: Project) => project.id === selectedProjectId) ??
    projects[0]

  const [projectView, setProjectView] = useState<views>(views.board)

  return (
    <section
      className={
        'bg-[#2a2b2f] px-8  ' +
        styles.contentTransition +
        (isShown ? ' ml-[23rem]' : ' ml-[5rem]')
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
          onAddNewProject={(newProject: Project) => {
            setProjects([...projects, newProject])
          }}
          onDeleteProject={(id: number | undefined) => {
            setProjects(
              projects.filter((project: Project) => project.id !== id)
            )
          }}
        />

        <ProjectContent
          selectedProject={selectedProject}
          projectView={projectView}
          onUpdateTasks={(newProject: Project) => {
            console.log(newProject)
            const updatedProjects = projects.map((project: Project) =>
              project.id === newProject.id ? newProject : project
            )

            setProjects(updatedProjects)
          }}
        />
      </section>
    </section>
  )
}
