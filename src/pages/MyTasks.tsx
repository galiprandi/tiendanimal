import { useTranslation } from 'react-i18next'
import { useTodos } from '../hooks/useTodos'
import { TaskItem } from '../components/TaskItem'
import { AddTask } from '../components/AddTask'
import { useDeleteTodos } from '../hooks/useDeleteTodos'

export const MyTasks = () => {
  const { mutate } = useDeleteTodos()

  const { t } = useTranslation('translations')
  const { todos, status } = useTodos()
  return (
    <>
      <section>
        <h2>{t('My tasks')}</h2>

        {status === 'pending' ? (
          <p>{t('Loading...')}</p>
        ) : status === 'error' ? (
          <p>{t('Error trying to fetch the tasks')}</p>
        ) : null}

        {todos?.map(task => (
          <TaskItem {...task} key={task.id} onDelete={() => mutate(task.id)} />
        ))}
        <br />
        <br />
        <AddTask />
      </section>
    </>
  )
}
