import { useSortable } from '@dnd-kit/sortable'
import { TaskProps } from '../../common/types'
import { CSS } from '@dnd-kit/utilities'

export const Task = ({ task, handleDeleteTask }: TaskProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <article
      style={style}
      className='bg-[#292b31] p-4 mb-3 rounded-xl mx-2 cursor-grab'
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div>
        <div className='flex  justify-between'>
          <input
            type='text'
            className='font-bold text-pretty bg-[#292b31] w-[70%]'
            value={task.title}
            placeholder='Escribe un nombre...'
            onChange={() => {}}
          />
          <button
            className='flex justify-center items-center p-0 m-0 w-11 h-11 bg-[#24262c] rounded-full border-solid border-[2px] border-[rgba(255,255,255,0.1)] button'
            onClick={() => handleDeleteTask(task.id)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-trash'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M4 7l16 0' />
              <path d='M10 11l0 6' />
              <path d='M14 11l0 6' />
              <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
              <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
            </svg>
          </button>
        </div>
        <textarea
          className=' text-pretty bg-[#292b31] w-[70%] resize-none'
          rows={3}
          defaultValue={task.description}
        />
      </div>
      <div className='flex flex-col pt-4'>
        {/* <div className='flex mb-2'>
          <select
            value={currentStatus}
            className={`${bgColor} ${textColor} rounded-full px-2 py-1 font-bold text-center`}
          >
            <option value='1'>Sin empezar</option>
            <option value='2'>Pendiente</option>
            <option value='3'>Finalizado</option>
          </select>
        </div> */}
        {/* <div className='mt-2 lg:w-[80%] mb-2'>
          <Popover>
            <PopoverTrigger asChild>
              <button className='font-bold text-[rgba(255,255,255,0.7)] bg-[rgba(54,55,60,255)] rounded-full py-2 px-4 text-[14px] flex items-center hover:text-white'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-calendar-days mr-1'
                >
                  <path d='M8 2v4' />
                  <path d='M16 2v4' />
                  <rect width='18' height='18' x='3' y='4' rx='2' />
                  <path d='M3 10h18' />
                  <path d='M8 14h.01' />
                  <path d='M12 14h.01' />
                  <path d='M16 14h.01' />
                  <path d='M8 18h.01' />
                  <path d='M12 18h.01' />
                  <path d='M16 18h.01' />
                </svg>
                {FinishDate !== null
                  ? `${dias[new Date(FinishDate).getDay()]} ${new Date(
                      FinishDate
                    ).getDate()} de ${
                      meses[new Date(FinishDate).getMonth()]
                    } de ${new Date(FinishDate).getFullYear()}`
                  : 'Sin fecha'}
              </button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                selected={FinishDate}
                onSelect={(date) => {
                  if (date instanceof Date && !isNaN(date.getTime())) {
                    // Verifica si date es una instancia de Date válida
                    setFinishDate(date) // Establece la fecha seleccionada
                  }
                }}
                initialFocus
                className='bg-[#24262c]'
              />
            </PopoverContent>
          </Popover>
        </div> */}
        {/* <div
          className='cursor-pointer inline-flex'
          onClick={() => updateUsers(true)}
        >
          <AnimatedTooltip items={data} />
        </div>
        <ModifyUserModal
          isOpen={modalOpen}
          taskInfo={newTask}
          updateTask={onUpdateTask}
          staticUsers={staticUsers}
          setIsOpen={setModalOpen}
          users={users}
        /> */}
      </div>
    </article>
  )
}
