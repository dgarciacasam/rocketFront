import styles from './secondarySidenav.module.css'
import { useState } from 'react'
import { Project, SecondarySidenavProps } from '../../common/types'
export const SecondarySidenav = ({
  projects,
  selectedProjectId,
  setSelectedProject,
}: SecondarySidenavProps) => {
  const [isShown, setIsShown] = useState<boolean>(true)

  return (
    <section
      className={`fixed flex items-center justify-center h-screen z-40 ${
        styles.sectionTransition
      } ${isShown ? styles.visible : styles.hidden}`}
    >
      <nav
        className={`bg-[#222327] w-72 px-6 h-screen justify-between py-[1.5rem] fixed lg:flex lg:flex-col ${
          styles.navTransition
        } ${isShown ? styles.navVisible : styles.navHidden}`}
      >
        <div className='flex flex-col'>
          <div className='flex flex-col text-left'>
            <ul className={styles.tree}>
              <li>
                <h1 className='text-2xl font-semibold'>Proyectos</h1>
                <ul className='leading-[1.75em]'>
                  {projects.map((project: Project) => {
                    return (
                      <li
                        key={project.id}
                        className={`${styles.SecondarySideNavList} ${styles.treeChildren}`}
                      >
                        <button
                          className={`text-left py-1 px-2 rounded mb-2 border border-white hover:bg-[#111215] font-semibold transition ${
                            selectedProjectId === project.id
                              ? 'bg-white text-black hover:bg-white pointer-events-none'
                              : 'bg-transparent'
                          }`}
                          key={project.id}
                          onClick={() => {
                            setSelectedProject(project.id)
                          }}
                        >
                          {project.title}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button
        onClick={() => {
          setIsShown(!isShown)
        }}
        className={
          'button flex items-center justify-center w-auto min-w-12 h-12 px-2 hover:rounded-none hover:bg-transparent ' +
          (!isShown ? 'ml-6 lg:ml-48' : ' ml-80 ')
        }
      >
        <svg
          className='icon icon-tabler icon-tabler-chevron-compact-left'
          width='32'
          height='32'
          viewBox='0 0 24 24'
          strokeWidth='1'
          stroke='#F2EBE3'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M11 4l3 8l-3 8' />
        </svg>
      </button>
    </section>
  )
}
