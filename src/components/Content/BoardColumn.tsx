import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { ColumnProps } from '../../common/types'
import { Task } from './Task'
import { Task as TaskType } from '../../common/types'
import { createNewBlankTask } from '../../common/utils'

export const BoardColumn = ({
  tasks,
  title,
  column,
  handleCreateTask,
  handleDeleteTask,
}: ColumnProps) => {
  const counter = tasks.length

  return (
    <div className='bg-[#24262c] rounded-xl p-4 h-fit '>
      <div className='flex justify-between mb-2'>
        <div className='flex'>
          <span>({counter})</span>
          <p className='text-[rgba(255,255,255,0.4)] bg-[#24262c] ml-2 text-lg'>
            {title}
          </p>
        </div>
        <button
          className={'flex items-center button'}
          onClick={() => {
            handleCreateTask(createNewBlankTask(column, counter))
          }}
        >
          <svg
            className='icon icon-tabler icon-tabler-plus bg-[rgba(255,255,255,0.1)] rounded-full p-1 mr-2'
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
            <path d='M12 5l0 14' />
            <path d='M5 12l14 0' />
          </svg>
          Añadir tarea
        </button>
      </div>
      <div>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.length === 0 ? (
            // Esta es el área de drop visible cuando no hay tareas en la columna
            <div className='min-h-44 flex justify-center items-center text-gray-500 bg-white rounded-lg'>
              Arrastra una tarea aquí
            </div>
          ) : (
            tasks.map((task: TaskType) => (
              <Task
                key={task.id}
                task={task}
                handleDeleteTask={handleDeleteTask}
              />
            ))
          )}
        </SortableContext>
      </div>
    </div>
  )
}
