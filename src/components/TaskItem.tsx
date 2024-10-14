import { Link } from 'react-router-dom'
import { TodoDTO } from '../apis/api'
import styles from './TaskItem.module.css'
import { TrashIcon } from './icons/Trash.icon'

export const TaskItem = ({ id, title, onDelete }: Props) => {
  return (
    <article className={`${styles.card} card`}>
      <div className={styles.content}>
        <Link to={`${id}`}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac
            elementum ultrices mauris. Cursus urna
          </div>
        </Link>
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
