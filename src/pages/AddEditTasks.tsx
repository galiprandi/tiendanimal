import { Form } from '@galiprandi/react-tools'
import { useParams } from 'react-router-dom'
import { useTodo } from '../hooks/useTodo'
import { useTranslation } from 'react-i18next'
import { TodoDTO } from '../apis/api'
import { useAddEditTodo } from '../hooks/useAddEditTodo'

export const AddEditTasks = () => {
  const { t } = useTranslation('translations')
  const { id } = useParams()
  const { todo, status } = useTodo(Number(id))
  const { mutate } = useAddEditTodo()

  const isNewTask = id === 'new'

  return (
    <section>
      <h2>{t('Edit task')}</h2>
      {!isNewTask && status === 'pending' && <p>{t('Loading...')}</p>}
      {status === 'error' && (
        <p>{t('Ups! Something went wrong. Please try again later.')}</p>
      )}

      <Form<TodoDTO> className="card" onSubmitValues={mutate}>
        {!isNewTask && (
          <label>
            Id
            <input
              id="id"
              name="id"
              type="text"
              defaultValue={todo?.id}
              readOnly
            />
          </label>
        )}
        <label>
          {t('Title')}

          <input id="title" name="title" defaultValue={todo?.title} required />
        </label>
        <label>
          {t('Completed')}
          <input
            id="completed"
            name="completed"
            type="checkbox"
            defaultChecked={todo?.completed}
            style={{ width: 'fit-content' }}
          />
        </label>
        <br />
        <br />
        <input type="submit" value={t('Save')} className="action" />
      </Form>
    </section>
  )
}
