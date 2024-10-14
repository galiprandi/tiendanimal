import { useTranslation } from 'react-i18next'
import { useTasks } from '../hooks/useTasks'
import { TaskItem } from '../components/TaskItem'
import { AddTask } from '../components/AddTask'
import { useDeleteTask } from '../hooks/useDeleteTask'
import { EditTask } from '../components/EditTask'
import { TaskDTO } from '../apis/api'
import { useState } from 'react'
import { Pagination } from '../components/Pagination'

export const MyTasks = () => {
  const { mutate } = useDeleteTask()
  const { t } = useTranslation('translations')
  const [page, setPage] = useState(1)
  const [editTask, setEditTask] = useState<TaskDTO | null>(null)

  const { status, getPage, lastPage } = useTasks()

  return (
    <>
      <section>
        <h2>{t('My tasks')}</h2>
        {status === 'pending' ? (
          <p>{t('Loading...')}</p>
        ) : status === 'error' ? (
          <p>{t('Error trying to fetch the tasks')}</p>
        ) : null}

        {getPage(page)?.map((task, idx) => (
          <TaskItem
            {...task}
            key={task.id + idx}
            onDelete={() => mutate(task.id)}
            onEdit={() => setEditTask(task)}
          />
        ))}

        <br />
        <br />
        <Pagination
          page={page}
          totalPages={lastPage}
          onPageChange={page => setPage(page)}
        />
        <br />
        <br />
        <AddTask onAdd={newTask => setEditTask(newTask)} />
      </section>
      <EditTask todo={editTask} onCanceled={() => setEditTask(null)} />
    </>
  )
}
