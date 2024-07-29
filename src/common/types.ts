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
