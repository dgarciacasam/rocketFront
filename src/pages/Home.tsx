import { useState } from 'react'

import { defaultProjects } from '../common/data'
import { Project } from '../common/types'

import { Sidenav } from '../components/Sidenav/Sidenav'
import { SecondarySidenav } from '../components/SecondarySidenav/SecondarySidenav'
import { Content } from '../components/Content'

export const Home = () => {
  const [projects, setProjects] = useState<Project[]>(defaultProjects)
  const [selectedProject, setSelectedProject] = useState<number>(1)
  return (
    <main>
      <Sidenav />
      <SecondarySidenav
        projects={projects}
        selectedProjectId={selectedProject}
        setSelectedProject={(id) => {
          setSelectedProject(id)
        }}
      />
      <Content
        projects={projects}
        setProjects={setProjects}
        selectedProjectId={selectedProject}
      />
    </main>
  )
}
