import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Logo } from './Logo'
import { MemoryRouter } from 'react-router-dom'

vi.mock('../assets/tiendanimal_logo.png', () => ({
  default: 'mocked-image-path',
}))

describe('Logo', () => {
  it('renders logo with correct link and image', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    )

    const link = getByRole('link')
    expect(link).toBeDefined()
    expect(link).toHaveAttribute('href', '/tiendanimal/tasks')

    const image = getByRole('img')
    expect(image).toBeDefined()
    expect(image).toHaveAttribute('src', 'mocked-image-path')
    expect(image).toHaveAttribute('alt', 'Tiendanimal')
  })
})
