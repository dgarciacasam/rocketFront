import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { BoardViewProps, Project, Task as TaskType } from '../../common/types'
import { getTaskByColumn } from '../../common/utils'
import { BoardColumn } from './BoardColumn'
import { createPortal } from 'react-dom'
import { Task } from './Task'
import { useState } from 'react'

export const BoardView = ({
  selectedProject,
  onUpdateTasks,
}: BoardViewProps) => {
  const [notStarted, started, done] = getTaskByColumn(selectedProject)
  const [activeTask, setActiveTask] = useState<TaskType | null>()

  const handleCreateTask = (newTask: TaskType) => {
    const updatedProject: Project = {
      ...selectedProject,
      tasks: [...selectedProject.tasks, newTask],
    }
    onUpdateTasks(updatedProject)
  }

  const handleDeleteTask = (taskId: number) => {
    const updatedProject: Project = {
      ...selectedProject,
      tasks: [
        ...selectedProject.tasks.filter((task: TaskType) => task.id !== taskId),
      ],
    }
    onUpdateTasks(updatedProject)
  }

  const sensor = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 50,
      },
    })
  )

  const reorderTasks = (
    activeId: number,
    overColumnIndex: number,
    overColumn: number,
    activeColumn: number
  ) => {
    console.log('reordenadas tareas')
    // Crear una copia profunda del objeto para no mutar selectedProject
    const tasks = [...selectedProject.tasks]

    // Buscamos la tarea que tiene el id proporcionado (activeId)
    const taskToMove = tasks.find((task) => task.id === activeId)

    if (!taskToMove) {
      return selectedProject // Si no encuentra la tarea, retorna el proyecto sin cambios
    }

    // Actualizamos la columna y el índice de la tarea a mover
    taskToMove.column = overColumn

    // Filtramos solo las tareas de la columna de destino (overColumn)
    const overColumnTasks = tasks
      .filter((task) => task.column === overColumn && task.id !== activeId)
      .sort((a, b) => a.columnIndex - b.columnIndex)

    // Insertamos la tarea movida en la nueva posición dentro de su columna
    overColumnTasks.splice(overColumnIndex, 0, taskToMove)

    // Actualizamos el columnIndex de todas las tareas en la columna de destino reorganizada
    overColumnTasks.forEach((task, index) => {
      task.columnIndex = index
    })

    // Si la columna de origen es diferente a la columna de destino
    // actualizamos los índices de las tareas en la columna de origen
    if (activeColumn !== overColumn) {
      const activeColumnTasks = tasks
        .filter((task) => task.column === activeColumn)
        .sort((a, b) => a.columnIndex - b.columnIndex)

      // Actualizamos el columnIndex de todas las tareas en la columna de origen
      activeColumnTasks.forEach((task, index) => {
        task.columnIndex = index
      })
    }

    // Actualizamos el array de tareas con los cambios
    const updatedTasks = tasks.map((task) => {
      if (task.column === overColumn) {
        return overColumnTasks.find((t) => t.id === task.id)!
      }
      return task
    })

    // Devolver el nuevo objeto con las tareas actualizadas
    return {
      ...selectedProject,
      tasks: updatedTasks,
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    setActiveTask(
      selectedProject.tasks.find((task: TaskType) => task.id === active.id)
    )

    const overTask: TaskType | undefined = selectedProject.tasks.find(
      (task: TaskType) => task.id === over?.id
    )

    if (
      !activeTask ||
      !overTask ||
      activeTask.column !== overTask.column ||
      activeTask.columnIndex === overTask.columnIndex
    )
      return

    const updatedProject = reorderTasks(
      activeTask.id,
      overTask.columnIndex,
      overTask.column,
      activeTask.column
    )

    onUpdateTasks(updatedProject)
  }

  const handleDragOver = (event: DragOverEvent) => {}

  return (
    <div className='grid grid-cols-3 gap-4 '>
      <DndContext
        sensors={sensor}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        <BoardColumn
          tasks={notStarted}
          title='Sin empezar'
          column={0}
          handleCreateTask={handleCreateTask}
          handleDeleteTask={handleDeleteTask}
        />
        <BoardColumn
          tasks={started}
          title='Pendiente'
          column={1}
          handleCreateTask={handleCreateTask}
          handleDeleteTask={handleDeleteTask}
        />
        <BoardColumn
          tasks={done}
          title='Finalizado'
          column={2}
          handleCreateTask={handleCreateTask}
          handleDeleteTask={handleDeleteTask}
        />

        {createPortal(
          <DragOverlay>
            {activeTask && (
              <Task
                task={activeTask}
                handleDeleteTask={handleDeleteTask}
              ></Task>
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  )
}
