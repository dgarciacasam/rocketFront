import { Project, Task } from './types'

export const today = new Date()
export const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

export const getTaskByColumn = (selectedProject?: Project) => {
  const notStarted: Task[] =
    selectedProject?.tasks
      .filter((task: Task) => task.column === 0)
      .sort((a: Task, b: Task) => a.columnIndex - b.columnIndex) ?? []

  const started: Task[] =
    selectedProject?.tasks
      .filter((task: Task) => task.column === 1)
      .sort((a: Task, b: Task) => a.columnIndex - b.columnIndex) ?? []

  const done: Task[] =
    selectedProject?.tasks
      .filter((task: Task) => task.column === 2)
      .sort((a: Task, b: Task) => a.columnIndex - b.columnIndex) ?? []

  return [notStarted, started, done]
}

export const createNewBlankProject = () => {
  const blankProject: Project = {
    id: new Date().valueOf(),
    title: 'Nuevo proyecto',
    description: 'Esta es una nueva descripción',
    tasks: [
      {
        id: new Date().valueOf(),
        title: 'Tarea 1',
        description: '',
        finishDate: new Date(),
        column: 0,
        columnIndex: 0,
      },
      {
        id: new Date().valueOf(),
        title: 'Tarea 1',
        description: '',
        finishDate: new Date(),
        column: 1,
        columnIndex: 0,
      },
      {
        id: new Date().valueOf(),
        title: 'Tarea 1',
        description: '',
        finishDate: new Date(),
        column: 2,
        columnIndex: 0,
      },
    ],
  }
  return blankProject
}

export const createNewBlankTask = (column: number, columnIndex: number) => {
  const blankTask: Task = {
    id: new Date().valueOf(),
    title: 'Nueva tarea',
    description: 'Descripción de la nueva tarea',
    column: column,
    finishDate: new Date(),
    columnIndex: columnIndex,
  }

  return blankTask
}
