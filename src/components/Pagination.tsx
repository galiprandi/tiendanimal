import styles from './Pagination.module.css'

export const Pagination = ({ totalPages, page, onPageChange }: Props) => {
  const getPageNumbers = () => {
    const pages = []
    const startPage = Math.max(1, page - 2)
    const endPage = Math.min(totalPages, page + 2)

    if (startPage > 1) {
      pages.push(1)
      if (startPage > 2) {
        pages.push('...')
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('...')
      }
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div className={styles.pagination}>
      {getPageNumbers().map((pageNumber, idx) => (
        <button
          key={idx}
          onClick={() =>
            typeof pageNumber === 'number' &&
            pageNumber !== page &&
            onPageChange(pageNumber as number)
          }
          className={pageNumber === page ? styles.active : ''}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  )
}

type Props = {
  totalPages: number
  page: number
  onPageChange: (page: number) => void
}
