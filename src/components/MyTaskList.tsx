import { useTranslation } from 'react-i18next'
import { useTodos } from '../hooks/useTodos'
import { TaskItem } from './TaskItem'

export const MyTaskList = () => {
  const { t } = useTranslation('translations')
  const { todos } = useTodos()
  return (
    <section>
      <h2>{t('My Tasks')}</h2>
      {todos?.map(task => (
        <TaskItem {...task} key={task.id} />
      ))}
    </section>
  )
}
