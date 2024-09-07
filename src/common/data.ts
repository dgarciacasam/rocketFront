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
        description:
          'Esta es la descripción de la tarea 1 en la que realizaremos cosas de la tarea 1',
        finishDate: new Date(),
        column: 0,
        columnIndex: 0,
      },
      {
        id: 2,
        title: 'Tarea 2',
        description:
          'Esta es la descripción de la tarea 2 en la que realizaremos cosas de la tarea 2',
        finishDate: new Date(),
        column: 1,
        columnIndex: 0,
      },
      {
        id: 3,
        title: 'Tarea 3',
        description:
          'Esta es la descripción de la tarea 3 en la que realizaremos cosas de la tarea 3',
        finishDate: new Date(),
        column: 2,
        columnIndex: 0,
      },
      {
        id: 7,
        title: 'Tarea 4',
        description:
          'Esta es la descripción de la tarea 3 en la que realizaremos cosas de la tarea 3',
        finishDate: new Date(),
        column: 2,
        columnIndex: 2,
      },
      {
        id: 8,
        title: 'Tarea 5',
        description:
          'Esta es la descripción de la tarea 3 en la que realizaremos cosas de la tarea 3',
        finishDate: new Date(),
        column: 2,
        columnIndex: 1,
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
        column: 0,
        columnIndex: 0,
      },
      {
        id: 5,
        title: 'Tarea 1',
        description: '',
        finishDate: new Date(),
        column: 0,
        columnIndex: 1,
      },
      {
        id: 6,
        title: 'Tarea 1',
        description: '',
        finishDate: new Date(),
        column: 0,
        columnIndex: 2,
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
