import { TodoDTO } from '../apis/todos.apis'
import styles from './TaskItem.module.css'
import { TrashIcon } from './icons/Trash.icon'

export const TaskItem = ({ title, onDelete }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac
          elementum ultrices mauris. Cursus urna
        </div>
      </div>
      <aside>
        <button onClick={onDelete} className="icon">
          <TrashIcon />
        </button>
      </aside>
    </article>
  )
}

export interface Props extends TodoDTO {
  onDelete?: () => void
}
