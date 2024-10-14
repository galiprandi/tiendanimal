import { useTranslation } from 'react-i18next'
import { useAddTask } from '../hooks/useAddTask'
import { TaskDTO } from '../apis/api'

export const AddTask = ({ onAdd }: { onAdd: (data: TaskDTO) => void }) => {
  const { t } = useTranslation('translations')
  const { addNewTask, isPending } = useAddTask(onAdd)

  return (
    <section>
      <button
        className="action"
        onClick={() => addNewTask()}
        disabled={isPending}
      >
        {t('Add task')}
      </button>
    </section>
  )
}
