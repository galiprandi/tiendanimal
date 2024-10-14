import { TaskDTO } from '../apis/api'
import styles from './TaskItem.module.css'
import { TrashIcon } from './icons/Trash.icon'

const DESC_LENGTH = 100

export const TaskItem = ({ title, description, onEdit, onDelete }: Props) => {
  const limitedDescription =
    description.length > DESC_LENGTH
      ? `${description.slice(0, DESC_LENGTH)}...`
      : description
  return (
    <article className={`${styles.card} card`}>
      <div className={styles.content} onClick={onEdit}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{limitedDescription}</div>
      </div>
      <aside>
        <button onClick={onDelete} className="icon">
          <TrashIcon />
        </button>
      </aside>
    </article>
  )
}

export interface Props extends TaskDTO {
  onDelete: () => void
  onEdit: () => void
}
