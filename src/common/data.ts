import { Project } from './types'

export const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'Proyecto prueba',
    description: 'Descripción del proyecto',
    tasks: [
      {
        id: 1,
        title: 'Tarea 1',
        description: '',
        finishDate: new Date(),
      },
      {
        id: 2,
        title: 'Tarea 1',
        description: '',
        finishDate: new Date(),
      },
      {
        id: 3,
        title: 'Tarea 1',
        description: '',
        finishDate: new Date(),
      },
    ],
  },
  {
    id: 2,
    title: 'Segundo proyecto',
    description: 'Este es el segundo proyecto de prueba',
    tasks: [
      {
        id: 4,
        title: 'Tarea 1',
        description: 'Tarea 1 del proyecto segundo',
        finishDate: new Date(),
      },
      {
        id: 5,
        title: 'Tarea 1',
        description: '',
        finishDate: new Date(),
      },
      {
        id: 6,
        title: 'Tarea 1',
        description: '',
        finishDate: new Date(),
      },
    ],
  },
]

export const username = 'dgarciacasam'

export const users = [
  { id: 1, name: 'dgarciacasam' },
  { id: 2, name: 'drtey' },
  { id: 3, name: 'midudev' },
  { id: 4, name: 'ikurotime' },
]
