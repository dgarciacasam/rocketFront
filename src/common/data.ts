import { Project } from './types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'proyecto prueba',
    description: 'Descripción del proyecto',
    tasks: [
      {
        id: 1,
        title: 'Tarea 1',
        description: '',
        finishDate: new Date(),
      },
    ],
  },
]
