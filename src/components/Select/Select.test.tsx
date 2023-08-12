import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../constants/theme'

import Select from './Select'

describe('Select Component', () => {
  it('renders without errors', () => {
    render(
      <ThemeProvider theme={theme}>
        <Select selectedOption="USD" onSelectedOptionChange={() => {}} />
      </ThemeProvider>,
    )
    const selectHeader = screen.getByTestId('select-header')
    expect(selectHeader).toBeInTheDocument()
  })

  it('opens and closes the select', () => {
    render(
      <ThemeProvider theme={theme}>
        <Select selectedOption="USD" onSelectedOptionChange={() => {}} />
      </ThemeProvider>,
    )
    const selectHeader = screen.getByTestId('select-header')
    fireEvent.click(selectHeader)

    const selectBody = screen.getByTestId('select-body')
    expect(selectBody).toBeInTheDocument()

    fireEvent.click(selectHeader)
    expect(selectBody).not.toBeInTheDocument()
  })

  it('changes selected option on click', () => {
    const mockOnSelectedOptionChange = jest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Select
          selectedOption="USD"
          onSelectedOptionChange={mockOnSelectedOptionChange}
        />
      </ThemeProvider>,
    )
    const selectHeader = screen.getByTestId('select-header')
    fireEvent.click(selectHeader)

    const selectOption = screen.getByTestId('select-option-EUR')
    userEvent.click(selectOption)

    expect(mockOnSelectedOptionChange).toHaveBeenCalledWith('EUR')
  })
})
