import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { NavBar } from './NavBar'
import { BrowserRouter } from 'react-router-dom'

// Mock de react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}))

// Mock de react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    NavLink: vi.fn().mockImplementation(({ children, to }) => (
      <a href={to} data-testid={`navlink-${to}`}>
        {children}
      </a>
    )),
  }
})

describe('NavBar', () => {
  it('renders all navigation links with correct translations', () => {
    const { getByText, getAllByRole } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    )

    const links = [
      'My data',
      'My tasks',
      'My feedback',
      'My communications',
      'My best friends',
    ]

    links.forEach(link => {
      expect(getByText(link)).toBeDefined()
    })

    const navLinks = getAllByRole('link')
    expect(navLinks).toHaveLength(5)
  })

  it('renders NavLinks with correct "to" props', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    )

    const routes = ['data', 'tasks', 'feedback', 'communications', 'friends']

    routes.forEach(route => {
      expect(getByTestId(`navlink-${route}`)).toBeDefined()
    })
  })
})
