import styles from './Content/content.module.css'

import { TopContent } from './Content/TopContent'

import { username } from '../common/data'
import { ContentProps, Project } from '../common/types'

const imageUrl = `https://github.com/${username}.png`
const view = 'board'

const blankProject: Project = {
  id: 5,
  title: 'Nuevo proyecto',
  description: 'Esta es una nueva descripción',
  tasks: [
    {
      id: 1,
      title: 'Tarea 1',
      description: '',
      finishDate: new Date(),
    },
    {
      id: 1,
      title: 'Tarea 1',
      description: '',
      finishDate: new Date(),
    },
    {
      id: 1,
      title: 'Tarea 1',
      description: '',
      finishDate: new Date(),
    },
  ],
}

export const Content = ({
  projects,
  setProjects,
  selectedProjectId,
}: ContentProps) => {
  const selectedProject = projects.find(
    (project: Project) => project.id === selectedProjectId
  )

  return (
    <section className='bg-[#2a2b2f]'>
      <TopContent username={username} imageUrl={imageUrl} />
      <section className=' flex flex-col pt-4 pb-20 md:pb-0'>
        <section className='flex flex-col lg:flex-row justify-between border-b-2 border-solid border-[rgba(255,255,255,0.1)] mb-6'>
          <div className='hidden lg:flex flex-grow basis-0 '>
            <button
              className={`button hover:rounded  ${
                view === 'board' ? styles.active : 'flex items-center'
              }`}
              onClick={() => {
                //putView('board')
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-layout-list mr-1'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='#ffffff'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
                <path d='M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
              </svg>
              Vista tarjetas
            </button>

            <button
              className={`button ml-1  hover:rounded ${
                view === 'table' ? styles.active : 'flex items-center ml-1 '
              }`}
              onClick={() => {
                //putView('table')
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-brand-trello mr-1'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='#ffffff'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
                <path d='M7 7h3v10h-3z' />
                <path d='M14 7h3v6h-3z' />
              </svg>
              Vista de tabla
            </button>
          </div>
          <div className='flex items-center pb-1'>
            <p className='text-2xl'>{selectedProject?.title}</p>
          </div>

          <div className='flex lg:flex-grow lg:basis-0 lg:justify-end mt-2 lg:mt-0'>
            <button
              className='flex items-center button hover:rounded text-sm lg:text-base'
              onClick={() => {
                setProjects([...projects, blankProject])
              }}
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-table-plus mr-1'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5' />
                <path d='M3 10h18' />
                <path d='M10 3v18' />
                <path d='M16 19h6' />
                <path d='M19 16v6' />
              </svg>
              Añadir proyecto
            </button>
            {projects[0]?.id === 0 ? (
              <></>
            ) : (
              <button
                className='flex items-center button hover:rounded text-sm lg:text-base'
                onClick={() => {}}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='icon icon-tabler icons-tabler-outline icon-tabler-table-minus mr-1'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10' />
                  <path d='M3 10h18' />
                  <path d='M10 3v18' />
                  <path d='M16 19h6' />
                </svg>
                Eliminar proyecto
              </button>
            )}
          </div>
        </section>
      </section>
    </section>
  )
}
