import { ProjectMenuProps, views } from '../../common/types'
import { createNewBlankProject } from '../../common/utils'
import styles from './ProjectMenu.module.css'

export const ProjectMenu = ({
  projectView,
  setProjectView,
  onUpdateProjectTitle,
  selectedProject,
  onAddNewProject,
  onDeleteProject,
}: ProjectMenuProps) => {
  return (
    <section className='flex flex-col lg:flex-row justify-between border-b-2 border-solid border-[rgba(255,255,255,0.1)] mb-6'>
      <div className='hidden lg:flex flex-grow basis-0 '>
        <button
          className={`button hover:rounded  ${
            projectView === 'board' ? styles.active : 'flex items-center'
          }`}
          onClick={() => {
            setProjectView(views.board)
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
          className={`button  ml-1  hover:rounded ${
            projectView === 'table' ? styles.active : 'flex items-center ml-1 '
          }`}
          onClick={() => {
            setProjectView(views.table)
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
      <div className='flex items-center pb-1  relative'>
        <input
          type='text'
          className='text-2xl text-center bg-transparent focus:border-none focus:outline-none'
          value={selectedProject.title}
          placeholder='Título del proyecto'
          onChange={(e) => {
            if (e.target.value !== '' && e.target.value.length <= 20) {
              const updatedProject = {
                ...selectedProject,
                title: e.target.value,
              }
              onUpdateProjectTitle(updatedProject)
            }
          }}
        />
      </div>

      <div className='flex lg:flex-grow lg:basis-0 lg:justify-end mt-2 lg:mt-0'>
        <button
          className={`flex items-center button hover:rounded text-sm lg:text-base`}
          onClick={() => {
            onAddNewProject(createNewBlankProject())
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
        {selectedProject?.id === 0 ? (
          <></>
        ) : (
          <button
            className={`flex items-center button hover:rounded text-sm lg:text-base`}
            onClick={() => {
              onDeleteProject(selectedProject?.id)
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
  )
}
