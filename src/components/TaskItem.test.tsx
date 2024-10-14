import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'

import { TaskItem } from './TaskItem'
import { BrowserRouter } from 'react-router-dom'

describe('TaskItem', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <TaskItem title="Test Task" id={1} userId={1} completed={true} />
      </BrowserRouter>
    )
    expect(getByText('Test Task')).toBeDefined()
  })

  it('renders the description', () => {
    const { getByText } = render(
      <BrowserRouter>
        <TaskItem title="Test Task" id={1} userId={1} completed={true} />
      </BrowserRouter>
    )
    expect(getByText(/Lorem ipsum/)).toBeDefined()
  })

  it('calls onDelete when trash icon is clicked', () => {
    const mockOnDelete = vi.fn()
    const { getByRole } = render(
      <BrowserRouter>
        <TaskItem
          title="Test Task"
          onDelete={mockOnDelete}
          id={1}
          userId={1}
          completed={true}
        />
      </BrowserRouter>
    )

    const trashButton = getByRole('button')
    fireEvent.click(trashButton)

    expect(mockOnDelete).toHaveBeenCalledTimes(1)
  })
})
