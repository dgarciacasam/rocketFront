import { ProjectContentProps, views } from '../../common/types'
import { BoardView } from './BoardView'
import { TableView } from './TableView'

export const ProjectContent = ({
  projectView,
  selectedProject,
  onUpdateTasks,
}: ProjectContentProps) => {
  if (projectView === views.board) {
    return (
      <BoardView
        selectedProject={selectedProject}
        onUpdateTasks={onUpdateTasks}
      />
    )
  }
  return (
    <TableView
      selectedProject={selectedProject}
      onUpdateTasks={onUpdateTasks}
    />
  )
}
