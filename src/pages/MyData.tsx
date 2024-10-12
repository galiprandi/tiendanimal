import { useTranslation } from 'react-i18next'
import { Form, Input } from '@galiprandi/react-tools'
import { UserDTO } from '../apis/api'
import { useCreateUser } from '../hooks/useCreateUser'

export const MyData = () => {
  const { t } = useTranslation('translations')
  const { mutate, isPending } = useCreateUser()

  return (
    <section>
      <h2>{t('My data')}</h2>

      <Form<UserDTO> className="card" onSubmitValues={mutate}>
        <label>
          <span className="required">{t('Name')}</span>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={t('Name')}
            required
          />
        </label>
        <label>
          <span className="required">{t('Email')}</span>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder={t('Email')}
            required
          />
        </label>
        <label>
          <span className="required">{t('Phone')}</span>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder={t('Phone')}
            required
          />
        </label>
        <br />
        <br />
        <input
          type="submit"
          value={t('Save')}
          className="action"
          disabled={isPending}
        />
      </Form>
    </section>
  )
}
