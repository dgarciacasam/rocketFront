import { TableViewProps, Task } from '../../common/types'

export const TableView = ({ selectedProject }: TableViewProps) => {
  const notStarted: Task[] =
    selectedProject.tasks.filter((task: Task) => task.status === 0) ?? []

  const started: Task[] =
    selectedProject.tasks.filter((task: Task) => task.status === 1) ?? []

  const done: Task[] =
    selectedProject.tasks.filter((task: Task) => task.status === 2) ?? []
  return (
    <div className='grid grid-cols-3'>
      <div>Col 1</div>
      <div>Col 2 </div>
      <div>Col 3 </div>
    </div>
  )
}
