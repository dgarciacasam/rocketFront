import { BoardViewProps, Project, Task } from '../../common/types'
import { getTaskByColumn } from '../../common/utils'
import { BoardColumn } from './BoardColumn'

export const BoardView = ({
  selectedProject,
  onUpdateTasks,
}: BoardViewProps) => {
  const [notStarted, started, done] = getTaskByColumn(selectedProject)

  const handleCreateTask = (newTask: Task) => {
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
        ...selectedProject.tasks.filter((task: Task) => task.id !== taskId),
      ],
    }
    onUpdateTasks(updatedProject)
  }

  const handleChangeTaskPosition = (activeTask: Task, overTask: Task) => {
    // Crea una copia del array de tasks actualizando las posiciones de activeTask y overTask
    const updatedTasks = selectedProject.tasks.map((task) => {
      // Intercambia el columnIndex de activeTask con overTask
      if (task.id === activeTask.id) {
        return { ...task, columnIndex: overTask.columnIndex }
      }
      if (task.id === overTask.id) {
        return { ...task, columnIndex: activeTask.columnIndex }
      }
      return task
    })

    // Crea un nuevo objeto proyecto con las tasks actualizadas
    const updatedProject: Project = {
      ...selectedProject,
      tasks: updatedTasks,
    }

    // Actualiza el proyecto con las tasks modificadas
    onUpdateTasks(updatedProject)
  }

  return (
    <div className='grid grid-cols-3 gap-4 h-fit'>
      <BoardColumn
        tasks={notStarted}
        title='Sin empezar'
        column={0}
        handleCreateTask={handleCreateTask}
        handleDeleteTask={handleDeleteTask}
        changeTaskPosition={handleChangeTaskPosition}
      />
      <BoardColumn
        tasks={started}
        title='Pendiente'
        column={1}
        handleCreateTask={handleCreateTask}
        handleDeleteTask={handleDeleteTask}
        changeTaskPosition={handleChangeTaskPosition}
      />
      <BoardColumn
        tasks={done}
        title='Finalizado'
        column={2}
        handleCreateTask={handleCreateTask}
        handleDeleteTask={handleDeleteTask}
        changeTaskPosition={handleChangeTaskPosition}
      />
    </div>
  )
}
