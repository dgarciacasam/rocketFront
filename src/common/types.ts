import { ReactNode } from 'react'

export interface SidenavButtonProps {
  link: string
  children: ReactNode
}

export interface Project {
  id: number
  title: string
  description: string
  tasks: Task[]
}

export interface Task {
  id: number
  title: string
  description: string
  finishDate: Date
}

export interface TopContentProps {
  username: string
  imageUrl: string
}

export interface ContentProps {
  projects: Project[]
  setProjects: (newProjects: Project[]) => void
  selectedProjectId: number
  isShown: boolean
}

export interface SecondarySidenavProps {
  projects: Project[]
  selectedProjectId: number
  setSelectedProject: (selectedProjectId: number) => void
  isShown: boolean
  setIsShown: () => void
}

export interface ProjectMenuProps {
  projectView: views
  setProjectView: (view: views) => void
  projects: Project[]
  setProjects: (newProjects: Project[]) => void
  selectedProject: Project | undefined
}

export enum views {
  board = 'board',
  table = 'table',
}
