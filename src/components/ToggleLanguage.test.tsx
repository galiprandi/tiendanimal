import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { ToggleLanguage } from './ToggleLanguage'
import i18n from '../libs/i18n'

vi.mock('../libs/i18n', () => ({
  default: {
    language: 'en',
    changeLanguage: vi.fn(),
  },
}))

describe('ToggleLanguage', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('renders initial language flag', () => {
    const { getByText } = render(<ToggleLanguage />)
    expect(getByText('🇺🇸')).toBeDefined()
  })

  it('toggles language when clicked', () => {
    const { getByRole } = render(<ToggleLanguage />)
    const button = getByRole('button')

    fireEvent.click(button)
    expect(button.textContent).toBe('🇪🇸')

    fireEvent.click(button)
    expect(button.textContent).toBe('🇺🇸')
  })

  it('calls i18n.changeLanguage when language is toggled', () => {
    const { getByRole } = render(<ToggleLanguage />)
    const button = getByRole('button')

    fireEvent.click(button)
    expect(vi.mocked(i18n.changeLanguage)).toHaveBeenCalledWith('es')

    fireEvent.click(button)
    expect(vi.mocked(i18n.changeLanguage)).toHaveBeenCalledWith('en')
  })
})
