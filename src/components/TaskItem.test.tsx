import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'

import { TaskItem } from './TaskItem'
import { BrowserRouter } from 'react-router-dom'

const testTask: Parameters<typeof TaskItem>[0] = {
  title: 'Test Task',
  id: 1,
  userId: 1,
  completed: true,
  description: 'Lorem ipsum dolor sit amet',
  onEdit: vi.fn(),
  onDelete: vi.fn(),
}

describe('TaskItem', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <TaskItem {...testTask} />
      </BrowserRouter>
    )
    expect(getByText('Test Task')).toBeDefined()
  })

  it('renders the description', () => {
    const { getByText } = render(
      <BrowserRouter>
        <TaskItem {...testTask} />
      </BrowserRouter>
    )
    expect(getByText(/Lorem ipsum/)).toBeDefined()
  })

  it('calls onDelete when trash icon is clicked', () => {
    const mockOnDelete = vi.fn()
    const { getByRole } = render(
      <BrowserRouter>
        <TaskItem {...testTask} onDelete={mockOnDelete} />
      </BrowserRouter>
    )

    const trashButton = getByRole('button')
    fireEvent.click(trashButton)

    expect(mockOnDelete).toHaveBeenCalledTimes(1)
  })

  it('calls onEdit when clicked', () => {
    const mockOnEdit = vi.fn()
    const { getByText } = render(
      <BrowserRouter>
        <TaskItem {...testTask} onEdit={mockOnEdit} />
      </BrowserRouter>
    )

    fireEvent.click(getByText('Test Task'))

    expect(mockOnEdit).toHaveBeenCalledTimes(1)
  })
})
