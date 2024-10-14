import { Form, Dialog } from '@galiprandi/react-tools'
import { useTranslation } from 'react-i18next'
import { TaskDTO } from '../apis/api'
import { CloseIcon } from './icons/Close.icon'
import { useEditTask } from '../hooks/useEditTask'

export const EditTask = ({ todo, onCanceled }: Props) => {
  const { t } = useTranslation('translations')
  const { mutate } = useEditTask()

  const onSubmit = (data: FormValues) => {
    if (!todo) return
    const { id } = todo
    mutate({ id, data })
    onCanceled()
  }

  if (!todo) return null
  return (
    <Dialog isOpen={true}>
      <h2>{t('Edit task')}</h2>

      <Form<FormValues> onSubmitValues={onSubmit}>
        <button className="icon modal-close" onClick={onCanceled}>
          <CloseIcon />
        </button>

        <label>
          {t('Title')}
          <input id="title" name="title" defaultValue={todo?.title} required />
        </label>

        <label>
          {t('Description')}
          <textarea
            id="description"
            name="description"
            defaultValue={todo?.description}
            placeholder={t('Description')}
          />
        </label>
        <br />
        <br />
        <div className="buttons">
          <button className="white" onClick={onCanceled}>
            {t('Cancel')}
          </button>
          <input type="submit" value={t('Save')} className="action" />
        </div>
      </Form>
    </Dialog>
  )
}

type Props = {
  todo: TaskDTO | null
  onCanceled: () => void
}

type FormValues = {
  title: string
  description: string
}
