import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
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
  changeTaskPosition,
}: ColumnProps) => {
  const counter = tasks.length
  const sensor = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 50,
      },
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const activeId = active.id
    const overId = over.id

    if (activeId === overId) return

    const activeTask = tasks.find((task) => task.id === activeId)
    const overTask = tasks.find((task) => task.id === overId)

    if (!activeTask) return
    if (!overTask) return
    return changeTaskPosition(activeTask, overTask)
  }

  return (
    <div className='bg-[#24262c] rounded-xl p-4 h-fit'>
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
        <DndContext
          sensors={sensor}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map((task: TaskType) => (
              <Task
                key={task.id}
                task={task}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}
