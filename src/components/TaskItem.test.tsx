import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'

import { TaskItem } from './TaskItem'

describe('TaskItem', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(
      <TaskItem title="Test Task" id={1} userId={1} completed={true} />
    )
    expect(getByText('Test Task')).toBeDefined()
  })

  it('renders the description', () => {
    const { getByText } = render(
      <TaskItem title="Test Task" id={1} userId={1} completed={true} />
    )
    expect(getByText(/Lorem ipsum/)).toBeDefined()
  })

  it('calls onDelete when trash icon is clicked', () => {
    const mockOnDelete = vi.fn()
    const { getByRole } = render(
      <TaskItem
        title="Test Task"
        onDelete={mockOnDelete}
        id={1}
        userId={1}
        completed={true}
      />
    )

    const trashButton = getByRole('button')
    fireEvent.click(trashButton)

    expect(mockOnDelete).toHaveBeenCalledTimes(1)
  })

  it('renders without crashing when onDelete is not provided', () => {
    expect(() =>
      render(<TaskItem title="Test Task" id={1} userId={1} completed={true} />)
    ).not.toThrow()
  })
})
