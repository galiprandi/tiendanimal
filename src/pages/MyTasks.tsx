import { useTranslation } from 'react-i18next'
import { useTodos } from '../hooks/useTodos'
import { TaskItem } from '../components/TaskItem'
import { AddTask } from '../components/AddTask'

export const MyTaskList = () => {
  const { t } = useTranslation('translations')
  const { firstThreeTodos, status } = useTodos()
  return (
    <>
      <section>
        <h2>{t('My tasks')}</h2>

        {status === 'pending' ? (
          <p>{t('Loading...')}</p>
        ) : status === 'error' ? (
          <p>{t('Error trying to fetch the tasks')}</p>
        ) : null}

        {firstThreeTodos?.map(task => (
          <TaskItem {...task} key={task.id} />
        ))}
        <br />
        <AddTask />
      </section>
    </>
  )
}
