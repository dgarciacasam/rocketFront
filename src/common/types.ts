import { ReactNode } from 'react'

export interface SidenavButtonProps {
  link: string
  children: ReactNode
  isDisabled: boolean
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
  column: number
  finishDate: Date
  columnIndex: number
}

export interface TopContentProps {
  username: string
  imageUrl: string
}

export interface ContentProps {
  projects: Project[]
  setProjects: (newProjects: Project[]) => void
  selectedProjectId: number
  setSelectedProjectId: (selectedProjectId: number) => void
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
  onUpdateProjectTitle: (updatedProject: Project) => void
  selectedProject: Project
  onAddNewProject: (newProject: Project) => void
  onDeleteProject: (id: number | undefined) => void
}

export enum views {
  board = 'board',
  table = 'table',
}

export interface BoardViewProps {
  selectedProject: Project
  onUpdateTasks: (newProject: Project) => void
}

export interface TableViewProps extends BoardViewProps {}

export interface TaskProps {
  task: Task
  handleDeleteTask: (taskId: number) => void
}

export interface ColumnProps {
  tasks: Task[]
  column: number
  title: string
  handleCreateTask: (newTask: Task) => void
  handleDeleteTask: (taskId: number) => void
  changeTaskPosition: (grabbedTask: Task, overTask: Task) => void
}

export interface ProjectContentProps {
  selectedProject: Project
  projectView: views
  onUpdateTasks: (newProject: Project) => void
}
